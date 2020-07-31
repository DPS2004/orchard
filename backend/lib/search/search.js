const meiliSettings = require("./meili.json");
const MeiliSearch = require("meilisearch");
const _ = require("lodash");
const levels = require("../levels");

const client = new MeiliSearch({
	host: process.env.MEILISEARCH_SERVER
});

const INDEX_NAME = "levels";

const waitForUpdate = async (index, updateId) => {
	while (true) {
		const result = await index.getUpdateStatus(updateId);
		if (result.status === "processed") {
			return result;
		} else {
			await new Promise( (resolve) => setTimeout(resolve, 200));
		}
	}
};

const updateConfig = async () => {
	// does the index exist?
	const levelIndex = await client.getOrCreateIndex(INDEX_NAME);
	let info = await levelIndex.show();

	// is the primary key set to sha256?
	if (info.primaryKey !== "sha256") {
		// update it.
		console.log("updating index pk!");
		await levelIndex.updateIndex({primaryKey: "sha256"});
		info = await levelIndex.show();
	}

	// put the settings in
	const update = await levelIndex.updateSettings(meiliSettings);
	await waitForUpdate(levelIndex, update.updateId);
	return info;
};

const updateIndexes = async (levels) => {
	const levelIndex = await client.getIndex(INDEX_NAME);
	const update = await levelIndex.addDocuments(levels);
	await waitForUpdate(levelIndex, update.updateId);
	return update;
};

const doSearch = async (knex, query, searchParams) => {
	const levelIndex = await client.getIndex(INDEX_NAME);
	const searchResults = await levelIndex.search(query, searchParams);

	const hashes = _.map(searchResults.hits, _.property("sha256"));
	const resolvedHashes = await levels.getLevelsFromHashes({knex, hashes});
	return {
		...searchResults,
		hits: resolvedHashes
	};
};

module.exports = {
	updateConfig,
	updateIndexes,
	doSearch
};