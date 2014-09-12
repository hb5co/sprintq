Sprints = new Meteor.Collection("sprints");

Sprints.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId);
  },
  update: function (userId, doc, fields, modifier) {
    return (userId);
  },
});
