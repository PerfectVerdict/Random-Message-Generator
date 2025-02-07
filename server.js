import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())

const messages = [
    "Hello, world!",
    "Vanilla js is simple!",
    "I love working with vanilla js"
]

app.get("/message", (req, res) => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    console.log(randomMessage)
    res.send(randomMessage)
})

app.listen(5000, () => {
    console.log("Server listening on 5000")
}
)
