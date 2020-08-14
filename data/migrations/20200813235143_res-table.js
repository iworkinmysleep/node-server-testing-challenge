exports.up = function (knex) {
	return knex.schema.createTable("resource", (tbl) => {
		tbl.increments();

		tbl.string("type", 128).notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("resource");
};
