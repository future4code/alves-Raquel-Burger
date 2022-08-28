import app from "./app";
import getTask from "./endpoint/getTask";
import getTaskUser from "./endpoint/getTaskUser";
import getUser from "./endpoint/getUser";
import getUserAll from "./endpoint/getUserAll";
import postTask from "./endpoint/postTask";
import postUser from "./endpoint/postUser";
import putUser from "./endpoint/putUser";


// GET
app.get('/user/all', getUserAll)
app.get('/user/:id', getUser)

app.get('/task/:id', getTask)
app.get('/task', getTaskUser)

// POST
app.post('/user', postUser)

app.post('/task', postTask)

// PUT
app.put('/user/edit/:id', putUser)


// DELETE
