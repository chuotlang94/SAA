sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.FamilyView", {

		onInit: function() {
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navCon5").getPages().length,
				enabled: false,
				dob: new Date(),
				images: {
					17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
					18: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/18.jpg"),
					19: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/19.jpg"),
					20: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/20.jpg"),
					21: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/21.jpg"),
					23: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/23.jpg"),
					101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),
					familyData: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/family/familyData.svg"),

				}
			}), "dataModel");
		},
		buttonSelected: function(oEvent) {

			oEvent.getSource().toggleStyleClass("familyButtonActive");

			//TODO Needs to fix as per logic
			switch (oEvent.getSource().getId()) {
				case "__xmlview1--idUnder10":
					this.getView().byId("idUnder1015").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1520").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder20").removeStyleClass("familyButtonActive");
					break;
				case "__xmlview1--idUnder1015":
					this.getView().byId("idUnder10").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1520").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder20").removeStyleClass("familyButtonActive");
					break;
				case "__xmlview1--idUnder1520":
					this.getView().byId("idUnder10").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1015").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder20").removeStyleClass("familyButtonActive");
					// this.getView().byId("idS1WithKids").removeStyleClass("imageButtonSelected");
					break;
				case "__xmlview1--idUnder20":
					this.getView().byId("idUnder10").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1015").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1520").removeStyleClass("familyButtonActive");
					break;

				default:
					break;
			}
		},

		handleNavNext: function(evt) {
	
			var navCon = this.byId("navCon5");
			var oDataModel = this.getView().getModel("dataModel");
			if (oDataModel.getProperty("/currentPage") === 5) {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("solutionpage");
				// var solutionFamilyId = solutionFamily.byId("navCon6");
				// 	oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 5);
				// solutionFamilyId.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			} else {
				oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1); // Increase the index
				navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
				this.onCarouselPageChanged(evt);
			}

		},

		handleNavPrev: function(evt) {

			var navCon = this.byId("navCon5");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

	});

});