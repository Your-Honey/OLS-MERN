const mongoose = require('mongoose');

mongoose.set({ strictQuery: true })
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Database connected with server: ${data.connection.host}`);
    })
}

export { connectDatabase }