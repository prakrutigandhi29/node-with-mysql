const conn=require('./config');
const express=require('express');
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    conn.query("select * from user",(err,result)=>{
        if(err)
            res.send(err);
        else
            res.send(result);
    })
})

app.post('/',(req,res)=>{
   // const data={name:"Jainy",password:"234",user_type:2};
   const data=req.body;
   conn.query("INSERT INTO user SET ?",data,(err,result,fields)=>{
        if(err) err;
        res.send(result);
    })
})

app.put('/:id',(req,res)=>{
   // const data=["Daya","123",2,2];
   const data=[req.body.name,req.body.password,req.body.user_type,req.params.id]
    conn.query("UPDATE user SET name=?,password=?,user_type=? where user_id=?",data,(err,result,fields)=>{
        if(err) err;
        res.send(result);
    })
})

app.delete('/:id',(req,res)=>{
   // const data=req.params.id;
    conn.query("DELETE from user where user_id="+req.params.id,(err,result,fields)=>{
        if(err) err;
        res.send(result);   
    });
    
})
app.listen(5000);

