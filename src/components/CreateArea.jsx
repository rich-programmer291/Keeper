import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
    const [expand, setExpand] = useState(false);
    const [input, setInput] = useState({
        title: "",
        content: ""
    });

    function handleClick() {
        setExpand(true);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevValue => {
            if (name === "title") {
                return {
                    title: value,
                    content: prevValue.content
                }
            } else if (name === "content") {
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        })
    }

    function submitNote(event) {
        props.toAdd(input);
        setInput({ title: "", content: "" });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {expand ? <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={input.title}
                /> : ''}
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={expand ? 3 : 1}
                    onClick={handleClick}
                    onChange={handleChange}
                    value={input.content}
                    
                />
                <Zoom in={expand ? true : false}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
