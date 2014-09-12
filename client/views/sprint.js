Template.sprint.helpers({
  sprint: function() {
    return Sprints.find({_id: this._id});
  }
});

Template.issuesList.issues = function () {
  var sprintSearchQuery = Session.get('sprintSearchQuery');
  return Sprints.find({title: {$regex: sprintSearchQuery, $options : "i"}}, {sort: {createdAt:-1}});
};
