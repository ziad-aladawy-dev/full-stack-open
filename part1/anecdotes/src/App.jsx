import { useState } from 'react'

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]



    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

    const shuffle = ()=>{
        setSelected(Math.floor(Math.random() * anecdotes.length))
        // console.log(selected)
    }

    const handleVote = ()=>{
        const newArr = [...vote]
        newArr[selected] = vote[selected] + 1
        setVote(newArr)
    }

    const highestRate = ()=>{
        const max = Math.max(...vote)
        const indexMax = vote.findIndex(val => val === max)
        return anecdotes[indexMax]
    }

    return (
        <>
            <h1>Anecodte of the day</h1>
            {anecdotes[selected]} <br />
            has {vote[selected]} votes <br />
            <button onClick={handleVote}>Vote</button>
            <button onClick={shuffle}>Shuffle</button> <br />
            <h2>Anecdote with most votes</h2>
            {highestRate()}
        </>
    )
}

export default App