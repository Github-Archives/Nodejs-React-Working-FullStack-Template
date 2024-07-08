# Full Stack MonoRepo with React Frontend and Node.js Backend to be used as a template

## This is the FullStack MonoRepo utilizing a React Frontend with a Node.js Backend
Run frontend/backend concurrently with
To run both Backend + Frontend concurrently with the package concurrently

Go to the Node.js Backend Directory → /Development/../YourProject/backend/ on your local machine
In Terminal Run:

`npm run dev`

This will start both the Backend + Frontend Servers Concurrently

- Backend ＝ `localhost:3000`
- Frontend ＝ `localhost:5173`

You should now be able to pull up `localhost:5173` in your browser and submit a POST request to `localhost:3000/users` to add a user to the SQLlite database.

Note: The database is stored in the backend directory as `database.sqlite` which is included in the `.gitignore` file.

### Packages Installed
#### Backend:
- cors → `npm install cors --save-dev`
- express → `npm install express sequelize sqlite3`
- sequelize
- sqlite3
- concurrently → `npm install concurrently --save-dev`
#### Frontend (Built with Vite):
- axios → `npm install axios`