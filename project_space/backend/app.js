// const express = require("express"); 
// const mongoose = require("mongoose");
// const cors = require( "cors");
// const bodyParser = require ("body-parser");
// const logRouter = require('./src/routes/loginRoutes.js')

// const app = express();
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())
// // app.use('/',Router)
// app.use('/',logRouter)


// mongoose.connect('mongodb+srv://admin:aFNUigSjZGSKxO6b@driveready.q34liwz.mongodb.net/DriveReady?retryWrites=true&w=majority')  
// .then(() => app.listen(3000))
// .then(() =>console.log("Connected to Database & Listining to localhost 3000")
// )
// .catch((err) => console.log(err));
// app.post('/api/login',async(req,res)=>{
//     const {inputUsername , inputPassword} = req.body;
//     const user = new login({
//         Username,
//         Password
        
//     });
//     await user.save()
// })


// app.post('/api/login', async (req,res)) => {
//     const {inputUsername , inputPassword} = req.body;
//     const login = new UserActivation({
//         inputUsername,
//         inputPassword,
//     })
//     try{
//         login.isActive(err)
//     }
//     catch(err){
//         console.log(err)
//     }
//     return res.send({"msg":"inserted",result:login})
// }



const express = require("express"); 
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const loginRouter = require('./src/routes/loginRoutes.js');
const registerRouter = require('./src/routes/registerRoutes.js');
const criteriaRouter = require('./src/routes/criteriaRoutes.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/', loginRouter);
app.use('/',registerRouter);
app.use('/',criteriaRouter);

mongoose.connect('mongodb+srv://admin:aFNUigSjZGSKxO6b@driveready.q34liwz.mongodb.net/DriveReady?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(7000);
        console.log("Connected to Database & Listening to localhost:7000");
    })
    .catch((err) => console.error(err));

