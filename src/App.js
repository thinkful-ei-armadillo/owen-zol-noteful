import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NotefulContext from './NotefulContext';

import STORE from './store';
import Folderlist from './components/Folderlist'
import Folder from './components/Folder';
import Notelist from './components/Notelist';
import NoteInfo from './components/NoteInfo';
import './App.css';

class App extends Component {
  state = {
    folders: [],
    notes: [],
  }

  // =================Update state with get request================
  componentDidMount(){
    this.setState({
      folders: STORE.folders,
      notes: STORE.notes,
    })
  }
  // ===============================================================

  findFolder = (noteId) => {
    const note = this.state.notes.find(note => note.id === noteId)
    const folder = this.state.folders.find(folder => folder.id === note.folderId)
    return folder;
  }

  getNotesFolder = (folderId) => {
    return this.state.notes.filter(note => note.folderId === folderId)
  }
  
  getNoteInfo = (noteId) => {
    return this.state.notes.find(note => note.id === noteId)
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      // add new note, add new folder and delete note
      findFolder: this.findFolder,
      getNoteFolder: this.getNotesFolder,
      getNoteInfo: this.getNoteInfo,
    }
    console.log(contextValue)
    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <header>
            <h1><Link to='/'>Noteful</Link></h1>
          </header>
          <div className="main">
            <nav className="nav-bar">
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Folderlist}
                />
                <Route
                  exact
                  path='/folder/:folderId'
                  component={Folderlist}
                />
                <Route
                  path='/note/:noteId'
                  component={Folder}
                />
              </Switch>
            </nav>
            <main className="main-note">
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Notelist}
                />
                <Route
                  path='/folder/:folderId'
                  component={Notelist}
                />
                <Route
                  path='/note/:noteId'
                  component={NoteInfo}
                />
              </Switch>
            </main>
          </div>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
