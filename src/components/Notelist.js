import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import { Link } from 'react-router-dom'
// import NoteInfo from './NoteInfo';

class Notelist extends Component {
    static contextType = NotefulContext;

    getNotesFolder = (folderId) => {
        return this.context.notes.filter(note => note.folderId === folderId)
      }

    render(){
        let notes = this.context.notes;
        const { folderId } = this.props.match.params;
        
        if (folderId){
            notes = this.getNotesFolder(folderId);
        }
        
        return (
                <ul>
                    {
                        notes.map(note => {
                                return (
                                    <li>
                                        <h2 className='title'>
                                            <Link to={`/note/${note.id}`} >
                                                {note.name}
                                            </Link>
                                        </h2>
                                        <button className='delete-note' type='button'>DELETE</button>
                                        <div className='modified-date'>
                                            Modified <span>{note.modified}</span>
                                        </div>
                                    </li>
                                )
                            })}
                </ul>
       )
    }
}


export default Notelist