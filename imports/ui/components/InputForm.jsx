import React, { Component } from 'react';

export default class InputForm extends Component {
	constructor(props) {
		super(props);

		this.taskRef = React.createRef();
	}

	// * Add Task
	addTask(e) {
		e.preventDefault();
		const text = this.taskRef.current.value.trim();

		Meteor.call('addTask', text, () => (this.taskRef.current.value = ''));
	}
	render() {
		return (
			<form onSubmit={this.addTask.bind(this)}>
				<input
					type='text'
					placeholder='add new task'
					ref={this.taskRef}
				/>
				<button type='submit'>Add</button>
			</form>
		);
	}
}
