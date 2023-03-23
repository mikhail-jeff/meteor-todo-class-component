import { Meteor } from 'meteor/meteor';
import { Tasks } from './TasksCollection';

Meteor.publish('allTasks', function () {
	return Tasks.find();
});
