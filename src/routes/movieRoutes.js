import express from "express";

const app = express()

app.get("/hello", (req, res)=> {
    res.json({messege:"Hello Movie"})
})