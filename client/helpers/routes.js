// Helper for current route name.
UI.registerHelper('currentRouteName',function(){
  return Router.current() ? Router.current().route.name : '';
});

// Helper to help check the current route.
UI.registerHelper('RouteIs', function (routeName) {
  return Router.current().route.name === routeName;
});
