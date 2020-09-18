jQuery.sap.require('com.saaprojSAADevlopment.utils.UIHelper');
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.Navbar", {

		onInit: function(evt) {
			com.saaprojSAADevlopment.utils.UIHelper.setControllerView1(this);
			this.getView().setModel(new sap.ui.model.json.JSONModel({

				images: {
					menubar: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Menubar.svg"),

					logoMBAL: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/logoMBAL.svg"),
					logowhite: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Logo-White.png"),
					home: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/Home.svg"),
					mail: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/Mail.svg"),
					phone: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/Phone.svg"),
					refresh: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/Refresh.svg"),
					information: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/information.svg"),

				}
			}), "dataModel");
			this.idArray = ["idS1Single", "idS1Married", "idS1WithKids"];
			// 		var oModel = new JSONModel(this._data);
			// this.getView().setModel(oModel);
			// var oModel1 = model.createDeviceModel();
			// sap.ui.getCore().setModel(oModel1);

		},

		toggleNavBarExpanded: function(oEvent) {

			$("#" + this.createId("mySidenav")).toggleClass("expanded");
		},
		onInterest: function() {

			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities || sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities1) {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("interestepage");
			} else {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
			}

		},
		onAboutYou: function() {

			//  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("detailpage");
			sap.ui.core.UIComponent.getRouterFor(this).navTo("first");
		},
		onSolution: function() {
			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.familyMonthlySaved === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
			} else {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("solutionpage");
			}

		},
		onStartAgain: function() {

			// for(var a= 0; a < this.idArray.length-1 ;a++)
			// {
			// 	var id =this.idArray[a];
			// 	var val = sap.ui.getCore().byId(id);

			// }
			 
			sap.ui.getCore().getModel("GData").setData({
				"GloBalJson": {

					"nameOfPerson": "",
					"dobOfPerson": "",
					"genderOfPerson": "",
					"marryStatusOfPerson": "",
					"nameOfPartner": "",
					"dobOfPartner": "",
					"genderOfPartner": "",
					"dobOfChild": "",
					"Childname1": "",
					"Child1Birthdt": "",
					"Child1Gender": "2",
					"Childname2": "",
					"Child2Birthdt": "",
					"Child2Gender": "2",
					"Childname3": "",
					"Child3Birthdt": "",
					"Child3Gender": "2",
					"Childname4": "",
					"Child4Birthdt": "",
					"Child4Gender": "1",
					"Childname5": "",
					"Child5Birthdt": "",
					"Child5Gender": "1",
					"Childname6": "",
					"Child6Birthdt": "",
					"Child6Gender": "1",
					"livingArrangement": "",
					"topPriorities": "",
					"topPriorities1": "",
					"domainSelected": "",
					"educationCity": "",
					"dreamFuture": "",
					"worriesFamilyHealth": "",
					"policyCoveredBy": "",
					"liveAfterRetirement": "",
					"wantToDoWhenRetire": "",
					"childCarrerWantPursue": "",
					"femaleChild": 0,
					"maleChild": 0,
					"familyButtonSupportedYear": "",
					"familyMonthlySaved": "",
					"familyNeedSuportCurrency": "00",
					"dreamSavedMoney": "",
					"retirementAge": "",
					"retirementSaved": "",
					"childrenMoenySaved": "",
					"dreamComeTrueYear": "",
					"totalIncome": "",
					"personAge": "",
					"partnerAge": "",
					"savingCost": "",
					"cost": "",
					"familyYear": "",
					"totalCalculation": "",
					"savingBridgeGap": "",
					"perOfTotalIncom": "",
					"livingData": "",
					"futureDreamString": "",
					"dreamYear": "",
					"retireAgeInYear": "",
					"stringAfterLiveRetirement": "",
					"stringWantToDoWhenRetire": "",
					"selectedEducationCity": "",
					"totalFemale": "",
					"totalMale": "",
					"selectedChildName": "",
					"selectedChildAge": "",
					"childrenAgePass": "",
					"healthMonth": "",
					"policyCoverSolution": "",
					"totalChildren": "",
					"productSelected": "",
					"emailAddress": "",
					"telephoneNumber": "",
					"summary1": "",
					"totalIncomeSummary": "",
					"saaAplicationNo": "",
					"degreeString": "",
					"backDataStored": "",
					"backToAboutYou": "",
					"accidentHelathCareZeoSavinging": "",
					"retirementGenderSelection": "",
					"childrenFlag": false,
					"childSelectedNumber": "",
					"StartTime":"",
					"ProdChosenTime":"",
					"QqNavTime":"",
					"EmailSentTime":""

				}
			});
			// this.ar = [];
			// $('.imageButtonSelected').removeClass("imageButtonSelected");
			 
			$('.imageButtonSelected').each(function(index, item) {

				if (item.className.includes("removeStyleProduct")) {
					$(".containerInnerDiv ").removeClass("imageButtonSelected");
				} else {
					sap.ui.getCore().byId(item.id).removeStyleClass("imageButtonSelected");
				}

			});
			$('.imageButtonSelectedPink').each(function(index, item) {

				if (item.className.includes("removeStyleProduct")) {
					$(".containerInnerDiv ").removeClass("imageButtonSelectedPink");
				} else {
					sap.ui.getCore().byId(item.id).removeStyleClass("imageButtonSelectedPink");
				}

			});
			$('.familyButtonActive').each(function(index, item) {

				sap.ui.getCore().byId(item.id).removeStyleClass("familyButtonActive");

			});

			$('.cardBody1').each(function(index, item) {
				if (item.className.includes("cardBodyPink")) {
					// sap.ui.getCore().byId(item.id).removeStyleClass("cardBodyPink");
					$(".cardBody1 ").removeClass("cardBodyPink");
				}

			});

			sap.ui.core.UIComponent.getRouterFor(this).navTo("home");
			varStartAgain = true;
			// $(".card_custom1").remove();
			this.getOwnerComponent().initializePage = true;
			childrenIncrementClass = true;

		},

	

		onProduct: function() {
			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.familyMonthlySaved === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
			} else {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
			}

		},
		
			onClickOfStartAgain: function() {
			 
			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.StartTime) {

			} else {
				var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
					pattern: "yyyy-MM-ddThh:mm:ss"
				});
				sap.ui.getCore().getModel("GData").oData.GloBalJson.StartTime = oDateFormat.format(new Date());
			}

			var data = sap.ui.getCore().getModel("GData").getData().GloBalJson;
			var familyMonthlySaved = "";
			var totalIncome = "";
			var familyNeedSuportCurrency = "";

			//Setting the time while sending email.
			// var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
			// 	pattern: "yyyy-MM-ddThh:mm:ss"
			// });
			// sap.ui.getCore().getModel("GData").oData.GloBalJson.EmailSentTime = oDateFormat.format(new Date());

			if (data.familyMonthlySaved) {
				familyMonthlySaved = data.familyMonthlySaved[0].toString();
			} else {
				familyMonthlySaved = "";
			}
			if (data.totalIncome) {
				totalIncome = data.totalIncome[0].toString();
			} else {
				totalIncome = "";
			}
			if (data.familyNeedSuportCurrency) {
				familyNeedSuportCurrency = data.familyNeedSuportCurrency[0].toString();
			} else {
				familyNeedSuportCurrency = "";
			}
			var summary = data.summary1 + data.totalIncomeSummary;
			var payloadForMarriedWithKids = {
				"SaaAppln": "",
				"UserName": data.nameOfPerson,
				"Birthdt": data.dobOfPerson,
				"Gender": data.genderOfPerson,
				"Marst": data.marryStatusOfPerson,
				"PartnerName": data.nameOfPartner,
				"PartnerBirthdt": data.dobOfPartner,
				"PartnerGender": data.genderOfPartner,
				"Childname1": data.Childname1,
				"Child1Birthdt": data.Child1Birthdt,
				"Child1Gender": "2",
				"Childname2": data.Childname2,
				"Child2Birthdt": data.Child2Birthdt,
				"Child2Gender": "2",
				"Childname3": data.Childname3,
				"Child3Birthdt": data.Child3Birthdt,
				"Child3Gender": "2",
				"Childname4": data.Childname4,
				"Child4Birthdt": data.Child4Birthdt,
				"Child4Gender": "1",
				"Childname5": data.Childname5,
				"Child5Birthdt": data.Child5Birthdt,
				"Child5Gender": "1",
				"Childname6": data.Childname6,
				"Child6Birthdt": data.Child6Birthdt,
				"Child6Gender": "1",
				"Living": data.livingArrangement,
				"Concern": data.topPriorities,
				"Concern2": data.topPriorities1,
				"Domains": data.domainSelected,
				"ChildCareer": data.childCarrerWantPursue,
				"ChildStudy": data.educationCity,
				"AmountSaved": familyMonthlySaved,
				"TotalIncome": totalIncome,
				"FamilySupport": data.familyButtonSupportedYear,
				"FamilysupMonth": familyNeedSuportCurrency,
				"FamilyHealth": data.worriesFamilyHealth,
				"PolicyCover": data.policyCoveredBy,
				"RetirePlan": data.retirementAge,
				"AfterRetirement": data.liveAfterRetirement,
				"Retirement": data.wantToDoWhenRetire,
				"FutureDream": data.dreamFuture,
				"Dream": data.dreamComeTrueYear,
				"Product": data.productSelected,
				"SmtpAddr": data.emailAddress,
				"TelNumber": data.telephoneNumber,
				"EldestChildren": data.selectedChildName,
				"StartTime": data.StartTime,
				"ProdChosenTime": data.ProdChosenTime,
				"QqNavTime": data.QqNavTime,
				"EmailSentTime": data.EmailSentTime,
			};

			var a = Object.keys(payloadForMarriedWithKids);
			var length = a.length;

			for (var i = 0; i < length; i++) {
				var value = a[i];
				if (payloadForMarriedWithKids[value] === "" || payloadForMarriedWithKids[value] === null || payloadForMarriedWithKids[value] ===
					undefined || payloadForMarriedWithKids[value] === "0000-00-00T00:00:00") {
					delete payloadForMarriedWithKids[value];
				}
			}

			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.saaAplicationNo) {

				this.getView().getModel().update("/SaveFunctionSet(SaaAppln='" + data.saaAplicationNo + "') ", payloadForMarriedWithKids, {

					success: function(oData, response) {
						 
						this.onStartAgain();

					}.bind(this),
					error: function(oError) {

					}
				});

			}
		},
		

		navigateToHome: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("home");
		},
		customerInformation: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("customerinfopage");
		},
		contactUs: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("contactuspage");
		},
		onDetails: function() {
			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
			} else {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
			}
		},
		quoteNaviagte: function() {

			window.location.replace(
				"/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-client=410&sap-language=EN&sap-sec_session_created=X#InsuranceQuote-create"
			);
		},

		toggleFullScreen: function(oEvent) {
			var that = this;
			// oEvent.getSource().toggleStyleClass("selected");

			if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();

					// document.onclick = function(event) {
					// 	if (document.fullscreenElement) {
					// 		that.byId("toggleFullScreen").toggleStyleClass("selected");
					// 	}
					// };

				} else {
					if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else {
						if (document.webkitCancelFullScreen) {
							document.webkitCancelFullScreen();
						}
					}
				}
			} else {
				var _element = document.documentElement;
				if (_element.requestFullscreen) {
					_element.requestFullscreen();
				} else {
					if (_element.mozRequestFullScreen) {
						_element.mozRequestFullScreen();
					} else {
						if (_element.webkitRequestFullscreen) {
							_element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
						}
					}
				}
			}
		},

	});

});