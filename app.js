const { app } = require('./dist');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log("[i] Server ran at port", PORT);
});
