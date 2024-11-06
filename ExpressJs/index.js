import express from "express"
const app = express();
const port = 5500;

app.listen(port, () => {
    console.log(`Listening on ${port}`)
});

app.get("/", (req, res) => {
    res.send("<h1>Hello from EJS.</h1>")
});

app.post("/about", (req, res) => {
    res.sendStatus(201);
    console.log(res);
});

app.put("/user/midhun", (req, res) => {
    res.sendStatus(200);
    console.log(res);
});

app.patch("/blog", (req, res) => {
    res.sendStatus(200);
    console.log(res);
});



