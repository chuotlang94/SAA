sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.videoScreen", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this._onObjectMatched, this);

		},
		_onObjectMatched: function(oEvent) {
			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				this.getView().setModel(new sap.ui.model.json.JSONModel({
					// currentPage: 0,
					// totalPages: this.byId("navCon").getPages().length,
					// enabled: false,
					// dob: new Date(),
					images: {
						homeVideoScreen: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/HomeScreenEnglishEn.jpg"),
					}
				}), "dataModel");
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				this.getView().setModel(new sap.ui.model.json.JSONModel({
					// currentPage: 0,
					// totalPages: this.byId("navCon").getPages().length,
					// enabled: false,
					// dob: new Date(),
					images: {
						homeVideoScreen: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/HomeScreenEnglishVi.jpg"),
					}
				}), "dataModel");
			}
		},
		navToAboutHome: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("home");
		},
		navToAboutAboutYou: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("first");
		}

	});

});