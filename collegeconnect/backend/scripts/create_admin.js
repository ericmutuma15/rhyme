const bcrypt = require('bcrypt');
const db = require('../src/db.js');

async function createAdmin(username, password) {
  const hash = await bcrypt.hash(password, 10);
  await db.query('INSERT INTO admin_users (username, password_hash) VALUES ($1, $2)', [username, hash]);
  console.log('Admin user created:', username);
  process.exit();
}

// Usage: node create_admin.js <username> <password>
const [,, username, password] = process.argv;
if (!username || !password) {
  console.log('Usage: node create_admin.js <username> <password>');
  process.exit(1);
}
createAdmin(username, password);
