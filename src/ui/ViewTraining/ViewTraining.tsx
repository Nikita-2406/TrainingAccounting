import { FC, ReactNode } from 'react'
import { ILocalState } from '../Training/Training'
import './ViewTraining.css'

interface IViewTrainingProps {
  workout: Array<ILocalState>
  addHandler: Function
}


export const ViewTraining:FC<IViewTrainingProps> = (props) => {
  const {workout, addHandler} = props
  let view: Array<ReactNode> = []

  const clickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const {id} = evt.target as HTMLElement
    workout.filter(elem => elem.id != parseInt(id))
    addHandler(workout.filter(elem => elem.id != parseInt(id)))
  }

  for (const work of workout) {
    view.push(<tr key={work.id}>
        <td className='view'>{work.date}</td>
        <td className='view'>{work.length}</td>
        <td><button className='view' onClick={clickHandler} id={String(work.id)}>✘</button></td>
      </tr>)
  }
  return (
    <table>
      <thead>
        <td>Date:</td>
        <td>Length:</td>
        <td>Действие:</td>
      </thead>
      {view}
    </table>
  )
}
