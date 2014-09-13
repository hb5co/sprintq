Template.issue.helpers({
  closedChecked: function () {
    return this.closed ? 'checked' : '';
  },

  closedClass: function () {
    return this.closed ? 'closed' : '';
  }
})

Template.issue.events({
  'click [name=closed]': function (e, tmpl) {
    var id = this._id;
    var closed = tmpl.find('input').checked;
    Sprints.update({_id: id}, {
      $set: {
        closed: closed
      }
    });
  }
});
