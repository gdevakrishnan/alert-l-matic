const express = require('express');
const app = express();
const cors = require('cors');
const appRouter = require('./routers/app/appRouter');
const userRouter = require('./routers/user/userRouter');
const { default: mongoose } = require('mongoose');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));
app.use(cors({ origin: "*", Credential: true, methods: ["GET", "POST", "PUT", "DELETE"] }));


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`The Database was Connected Successfully\nThe Server was Listening\nhttp://localhost:${PORT}`);
        });
    })
    .catch((e) => console.log(e.message));

app.use("/alert-l-matic/api", appRouter);
app.use("/alert-l-matic/api/user", userRouter);