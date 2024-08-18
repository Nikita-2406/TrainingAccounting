import { FC, ReactNode } from 'react'
import { IWorkoutProps } from '../Training/Training'
import './ViewTraining.css'

interface IViewTrainingProps {
  workout: Array<IWorkoutProps>
}

export const ViewTraining:FC<IViewTrainingProps> = (props) => {
  const {workout} = props
  let view: Array<ReactNode> = []
  console.log(workout)
  for (const work of workout) {
    view.push(<li key={work.id}>
        <div className='text'>{work.date}</div>
        <div className='text'>{work.length}</div>
        <button className='text'>✘</button>
      </li>)
  }
  return (
    <ul>
      {view}
    </ul>
  )
}
