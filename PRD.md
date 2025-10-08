# API Endpoints

- **Method** |	**Route**           |  **Description**
-  POST	     |  /api/auth/register	|  Register new user
-  POST	     |  /api/auth/login	    |  Login + return JWT
-  GET	     |  /api/notes	        |  Get all notes (Auth required)
-  POST	     |  /api/notes	        |  Create new note
-  PUT	     |  /api/notes/:id	    |  Update note
-  DELETE	 |  /api/notes/:id	    |  Delete note

## Flow of App

- User signs up → password hashed with bcrypt → JWT token returned

- User logs in → token stored in localStorage

- Frontend requests /api/notes with Authorization: Bearer <token>

- Backend verifies token → fetches user’s notes

- CRUD actions update MongoDB → UI updates instantly