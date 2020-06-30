import React, {useState, createContext, useEffect} from 'react'

export const WordsContext = createContext(null)

export const WordsProvider = props => {
  const wordsTemplate = [
    {
      id: 1,
      english: 'mom',
      hebrew: 'אמא',
      associations: '',
      level: 1
    },
    {
      id: 2,
      english: 'dad',
      hebrew: 'אבא',
      associations: '',
      level: 1
    },
    {
      id: 3,
      english: 'zoo',
      hebrew: 'גן חיות',
      associations: '',
      level: 2
    },
    {
      id: 4,
      english: 'zebra',
      hebrew: 'זברה',
      associations: '',
      level: 3
    },
    {
      id: 5,
      english: 'horse',
      hebrew: 'סוס',
      associations: '',
      level: 0
    },
    {
      id: 6,
      english: 'lunch',
      hebrew: 'ארוחת צהריים',
      associations: '',
      level: 0
    },
    {
      id: 7,
      english: 'morning',
      hebrew: 'בוקר',
      associations: '',
      level: 1
    },
    {
      id: 8,
      english: 'sword',
      hebrew: 'חרב',
      associations: '',
      level: 3
    },
    {
      id: 9,
      english: 'axe',
      hebrew: 'גרזן',
      associations: '',
      level: 2
    },
    {
      id: 10,
      english: 'computer',
      hebrew: 'מחשב',
      associations: '',
      level: 1
    },
    {
      id: 11,
      english: 'quest',
      hebrew: 'משימה, מסע',
      associations: '',
      level: 0
    },
  ]
  const [words, setWords] = useState([])

  useEffect(() => {
    setWords(wordsTemplate)
  }, [])

  return (
    <WordsContext.Provider value={[words, setWords]}>
      {props.children}
    </WordsContext.Provider>
  )

}

