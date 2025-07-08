import Part from './Part'

const Content = ({parts})=>{


    return (
        <>
            <Part prtName={parts[0].name} exName={parts[0].exercises}/>
            <Part prtName={parts[1].name} exName={parts[1].exercises}/>
            <Part prtName={parts[2].name} exName={parts[2].exercises}/>
        </>
    )
}
export default Content