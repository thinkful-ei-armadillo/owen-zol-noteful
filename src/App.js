import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import STORE from './store';
import Folderlist from './components/Folderlist'
import Notelist from './components/Notelist';
import NoteInfo from './components/NoteInfo';
import './App.css';

class App extends Component {
  state = {
    store: STORE
  }

  findFolder = (noteId) => {
    const note = this.state.store.notes.find(note => note.id === noteId)
    const folder = this.state.store.folders.find(folder => folder.id === note.folderId)
    return folder;
  }

  renderNavComponent(){
    const {folders, notes} = this.state.store
    return (
      <>
        <Route
          exact
          path='/'
          render={() =>
            <Folderlist
              folders={folders}
              notes={notes}
            />
          }
        />
        <Route
          exact
          path='/folder/:folderId'
          render={() =>
            <Folderlist
              folders={folders}
              notes={notes}
            />
          }
        />
        <Route
          path='/note/:noteId'
          render={(props) => {
            const { noteId } = props.match.params
            const folder = this.findFolder(noteId)
            return (
              <>
                  <h3 className='folder-name'>
                    {folder.name}
                  </h3>
                  <button onClick={() => props.history.goBack()}>BACK</button>
              </>
            )
          }}
        />
      </>
    )
  }


  getNotesFolder = (folderId) => {
    return this.state.store.notes.filter(note => note.folderId === folderId)
  }
  
  getNoteInfo = (noteId) => {
    return this.state.store.notes.find(note => note.id === noteId)
  }

  renderMainComponents() {
    const { notes } = this.state.store
    return (
      <>
        <Route
          exact
          path='/'
          render={() => <Notelist notes={notes} />}
        />
        <Route
          path='/folder/:folderId'
          render={props => {
            const { folderId } = props.match.params
            const folderNotes = this.getNotesFolder(folderId)
            return (
              <Notelist
                notes={folderNotes}
              />
            )
          }}
        />
        <Route
          path='/note/:noteId'
          render={props => {
            const { noteId } = props.match.params
            const note = this.getNoteInfo(noteId)
            return (
              <NoteInfo
                note={note}
                showContent={true}
              />
            )
          }}
        />
      </>
    )
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1><Link to='/'>Noteful</Link></h1>
        </header>
        <div className="main">
          <nav className="nav-bar">
            {this.renderNavComponent()}
          </nav>
          <main className="main-note">
            {this.renderMainComponents()}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
