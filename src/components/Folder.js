import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
// import { Link } from 'react-router-dom'

class Folder extends Component {
    static contextType = NotefulContext;

    render(){
        const { noteId }= this.props.match.params
        const folder = this.context.findFolder(noteId)
        return (
            <div className='folder-list'>
             <h3 className='folder-name'>
                  {folder.name}
                </h3>
             <button onClick={() => this.props.history.goBack()}>BACK</button>
            </div>
        ) 
    }
 
}

export default Folder