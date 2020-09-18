sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/saaprojSAADevlopment/model/models",
	"sap/ui/core/routing/HashChanger"
], function(UIComponent, Device, models, HashChanger) {
	"use strict";

	return UIComponent.extend("com.saaprojSAADevlopment.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 * 
		 * 
	
		 */

		init: function() {
			  
			// call the base component's init function
			// sap.ui.getCore().getConfiguration().setLanguage("VI");
			var languageModel = {
				"languageSelection": {
					"changeLanguage": "vi",
				}
			};
			var languageModel = new sap.ui.model.json.JSONModel(languageModel);
			// this.getView().setModel(languageModel, "LanguData");
			sap.ui.getCore().setModel(languageModel, "LanguData");

			HashChanger.getInstance().replaceHash("");

			UIComponent.prototype.init.apply(this, arguments);
	 
			var selectedLanguage = sap.ui.getCore().getConfiguration().getLanguage();

			// switch (selectedLanguage.substring(0,2)) {
			
			// 	case "vi":
			// 		var i18nModel = new sap.ui.model.resource.ResourceModel({
			// 			bundleName: "com.saaprojSAADevlopment.i18n.i18n_vi"
			// 		});
			// 		sap.ui.getCore().setModel(i18nModel, "i18n");
			// 		// this.getOwnerComponent().setModel(i18nModel, "i18n");
			// 		sap.ui.getCore().getModel("LanguData").oData.languageSelection.changeLanguage = "vi";
			// 		break;
			// 	case "en":
			// 		var i18nModel = new sap.ui.model.resource.ResourceModel({
			// 			bundleName: "i18n/i18.properties",

			// 		});
			// 		sap.ui.getCore().getModel("LanguData").oData.languageSelection.changeLanguage = "en";
			// 		sap.ui.getCore().setModel(i18nModel, "i18n");
			// 		// this.getOwnerComponent().setModel(i18nModel, "i18n");
			// 		break;
			// 	case "fr":
			// 		var i18nModel = new sap.ui.model.resource.ResourceModel({
			// 			bundleName: "i18n/i18n.properties",

			// 		});
			// 		sap.ui.getCore().getModel("LanguData").oData.languageSelection.changeLanguage = "en";
			// 		sap.ui.getCore().setModel(i18nModel, "i18n");
			// 		// this.getOwnerComponent().setModel(i18nModel, "i18n");
			// 		break;
			// 	case "de":
			// 		var i18nModel = new sap.ui.model.resource.ResourceModel({
			// 			bundleName: "i18n/i18n.properties",

			// 		});
			// 		sap.ui.getCore().getModel("LanguData").oData.languageSelection.changeLanguage = "en";
			// 		sap.ui.getCore().setModel(i18nModel, "i18n");
				
			// 		break;

			// }

			// Need to Fix this One its HardCoded
// -----------------------------------------------------------------------------
			// var i18nModel = new sap.ui.model.resource.ResourceModel({
			// 	bundleUrl: "i18n/i18n.properties",

			// });
			// sap.ui.getCore().getModel("LanguData").oData.languageSelection.changeLanguage = "en";
			// sap.ui.getCore().setModel(i18nModel, "i18n");
			
			
			// --------------------------------------
			// var model = this.getView().getModel("i18n");
			// var i18nModel = new sap.ui.model.resource.ResourceModel({
			// 	bundleName: "com.saaprojSAADevlopment.i18n.i18n"
			// });

			// sap.ui.getCore().setModel(i18nModel, "i18n");	
			// this.setModel(i18nModel, "i18n");
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.getRouter().initialize();
		}
	});
});
