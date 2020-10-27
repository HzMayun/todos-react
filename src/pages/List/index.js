import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
  render() {
    // console.log(this.props.delTdo);

    return (
      <ul className='todo-main'>
        {
          this.props.todos.map(item => (
            
            <Item key={item.id} todo={item} delTdo={this.props.delTdo} checkeIsDone={this.props.checkeIsDone}></Item>
          ))
        }
        
      </ul>
    )
  }
}
