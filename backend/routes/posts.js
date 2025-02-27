import express from "express"
import { logger } from "../middlewares/logger.js"
const router = express.Router()

//==================== POSTS ================== //

const posts = [{id : 3, title: "Premier titre"}]
router.get('/', logger, (req, res) => {
    res.render('posts/posts', {posts : posts})
})

router.post('/', logger, (req, res) => {
    const isValid = true
    if (isValid) {
      
    }
})

//prefix
router.route('/:id').get(logger, (req, res) => {
    const id = req.params.id
    res.send(`post N°${id}`)
}).post((req, res) => {
    const id = req.params.id
    res.send(`post N°${id}`)
})

//un peu comme une middleware
router.param('id', (req, res, next, id) => {
    console.log('attends champion, le boss valide')
    next()
})


//middleware



export { router }