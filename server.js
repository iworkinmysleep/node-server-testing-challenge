const express = require("express");

const Res = require("./resource/res-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
	res.status(200).json({ api: "UP" });
});

server.get("/resource", (req, res) => {
	Res.find()
		.then((resource) => {
			res.status(200).json(resource);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});


module.exports = server;
