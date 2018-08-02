'use strict';

const got = require('got');
const cheerio = require('cheerio');

module.exports = (username, repository) => {
	const url = `https://github.com/${username}/${repository}/network/dependents`;

	if (typeof repository !== 'string' || typeof repository !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username} and ${typeof repository}`);
	}

	return got(url).then(res => {
		const $ = cheerio.load(res.body);
		const repo = $('.btn-link').eq(0).text().trim().split('\n')[0];
		const pkg = $('.btn-link').eq(1).text().trim().split('\n')[0];

		return {
			repositories: repo,
			packages: pkg
		};
	}).catch(err => {
		if (err) {
			err.message = `${username} has not build ${repository} yet`;
		}
		return err.message;
	});
};
