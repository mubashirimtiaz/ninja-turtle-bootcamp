//object
let key = "email";
let user = {
  name: "alexendra",
  age: 32,
  email: "alexendra@champ.com",
  location: "Toronto",
  blogs: [
    "Two and two make four",
    "The Dark Knight",
    "blah blah blah",
    "blah blah blahhhhhh!!",
  ],
  login() {
    console.log(`${this.name} has wrote ${this.blogs.length} blogs`);
  },
  logBlog() {
    this.blogs.forEach((blog, index) => {
      console.log(`${blog} - ${index}`);
    });
  },
};

// user.login();
user.logBlog();
// console.log(this);
// console.log(user.name);

//this keyword

//accessing obj properties

// console.log(user.email);

// console.log(user.location);

// console.log(user[key]);

// adding properties to obj
// user.likes = 34;

// user.age = 23;
// console.log(user);
