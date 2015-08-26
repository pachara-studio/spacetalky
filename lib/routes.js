Router.route("/", {
  name:"Home",
  template:"home"
});

Router.route("/channel/:_id", {
  name:"Channel",
  template:"channel"
});
