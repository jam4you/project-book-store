import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypjs from 'bcryptjs';

const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());

//model
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    type: String
});

const UserModel = mongoose.model('bookstoreUser', userSchema);


//route
app.get('/', (req, res) => {
    res.send('Hellow World!');
});

app.post('/signup', async (req, res) => {
    try {
        //req.body
        const { username, email, password, confirm_password } = req.body;

        //check to see if the user's data already in the database
        const user = await UserModel.findOne({ email });

        if (user) return res.status(400).json({ msg: `Email already exist in the database ${email}` });

        if (password !== confirm_password) return res.status(400).json({ msg: `The two password does not match!` });

        const hash_password = bcrypjs.hashSync(password, 10);

        const users = await UserModel.create({ username, email, password: hash_password });

        console.log(users);

        res.status(200).json({ data: users });
    } catch (error) {
        console.log(error);
    }
});

app.post('/signin', async(req, res) => {
    try {
        //grab the client's data
        //req.body
        const { email, password } = req.body;

        //check to see if the user's data already in the database
        const user = await UserModel.findOne({ email });

        if (!user) return res.status(400).json({ mesg: `The user's email is not in our database ${email}` });

        //check to see if the entered password matches the password from the db
        const hash = user.password; //the password from the database

        const password_true = bcrypjs.compareSync(password, hash);

        if (!password_true) return res.status(400).json({ msg: `Password incorrect!` });

        res.status(200).json({ data: user });        
    } catch (error) {
        console.log(error);
    }
});

const CONNECTION_URI = 'mongodb+srv://bookstore:mongodb@cluster0.oscqpsp.mongodb.net/?retryWrites=true&w=majority';

const PORT = 5000;

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen((PORT), () => console.log(`Server listening on PORT ${PORT}`)))
    .catch((err) => console.error(err));