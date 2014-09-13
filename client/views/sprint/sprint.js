Template.sprint.issueList = function () {
  var issueSearchQuery = Session.get('issueSearchQuery');
  var sprintIssues = _.filter(this.issues, function(query) {
    var re = new RegExp(issueSearchQuery, 'i');
    return query.title.match(re);
  });
  return sprintIssues;
};
