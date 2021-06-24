const express = require('express');
const router = express.Router();
const {
    check,
    validationResult
} = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const knex = require('../db/knex')
const auth_middleware = require('../middleware/jwt')


// @route GET http://localhost:3000/auth
// @desc get LOGGED  customer
// @access Private
router.get('/', auth_middleware, async (req, res) => {
    try {
        let customer = await knex
        .select()
        .from('customers')
        .where(
            'customer_email', req.customer.email
        ).then((customer) => { return customer[0] })
        delete customer.password;
        res.json(customer)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})

// @route POST http://localhost:3000/auth
// @desc Auth customer and get token LOGIN
// @access Public
router.post('/', [
    check('email', 'Please include a valid email')
    .isEmail(),
    check('password', 'Please enter a password')
    .isLength({min:5})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {
        email,
        password
    } = req.body;

    try {
        let customer = await knex
        .select()
        .from('customers')
        .where({
            'customer_email': email
        })
        .then((customers) => {
            return customers[0]
        })

        if (!customer) {
            return res.status(400).json({
                msg: 'Invalid customer'
            });
        }

        const isMatch = await bcrypt.compare(password, customer.password)

        if (!isMatch) {
            return res.status(400).json({
                msg: 'Your password characters dont match'
            })
        }

        const payload = {
            customer: {
                id: customer.id,
                email: customer.email
            }
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 36000},
            (error, token) => {
                if(error) throw error;
                res.json({token})
            }
        );

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error')
    }
})




module.exports = router;