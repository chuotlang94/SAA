var StartTime = "";
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.Home", {

		onInit: function() {

			this.getView().setModel(new sap.ui.model.json.JSONModel({
				// currentPage: 0,
				// totalPages: this.byId("navCon5").getPages().length,
				// enabled: false,
				// dob: new Date(),

				images: {
					menubar: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Menubar.svg"),
					home_screen: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/home_screen.jpg"),
					logoMBAL: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/logoMBAL.svg"),
					home: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/Home.svg"),
					mail: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/Mail.svg"),
					phone: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/Phone.svg"),
					refresh: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/Refresh.svg"),
					information: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/sidebar/information.svg"),

				}
			}), "dataModel");

			var lang = {
				"lnguageOdata": {
					"languageSelect": sap.ui.getCore().getModel("LanguData").oData.languageSelection.changeLanguage,
				}
			};

			var languageModel = new sap.ui.model.json.JSONModel(lang);
			// this.getView().setModel(languageModel, "LData");
			sap.ui.getCore().setModel(languageModel, "LData");
			this.getView().setModel(languageModel, "LData");

		},
		languageChange: function() {

			if (this.getView().byId("idLanguageSelect").getSelectedKey() === "vi") {
				var i18nModel = new sap.ui.model.resource.ResourceModel({
					bundleName: "com.saaprojSAADevlopment.i18n.i18n_vi",

				});
				sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect = this.getView().byId("idLanguageSelect").getSelectedKey();
				sap.ui.getCore().setModel(i18nModel, "i18n");
				this.getOwnerComponent().setModel(i18nModel, "i18n");
				// window.location.search = "sap-language=vi";
			} else if (this.getView().byId("idLanguageSelect").getSelectedKey() === "en") {
				var i18nModel = new sap.ui.model.resource.ResourceModel({
					bundleName: "com.saaprojSAADevlopment.i18n.i18n"
				});
				sap.ui.getCore().setModel(i18nModel, "i18n");
				this.getOwnerComponent().setModel(i18nModel, "i18n");
				sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect = this.getView().byId("idLanguageSelect").getSelectedKey();
				// window.location.search = "sap-language=en";

			}
			sap.ui.getCore().getModel("i18n").refresh(true);
		},
		toggleNavBarExpanded: function(oEvent) {
			$("#" + this.createId("mySidenav")).toggleClass("expanded");
		},

		onStartAgain: function() {
 
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
					"StartTime": "",
					"ProdChosenTime": "",
					"QqNavTime": "",
					"EmailSentTime": "",
					"personDobValidation": "",
					"partnerDobValidation": "",
					"childDobValidation": "",

				}
			});

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
				$(".sidenav ").removeClass("expanded");
			this.getOwnerComponent().initializePage = true;
			childrenIncrementClass = true;
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

		navigateToPage: function() {

			//setting date on Click of Start

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
						if (sap.ui.getCore().getModel("GData").oData.GloBalJson.saaAplicationNo === "") {
							var data = sap.ui.getCore().getModel("GData").getData().GloBalJson;
							var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
								pattern: "yyyy-MM-ddThh:mm:ss"
							});

							sap.ui.getCore().getModel("GData").oData.GloBalJson.StartTime = oDateFormat.format(new Date());
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

							this.getView().getModel().create("/SaveFunctionSet", payloadForMarriedWithKids, {
								success: function(oData, response) {

									sap.ui.getCore().getModel("GData").oData.GloBalJson.saaAplicationNo = oData.SaaAppln;
									sap.ui.core.UIComponent.getRouterFor(this).navTo("videoHomeScreen");

								}.bind(this),
								error: function(oError) {

								}
							});
						}

					}.bind(this),
					error: function(oError) {

					}
				});

			} else {

				this.getView().getModel().create("/SaveFunctionSet", payloadForMarriedWithKids, {
					success: function(oData, response) {

						sap.ui.getCore().getModel("GData").oData.GloBalJson.saaAplicationNo = oData.SaaAppln;
						sap.ui.core.UIComponent.getRouterFor(this).navTo("videoHomeScreen");

					}.bind(this),
					error: function(oError) {

					}
				});

			}

		},
		customerInformation: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("customerinfopage");
		},
		contactUs: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("contactuspage");
		},

	});

});