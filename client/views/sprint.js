Template.sprint.helpers({
  sprint: function() {
    return Sprints.find({_id: this._id});
  }
});
