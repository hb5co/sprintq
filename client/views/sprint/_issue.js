Template.issue.helpers({
  closedChecked: function () {
    return this.closed ? 'checked' : '';
  },

  closedClass: function () {
    return this.closed ? 'closed' : '';
  }
})

Template.issue.events({
  'click [type=checkbox]': function (e, tmpl) {
    var id = this.index;
    var closed = tmpl.find('input').checked;
    sprint = Template.parentData(1);
    Sprints.update({_id: sprint._id}, {
      $set: {
        closed: closed
      }
    });
  }
});
