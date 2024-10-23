import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { deleteColor,editColor } from "./ColorSlice";
import { useNavigate } from "react-router-dom";
function ShowColor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(null);
  const { color } = useSelector((state) => state.color);
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [colors, setColr] = useState('');
  const colorSave=()=>{
    editColor({id:edit,item:{title,body,color:colors}})
    navigate("/")
  }
  const editsetup=(index)=>{
    setEdit(index)
    findData=color[index]
    setTitle(findData.title);
    setBody(findData.body);
    setColr(findData.color);

  }
  return (
    <div>
      <button onClick={() => navigate("/addcolor")}>Add Color</button>
      {color.length === 0 ? (
        <h1>it is a empty</h1>
      ) : (
        <div>
          {edit === null ? (
            <div>
              {color.map((color, index) => (
                <div key={index} style={{ backgroundColor: color.color }}>
                  <h2>{color.title}</h2>
                  <p>{color.body}</p>
                  <button onClick={() => editsetup(index)}>edit</button>
                  <button onClick={() => dispatch(deleteColor(index))}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <br />
              <label htmlFor="color">color</label>
              <input
                type="color"
                value={colors}
                onChange={(e) => setColr(e.target.value)}
              ></input>
              <br />
              <label htmlFor="body">body</label>
              <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></input>
              <br />
              <button onClick={colorSave}>save</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShowColor;
