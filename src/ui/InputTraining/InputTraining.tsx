import React, { FC, useRef, useState } from 'react'
import { IWorkoutProps } from '../Training/Training'
import './InputTraining.css'

interface IInputTrainingProps {
  addHandler: Function
  workout: Array<IWorkoutProps>
}



export const InputTraining: FC<IInputTrainingProps> = ( props ) => {
  let {addHandler, workout} = props
  // const id = workout.length
  // const contextInputRef = useRef<IWorkoutProps>({
  //   id: 0,
  //   date: "",
  //   length: 0
  // }) 
  // contextInputRef.current.id = id
  // console.log(id)
  const [contextInput, setInput] = useState<IWorkoutProps>({
    id: 0,
    date: '',
    length: 0
  })

  // console.log(contextInputRef.current.id)


  const handlerOnSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    console.log(contextInput)
    // let readyWorkout = workout
    for (const work of workout) {
      if (work.date === contextInput.date) {
        work.length += contextInput.length
        addHandler(workout)
        break
      } 
      else {
        addHandler([contextInput].concat(workout))
      }
    }
    // workout.unshift(contextInput)
    // console.log(workout)
    // console.log([1,3,4].concat([5, 6, 7]))
    // console.log(contextInputRef, workout)
    addHandler([contextInput].concat(workout))
    setInput({
      id: 0,
      date: '',
      length: 0
    })
  }

const handlerOnChange = (evt:React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = evt.target
  // console.log(contextInputRef.current[name as keyof typeof contextInputRef.current])
  // if (name !== "date") {
  //   contextInputRef.current[name as keyof typeof contextInputRef.current] =  parseInt(value)
  // } else {
  //   contextInputRef.current[name as keyof typeof contextInputRef.current] =  value
  // }
  // contextInputRef.current[name as keyof typeof contextInputRef.current] = name !== "date" ? parseInt(value) : value
  // console.log(contextInputRef.current)
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
