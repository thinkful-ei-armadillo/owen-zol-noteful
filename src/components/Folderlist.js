import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Folderlist extends Component {

    static defaultProps = {
        folder: [],
      };

    render(){
        const folders = this.props.folders
                                  .map(folder => {
                                        return (
                                            <li key={folder.id}>
                                                <Link to={`/folder/${folder.id}`} id={folder.id} >
                                                {folder.name}
                                                </Link>
                                            </li>
                                            )
                                        })
        return (
            <div className='folder-list'>
                <ul className='NoteListNav__list'>
                    {folders}
                </ul>
            </div>
        ) 
    }

}



export default Folderlist