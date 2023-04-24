const express = require ('express');
const bodyParser = require ('body-parser');
const cookieParser = require ('cookie-parser');
const userRoutes = require ('./routes/user.routes');
const affaireRoutes = require ('./routes/affaire.routes');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
require ('dotenv').config({path:'./config/.env'});
require ('./config/db');
const  app = express();


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('*', checkUser);
app.get('/jwtid' ,requireAuth , (req ,res) =>{
    res.status(200).send(res.locals.user._id)
})
// Routes
app.use('/api/user' , userRoutes);
app.use('/api/affaire' , affaireRoutes);



// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})