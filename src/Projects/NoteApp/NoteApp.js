import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import './NoteApp.css'

import ListItem from './ListItem';
import { v4 as uuidv4 } from 'uuid';

const getNotes = () => {
    let Not = localStorage.getItem("Notes");
   
    if (Not === null) {

        return []
    }
    else {
     
        return JSON.parse(Not);
    }


}


export default function NoteApp() {

    const [notes, setNotes] = useState(() => {return getNotes()})
    const [Title, setTitle] = useState('')
    const [noteText, setnoteText] = useState('')

    const handleDelete = (id) => {


        const newNotes = notes.filter(note => {
            return note.id !== id
        })



        setNotes(newNotes)


    }
    const handleEdite = (id) => {



        const EditInput = notes.filter(note => {
            return note.id === id
        })

        setTitle(EditInput[0].Title)
        setnoteText(EditInput[0].noteText)


        const newNotes = notes.filter(note => {
            return note.id !== id
        })




        setNotes(newNotes)



    }


    const AddSubmit = (e) => {
        e.preventDefault();

        const note = { id: uuidv4(), Title: Title, noteText: noteText }

        const newNot = prev => [...prev, note]

     

        setNotes(newNot)


    }

    useEffect(() => {
    
        localStorage.setItem("Notes", JSON.stringify(notes));


    }, [notes])


    return (
        <>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <h1 className="text-light">Smart Notes</h1>
                    </div>
                </nav>
            </header>


            <section>
                <div className="container section-container">

                    <div className="form-container">
                        <h2>Add Note</h2>
                        <hr />
                        <form onSubmit={AddSubmit}>
                            <input

                                value={Title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text" id="note-title" placeholder="Note title"
                            />
                            <textarea

                                id="note-text"
                                cols="30"
                                rows="10"
                                placeholder="Note details"
                                value={noteText}
                                onChange={(e) => setnoteText(e.target.value)}

                            ></textarea>
                            <button id="add-btn" className="btn btn-danger btn-lg">Add Note</button>
                        </form>
                    </div>










                    <div className="notes-container">
                        <div className="container">
                            <div className="notes-header">
                                <h2>Your Notes</h2>
                                <button className="clear note-btn">Delete all notes</button>
                            </div>
                            <hr />




                            <div id="notes">

                                {notes.map((note, index) => {

                                    return <ListItem key={note.id} index={index} note={note} handleDelete={handleDelete} handleEdite={handleEdite} />

                                })


                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
