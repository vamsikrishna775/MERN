const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors') 
const app = express();
const port = 3001;
const url ='mongodb+srv://vamsikrishnagoda8:vamsi334@cluster0.ot3slr3.mongodb.net/?retryWrites=true&w=majority&appName=pratice2/vamsicrud'
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const userApiFromRouter = require('./routes/userRoutes');


app.use(express.json());
app.use(cors());
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log('DB connected')})
.catch((err)=>{
    console.log(err)
});
const server = new ApolloServer({typeDefs,resolvers})
app.use('/users',userApiFromRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app});
    app.listen(port,()=>{
        console.log(`Server live on port ${port}`)
    })
}
StartServer();