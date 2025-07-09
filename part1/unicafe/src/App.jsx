import { useState } from 'react'

import Header from './Header'
import Button from './Button'
import Table from './Table'

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const increment = (val)=>{
        if(val === 'good') setGood(good => good + 1)
        else if(val === 'neutral') setNeutral(neutral => neutral + 1)
        else setBad(bad => bad + 1)
    }
    
    return (
        <>
            <Header text={'Give Feedback'} size={1}/>
            <Button text={'Good'} onClick={()=>increment('good')}></Button>
            <Button text={'Neutral'} onClick={()=>increment('neutral')}></Button>
            <Button text={'Bad'} onClick={()=>increment('bad')}></Button>
            <Header text={'Statistics'} size={2}/>
            <Table good={good} neutral={neutral} bad={bad}></Table>
        </>
    )
}

export default App
