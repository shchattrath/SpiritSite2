import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
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
        <div className='blog'>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className="img">
                            <Link to={`/post/${post.id}`}>
                            <img src= {`/uploads/${post.img}`} alt="" />
                            </Link>;
                        </div>
                        <div className='content'>
                            <Link to={`/post/${post.id}`} className="clickable">
                                <h1>{getText(post.title)}</h1>
                            </Link>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Home;