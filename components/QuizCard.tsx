import React from 'react'
import { Button } from './ui/button'
import { ChevronRightIcon } from 'lucide-react'

export default function QuizCard() {
  return (
    <div className='bg-slate-50 flex flex-col gap-4 py-8 px-5 rounded-md shadow-md min-h-40 min-w-72 hover:shadow-xl hover:bg-white border transition-all'>
      <h1 className='font-bold text-2xl'>Викторина #1</h1>
      <h2 className='text-zinc-800'><b>Категория</b>: Кино</h2>
      <h2 className='text-zinc-800'><b>Сложность</b>: Сложно</h2>
      <Button className='w-fit' >
        Начать
        <ChevronRightIcon />
      </Button>
    </div>
  )
}
