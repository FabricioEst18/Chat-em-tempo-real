const {WebSocketServer} = require("ws")
const dontenv = require("dotenv")

dontenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) => {

    wss.on("error", console.error)

    ws.on("message", (data) =>{
        wss.clients.forEach((client) => ws.send(data.toString()))
    })

    console.log("client connected")
})