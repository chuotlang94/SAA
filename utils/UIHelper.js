jQuery.sap.declare('com.saaprojSAADevlopment.utils.UIHelper');

com.saaprojSAADevlopment.utils.UIHelper = {
	controllerView1: null,
	controllerInterest: null,
	controllerDetails: null,
	controllerSolution: null,
	controllerProduct: null,

	//Add "getters and setters" for each of these attributes (repeat for Controller 2 & 3)
	setControllerView1: function(oController) {
		this.controllerView1 = oController;
	},
	getControllerView1: function() {
		return this.controllerView1;
	},
	setControllerInterest: function(oController) {
		this.controllerInterest = oController;
	},
	getControllerInterest: function() {
		return this.controllerInterest;
	},
	setControllerDetails: function(oController) {
		this.controllerDetails = oController;
	},
	getControllerDetails: function() {
		return this.controllerDetails;
	},
	setControllerSolution: function(oController) {
		this.controllerSolution = oController;
	},
	getControllerSolution: function() {
		return this.controllerSolution;
	},
	setControllerProduct: function(oController) {
		this.ontrollerProduct = oController;
	},
	getControllerProduct: function() {
		return this.ontrollerProduct;
	}

};

// sap.ui.define([
// 	"sap/ui/model/json/JSONModel",
// 	"sap/ui/Device"
// ], function(JSONModel, Device) {
// 	"use strict";

// 	};
// });