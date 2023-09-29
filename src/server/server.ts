import express from "express";

const server = express();

server.get('/originalMovies', async (req, res) => {
    return res.send('karalhooooo!')
})

export { server };