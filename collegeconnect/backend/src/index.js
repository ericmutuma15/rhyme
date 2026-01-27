require('dotenv').config(); // Load env first
console.log('> Loaded DATABASE_URL:', process.env.DATABASE_URL);

const express = require('express');
const cors = require('cors');
let helmet;
try {
  helmet = require('helmet');
} catch (e) {
  // helmet not installed - we will still set a minimal HSTS header below when enforcing HTTPS
  helmet = null;
}
const db = require('./db.js');

const coursesRouter = require('./routes/courses.js');
const applicationsRouter = require('./routes/applications.js');
const authRouter = require('./routes/auth.js');

const app = express();

// Trust proxy so req.secure and x-forwarded-proto are reliable behind proxies (Heroku, Vercel, nginx)
app.enable('trust proxy');

// Configure CORS: allow specific origin in production or any origin in development
const corsOrigin = process.env.CORS_ORIGIN || (process.env.NODE_ENV === 'production' ? 'https://rhymeinstitute.vercel.app' : '*');
app.use(
  cors({
    origin: corsOrigin === '*' ? true : corsOrigin,
    credentials: true,
  })
);

app.use(express.json());

// Security headers: use helmet if available
if (helmet) {
  app.use(helmet());
} else {
  console.warn('helmet not installed — skipping automatic security headers.');
}

// Enforce HTTPS in production or when explicitly enabled via ENFORCE_HTTPS=true
const enforceHttps = process.env.ENFORCE_HTTPS === 'true' || process.env.NODE_ENV === 'production';
if (enforceHttps) {
  app.use((req, res, next) => {
    const forwardedProto = (req.headers['x-forwarded-proto'] || '').split(',')[0];
    const secure = req.secure || forwardedProto === 'https';
    if (secure) {
      // set HSTS to instruct browsers to always use HTTPS
      res.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
      return next();
    }

    // Redirect to HTTPS preserving host and original URL
    const host = req.headers.host || '';
    return res.redirect(301, `https://${host}${req.originalUrl}`);
  });
}

app.use('/api/courses', coursesRouter);
app.use('/api/applications', applicationsRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (enforceHttps) console.log('HTTPS enforcement is enabled');
});
