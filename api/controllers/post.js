import jwt from "jsonwebtoken";
import { db } from "../db.js";
export const getPosts = (req,res) => {
   
    const q = req.query.cat 
        ? "SELECT * FROM posts WHERE cat=?"
        : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data)=>{
        if (err) return res.status(500).send(err);
        
        return res.status(200).json(data);
    })
}


export const getPost = (req,res) => {
    const q = "SELECT `username`, p.id, `title`, `desc`, p.img, `cat`, `date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? "

    db.query(q, [req.params.id ], (err, data)=>{
    if (err) return res.status(500).send(err);
    
    return res.status(200).json(data[0]);
   
})
}
export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Authentication Failed");

    jwt.verify(token, "jwtkeyplaceholder", (err, userInfo) => {
        if (err) return res.status(403).json("Invalid token");

        const q = "INSERT INTO posts(`title`, `desc`, `img`, `uid`, `cat`, `date`) VALUES (?)";

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            userInfo.id,
            req.body.cat,
            req.body.date
        ];

        db.query(q, [values], (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json("An error occurred");
            }
            return res.json("Post has been created");
        });
    });
};
export const deletePost = (req,res) => {
  
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Authentication Failed");
    
    jwt.verify(token, "jwtkeyplaceholder", (err, userInfo)=>{
        console.log(err);
        if(err) return res.status(403).json("Invalid token")

        const postId = req.params.id
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"
        db.query(q, [postId, userInfo.id], (err,data) =>{
            if(err) return res.status(403).json("You cannot delete another user's post.")
            return res.json("Post Deleted.")
        })
    })
   
}
export const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Authentication Failed");

    jwt.verify(token, "jwtkeyplaceholder", (err, userInfo) => {
        if (err) return res.status(403).json("Invalid token");
        
        const postId = req.params.id;
        const q = "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id`=? AND `uid`=?";

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat
        ];

        db.query(q, [...values, postId, userInfo.id], (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json("An error occurred");
            }
            return res.json("Post has been updated");
        });
    });
};
   
