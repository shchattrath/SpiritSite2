import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
    // const posts = [
    //     {
    //         id: 1,
    //         title: "Vuja De teases Fall-Winter 2023 Collection",
    //         desc: "Fashion creator Ken Ijima has showcased Vuja De's lookbook for the upcoming season",
    //         img: "https://cdn.shopify.com/s/files/1/0728/5522/4608/files/06.jpg?v=1685893823&width=720"
    //     },    
    //     {
    //         id: 2,
    //         title: "Makoto Shinkai's 'Suzume' - immoral or misunderstood?",
    //         desc: "The widely-acclaimed creator has enjoyed the success of his new film - but the age-gap between the main characters has raised concern among viewers",
    //         img: "https://media.timeout.com/images/105882001/image.jpg"
    //     },
    //     {
    //        id: 3,
    //        title: "A New Fashion District Emerges.",
    //        desc: "For young adults, Capitol Hill has always been the epicenter of arts in the Seattle area, however the Eastside has begun to take in some of that spark.",
    //        img: "https://www.theurbanist.org/wp-content/uploads/2022/07/The-Bellevue-courtesy-of-Kohn-Pederson-Fox.jpg"
    //    }2
    // ];

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

export default Home;

            