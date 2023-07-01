const todo = require('../model/todo');
const Todo=require('../model/todo');


exports.getAllTodoList=async(req,res)=>{
    try{
        const list=await Todo.find();
        res.send(list)
    }catch(error){
        return res.status(500).json({
            msg:'Internel server error'
        })
    }
}

exports.createTodo=async(req,res)=>{
    try{
        const newTodo=await Todo.create((req.body));
        return res.status (201).json({
            data:newTodo
        })
        
    }
    catch(error){
        return res.status(500).json({
            msg:'Internel server error'
        })
    }
    
}


exports.getTodoById=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);
        if(todo){
            return res.status(200).json({
            data:todo
        })
        }
        else{
            return res.status(404).json({
                msg:'Todo not found',
            })
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg:'Internel server error'
        })
    }
}

exports.deleteTodoById=async(req,res)=>{
    try {
        const todo=await Todo.findById(req.params.id);
        if(todo){
            await Todo.findByIdAndDelete(req.params.id);
            return res.status(200).json({
                msg:'deleted'
            })
        }else{
            return res.status(404).json({
                msg:'Not found'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg:'Internel server error'
        })
    }
}

exports.updateTodoById=async(req,res)=>{
    try {
        const todo=await Todo.findById(req.params.id);
        if(todo){
            await Todo.findByIdAndUpdate(req.params.id,req.body);
            return res.status(200).json({
                msg:'updated'
            })
        }else{
            return res.status(404).json({
                msg:'Not found'
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg:'Internel server error'
        })
    }
}
