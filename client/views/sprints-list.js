Template.sprintsList.sprints = function () {
  var sprintSearchQuery = Session.get('sprintSearchQuery');
  return Sprints.find({title: {$regex: sprintSearchQuery, $options : "i"}, archived: false}, {sort: {createdAt:-1}});
};

Template.sprintsList.events({
  'click input[name="archiveSprint"]': function(e) {
    e.preventDefault();
    Sprints.update({_id: this._id}, {$set: {archived: true}});
  }
});