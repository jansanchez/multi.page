
String.prototype.clearTpl = function(){
	return this.toString().replace('data-src', 'src');
}

/*Require Config*/
require.config({
    baseUrl: App.baseUrl+'js/',
	urlArgs: "v=" +  (new Date()).getTime(),
	scriptType: "text/javascript",
    paths: {
        jquery: 'libs/jquery/jquery-1.9.1.min',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		text: 'libs/require/text',
		echo: 'libs/jquery/plugins/jqConsola'
    },
	shim: {
		underscore: {
		  exports: '_'
		},
		backbone: {
		  deps: ["underscore", "jquery"],
		  exports: "Backbone"
		}
	}
});

require(['jquery', 'underscore', 'backbone', 'text', 'echo'], function ($, _, Backbone, text, echo) {

	_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };


	require(['app/'+App.module+'/'+App.controller], function (action) {

		console.log('lo q me devuelve el action: '+action);

		/*
		require(['app/'+App.module+'/'+App.controller+'/'+App.action], function (action) {

		}, function (err) {
			if(err.requireType=='scripterror'){console.log('El archivo "'+err.requireModules+'" no existe.');}
			require(['app/'+App.module+'/'+App.controller+'/index'], function (action) {

			}
		});
		*/

	}, function (err) {
		/*if(err.requireType=='scripterror'){console.log('El archivo "'+err.requireModules+'" no existe.');}*/
	});
});