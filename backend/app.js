const express = require("express");
const bodyParser = require("body-parser");

const app = express();


////////////////////////////////////////////////////////////////
const backup = require("./api/backup");
const restore = require("./api/restore");
////////////////////////////////////////////////////////////////
const all_users = require("./api/all_users");
const schools_info = require("./api/schools_info");
const all_categories = require("./api/all_categories");
const all_titles = require("./api/all_titles");
const allstudents = require("./api/allstudents");
const allteachers = require("./api/allteachers");
const allhandlers = require("./api/allhandlers");
const all_schools = require("./api/all_schools");
const all_authors = require("./api/all_authors");
const all_books = require("./api/all_books");
const all_rents = require("./api/all_rents");
const all_reviews = require("./api/all_reviews");
const all_school_reviews = require("./api/all_school_reviews");
const all_school_rents = require("./api/all_school_rents");
const rents_not_returned = require("./api/rents_not_returned");
const all_school_reservations = require("./api/all_school_reservations");
const teacher_loans = require("./api/teacher_loans");
const teachers_authors = require("./api/authors_teachers_category");
const zero_rent_authors = require("./api/zero_rent_authors");
const top_category_combos = require("./api/top_category_combos");
const authors_less_than_five = require("./api/authors_less_than_five");
const books_rented_by_user = require("./api/books_rented_by_user");
const books_rented_by_user = require("./api/books_reserved_by_user");
const books_school_by_title = require("./api/books_school_by_title");
const books_school_by_category = require("./api/books_school_by_category");
const books_school_by_author = require("./api/books_school_by_author");
const allstudents_fromusers_school = require("./api/allstudents_fromusers_school");
const allteachers_fromusers_school = require("./api/allteachers_fromusers_school");
const allhandlers_fromusers_school = require("./api/allhandlers_fromusers_school");
const users_school = require("./api/users_school");
const handlers_over20books = require("./api/handlers_over20books");
const avg_likert = require("./api/avg_likert");
const book_user_parameters = require("./api/book_user_parameter");
const book_handler_parameters = require("./api/book_handler_parameter");
const late_rents = require("./api/late_rents");
const unapproved_handlers = require("./api/unapproved_handlers");
////////////////////////////////////////////////////////////////
const adduser = require("./api/adduser");
const addteacher = require("./api/addteacher");
const addstudent = require("./api/addstudent");
const addhandler = require("./api/addhandler");
const addauthor = require("./api/addauthor");
const addcategory = require("./api/addcategory");
const addreview = require("./api/addreview");
const addschool = require("./api/addschool");
const addbook = require("./api/addbook");
const addauthortobook = require("./api/addauthortobook");
const addcategorytobook = require("./api/addcategorytobook");
const addrent = require("./api/addrent");
const add_rent_approved = require("./api/add_rent_approved");
const addreservation = require("./api/addreservation");
const addbooktoschool = require("./api/addbooktoschool");
////////////////////////////////////////////////////////////////
const updatepassword = require("./api/updatepassword");
const update_available_copys = require("./api/update_available_copys");
const update_approves = require("./api/update_approves");
const approve_review = require("./api/approve_review");
const approve_rent = require("./api/approve_rent");
const update_returned = require("./api/update_returned");
const approve_reservation = require("./api/approve_reservation");
const update_teacher = require("./api/update_teacher");
const update_copys = require("./api/update_copys");
const updatebook = require("./api/updatebook");
////////////////////////////////////////////////////////////////
const delete_user = require("./api/delete_user");
const delete_school = require("./api/delete_school");
const delete_book_from_school = require("./api/delete_book_from_school");
const delete_review = require("./api/delete_review");
const delete_rent = require("./api/delete_rent");
const delete_reservation = require("./api/delete_reservation");
const delete_book = require("./api/delete_book");
const delete_author = require("./api/delete_author");
const delete_category = require("./api/delete_category");
const delete_author_from_book = require("./api/delete_author_from_book");
const delete_category_from_book = require("./api/delete_category_from_book");
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


console.log(`NODE_ENV = |${process.env.NODE_ENV}|`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-OBSERVATORY-AUTH"
  );
  next();
});

