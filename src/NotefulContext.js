import React from 'react'

const NotefulContext = React.createContext({
    folders: [],
    notes: [],
    findFolder: () => {},
    getNoteFolder: () => {},
    getNoteInfo: () => {},
})

export default NotefulContext