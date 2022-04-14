/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"northwindmta/northwindmta/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});