import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class TodoItem extends Component {
	// * Toggle Check
	toggleChecked() {
		Meteor.call('toggleTask', this.props.task._id, this.props.task.complete);
	}

	// * Delete Task
	deleteTask() {
		Meteor.call('deleteTask', this.props.task._id);
	}

	render() {
		const { task } = this.props;

		return (
			<>
				<li>
					<input
						type='checkbox'
						readOnly
						checked={task.complete}
						onClick={this.toggleChecked.bind(this)}
					/>
					<span>{task.text}</span>

					<button>Edit</button>
					<button onClick={this.deleteTask.bind(this)}>Delete</button>
				</li>
			</>
		);
	}
}
