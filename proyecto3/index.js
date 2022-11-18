import express from 'express';
const userRoutes = require("./app/routes/producto")
const app = express();

const port = 3001;

app.use(userRoutes)

app.listen(port,()=>{
    console.log("corriendo en puerto ",port);
})
