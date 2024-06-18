// Enums in typescript:

// define enum:

enum Roles {
  user = "user",
  admin = "admin",
}

// define Alias type:
type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

// define user:
const user1: LoginDetails = {
  name: "user1",
  email: "user1@gmail.com",
  password: "password1",
  role: Roles.admin,
};

// define admin:
const user2: LoginDetails = {
  name:"user2",
  email: "user2@gmail.com",
  password: "password2",
  role: Roles.user,
};

const isAdmin = (user: LoginDetails) => {
  const { name, role } = user;
  return role === "admin"
    ? `${name} is allow to edit the website`
    : `${name} is not allow to edit the website`;
};

console.log(isAdmin(user1));
console.log(isAdmin(user2));

