Template.sprintsList.sprints = function () {
  var sprintSearchQuery = Session.get('sprintSearchQuery');
  return Sprints.find({sprintTitle: {$regex: sprintSearchQuery, $options : "i"}});
};