Template.sprint.issueList = function () {
  var issueSearchQuery = Session.get('issueSearchQuery');
  var sprintIssues = _.filter(this.issues, function(query) {
    var re = new RegExp(issueSearchQuery, 'i');
    return query.title.match(re);
  });
  sprintIssues.map(function(doc, index, cursor) {
    var i = _.extend(doc, {index: index});
    return i;
  });
  console.log(sprintIssues);
  return sprintIssues;
};
