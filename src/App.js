import React from 'react'
import tododata from './tododata'
import Todo from './todo'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            todos: tododata
        }
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(id){
        this.setState(prevState => {
        const updatedlist=prevState.todos.map(list=>{
            if(list.id === id){
                list.checked=!list.checked
            }
            return list
        })
        return {
            todos: updatedlist
        }
        })
    }

    render(){
        const toRender = this.state.todos.map(list=><Todo key={list.id} list={list} handleclick={this.handleclick}/>)
        return(
            <div> 
            <Container>
                <h1 className="heading">ToDoList</h1>
                <Jumbotron>
                {toRender}
                </Jumbotron>
            </Container>
            </div>
        )

    }
}

export default App;