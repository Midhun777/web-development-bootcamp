import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const data = {
        title: "Ejs tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "orange", "banana"],
        htmlContent: "<strong>This is some strong text</strong>"
    };
    res.render("index.ejs", data)
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
}
)


// let type;
// let adv;

// app.get("/", (req, res) => {
//     const today = new Date();
//     const day = today.getDay();
//     console.log(day);

//     if (day == 0 || day == 6) {
//         type = "the weekend";
//         adv = "have some fun!";
//     } else {
//         type = "a week day";
//         adv = "Time to work hard!";
//     }

//     res.render("index.ejs", {
//         dayType: type,
//         advice: adv
//     });
// });
