const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start HTTP server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`[SmartDine Server] Running in ${process.env.NODE_ENV || 'development'} mode on http://localhost:${PORT}`);
    console.log(`[SmartDine Server] Health check available at http://localhost:${PORT}/api/health`);
  });
}).catch((err) => {
  console.error('[SmartDine Server] Startup failed:', err.message);
  process.exit(1);
});
