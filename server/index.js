const express = require('express');
const app = express();
const cors = require('cors');
const appRouter = require('./routers/app/appRouter');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));
app.use(cors({ origin: "*", Credential: true, methods: ["GET", "POST", "PUT", "DELETE"] }));


app.listen(PORT, () => {
    console.log(`The Server was Listening: http://localhost:${PORT}`);
});

app.use("/alert-l-matic/api", appRouter);