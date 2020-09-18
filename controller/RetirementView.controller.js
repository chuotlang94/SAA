sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.RetirementView", {

		onInit: function() {
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navCon2").getPages().length,
				enabled: false,
				dob: new Date(),
				images: {

					30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
					31: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/31.jpg"),
					32: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/32.jpg"),
					33: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/33.jpg"),
					34: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/34.jpg"),
					35: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/35.jpg"),
					36: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/36.jpg"),
					travelWithMyPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Travel_with_my_partner.svg"),
					Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Have_a_Farm.svg"),
					Enjoy_Social_Activities: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
						"/media/icon/reti_Dream/Enjoy_Social_Activities.svg"),
					Run_asmallBuisness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Run_asmallBuisness.svg"),
					Goback_hometown: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Goback_hometown.svg"),
					Staywhere_I_am: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Staywhere_I_am.svg"),
						5560: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/55_60.svg"),
				}
			}), "dataModel");
		},
		handleNavNext: function(evt) {
			var navCon = this.byId("navCon2");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1); // Increase the index
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

		handleNavPrev: function(evt) {
			var navCon = this.byId("navCon2");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

	});

});