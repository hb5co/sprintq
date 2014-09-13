Template.sprintsList.sprints = function () {
  var sprintSearchQuery = Session.get('sprintSearchQuery');
  return Sprints.find({title: {$regex: sprintSearchQuery, $options : "i"}, archived: false}, {sort: {createdAt:-1}});
};

Template.sprintsList.editingSprintTitleId = function () {
  return Session.equals('editingSprintTitleId', this._id);
}

Template.sprintsList.loggedInColumnWidth = function() {
  if (Meteor.user()) {
    return 9;
  } else {
    return 12;
  }
};

Template.sprintsList.events({
  'click #archiveSprint': function(e) {
    e.stopPropagation();
    e.preventDefault();

    sprintId = this._id;
    
    // getting clicked button and it's table row
    var archiveSprint = $(e.currentTarget).parent().parent();
    
    archiveSprint.removeClass('highlight').addClass('animated fadeOutLeftBig archived');

    archiveSprint.delay(250).slideUp(500, function(){
      Sprints.update({_id: sprintId}, {$set: {archived: true}});
    });
  },
  'click #editSprintTitleBtn': function(e) {
    e.stopPropagation();
    e.preventDefault();
    Session.set('editingSprintTitleId', this._id);
  }
});
