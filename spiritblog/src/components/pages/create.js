import React, { useState } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from "axios";
import { useLocation } from "react-router";
import moment from "moment";

const Create = () => {
    const state = useLocation().state
    const [value, setValue] = useState(state?.desc || " ");
    const [title, setTitle] = useState(state?.title ||" ");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || null);

    const upload = async () =>{
        try{
            console.log("success")
            const formData = new FormData();
            formData.append("file",file)
            const res = await axios.post("/upload", formData)
            console.log("Image Succesfully Uploaded")
            return res.data
        }

        catch(err){
            console.log(err)
            console.log("L")

        }
    }
    const handleClick = async e=>{
         e.preventDefault()
         const imgUrl = upload()

         try{
            state ? await axios.put(`/posts/${state.id}`, {   
                title,
                desc:value,
                cat,
                img:file ? imgUrl : ""
            }) : await axios.post(`/posts`, {   
                  title,
                  desc:value,
                  cat,
                  img:file ? imgUrl : "",
                  date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
            })
         }
         catch(err){
            console.log(err)
         }
         
    }
    return(
        <div className="write">
            <div className="content">
                <input type = "text" value = {title} placeholder="Enter Title" onChange={e=>setTitle(e.target.value)}/>
                <div className="EditorContainer">
                    <ReactQuill className="editor" theme = "snow" value = {value} onChange={setValue}/>
                </div>
            </div>
            <div className="menu">  
                <div className="item">    
                    <h1>Publish</h1>
                    <span>
                        <b>Status</b> : Draft
                    </span>
                    <p></p>
                    <span>
                        <b>Visibility</b> : Public
                    </span>
                    <input style = {{display:"none"}} type = "file" id = "file" onChange = {e=>setFile(e.target.files[0 ])}/>
                    <label className = "upload" htmlFor="file">Upload Image</label>
                
                    <div className="buttons">
                        <button>Publish</button>
                        <button onClick={handleClick}>Save as draft</button>
                    </div>
                </div>
                <div className="item"> 
                    <h1>Category</h1>
                    <input type = "radio" checked={cat==='fashion'} name = "cat" value="fashion" id = "fashion" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor = "fashion">Fashion</label>

                    <input type = "radio" checked={cat==='culture'} name = "cat" value="culture" id = "culture" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor = "culture">Culture</label>
                    
                    <input type = "radio" checked={cat==='development'}name = "cat" value="development" id = "development" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor = "development">Development</label>

                </div>
            </div>
        </div>
    )
}
export default Create