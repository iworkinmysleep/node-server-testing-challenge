const db = require("../data/db-config.js");

module.exports = {
	add,
	remove,
	find,
};

async function add(res) {
	const [id] = await db("resource").insert(res, "id");
	return db("resource").where({ id }).first();
}

function remove(id) {
	return db("resource").where({ id }).del();
}

function find() {
	return db("resource");
}
