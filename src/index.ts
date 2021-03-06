import express from 'express';
import routes from './routes/index';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.static('assets'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(routes);

//Start Express Server
app.listen(PORT, () => {
  console.log(`Now Server is listing on PORT-${PORT}`);
});

export default app;
