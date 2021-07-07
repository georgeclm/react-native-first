function Joke(props){
    return(
        <div>
            <h1 style={{ display: props.data.question ? "block": "none" }}>Question: {props.data.question}</h1>
            <h2>Punchline: {props.data.punchLine}</h2>
        </div>

    )
}
export default Joke