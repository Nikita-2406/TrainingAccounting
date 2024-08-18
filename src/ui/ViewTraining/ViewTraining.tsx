import { FC, ReactNode } from 'react'
import { IWorkoutProps } from '../Training/Training'
import './ViewTraining.css'

interface IViewTrainingProps {
  workout: Array<IWorkoutProps>
}

export const ViewTraining:FC<IViewTrainingProps> = (props) => {
  const {workout} = props
  let view: Array<ReactNode> = []
  for (const work of workout) {
    // console.log(work)
    view.push(<li key={work.id}>
        <div className='view'>{work.date}</div>
        <div className='view'>{work.length}</div>
        <button className='view'>✘</button>
      </li>)
  }
  return (
    <ul>
      <li>
        <span>Date:</span>
        <span>Length:</span>
        <span>Действие:</span>
      </li>
      {view}
    </ul>
  )
}
