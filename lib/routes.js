Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('sprintPage', {
    path: '/sprint/:_id',
    waitOn: function() {
      return [
        Meteor.subscribe('singleSprint', this.params._id)
      ];
    },
    data: function() {return Sprints.findOne(this.params._id);}
  });
  this.route('styleguide', {
    path: 'styleguide'
  });
});
