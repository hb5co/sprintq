Meteor.publish('sprints', function () {
  return Sprints.find();
});
