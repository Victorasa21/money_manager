const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'money_manager',
  password: 'admin',
  port: 5432,
});

const getItens = (request, response) => {
    pool.query('SELECT * FROM item', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getItem = (request, response)=>{

    pool.query(`SELECT * FROM item WHERE id = ${request.params.id} `, (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
      console.log(request.params)
  }
  module.exports = {
    getItens,
    getItem
  }