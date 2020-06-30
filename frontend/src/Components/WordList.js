import React, {useContext} from 'react'
import Word from './Word'
import { WordsContext } from './WordsContext'

const WordList = () => {
  const [words, setWords] = useContext(WordsContext)

  return(
    words.map(word =>
      <Word key={word.id}
            word={word}
      />
    )
  )
}

export default WordList