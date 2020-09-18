sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.HealthView", {

		onInit: function() {
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navCon1").getPages().length,
				enabled: false,
				dob: new Date(),
				images: {
					checklist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Checklist.svg"),
						Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Have_a_Farm.svg"),
					healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
					24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
					25: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/25.jpg"),
					26: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/26.jpg"),
					27: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/27.jpg"),
					28: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/28.jpg"),
					29: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/29.jpg"),

				}
			}), "dataModel");
		},
		handleNavNext: function(evt) {
			var navCon = this.byId("navCon1");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1); // Increase the index
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

		handleNavPrev: function(evt) {
			var navCon = this.byId("navCon1");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

	});

});