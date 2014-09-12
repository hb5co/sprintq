Template.addSprint.events({
  'submit form': function(e) {
    e.preventDefault();
    var newSprint = document.getElementById('sprint-title').value;
    Sprints.insert({sprintTitle: newSprint});
    document.getElementById('sprint-title').value = '';
  }
});
