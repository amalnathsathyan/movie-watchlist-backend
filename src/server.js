import express from "express"

const app = express()

const PORT = '5001'

// The request path will be http://localhost:PORT/api_name
app.get("/hello", (req, res)=> {
    res.json({messege:"Hello World"})
})

app.listen(PORT, ()=>{
    console.log("App Running on port 5001")
})

//POST GET PUT DELETE


// API can be categorised, by using Routes

// AUTH - signin, signout, 
//MOVIE - Get all movies, 
// USER - get profile
//WATCHLIST -  
