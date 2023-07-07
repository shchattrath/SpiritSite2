import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Vuja De teases Fall-Winter 2023 Collection",
            desc: "Fashion creator Ken Ijima has showcased Vuja De's lookbook for the upcoming season",
            img: "https://cdn.shopify.com/s/files/1/0728/5522/4608/files/06.jpg?v=1685893823&width=720"
        },    
        {
            id: 2,
            title: "Makoto Shinkai's 'Suzume' - immoral or misunderstood?",
            desc: "The widely-acclaimed creator has enjoyed the success of his new film - but the age-gap between the main characters has raised concern among viewers",
            img: "https://media.timeout.com/images/105882001/image.jpg"
        } ,
         {
            id: 3,
            title: "A New Fashion District Emerges.",
            desc: "For young adults, Capitol Hill has always been the epicenter of arts in the Seattle area, however the Eastside has begun to take in some of that spark.",
            img: "https://www.theurbanist.org/wp-content/uploads/2022/07/The-Bellevue-courtesy-of-Kohn-Pederson-Fox.jpg"
        }
    ];

    return (
        <div className='blog'>
            <div className='posts'>
                {posts.map((post) => (
                    <div className='post' key={post.id}>
                        <div className="img">
                            <Link to={`/post/${post.id}`}>
                            <img src={post.img} alt="" />
                            </Link>;
                        </div>
                        <div className='content'>
                            <Link to={`/post/${post.id}`} className="clickable">
                                <h1>{post.title}</h1>
                            </Link>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Blog;