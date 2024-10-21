const express = require("express");
const app = express();
const PORT = 8080;
const movieRoute = require("./routes/movie");
app.use(express.json());
app.use("/movies", movieRoute);
app.listen(PORT, () => {
    try {
        console.log(`Server is running at PORT ${PORT}`);

    } catch (error) {
        console.log(error);

    }
})