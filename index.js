import app from "./app.js";
import mongoose from "mongoose"

const PORT = process.env.PORT || 8080;

mongoose.connect( 'mongodb://localhost:27017/testDB', 
{ useNewUrlParser:true, useUnifiedTopology:true })
.then(() => {
    app.listen(PORT, () => {
        console.table([
            { key: "URL", value: `http://localhost:${PORT}`}
        ])
    })
})
.catch(err => {
    console.log("connection error", err)
})