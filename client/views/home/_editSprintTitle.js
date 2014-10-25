Template.editSprintTitle.events({
  'keypress .editable-input': function(e) {
    if (e.which === 27) {
      Session.set('editingSprintTitleId', false);
    }
  },
  'submit form': function(e) {
    e.preventDefault();
    var editingTitle = Session.get('editingSprintTitleId');
    Sprints.update({_id: editingTitle}, {$set: {title: $('#' + editingTitle).val()}});
    console.log($('#' + editingTitle).val());
    Session.set('editingSprintTitleId', false);
  },
  'click #cancelEditingSprintTitle': function(e) {
    Session.set('editingSprintTitleId', false);
  }
});

Template.editSprintTitle.rendered = function() {
  $('#' + Session.get('editingSprintTitleId')).focus();
}
