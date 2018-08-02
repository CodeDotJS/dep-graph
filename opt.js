#!/usr/bin/env node

'use strict';

const depGraphCount = require('.');

const returnData = (username, data) => {
	return depGraphCount(username, data).then(res => {
		console.log(res);
	});
};

returnData('CodeDotJS', 'youtube-playlist');

returnData('facebook', 'react');

returnData('CodeDotJS', 'instavim');
