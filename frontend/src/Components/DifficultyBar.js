import React, {useContext} from 'react'
import redSmiley from '../Assets/redSmiley.png'
import yellowSmiley from '../Assets/yelloeSmiley.png'
import greenSmiley from '../Assets/greenSmiley.png'
import addAssociation from '../Assets/AddAssociation.png'
import './DifficultyBar.css'
import {WordsContext} from './WordsContext'

const DifficultyBar = ({word}) => {
  const [words, setWords] = useContext(WordsContext)

  const setEasyDifficulty = (e) => {
    e.stopPropagation()
    setWords(words.map(iterWord => word.id !== iterWord.id ? iterWord : {...word, level: 1}))
  }

  const setIntermideateDifficulty = (e) => {
    e.stopPropagation()
    setWords(words.map(iterWord => word.id !== iterWord.id ? iterWord : {...word, level: 2}))
  }

  const setHardDifficulty = (e) => {
    e.stopPropagation()
    setWords(words.map(iterWord => word.id !== iterWord.id ? iterWord : {...word, level: 3}))
  }

  const handleAddAssociation = () => {
    console.log("need to implemet");
  }

  return (
    <div className='word-options'>
      <img src={addAssociation} alt='addAssociation' className='smiley-icon' onClick={handleAddAssociation}/>
      <img src={redSmiley} alt='red smiley' className='smiley-icon' onClick={setHardDifficulty}/>
      <img src={yellowSmiley} alt='yellow smiley' className='smiley-icon' onClick={setIntermideateDifficulty}/>
      <img src={greenSmiley} alt='green smiley' className='smiley-icon' onClick={setEasyDifficulty}/>
    </div>
  )
}

export default DifficultyBar