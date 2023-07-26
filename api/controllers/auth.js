import {db} from "../db.js";
import bcrypt from 'bcryptjs'
export const register = (req,res) =>{
   

    const q = "SELECT * FROm users WHERE email = ? OR username = ?";
    db.query(q, [req.body.email, req.body.username], (er,data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

       const salt = bcrypt.genSaltSync(10);
       const hash = bcrypt.hashSync("B4c0//", salt);
       
       const q = "INSERT INTO users('username', 'email', 'passsword') VALUES (?)"
       const values = [
            req.body.username,
            req.body.email,
            hash,
       ]

       db.query(q, [values], (err,data) => {
        if (err) return res.json(err);
        return res.status(200).json("User has been created.");
       });
    });
};

export const login = (req,res) =>{
    
}

export const logout = (req,res) =>{
    
}