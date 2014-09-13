var randUserId = function() {
  var users = Meteor.users.find().fetch();
  var randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex]._id;
};

var randPassword = function() {
  return Math.random().toString(36);
};

console.log('Sprints found: ' + Sprints.find().count());

Meteor.startup(function () {
  if (Sprints.find().count() === 0) {

    var users = [
      {
        email: 'BobFranks@example.com',
        password: randPassword(),
        profile: {
          name: 'Bob Franks',
          avatar_url: 'https://avatars.githubusercontent.com/u/957951?v=2',
        },
      },
      {
        email: 'SarahBurger@example.com',
        password: randPassword(),
        profile: {
          name: 'Sarah Burger',
          avatar_url: 'https://avatars.githubusercontent.com/u/957951?v=2',
        },
      },
      {
        email: 'EdSandwich@example.com',
        password: randPassword(),
        profile: {
          name: 'Ed Sandwich',
          avatar_url: 'https://avatars.githubusercontent.com/u/957951?v=2',
        },
      }
    ];

    console.log(users);
/**
    for (var i = 0; i < users.length; i++) {
      Accounts.createUser(users[i]);
    }
**/
    console.log('Spawning sample sprints...');

    var sprints = [
      {
        title: 'SprintQ',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
            claimedBy: 'none',
            closed: false
          },
          {
            title: "Issue 2",
            difficulty: 2,
            claimedBy: 'none',
            closed: true,
            closedBy: 'none'
          },
          {
            title: "Issue 3",
            difficulty: 3,
            claimedBy: 'none',
            closed: true,
            closedBy: 'none'
          },
        ],
        // userId: randUserId()
      },
      {
        title: 'Praesent at sollicitudin nisi',
        // userId: randUserId()
      },
      {
        title: 'Fusce vel porttitor dui',
        // userId: randUserId()
      },
      {
        title: 'Curabitur et vulputate dolor',
        // userId: randUserId()
      },
      {
        title: 'Donec elementum tellus a magna bibendum',
        // userId: randUserId()
      },
      {
        title: 'Aenean et tortor pulvinar',
        // userId: randUserId()
      }
    ];

    for (i = 0; i < sprints.length; i++) {
      Sprints.insert(sprints[i]);
    }
  }
});
