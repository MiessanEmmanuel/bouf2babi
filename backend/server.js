import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as routerUSer } from "./routes/users.js";
import {router as routerPages}  from "./routes/pages.js"
import methodOverride from "method-override";
dotenv.config();

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.use(cors());
app.use(express.json());


app.use('/', routerPages)
app.use('/users', routerUSer)



app.listen(5000, () => {
    console.log('server lancé')
})

app.use(express.static('public'))