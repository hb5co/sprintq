Template.sprintSearch.events({
  'submit form': function(e) {
    e.preventDefault();
    Session.set('sprintSearchQuery', '.*' + $('input[name="sprintSearch"]').val() + '.*');
  },
  'keyup form': function(e) {
    Session.set('sprintSearchQuery', '.*' + $('input[name="sprintSearch"]').val() + '.*');
    if (e.which === 27) {
      $('#sprintSearchInput').val('');
      Session.set('sprintSearchQuery', '.*' + $('input[name="sprintSearch"]').val() + '.*');
    }
  },
  'blur form': function(e) {
    e.preventDefault();
    $('#sprintSearchInput').val('');
    Session.set('sprintSearchQuery', '.*' + $('input[name="sprintSearch"]').val() + '.*');
  }
});