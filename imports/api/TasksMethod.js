import { Meteor } from 'meteor/meteor';
import { Tasks } from './TasksCollection';

Meteor.methods({
	// * ADD TASK
	addTask(task) {
		Tasks.insert({
			text: task,
			complete: false,
			createdAt: new Date(),
		});
	},

	// * TOGGLE CHECK
	toggleTask(id, status) {
		Tasks.update(id, {
			$set: {
				complete: !status,
			},
		});
	},

	// * DELETE SINGLE TASK
	deleteTask(id) {
		Tasks.remove(id);
	},

	// * DELETE ALL TASKS
	deleteAllTask() {
		Tasks.remove({});
	},
});
