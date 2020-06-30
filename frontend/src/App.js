import React from 'react'
import WordList from './Components/WordList'
import {WordsProvider} from './Components/WordsContext'

const App = () => {
  return (
    <WordsProvider>
      <div className='App'>
        <WordList />
      </div>
    </WordsProvider>
  )
}

export default App
