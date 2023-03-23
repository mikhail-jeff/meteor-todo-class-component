import React, { Component } from 'react';

import { Tasks } from '/imports/api/TasksCollection';

import TrackerReact from 'meteor/ultimatejs:tracker-react';
import InputForm from './components/InputForm';
import TodoItem from './components/TodoItem';

export default class App extends TrackerReact(Component) {
	constructor(props) {
		super(props);

		this.state = {
			subscription: {
				tasks: Meteor.subscribe('allTasks'),
			},
		};
	}

	componentWillUnmount() {
		this.state.subscription.tasks.stop();
	}

	// * Fetch All Todos
	tasks() {
		return Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
	}

	// * Delete Task
	deleteAllTask() {
		Meteor.call('deleteAllTask');
	}

	render() {
		return (
			<div>
				<header>
					<h1>Tasks ({this.tasks().length})</h1>
				</header>

				<InputForm />

				<h3>Tasks List</h3>

				{this.tasks().length > 0 ? (
					<ul>
						{this.tasks().map((task) => {
							return (
								<TodoItem
									key={task._id}
									task={task}
								/>
							);
						})}
					</ul>
				) : (
					<p>No tasks found!</p>
				)}

				<button onClick={this.deleteAllTask.bind(this)}>Clear List</button>
			</div>
		);
	}
}
