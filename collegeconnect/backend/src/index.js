const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db.js');

const coursesRouter = require('./routes/courses.js');
const applicationsRouter = require('./routes/applications.js');
const authRouter = require('./routes/auth.js');

dotenv.config();

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
