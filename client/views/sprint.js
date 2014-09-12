Template.sprint.helpers({
  sprint: function() {
    return Sprints.find({_id: this._id});
  }
});

Template.sprint.issues = function () {
  return Sprints.find({_id: {$in: issues}});
};
