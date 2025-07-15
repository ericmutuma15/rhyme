require('dotenv').config(); // Load env first
console.log('> Loaded DATABASE_URL:', process.env.DATABASE_URL);

const express = require('express');
const cors = require('cors');
const db = require('./db.js');

const coursesRouter = require('./routes/courses.js');
const applicationsRouter = require('./routes/applications.js');
const authRouter = require('./routes/auth.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/courses', coursesRouter);
app.use('/api/applications', applicationsRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
