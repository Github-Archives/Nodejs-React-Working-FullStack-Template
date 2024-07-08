import { useState } from "react"
import axios from "axios"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault() // Prevent the default form submit behavior
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
      })
      console.log("User created:", response.data)
    } catch (error) {
      console.error("Failed to create user:", error)
    }
  }

  return (
    <div className="App">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
