const fs = require("fs");
const path = require("path")
const filePath = path.join(__dirname, "../db.json")
const readFromFile = () => {
    let data = fs.readFileSync(filePath, 'utf8')
    console.log(data);
    return data;
}


module.exports.getMovies = (req, res) => {
    let movieData = readFromFile();
    res.status(200).send(movieData)

}