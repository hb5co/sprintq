Template.archivedSprints.sprints = function () {
  var sprintSearchQuery = Session.get('sprintSearchQuery');
  return Sprints.find({title: {$regex: sprintSearchQuery, $options : "i"}, archived: true}, {sort: {createdAt:-1}});
};

Template.archivedSprints.events({
  'click #unarchiveSprint': function(e) {
    e.preventDefault();
    Sprints.update({_id: this._id}, {$set: {archived: false}});
  },
  'click #editSprintTitleBtn': function(e) {
    e.stopPropagation();
    e.preventDefault();
    Session.set('editingSprintTitleId', this._id);
  }
});