import React, { Component } from 'react'

import Header from './pages/Header'
import List from './pages/List'
import Footer from './pages/Footer'

import './App.css'
export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        todoName: "吃饭",
        isDone: true,
      },
      {
        id: 2,
        todoName: "睡觉",
        isDone: false,
      },
      {
        id: 3,
        todoName: "洗脚",
        isDone: false,
      }
    ]
  }
  //添加
  addTodo = value => {
    //id 设置的思路：要是id不重复，先判定数组里面有没有内容，没有就写死，id为1，有内容就找到最后一个元素的 id，在加一，就是新插入元素的id
    //this.state.todos.length

    let { todos } = this.state
    // let {newTodos}=[...todos]
    const id = this.state.todos.length ? todos[todos.length - 1].id + 1 : 1
    // console.log(id);
    const todoObj = {
      id,
      todoName: value,
      isDone: false
    }

    const newTodos = [...this.state.todos]
    newTodos.push(todoObj)
    this.setState({
      todos: newTodos
    })
    // console.log(todoObj);
  }
  // 删除
  delTdo = delId => {
    // console.log(delId);
    console.log();
    const newTodos = []
    this.state.todos.forEach(item => {
      if (delId !== item.id) {
        newTodos.push(item)
      }
      return newTodos
    })
    this.setState({
      todos: newTodos
    })

  }

  //选中之后改变isDone
  checkeIsDone = (id) => {
    let { todos } = this.state
    const newTodos = [...todos]
    newTodos.forEach((item) => {
      // console.log(item.id);
      item.isDone = (item.id === id) ? (item.isDone = !item.isDone) : (item.isDone)
      return newTodos;
    })
    this.setState({
      todos: newTodos
    })
  }
  // 定义一个函数，用来改变 全部选中按钮的状态
  updateTodoIsDone = () => {
    let { todos } = this.state
    const newTodos = [...todos]
    const flg = newTodos.every(item => item.isDone)
    newTodos.forEach((item) => {
      item.isDone = !flg
    })
    this.setState({
      todos: newTodos
    })
  }

  // 定义一个函数用来清除全部以完成任务 
  allDone = () => {
    const newTodos = []
    this.state.todos.forEach((item) => {
      if (!item.isDone) {
        newTodos.push(item)
      }
    })
    this.setState({
      todos: newTodos
    })
  }


  render() {
    // console.log(this.state.todos.length);
    //定义任务总数和完成的任务数量 ，出入footer组件里面接收就行 
    const allTotal = this.state.todos.length;
    const doneTotal = this.state.todos.filter(item => item.isDone).length


    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}></Header>
          <List todos={this.state.todos} delTdo={this.delTdo} checkeIsDone={this.checkeIsDone}></List>
          <Footer todos={this.state.todos} allTotal={allTotal} doneTotal={doneTotal} updateTodoIsDone={this.updateTodoIsDone} allDone={this.allDone}></Footer>
        </div>
      </div>
    )
  }
}
