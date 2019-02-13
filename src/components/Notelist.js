import React, { Component } from 'react';
import NoteInfo from './NoteInfo';

class Notelist extends Component {
    render(){
        return (
            <div>
                <ul>
                    {this.props.notes.map(note => {
                        return (<li key={note.id} id={note.id}>
                            <NoteInfo note={note} />
                        </li>
                        )}
                    )}
                </ul>
           </div>
        )
    }
}


export default Notelist