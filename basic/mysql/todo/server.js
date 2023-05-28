  
import express from 'express';
import router from './route/router.js';

const app = express();

app.use('/api',router)


app.listen(3000,()=>{
     console.log('server process on 3000')
})
  
  