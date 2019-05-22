'use strict';
const path = require('path');

	module.exports = {

		logging: {
			name: 'snover',
			streams : [ {
				level : 'debug',
				type : 'rotating-file',
				path : path.join('.', 'logs/snover.log'),
				period : '14d', // daily rotation
				count : 3 // keep 3 back copies
			} ]
		},

	app:{
    api_url:'/api',
		port:8886,
		name:'snover',
		root:'.'
	},

  redis: {
    password: 123456,
    auth_token_key: 'auth_token'
  },

  code:{
		NOT_FOUND: 201,
		SUCCESS: 200,
		DB_ERROR:	500,
	}
	// wechat:{
	// 	appid:'wx4cba7d9347fb4cbe',
	// 	app_secret:'6cd4803883e649fda1074b392a9102bd',
	// 	token:'...'
	// },
};
