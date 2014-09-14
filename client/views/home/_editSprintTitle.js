Template.editSprintTitle.events({
  'blur .editable-input': function() {
    Session.set('editingSprintTitleId', false);
  },
  'keypress .editable-input': function(e) {
    if (e.which === 27) {
      Session.set('editingSprintTitleId', false);
    }
  }
});

Template.editSprintTitle.rendered = function() {
  var editingTitle = Session.get('editingSprintTitleId'); 
  $('#' + editingTitle).editable({
    mode: 'inline',
    success: function(response, newValue) {
      if (newValue !== '') {
        Sprints.update({_id: editingTitle}, {$set: {title: newValue}});
      }
      Session.set('editingSprintTitleId', false);
    }
  });
  $('#' + Session.get('editingSprintTitleId')).click();
}