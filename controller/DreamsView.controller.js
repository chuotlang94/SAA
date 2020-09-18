sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.DreamsView", {

		onInit: function() {
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navCon3").getPages().length,
				enabled: false,
				dob: new Date(),
				images: {

					37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
					38: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/38.jpg"),
					39: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/39.jpg"),
					40: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/40.jpg"),
					41: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/41.jpg"),
					42: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/42.jpg"),
					To_have_a_nice_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/To_have_a_nice_car.svg"),
					To_raise_successful_children: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
						"/media/icon/reti_Dream/To_raise_successful_children.svg"),
					Expore_the_world: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Expore_the_world.svg"),
					Own_a_house: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Own_a_house.svg"),
					Be_successful_business_person: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
						"/media/icon/reti_Dream/Be_successful_business_person.svg"),
					101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),

				}
			}), "dataModel");
		},
		handleNavNext: function(evt) {
			var navCon = this.byId("navCon3");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1); // Increase the index
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

		handleNavPrev: function(evt) {
			var navCon = this.byId("navCon3");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},
		
		
	

	});

});