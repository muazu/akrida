Router.configure({
	layoutTemplate: "layout"
});

Router.route("/", {name: "homePage"});
Router.route("/finprofile", {name: "finProfile"});
Router.route("/aboutUs", {name: "aboutUs"});