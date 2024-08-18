import React, { FC, useRef, useState } from 'react'
import { IWorkoutProps } from '../Training/Training'
import './InputTraining.css'

interface IInputTrainingProps {
  addHandler: Function
  workout: Array<IWorkoutProps>
}



export const InputTraining: FC<IInputTrainingProps> = ( props ) => {
  let {addHandler, workout} = props
  const id = useRef(0)
  const [contextInput, setInput] = useState<IWorkoutProps>({
    id: 0,
    date: '',
    length: 0
  })

  const handlerOnSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    contextInput.id = id.current
    let ready = workout
    if (contextInput.date !== '') {
      const findIndex = workout.findIndex((element) => element.date === contextInput.date)

      if (findIndex !== -1) {
        ready[findIndex].length += contextInput.length 
      } else {
        ready = [contextInput].concat(workout)
      }
      
      addHandler(ready.concat())}
    
    setInput({
      id: 0,
      date: '',
      length: 0
    })
    id.current++
  }

const handlerOnChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = evt.target
  setInput((prev) => ({
    ...prev, 
    [name]: name === "length" ? (isNaN(parseInt(value)) ? 0 : parseInt(value)) : value
  }))
}
  return (<form onSubmit={handlerOnSubmit}>
    <div>Date:</div>
    <input type="text" name='date' onChange={handlerOnChange} value={contextInput.date}/>
    <div>Length: </div>
    <input type="text" name='length' onChange={handlerOnChange} value={contextInput.length}/><br/>
    <button  type='submit'>Создать</button>
  </form>
    
  )
}
