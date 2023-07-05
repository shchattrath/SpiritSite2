import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        }
    ];

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((post, index) => (
                    <div className={`post ${index % 2 === 0 ? 'left' : 'right'}`} key={post.id}>
                        {index % 2 === 0 ? (
                            <>
                                <div className="img">
                                    <img src={post.img} alt="" />
                                </div>
                                <div className='content'>
                                    <Link to={`/post/${post.id}`} className="clickable">
                                        <h1>{post.title}</h1>
                                    </Link>
                                    <p>{post.desc}</p>
                                  
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='content'>
                                    <Link to={`/post/${post.id}`} className="clickable">
                                        <h1>{post.title}</h1>
                                    </Link>
                                    <p>{post.desc}</p>
                                    
                                </div>
                                <div className="img">
                                    <img src={post.img} alt="" />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;