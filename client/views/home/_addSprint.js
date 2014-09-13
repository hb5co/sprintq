Template.addSprint.events({
  'submit form': function(e) {
    e.preventDefault();
    var newSprint = document.getElementById('sprint-title').value;
    Sprints.insert({title: newSprint});
    document.getElementById('sprint-title').value = '';
  }
});
