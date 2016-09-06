var app = angular.module("MainApp",["ngRoute"]);

app.config(["$routeProvider",function($routeProvider){
    
    $routeProvider
    .when("/", {
        templateUrl:"Components/Home/home.html",
        controller:"HomeController"
    })
    .when("/properties", {
        templateUrl:"Components/Properties/prty.html",
        controller:"HomeController"
    })
    .when("/aboutus", {
        templateUrl:"Components/About-us/aboutus.html",
        controller:"AboutUsController"
    })
     .when("/contact", {
        templateUrl:"Components/contact-us/contactus.html",
        controller:"ContactsUsController"
    })
     .when("/userlogin", {
        templateUrl:"Components/User-login/userlogin.html",
    }).otherwise({
            redirectTo: "/"
        });
}])