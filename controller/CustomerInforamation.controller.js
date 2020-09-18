var globalVar = this;
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.CustomerInforamation", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this._onObjectMatched, this);
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				// currentPage: 0,
				// totalPages: this.byId("navCon5").getPages().length,
				// enabled: false,
				// dob: new Date(),
				images: {
					60: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/60.jpg"),

				}
			}), "dataModel");

			if (!sap.ui.getCore().getModel("GData")) {
				var data = {
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

				};

				var model4 = new sap.ui.model.json.JSONModel(data);
				this.getView().setModel(model4, "GData");
				sap.ui.getCore().setModel(model4, "GData");
			}

		},

		_onObjectMatched: function(oEvent) {
			$(".sidenav ").removeClass("expanded");

		},

		emailInput: function(oEvent) {

			sap.ui.getCore().getModel("GData").oData.GloBalJson.emailAddress = oEvent.getSource().mProperties.value;
		},
		onTelephone: function(oEvent) {

			sap.ui.getCore().getModel("GData").oData.GloBalJson.telephoneNumber = oEvent.getSource().mProperties.value;
		},
		sendEmail: function() {

			var data = sap.ui.getCore().getModel("GData").getData().GloBalJson;
			var familyMonthlySaved = "";
			var totalIncome = "";
			var familyNeedSuportCurrency = "";

			//Setting the time while sending email.
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "yyyy-MM-ddThh:mm:ss"
			});
			sap.ui.getCore().getModel("GData").oData.GloBalJson.EmailSentTime = oDateFormat.format(new Date());

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

						var sLanguage = sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect || 'en';

						this.getView().getModel().callFunction("/SendEmail", {
							urlParameters: {
								"EmailId": data.emailAddress,
								"SaaAppln": data.saaAplicationNo,
								"Summary": summary,
								"Language": sLanguage
							},
							success: function(oData, response) {
								sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("emailSendSuccessful"));
							}.bind(this),
							error: function(response) {
								sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("emailSendError"));
							}.bind(this)
						});

					}.bind(this),
					error: function(oError) {

					}
				});

			} else {

				this.getView().getModel().create("/SaveFunctionSet", payloadForMarriedWithKids, {
					success: function(oData, response) {

						sap.ui.getCore().getModel("GData").oData.GloBalJson.saaAplicationNo = oData.SaaAppln;
						var sLanguage = sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect || 'en';

						this.getView().getModel().callFunction("/SendEmail", {
							urlParameters: {
								"EmailId": oData.SmtpAddr,
								"SaaAppln": oData.SaaAppln,
								"Summary": summary,
								"Language": sLanguage
							},
							success: function(oData, response) {
								sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("emailSendSuccessful"));
							}.bind(this),
							error: function(response) {;
								sap.m.MessageToast.show(this.getView().getModel("i18n").getResourceBundle().getText("emailSendError"));
							}.bind(this)
						});

					}.bind(this),
					error: function(oError) {

					}
				});

			}

		},
	});

});