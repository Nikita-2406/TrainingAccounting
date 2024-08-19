import { useState } from 'react'
import { InputTraining } from '../InputTraining/InputTraining'
import { ViewTraining } from '../ViewTraining/ViewTraining'

export interface ILocalState {
    id: number,
    date: string,
    length: number
}

export const Training = () => {
    const [workout, addWorkout] = useState<Array<ILocalState>>([])
  return (
    <div>
        <InputTraining 
        workout={workout}
        addHandler={addWorkout}/>
        <ViewTraining workout={workout}
        addHandler={addWorkout}/>
    </div>
  )
}
