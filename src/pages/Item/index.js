import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = {
    // 跟视图渲染有关的数据,都应该定义在状态里面
    isShow: false
  }

  handleEnter = () => {

    this.setState({
      isShow: true
    })
  }



  handleLeave = () => {

    this.setState({
      isShow: false
    })
  }

  //点击删除
  handleClick = () => {

    const delId = this.props.todo.id
    this.props.delTdo(delId)
    // console.log(this.props.todo.id);
    //写一个删除函数
  }

  // 点击选中
  handleChecked = () => {
    let { todo } = this.props
    const id = todo.id
    // console.log(id);
    this.props.checkeIsDone(id)
    // console.log(todo);
  }

  render() {
    const { todo } = this.props
    // console.log(todo.isDone);
    return (

      //给Li绑定事件,鼠标移入的时候，鼠标移出的时候
      <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} >
        <label>
          {/* 当input被选中时， todo.isDone */}
          <input type='checkbox' checked={todo.isDone} onChange={this.handleChecked} />

          {/* 给span加上删除的样式，当isDone的时候，加上删除的样式 */}
          <span className={todo.isDone ? 'done' : ''}>{todo.todoName}</span>

        </label>

        <button
          onClick={this.handleClick}
          className='btn btn-danger'
          style={{ display: this.state.isShow ? 'block' : 'none' }}>
          删除
        </button>
      </li>
    )
  }
}
