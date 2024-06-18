// Enums in typescript:
// define enum:
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
// define user:
var user1 = {
    name: "user1",
    email: "user1@gmail.com",
    password: "password1",
    role: Roles.admin,
};
// define admin:
var user2 = {
    name: "user2",
    email: "user2@gmail.com",
    password: "password2",
    role: Roles.user,
};
var isAdmin = function (user) {
    var name = user.name, role = user.role;
    return role === "admin"
        ? "".concat(name, " is allow to edit the website")
        : "".concat(name, " is not allow to edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
