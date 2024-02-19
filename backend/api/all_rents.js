const pool = require('../dbconnector')

// Function to fetch data from the database

const fetchData = ([rent_year, rent_month], callback) => {
  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      callback(err, null);
      return;
    }

    // Execute a SQL query to fetch data

    let query = "SELECT s.school_id, s.school_name, COUNT(*) AS total_loans " +
      "FROM rent AS r " +
      "JOIN school AS s ON r.school_id = s.school_id " +
      "WHERE 1=1 ";

    if (rent_year != 0) {
      query += "AND YEAR(r.date_of_rent) LIKE '" + rent_year + "%' ";
    }

    if (rent_month != 0) {
      query += "AND MONTH(r.date_of_rent) LIKE '" + rent_month + "%' ";
    }

    query += "GROUP BY s.school_id";



    connection.query(query, [rent_year, rent_month], (err, results) => {
      // Release the connection back to the pool
      connection.release();

      if (err) {
        console.error('Error executing query:', err);
        callback(err, null);
        return;
      }

      // Pass the retrieved data to the callback function
      callback(null, results);
    });
  });
};

module.exports = { fetchData };