import React, { Component } from 'react'
import './index.css'


export default class Footer extends Component {

	render() {
		
		// console.log(this.props.allTotal);
		// console.log(this.props.doneTotal);
		return (
			<div className='todo-footer'>
				<label>
					<input
						type='checkbox'
						checked={this.props.allTotal===this.props.doneTotal &&this.props.doneTotal!==0}
						onChange={this.props.updateTodoIsDone}

					/>
				</label>
				<span>
					<span>已完成{this.props.doneTotal}</span> / 全部{this.props.allTotal}
				</span>
				<button
					className='btn btn-danger'
					onClick={this.props.allDone}
				>清除已完成任务
				</button>
			</div>
		)
	}
}
