Sprints = new Meteor.Collection("sprints");

// Sprint collection permissions.
Sprints.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId);
  },
  update: function (userId, doc, fields, modifier) {
    return (userId);
  },
});

// Stuff to do when a Sprint collection document is added.
Sprints.before.insert(function (userId, doc) {
  doc.createdAt = new Date();
  doc.archived = false;
  doc.modifiedAt = Date.now();
});

// Stuff to do when a Sprint collection document is updated.
Sprints.before.update(function (userId, doc, fieldNames, modifier, options) {
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = Date.now();
});
