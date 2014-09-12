Template.sprintSearch.events({
  'submit form': function(e) {
    e.preventDefault();
    Session.set('sprintSearchQuery', '.*' + $('input[name="sprintSearch"]').val() + '.*');
  },
});