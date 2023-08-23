import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import moment from 'moment'
import { AuthContext } from '../context/authContext';
const Single = () => {

    const [post, setPost] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const postId = location.pathname.split("/")[2];
    const currentUser = useContext(AuthContext).currentUser;
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
            } catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [postId]);


    const handleDelete = async ()=>{
        try{
            const res = await axios.delete(`/posts/${postId}`);
            navigate("/");
         
        } catch(err){
            console.log(err)
        }
    }

    return(
        
        <div className='single'>
            <div className='content'>
            <h1>{post.title}</h1>
                    <img className = "image" src = {post?.img}/>
                        
            {currentUser?.username === post.username &&  <div className='edit'>
                    <Link to={'/create?edit=1'} state = {post}>
                    <img src = 'https://cdn.onlinewebfonts.com/svg/img_53536.png' alt = 'edit'/>
                    </Link>
                    <p onClick={handleDelete}>DELETE POST</p>
                </div>
            }
            <h3>{post.username}</h3>
            <p> {moment(post.date).fromNow()}</p>
            <div className='body'>
                     {post.desc}
            </div>
            </div>
            {/* <div className='menu'>
                <h>Other Posts</h>
                {post.map((post) => (
                    <div className = 'post' key = {post.id}>
                            <img src = {post.img} alt = ""/>
                            <h2>{post.title}</h2>
                    </div>
                ))}
        
            </div> */}
        </div>
    )

}

export default Single