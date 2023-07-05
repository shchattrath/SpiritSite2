import React from 'react'

import { Link } from 'react-router-dom';

const Create = () => {
  const posts = [
    {
        id: 1,
        title: "test page",
        desc: "test desc",
        img: "https://www.skyscrapercity.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.skyscrapercity.com/attachments/4_c_tower1-jpg.4043511/"
    },
];

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className='content'>
                            <Link to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Create