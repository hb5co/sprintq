Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('sprint', {
    path: '/sprint/:_id',
    data: function() {
      return Sprints.findOne(this.params._id);
    }
  });
  this.route('archivedSprints', {
    path: 'archived-sprints'
  });
  this.route('styleguide', {
    path: 'styleguide'
  });
});
