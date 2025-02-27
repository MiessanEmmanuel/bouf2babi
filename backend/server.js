import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as routerUSer } from "./routes/users.js";
import { router as routerPost } from "./routes/posts.js";
import methodOverride from "method-override";
dotenv.config();

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {
        name: "eben"
    })
})

app.use('/users', routerUSer)
app.use('/posts', routerPost)



app.listen(5000, () => {
    console.log('server lancé')
})

app.use(express.static('public'))