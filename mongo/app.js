const express=require('express');
const bodyParser=require('body-parser');
const {getAllTodoList, createTodo, getTodoById, deleteTodoById , updateTodoById}=require('./controller/todo');
const { connectDb } = require('./config/db');
const { findByIdAndUpdate } = require('./model/todo');
const cors=require('cors');

connectDb();
const app=new express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/v2/todo',getAllTodoList);
app.post('/api/v2/todo',createTodo);
app.get('/api/v2/todo/:id',getTodoById);
app.delete('/api/v2/todo/:id',deleteTodoById);
app.put('/api/v2/todo/:id',updateTodoById);

app.listen(4000,()=>{
    console.log('listening on')
})