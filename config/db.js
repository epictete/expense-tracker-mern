const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(
            `[mongoose] MongoDB Connected: ${(await conn).connection.host}`.cyan
                .bold
        );
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
};

module.exports = connectDB;
