  const ListItem = ({ index, note, handleDelete, handleEdite }) => {
    return (<div className="note">
        <div className="note-cta">
            <p className="note-counter">Note {index}</p>
            <div className="note-cta-btn">
                <button className="note-btn" onClick={()=>handleDelete(note.id)}>
                    <i className="fas fa-trash"></i>
                     Delete
                </button>
                <button onClick={()=>handleEdite(note.id)} className="note-btn edit-btn">
                    <i  className="fas fa-edit"></i> Edit
                </button>
            </div>
        </div>
        <hr />
        <h3 className="note-title">Title: {note.Title}</h3>
        <p className="note-text">{note.noteText}</p>
    </div>)
}

export default ListItem;