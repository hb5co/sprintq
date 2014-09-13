Template.editSprintTitle.events({
  'submit #editSprintTitleForm': function(e) {
    e.preventDefault();
    var sprintId = Session.get('editingSprintTitleId');
    var newTitle = $('#editSptintTitleInput').val();
    Sprints.update({_id: sprintId}, {$set: {title: newTitle}});
    Session.set('editingSprintTitleId', false);
  },
  'blur #editSprintTitleForm': function (e) {
    e.preventDefault();
    Session.set('editingSprintTitleId', false);
  }
});