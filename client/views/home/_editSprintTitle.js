Template.editSprintTitle.events({
  'submit #editSprintTitleForm': function(e) {
    e.preventDefault();
    var sprintId = Session.get('editingSprintTitleId');
    var newTitle = $('#editSprintTitleInput').val();
    Sprints.update({_id: sprintId}, {$set: {title: newTitle}});
    Session.set('editingSprintTitleId', false);
  },
  'keyup #editSprintTitleForm': function(e) {
    if (e.which === 27) {
      Session.set('editingSprintTitleId', false);
    }
  },
  'blur #editSprintTitleForm': function (e) {
    e.preventDefault();
    Session.set('editingSprintTitleId', false);
  }
});