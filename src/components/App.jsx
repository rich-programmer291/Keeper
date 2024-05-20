import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addItem(note) {
        console.log(note);
        setNotes(prevItems => {
            return [...prevItems, note];
        });
        console.log("Item Added.");
    }

    function deleteItem(id) { 
        setNotes(prevItems =>{
            return (prevItems.filter((note,index) => index!==id));
        })
    }

    return <div>
        <Header />
        <CreateArea toAdd={addItem} />
        {notes.map((note, index) => (
            <Note
                key={note + index}
                id={index}
                title={note.title}
                content={note.content}
                toDel={deleteItem}
            />))
        }
        <Footer />
    </div>
}

export default App;
