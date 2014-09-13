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
    /**
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
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
        // userId: randUserId()
      },
      {
        title: 'Praesent at sollicitudin nisi',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
      },
      {
        title: 'Fusce vel porttitor dui',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
      },
      {
        title: 'Curabitur et vulputate dolor',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
      },
      {
        title: 'Donec elementum tellus a magna bibendum',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ],
      },
      {
        title: 'Aenean et tortor pulvinar',
        issues: [
          {
            title: "Issue 1",
            difficulty: 1,
          },
          {
            title: "Issue 2",
            difficulty: 2,
          },
          {
            title: "Issue 3",
            difficulty: 3,
          },
        ]
      }
    ];

    for (i = 0; i < sprints.length; i++) {
      Sprints.insert(sprints[i]);
    }
  }
});
