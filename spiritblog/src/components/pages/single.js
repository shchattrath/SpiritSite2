import React from 'react'
import {Link} from 'react-router-dom'
const Single = () => {
    const posts = [
           
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
        },
        {
            id:4,
            title: "Oppenheimer's Biggest Mistake - An Analysis of the Father of Modern World",
            desc: "The Christopher Nolan film highlighting Oppenhiemer's life and the major events surrounding his research career makes sure to highlight one key mistake in Oppenheimer's Life, that is - rebellion. ",
            img: "https://media.gq.com/photos/645956c367d4264086a5d77f/16:9/w_2352,h_1323,c_limit/Screen%20Shot%202023-05-08%20at%204.07.48%20PM.png"
        }
    ];
    return(
        <div className='single'>
            <div className='content'>
            <h1>Vuja De teases Fall-Winter 2023 Collection</h1>
                    <img className = "image" src = "https://cdn.shopify.com/s/files/1/0728/5522/4608/files/06.jpg?v=1685893823&width=720"/>
           
            <div className='edit'>
                <Link to={'/write?edit=1'}>
                <img src = 'https://cdn.onlinewebfonts.com/svg/img_53536.png' alt = 'edit'/>
                </Link>
            </div>
            <div className='body'>
                        <p>     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla risus vel tellus pharetra imperdiet. Ut nisi elit, maximus eget molestie ornare, pharetra eu ligula. Donec vel orci nulla. In hac habitasse platea dictumst. Vestibulum et commodo libero. Nullam semper sodales elit sed congue. Vivamus auctor ultrices mauris eu ornare. Maecenas congue sagittis purus, ut tempus elit accumsan sollicitudin. Quisque elementum ornare tellus, eu varius odio ultricies non.
                            Sed at varius augue. Sed ut egestas sapien. Aenean neque quam, aliquam in odio ac, condimentum tincidunt tortor. </p>

                        <p>     Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc iaculis felis ut aliquam euismod. In aliquam felis at aliquam mattis. Quisque rutrum ante non tellus vehicula sollicitudin. Sed varius dignissim dui, in suscipit mi scelerisque sed. Donec eu accumsan risus. Duis ultricies mi at lectus mollis porta.
                            Donec in efficitur nibh. Pellentesque et diam at eros hendrerit tristique. Donec maximus tortor eu pharetra tincidunt. Pellentesque libero odio, sodales accumsan dui vel, vehicula consectetur nibh. Suspendisse tellus lorem, malesuada sed leo et, auctor rhoncus erat. Duis tempor velit tortor, in aliquet quam tristique sit amet. Quisque quis mi vitae elit ultricies imperdiet non tincidunt sem. Suspendisse sem quam, aliquam in vestibulum sed, tincidunt in justo. Nam facilisis eget neque id luctus. Suspendisse sapien risus, maximus ac scelerisque at, rhoncus vel sapien. Aliquam felis ipsum, lobortis eu venenatis ut, luctus non ligula. Morbi in neque lectus. Donec consequat interdum nibh.
                            Ut sodales est pharetra nunc tincidunt, et ornare erat interdum. </p>
                        <p>    Integer id libero libero. Vestibulum maximus turpis justo, eget feugiat enim mollis quis. Nulla quis finibus felis. Ut pretium consectetur gravida. Maecenas viverra a elit a pretium. Duis at venenatis mi. Nam quis hendrerit velit. Ut vel nunc tincidunt, consectetur nisl ut, dictum nibh. Nulla luctus, elit nec tincidunt tincidunt, libero tellus luctus purus, ac dictum arcu metus auctor quam. Nulla consectetur mauris vel rutrum auctor.
                            Donec ut interdum neque, vitae facilisis risus. Pellentesque volutpat arcu libero, pellentesque rhoncus felis mattis eu. Pellentesque ullamcorper nisi nec neque ornare sollicitudin. Suspendisse at velit erat. Donec pretium ipsum eu sagittis consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec molestie justo et neque finibus tempus. Nam finibus facilisis elit, eget luctus ante aliquam nec.
                        </p>
            </div>
            </div>
            <div className='menu'>
                <h>Other Posts</h>
                {posts.map((post) => (
                    <div className = 'post' key = {post.id}>
                            <img src = {post.img} alt = ""/>
                            <h2>{post.title}</h2>
                    </div>
                ))}
        
            </div>
        </div>
    )

}

export default Single