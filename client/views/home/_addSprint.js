Template.addSprint.events({
  'submit form': function(e) {
    e.preventDefault();
    var newSprint = document.getElementById('sprint-title').value;
    Sprints.insert({title: newSprint});
    $('.sprints-list .sprint-row').eq(0).hide().addClass('highlight').slideDown(250);
    document.getElementById('sprint-title').value = '';
  }
});
