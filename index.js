import express from "express";
import dotenv from "dotenv"
import morgan from "morgan"
import autrouter from './autrouter/router.js'
dotenv.config();
import { connectDB } from "./config/db.js";

const app = express();
app.use(express.json());
app.use(morgan('dev '));
app.use(express.urlencoded({extended:true}));
app.use('/api/auth', autrouter);

connectDB();

// this code is used for any route that is not defined on the router

app.use('*', (req, res) => {
    return res.status(404).json({
        message: "not found",
         success:false
    })
    })
// to hide port number 
const port = process.env.PORT

//get request

app.get('/', (req, res)=>{

    res.send(paul)
})
 const paul = {
    id : [ 3, 5, 7, 9, 10],
     name : ["frank", "tosin", "ben", "toju", "mark"],
    age :[22, 17, 50, 30, 65]
    }

    paul.name.push("blessing");
    app.post('/', (req, res)=>{

        res.send(`name added successsfully to ${paul.name}`)
    })
        
app.listen(port, console.log(`server is running on port ${port}`))