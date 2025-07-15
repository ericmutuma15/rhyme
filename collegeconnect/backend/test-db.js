const { Pool } = require('pg');
require('dotenv').config();


const connectionParams = new URL(process.env.DATABASE_URL);

const pool = new Pool({
  host: connectionParams.hostname,
  port: parseInt(connectionParams.port),
  user: connectionParams.username,
  password: connectionParams.password,
  database: connectionParams.pathname.slice(1),
  family: 4,
  ssl: { rejectUnauthorized: false }
});

pool.connect()
  .then(client => {
    console.log('✅ Connected to Supabase!');
    client.release();
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Connection error:', err);
    process.exit(1);
  });
