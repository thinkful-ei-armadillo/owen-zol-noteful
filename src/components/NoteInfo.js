import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NoteInfo extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         showContent: false
    //     }   
    // }
    static defaultProps = {
        note: '',
        showContent: false 
    }
   
    render(){
        return (
            <div className='note'>
                <h2 className='title'>
                    <Link to={`/note/${this.props.note.id}`} >
                        {this.props.note.name}
                    </Link>
                </h2>
                <button className='delete-note' type='button'>DELETE</button>
                <div className='modified-date'>
                    Modified <span>{this.props.note.modified}</span>
                </div>
                {this.props.showContent && <div>{this.props.note.content}</div>}
            </div>
        )
    }


}



export default NoteInfo