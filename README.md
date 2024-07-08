# This is the FullStack MonoRepo utilizing a React Frontend with a Node.js Backend
Run frontend/backend concurrently with
To run both Backend + Frontend concurrently with the package concurrently

Go to the Node.js Backend Directory → /Development/../AudioTransfer-v0.0.0/backend/ on your local machine
- In Terminal Run:

`npm run dev`

- This will start both the Backend + Frontend Servers Concurrently

Backend ＝ localhost:3000
Frontend ＝ localhost:5173

### Packages Installed
#### Backend:
- cors → `npm install cors --save-dev`
- express → `npm install express sequelize sqlite3`
- sequelize
- sqlite3
- concurrently → `npm install concurrently --save-dev`
#### Frontend (Built with Vite):
axios → `npm install axios`