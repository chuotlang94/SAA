sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.ContactUs", {

		onInit: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this._onObjectMatched, this);
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				// currentPage: 0,
				// totalPages: this.byId("navCon5").getPages().length,
				// enabled: false,
				// dob: new Date(),
				images: {
					61: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/61.jpg"),
					contactStatusLogo: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/contactStatusLogo.svg"),
					contact: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/contact/contact.svg"),
					fax: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/contact/Fax.svg"),
					home: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/contact/Home.svg"),
					location: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/contact/location.svg"),
					mail: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/contact/Mail.svg"),
					phone: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/contact/Phone.svg")

				}
			}), "dataModel");
		},

		_onObjectMatched: function(oEvent) {

			$(".sidenav ").removeClass("expanded");
			// switch (oEvent.getSource().oHashChanger.hash) {
			// 	case "aboutyou":

			// 		break;
			// 	case "detailspage":

			// 		break;
			// 	case "interest":

			// 		break;
			// 	case "solution":

			// 		break;
			// 	case "product":

			// 		break;
			// 	case "customerInformation":

			// 		break;
			// 	case "ContactUs":
			// 		$(".aboutYou").removeClass("onClickAnchor");
			// 		$(".details").removeClass("onClickAnchor");
			// 		$(".interest").removeClass("onClickAnchor");
			// 		$(".solution").removeClass("onClickAnchor");
			// 		$(".product").removeClass("onClickAnchor");
			// 		$(".liAbout").removeClass("liCustomMarginAbout");
			// 		$(".liInterest").removeClass("liCustomMarginAbout");
			// 		$(".liDetails").removeClass("liCustomMarginAbout");
			// 		$(".liSolution").removeClass("liCustomMarginAbout");
			// 		$(".liProduct").removeClass("liCustomMarginAbout");
			// 		$(".navColorChange").removeClass("navbarDefaultRed");
			// 		$(".navColorChange").addClass("navbarBlueColor");

			// 		break;
			// }
		}

	});

});