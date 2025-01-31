import React from 'react'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'

function QuizAddDrawer({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-full'>
      <Drawer>
        <DrawerTrigger>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Создать викторину</DrawerTitle>
            <DrawerDescription>Заполните форму и вы создадите викторину.</DrawerDescription>
          </DrawerHeader>
          <form className='min-h-60 px-4 pb-20 flex flex-col gap-5'>
            <div>
              <Label htmlFor="quiz-name">Название викторины</Label>
              <Input id='quiz-name' className='w-64' type="text" placeholder="Название викторины" />
            </div>
            <div>
              <Label htmlFor="quiz-name">Категория</Label>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Кино" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cinema">Кино</SelectItem>
                  <SelectItem value="games">Игры</SelectItem>
                  <SelectItem value="school">Школа</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="quiz-name">Сложность</Label>
              <Select>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Легкая" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Легкая</SelectItem>
                  <SelectItem value="medium">Средняя</SelectItem>
                  <SelectItem value="hard">Сложная</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button>Создать и начать викторину</Button>
            </div>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default QuizAddDrawer