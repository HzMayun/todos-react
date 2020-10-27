import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
  state = {
    todoName: ''
  }
  handle = e => {
    

    const value = e.target.value
    this.setState({
      todoName: value.trim()//清除空格
    })
  }
  handleConfirm = e => {
    // console.log(this.props.todos);
    const keyCode = e.keyCode
   
    if (keyCode === 13) {
      if(!this.state.todoName) return //什么都不输入的时候（或者输入空格的时候），直接退出函数。空格使用todoName.trim()清除空格
      this.props.addTodo(this.state.todoName)
      //点击添加后，清空文本框的值
      this.setState({
        todoName: ''
      })

    }
  }
  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
          value={this.state.todoName}
          onChange={this.handle}
          onKeyDown={this.handleConfirm}
        />
      </div>
    )
  }
}
