import express from "express"
const app = express();
const port = 3000;

app.get("/", (res, res) => {
    console.log("Hello from the ExpressJs!");
});

app.listen(port, () => {
    console.log(`Server listning on port ${port}!`);
})