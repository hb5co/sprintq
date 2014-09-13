Template.issueSearch.events({
  'submit form': function(e) {
    e.preventDefault();
    Session.set('issueSearchQuery', '.*' + $('input[name="issueSearch"]').val() + '.*');
  },
});
