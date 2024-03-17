require("dotenv").config();
const express=require('express');
const app=express();
const authRouter=require('./router/auth-router');
const contactRouter=require('./router/contact-router');
const adminRouter=require("./router/admin-router");
const connectDB=require('./utils/db');
const errorMiddleware = require("./middleware/error-middleware");
const cors=require('cors');

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRouter);

app.use(errorMiddleware);
const PORT=2000;
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`App listening at port ${PORT}`);
    })
})
