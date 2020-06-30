import React, {useContext, useState} from 'react'
import Collapse from 'react-bootstrap/Collapse'
import DifficultyBar from './DifficultyBar'
import './Word.css'

const Word = ({word}) => {
  const [open, setOpen] = useState(false)
  const getColor = () => {
    switch (word.level) {
      case 1:
        return 'green-word'
      case 2:
        return 'yellow-word'
      case 3:
        return 'red-word'
      default:
        return 'grey-word'
    }
  }


  return (
    <div className={getColor()} onClick={() => {setOpen(!open)}}>
      <div className='eng-word'>
        {word.english}
      </div>
      <Collapse in={open}>
        <div className='word-content'>
          <div className='heb-word'>
            {word.hebrew}
          </div>
          <div className='associations'>
            {word.associations}
          </div>
          <DifficultyBar word={word}/>
        </div>
      </Collapse>
    </div>
  )
}

export default Word