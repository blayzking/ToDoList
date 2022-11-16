// const express = require("express");
// const app = express();

// app.use(express.urlencoded({extended: true}));
// app.use(express.json()) // To parse the incoming requests with JSON payloads



// app.set('view engine', 'ejs');

// app.get("/", function(req, res) {

//     const today = new Date();
//     const currentDay = today.getDay();
//     let day = "";


//     if (currentDay === 6 || currentDay === 0) {
//         day = "Weekend";
//         res.render("list", {kindOfDay: day});
//         //res.send("It's the weekend!");
//     } else {
//         day = "Weekday";
//         res.render("list", {kindOfDay: day});
//         //This sends the whole html file
//         //res.sendFile(__dirname + "/index.html");
//     }

//     //res.send("Hello");
// });


// app.listen(3000, function() {
//     console.log("Server has started on port 3000");
// });



const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");

let newAdditions = ["Buy food", "cook food", "eat food"];
//let newListItems = [];
let workItems = [];

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.static("public"));


app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    
    // const currentDay = date.getDay();
    // let day = "";
    // const today = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // let day = today[currentDay];
    // res.render("list", {kindOfDay : day});


    //use of switch statement
    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     default:
    //     console.log("Error: current day is equal to " + currentDay);
    // }
    let day = date.getDate();


    res.render("list", {
        listTitle: day,
        newListItems: newAdditions
    });
});

app.post("/", function(request, response) {
    let nextAddition = request.body.newItem;
    if (request.body.list === "Work List") {
        workItems.push(nextAddition)
        response.redirect("/work");
    } else {
        newAdditions.push(nextAddition);
    response.redirect("/");
    }
    
});


app.get("/work", function(req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    
    workItems.push(item);
    res.redirect("/work");
});


app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server has started on port 3000");
});


