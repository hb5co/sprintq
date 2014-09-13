Template.sprintsList.sprints = function () {
  var sprintSearchQuery = Session.get('sprintSearchQuery');
  return Sprints.find({title: {$regex: sprintSearchQuery, $options : "i"}, archived: false}, {sort: {createdAt:-1}});
};

Template.sprintsList.editingSprintTitleId = function () {
  return Session.equals('editingSprintTitleId', this._id);
}

Template.sprintsList.events({
  'click #archiveSprint': function(e) {
    e.preventDefault();
    Sprints.update({_id: this._id}, {$set: {archived: true}});
  },
  'click #editSprintTitleBtn': function(e) {
    e.stopPropagation();
    e.preventDefault();
    Session.set('editingSprintTitleId', this._id);
  }
});