// /* Routes used by our project */ 
////////////////////////////////////////////////////////////////
app.use("/backup", backup);
app.use("/restore", restore);
////////////////////////////////////////////////////////////////
app.use("/all_users", all_users);
app.use("/schools_info", schools_info);
app.use("/all_categories", all_categories);
app.use("/all_titles/:userid", all_titles);
app.use("/allstudents", allstudents);
app.use("/allteachers", allteachers);
app.use("/allhandlers", allhandlers);
app.use("/all_schools", all_schools);
app.use("/all_authors", all_authors);
app.use("/all_books/:id", all_books);
app.use("/all_rents/:year/:month", all_rents);
app.use("/all_reviews/:isbn", all_reviews);
app.use("/all_school_reviews/:userid", all_school_reviews);
app.use("/all_school_rents/:userid", all_school_rents);
app.use("/rents_not_rented/:userid", rents_not_returned);
app.use("/all_school_reservations/:userid", all_school_reservations);
app.use("/teacher_loans", teacher_loans);
app.use("/teachers_authors/:category", teachers_authors);
app.use("/zero_rent_authors", zero_rent_authors);
app.use("/top_category_combos", top_category_combos);
app.use("/authors_less_than_five", authors_less_than_five);
app.use("/books_rented_by_user/:id", books_rented_by_user);
app.use("/books_reserved_by_user/:id", books_rented_by_user);
app.use("/books_school_by_title/:id/:title", books_school_by_title);
app.use("/books_school_by_category/:id/:category", books_school_by_category);
app.use("/books_school_by_author/:id/:author", books_school_by_author);
app.use("/allstudents_fromusers_school/:id", allstudents_fromusers_school);
app.use("/allteachers_fromusers_school/:id", allteachers_fromusers_school);
app.use("/allhandlers_fromusers_school/:id", allhandlers_fromusers_school);
app.use("/users_school/:userid", users_school);
app.use("/handlers_over20books", handlers_over20books);
app.use("/avg_likert/:userid/:username/:categoryname", avg_likert);
app.use("/book_user_parameter/:schoolid/:categoryname/:title/:authorname", book_user_parameters);
app.use("/book_handler_parameter/:userid/:categoryname/:title/:authorname/:copys", book_handler_parameters);
app.use("/late_rents/:userid/:name/:dayz", late_rents);
app.use("/unapproved_handlers", unapproved_handlers);
////////////////////////////////////////////////////////////////
app.use("/adduser/:username/:password/:user_name/:birthday/:email", adduser);
app.use("/addteacher/:userid/:schoolid", addteacher);
app.use("/addstudent/:userid/:schoolid", addstudent);
app.use("/addhandler/:userid/:schoolid", addhandler);
app.use("/addauthor/:authorname", addauthor);
app.use("/addcategory/:categoryname", addcategory);
app.use("/addreview/:userid/:schoolid/:isbn/:comments/:likert", addreview);
app.use("/addschool/:school_name/:address/:city/:telephone/:email/:principal_fullname", addschool);
app.use("/addbook/:isbn/:title/:publisher/:pages/:summary/:book_language/:keywords", addbook);
app.use("/addauthortobook/:isbn/:authorid", addauthortobook);
app.use("/addcategorytobook/:isbn/:categoryid", addcategorytobook);
app.use("/addrent/:user_id/:isbn/:school_id/:date_of_rent", addrent);
app.use("/add_rent_approved/:user_id/:isbn/:school_id/:date_of_rent", add_rent_approved);
app.use("/addreservation/:user_id/:isbn/:school_id/:date_of_reservation", addreservation);
app.use("/addbooktoschool/:isbn/:school_id/:copys", addbooktoschool);
////////////////////////////////////////////////////////////////
app.use("/updatepassword/:password/:userid", updatepassword);
app.use("/update_available_copys/:isbn/:userid/:copynum", update_available_copys);
app.use("/update_approves/:approved/:userid", update_approves);
app.use("/approve_review/:approved/:reviewid", approve_review);
app.use("/approve_rent/:approved/:rentid", approve_rent);
app.use("/update_returned/:rentid", update_returned);
app.use("/approve_reservation/:approved/:reservationid", approve_reservation);
app.use("/update_teacher/:userid/:name/:username/:birthday/:email/:password", update_teacher);
app.use("/update_copys/:schoolid/:isbn/:copys", update_copys);
app.use("/updatebook/:isbn/:title/:publisher/:page/:summary/:language/:keywords", updatebook);
////////////////////////////////////////////////////////////////
app.use("/delete_user/:userid", delete_user);
app.use("/delete_school/:schoolid", delete_school);
app.use("/delete_book_from_school/:schoolid/:isbn", delete_book_from_school);
app.use("/delete_review/:reviewid", delete_review);
app.use("/delete_rent/:rentid", delete_rent);
app.use("/delete_reservation/:reservationid", delete_reservation);
app.use("/delete_book/:isbn", delete_book);
app.use("/delete_author/:authorid", delete_author);
app.use("/delete_category/:categoryid", delete_category);
app.use("/delete_author_from_book/:authorid/:isbn", delete_author_from_book);
app.use("/delete_category_from_book/:categoryid/:isbn", delete_category_from_book);
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////



// In case of an endpoint does not exist
app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found!!" });
});

module.exports = app;
