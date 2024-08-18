import React, { FC, useRef, useState } from 'react'
import { IWorkoutProps } from '../Training/Training'
import './InputTraining.css'

interface IInputTrainingProps {
  addHandler: Function
  workout: Array<IWorkoutProps>
}



export const InputTraining: FC<IInputTrainingProps> = ( props ) => {
  let {addHandler, workout} = props
  const id = workout.length
  console.log(id)
  const [contextInput, setInput] = useState({
    id: id,
    date: '',
    length: 0
  })


  const handlerOnSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    // workout.unshift(contextInput)
    // console.log(workout)
    // console.log([1,3,4].concat([5, 6, 7]))
    addHandler([contextInput].concat(workout))
  }

const handlerOnChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = evt.target
  setInput((prev) => ({
    ...prev, 
    [name]: value
  }))
  console.log(contextInput)
}
  return (<form onSubmit={handlerOnSubmit}>
    <div>Date:</div>
    <input type="text" name='date' onChange={handlerOnChange}/>
    <div>Length: </div>
    <input type="text" name='length' onChange={handlerOnChange}/><br/>
    <button  type='submit'>Создать</button>
  </form>
    
  )
}
