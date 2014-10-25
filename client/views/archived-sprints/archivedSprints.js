Template.archivedSprints.sprints = function () {
  var sprintSearchQuery = Session.get('sprintSearchQuery');
  return Sprints.find({title: {$regex: sprintSearchQuery, $options : "i"}, archived: true}, {sort: {createdAt:-1}});
};

Template.archivedSprints.events({
  'click #unarchiveSprint': function(e) {
    e.preventDefault();
    sprintId = this._id;

    // getting clicked button and it's table row
    var unArchiveSprint = $(e.currentTarget).parent().parent().parent().parent();
    unArchiveSprint.removeClass('highlight').addClass('animated fadeOutLeftBig archived');
    unArchiveSprint.delay(250).slideUp(500, function(){
      Sprints.update({_id: sprintId}, {$set: {archived: false}});
    });
  },
  'click #editSprintTitleBtn': function(e) {
    e.stopPropagation();
    e.preventDefault();
    Session.set('editingSprintTitleId', this._id);
  }
});
