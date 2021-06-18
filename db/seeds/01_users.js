
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers')
        .insert([
          {
            customer_id: 1,
            customer_name: 'chad',
            customer_email: 'chad@gmail.com',
            customer_password: '1234',
            customer_number: '0844664258',
            customer_address: '14 Linkview way',
            customer_payMethod: 'cash',
            customer_deliverMethod: 'fetching',
          },
          {
            customer_id: 2,
            customer_name: 'obie',
            customer_email: 'obie@gmail.com',
            customer_password: '1234',
            customer_number: '08446656258',
            customer_address: null,
            customer_payMethod: 'cash',
            customer_deliverMethod: 'fetching',
          },
          {
            customer_id: 3,
            customer_name: 'lynette',
            customer_email: 'lynette@gmail.com',
            customer_password: '1234',
            customer_number: '08446648758',
            customer_address: '14 Tense way',
            customer_payMethod: 'card',
            customer_deliverMethod: 'delivery',
          },
        ]);
    });
};




// customer_id
// customer_name
// customer_email
// customer_password
// customer_mobileNr
// customer_adress  -- if delivery
// options: pay cash or card
// options: delivery or fetching


// relationship table --orders
// users food by order id