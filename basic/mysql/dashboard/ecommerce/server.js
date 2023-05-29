  
import express from 'express';
import clientRouter from './route/adminRoute.js';
import adminRouter from './route/clientRoute.js';

const app = express();

app.use(clientRouter)
app.use('/admin',adminRouter)
app.listen(3000,()=>{
     console.log('server process on 3000')
})
  
  