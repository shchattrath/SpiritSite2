import React, { useState } from "react";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const Create = () => {
    const [value, setValue] = useState('')
    return(
        <div className="write">
            <div className="content">
                <input type = "text" placeholder="Enter Title"/>
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
                    <input style = {{display:"none"}} type = "file" id = "file"/>
                    <label htmlFor="file">Upload Image</label>
                
                    <div className="buttons">
                        <button>Update</button>
                        <button>Save as draft</button>
                    </div>
                </div>
                <div className="item"> 
                    <h1>Category</h1>
                    <input type = "radio" name = "cat" value="fashion" id = "fashion"/>
                    <label htmlFor = "fashion">Fashion</label>

                    <input type = "radio" name = "cat" value="culture" id = "culture"/>
                    <label htmlFor = "culture">Culture</label>
                    
                    <input type = "radio" name = "cat" value="development" id = "development"/>
                    <label htmlFor = "development">Development</label>

                </div>
            </div>
        </div>
    )
}
export default Create