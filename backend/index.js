const cors = require("cors")
const express = require("express")
const { sequelize, User } = require("./database")
const app = express()
const port = 3000

// Cross-Origin Resource Sharing (CORS) Fix
// This basic setup (app.use(cors())) enables CORS for all routes and allows all origins, which is generally fine for development environments. For production, you might want to configure CORS more restrictively by specifying which origins are allowed:

// This will allow all domains. Unsafe for production!
app.use(cors())
// Configure the specific domain like this below (look this up when your ready to deploy)
// app.use(
//   cors({
//     origin: "https://www.example.com", // Only allow requests from this origin
//   })
// )

app.use(express.json())

// * API Endpoints/Routes Below:
// Test the connection to the database at root Endpoint (localhost:3000/)
app.get("/", (req, res) => {
  res.send("Hello World!")
})

// Get all users Endpoint
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create a new user Endpoint
app.post("/users", async (req, res) => {
  console.log(req.body) // Check what is received
  const { name, email } = req.body
  try {
    const user = await User.create({ name, email })
    res.status(201).json(user)
  } catch (error) {
    console.error("Error creating user:", error)
    res.status(400).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
