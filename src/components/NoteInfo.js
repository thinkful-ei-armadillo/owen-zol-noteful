import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class NoteInfo extends Component {
    static contextType = NotefulContext;

    render(){
        const { noteId } = this.props.match.params
        const note = this.context.getNoteInfo(noteId)
        return (
            <div className='note'>
                <h2 className='title'>
                    {note.name}
                </h2>
                <button className='delete-note' type='button'>DELETE</button>
                <div className='modified-date'>
                    Modified <span>{note.modified}</span>
                </div>
                <div>{note.content}</div>
            </div>
        )
    }
}

export default NoteInfo