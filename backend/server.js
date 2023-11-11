import express from 'express'
import mysql from 'mysql2'
import cors from "cors"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'
dotenv.config()
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "You are not authenticated" });
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json({ Error: "Token is not okay" });
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
}

app.get('/', verifyUser, (req, res) => {
    return res.json({Status: "Success", email: req.email});

})

app.post('/SignUp', (req, res) => {
    const sql = "INSERT INTO users (`email`, `password`) VALUES (?, ?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json({ Error: "Error hashing password" });
        }
        const values = [
            req.body.email,
            hash
        ];
        pool.query(sql, values, (err, result) => {
            if (err) {
                console.error("Error inserting data:", err);
                return res.status(500).json({ Error: "Error inserting data into the database" });
            }
            return res.json({ Status: "Success" });
        });
    });
});


app.post('/LogIn', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    pool.query(sql, [req.body.email], (err, data) => {
        if (err) {
            console.error("Login error in server:", err);
            return res.status(500).json({ Error: "Login error in server" });
        }

        if (data.length === 0) {
            console.error("No email existed:", req.body.email);
            return res.status(404).json({ Error: "No email existed" });
        }

        bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
            if (err) {
                console.error("Password compare error:", err);
                return res.status(500).json({ Error: "Password compare error" });
            }
            if (response) {
                const email = data[0].email;
                const token = jwt.sign({email}, "jwt-secret-key", {expiresIn: '1d' });
                res.cookie('token', token);
                return res.json({ Status: "Success" });
            } else {
                return res.json({ Status: "Password not matched" });
            }
        });
    });
});

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"});
})



app.listen(8081, () => {
    console.log(`server started on port 8081`);
})
