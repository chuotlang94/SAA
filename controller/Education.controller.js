sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.Education", {

		onInit: function() {
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navCon4").getPages().length,
				enabled: false,
				dob: new Date(),
				images: {
					11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
					12: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/12.jpg"),
					13: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/13.jpg"),
					14: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/14.jpg"),
					15: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/15.jpg"),
					16: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/16.jpg"),
					Doctor: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/Doctor.svg"),
					Lawyer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/Lawyer.svg"),
					Teacher: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/Teacher.svg"),
					Artist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/Artist.svg"),
						Government_Officer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/Government_Officer.svg"),
					Business_leader: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/Business_leader.svg"),
				}
			}), "dataModel");
		},
		handleNavNext: function(evt) {
			var navCon = this.byId("navCon4");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1); // Increase the index
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

		handleNavPrev: function(evt) {
			var navCon = this.byId("navCon4");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

	});

});