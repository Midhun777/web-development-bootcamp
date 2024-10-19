import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello from the ExpressJs!");
});

app.listen(port, () => {
    console.log(`Server listning on port ${port}!`);
})