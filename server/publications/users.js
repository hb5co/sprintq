Meteor.publish("users", function () {
  try{
    return Meteor.users.find({}, {fields: {
      '_id': true,
      'createdAt': true,
      'profile': true,
      'profile.login': true,
      'profile.name': true,
      'profile.avatar_url': true,
      'profile.html_url': true,
    }});
  } catch(error) {
    console.log(error);
  }
});
