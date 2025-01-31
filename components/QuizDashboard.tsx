import React from 'react'
import QuizCard from './QuizCard'
import QuizAddButton from './QuizAddButton'
import QuizAddDrawer from './QuizAddDrawer'


export default function QuizDashboard() {
  const cards = [1, 2, 3]

  return (
    <div className='flex gap-5 py-5'>
      {cards.map(item => <>
        <QuizCard key={item} />
      </>)}
      <QuizAddDrawer>
        <QuizAddButton />
      </QuizAddDrawer>

    </div>
  )
}
