Template.issueSearch.events({
  'submit form': function(e) {
    e.preventDefault();
    Session.set('issueSearchQuery', '.*' + $('input[name="issueSearch"]').val() + '.*');
  },
  'keyup form': function(e) {
    Session.set('issueSearchQuery', '.*' + $('input[name="issueSearch"]').val() + '.*');
    if (e.which === 27) {
      $('#issueSearchInput').val('');
      Session.set('issueSearchQuery', '.*' + $('input[name="issueSearch"]').val() + '.*');
    }
  },
  'blur form': function(e) {
    e.preventDefault();
    $('#issueSearchInput').val('');
    Session.set('issueSearchQuery', '.*' + $('input[name="issueSearch"]').val() + '.*');
  }
});
