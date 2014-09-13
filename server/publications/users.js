Meteor.publish("users", function () {
  return Meteor.users.find({});
  // return Meteor.users.aggregate([{$group : {closedBy : "$by_user", difficulty : {$sum : 1}}}]);
  //db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}
});
