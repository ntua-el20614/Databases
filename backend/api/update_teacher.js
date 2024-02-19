const pool = require('../dbconnector');

// Function to add a user to the database
const updateData = (userid, name, username, birthday, email, password, callback) => {
  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      callback(err);
      return;
    }

    // Execute a SQL query to update users password
    const query =
      'UPDATE users ' +
      'SET username = ' + "'" + username + "', " +
      'user_name = ' + "'" + name + "', " +
      'birthday = ' + "'" + birthday + "', " +
      'email = ' + "'" + email + "', " +
      'passcode = ' + "'" + password + "' " +
      'WHERE user_id = ' + userid;

    const values = [userid, name, username, birthday, email, password];
    connection.query(query, values, (err, result) => {
      // Release the connection back to the pool
      connection.release();

      if (err) {
        console.error('Error executing query:', err);
        callback(err);
        return;
      }

      // Pass the result of the insert operation to the callback function
      callback(null, result);
    });
  });
};
module.exports = { updateData };