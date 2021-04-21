const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (request, response){
    const items = [
        {
            title: "N",
            message: "ossa"
        },
        {
            title: "O",
            message: "ntem"
        },
        {
            title: "D",
            message: "ava"
        },
        {
            title: "E",
            message: "rro,"
        },
        {
            title: "J",
            message: "á"
        },
        {
            title: "S",
            message: "aiu!"
        },
        
    ];
    const subtitle = "Página criada para testar o conhecimento em EJS das aulas da Rockeseat";
    response.render("pages/index", {
        messages: items,
        subtitle: subtitle
    });
})

app.get("/sobre", function (request, response){
    response.render("pages/about");
})

app.listen("8080", (console.log("Online!")))