import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
const Blog = () => {
    const [posts, setPosts] = useState([])

    const cat = useLocation().search
    useEffect(() =>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("/posts");
                setPosts(res.data);
            } catch(err){
                console.log(err);
            }
        };
        fetchData();
    }, []);
  

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }


    return (
        <div className='home'>
        <div className='posts'>
            {posts.map((post) => (
                <div key={post.id} className='post'>
                    <div className="img">
                        <img src={`./uploads/${post.img}`} alt="" />
                    </div>
                    <div className='content'>
                        <Link to={`/post/${post.id}`} className="clickable">
                            <h1>{post.title}</h1>
                        </Link>
                        <p>{getText(post.desc)}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Blog;

            