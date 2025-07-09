import Display from './Display'

const Table = ({good, neutral, bad})=>{
    return(
        <table>
            <tbody>
                <Display text={'Good'} value={good}/>
                <Display text={'Neutral'} value={neutral}/>
                <Display text={'Bad'} value={bad}/>
                <Display text={'All'} value={good + neutral + bad}/>
                <Display text={'Average'} value={(good + -1*bad) / (good + neutral + bad)}/>
                <Display text={'Positive'} value={good / (good + neutral + bad) * 100} unit={' %'}/>
            </tbody>
        </table>
    )
}
export default Table