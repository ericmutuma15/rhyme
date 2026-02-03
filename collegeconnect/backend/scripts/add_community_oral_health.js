require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

async function addCourse() {
  try {
    const id = '40000000-0000-0000-0000-000000000000';
    const title = 'Diploma in Community Oral Health';
    const description = 'Comprehensive diploma program in community oral health with emphasis on preventive, promotive, and curative services with strong clinical exposure and applied research.';
    const duration = '3 years';
    const requirements = ['KCSE Mean Grade C (Plain) or equivalent', 'C and above in Chemistry, Physics or Mathematics (any one)', 'C in English or Kiswahili'];

    const result = await pool.query(
      `INSERT INTO courses (id, title, description, duration, requirements) 
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (title) DO NOTHING
       RETURNING *`,
      [id, title, description, duration, requirements]
    );

    if (result.rows.length > 0) {
      console.log('✓ Course added successfully:');
      console.log(result.rows[0]);
    } else {
      console.log('Course already exists (no changes made)');
    }
  } catch (error) {
    console.error('Error adding course:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

addCourse();
