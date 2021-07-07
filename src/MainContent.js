import React,{Component} from 'react'
import MyInfo from './MyInfo'
import ToDoItem from './ToDoItem'
import Joke from './Joke'
import todosData from './todosData'


class MainContent extends Component{
    constructor(){
        super()
        this.state={
            todos: todosData,
            answer: "Yes",
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }    
    handleClick(){
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render(){
        const firstName = "Bob"
        const lastName = "Ziroll"
        const styles = {
            color: "red",
            backgroundColor:"black",
            fontSize : 24
        }
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)        
        return(
            <main className="container">
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}> Change!</button>
                <div>Is state important to know? {this.state.answer}</div>
                <h1 style={styles}>Hello {`${firstName}  ${lastName}`}!</h1>
                <Joke data={{question :"This is question", punchLine: "This is the punchline"  }}/>
                <Joke data={{ punchLine: "This is the 2"  }}/>
                <Joke data={{question :"This is 3", punchLine: "This is the 3"  }}/>
                <Joke data={{question :"This is 4", punchLine: "This is the 4"  }}/>
                <Joke data={{question :"This is 5", punchLine: "This is the 5"  }}/>
                {todoItems}
                <MyInfo />
            </main>
        )    
    }
}

export default MainContent