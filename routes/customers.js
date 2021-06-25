const {
    Router
} = require('express');
const knex = require('../db/knex')
const router = Router();
const {
    check,
    validationResult
} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')


// @req GET http://localhost:3000/customers
// @access PRIVATE and PUBLIC
// @desc get users
router.get('/', (req, res) => {
    knex
        .select()
        .from('customers')
        .then(function (customers) {
            res.send(customers)
            delete customers.customer_password;
        })
})



// @req GET http://localhost:3000/users/:id
// @access PRIVATE
// @desc get a user
router.get('/:id', (req, res) => {
    const {
        id
    } = req.params;
    knex
        .select()
        .from('customers')
        .where('customer_id', id)
        .then(function (customer) {
            res.send(customer)
            delete customer.customer_password;
        })
})


// @req POST http://localhost:3000/customers
// @access public
// @desc add new user
router.post('/',
    [
        check('customer_name', 'username is required')
            .not()
            .isEmpty(),
        check('customer_email', 'email is required')
            .isEmail()
            .normalizeEmail(),
        check('customer_password', 'password has to more than 5 characters')
            .isLength({
                min: 5
            })
    ], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        } // change made

        const {
            customer_name,
            customer_email,
            customer_password,
            customer_payMethod,
            customer_deliverMethod
        } = req.body

        try {
            let exists = await knex
                .select()
                .from('customers')
                .where({
                    'customer_email': customer_email // first string val in table then object 
                })
                .then((customers) => {
                    return customers[0]
                })

            if (exists) {
                res.status(400);
                return res.send('customer already exists')
            } else {
                customer = {
                    customer_name,
                    customer_email,
                    customer_password,
                    customer_payMethod,
                    customer_deliverMethod
                }
                const salt = await bcrypt.genSalt(10)
                customer.customer_password = await bcrypt.hash(customer_password, salt)
                knex('customers')
                    .insert(customer)
                    //console.log(user)
                    .then(function () {
                        const payload = {
                            customer: {
                                id: customer.id,
                                customer_email: customer.customer_email
                            }
                        }

                        jwt.sign(
                            payload,
                            config.get('jwtSecret'), {
                            expiresIn: 360000
                        },
                            (error, token) => {
                                if (error) throw error;
                                res.json({
                                    token
                                })
                            }
                        )
                    })
            }
        } catch (error) {
            console.error(error.message)
            res.status(500).send('Server error')
        }
    })

// // @req PUT http://localhost:3000/users/:id
// // @access PRIVATE
// // @desc edit user
// router.put('/:id',
//   [
//       check('username', 'username is required')
//       .not()
//       .isEmpty(),
//       check('email', 'email is required')
//       .isEmail()
//       .normalizeEmail(),
//       check('password', 'password has to more than 5 characters')
//       .isLength({
//           min: 5
//       })
//   ],
//   async (req, res) => {
//       const {
//           username,
//           email,
//           image,
//           password
//       } = req.body;
//       const {
//           id
//       } = req.params;
//       const salt = await bcrypt.genSalt(10)
//       try {
//           let user = await knex
//               .select()
//               .from('users')
//               .then((user) => {
//                   return user[0]
//               })
//           if (user.role === 'user') {
//               knex('users')
//                   .where('id', id)
//                   .update({
//                       username: username,
//                       email: email,
//                       image: image,
//                       password: await bcrypt.hash(password, salt)
//                   })
//                   .then(function () {
//                       knex
//                           .select()
//                           .from('users')
//                           .then(function (users) {
//                               res.send(users)
//                           })
//                   })
//           } else {
//               res.status(401);
//               return res.send('You dont have authorization to edit')
//           }
//       } catch (error) {
//           console.error(error.message)
//           res.status(500).send('Server error')
//       }
//   })

// // @req DELETE
// // @access PRIVATE
// // @desc delete user
// router.delete('/:id', async (req, res) => {
//   const {
//       id
//   } = req.params;
//   try {
//       let user = await knex
//           .select()
//           .from('users')
//           .then((user) => {
//               return user[0]
//           })
//       if (user.role === 'user') {
//           knex('users')
//               .where('id', id)
//               .del()
//               .then(function () {
//                   knex
//                       .select()
//                       .from('users')
//                       .then(function (users) {
//                           res.send(users)
//                       })
//               })
//       } else {
//           res.status(401);
//           return res.send('You dont have authorization to delete')
//       }
//   } catch (error) {
//       console.error(error.message)
//       res.status(500).send('Server error')
//   }
// })

module.exports = router;