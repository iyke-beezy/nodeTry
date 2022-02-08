const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`server running on ${PORT}`);
});
