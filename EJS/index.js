import express from "express";

const app = express();
const PORT = 3000;
let type;
let adv;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    console.log(day);

    if (day == 0 || day == 6) {
        type = "the weekend";
        adv = "have some fun!";
    } else {
        type = "a week day";
        adv = "Time to work hard!";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
}
)