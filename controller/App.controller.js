var solutionFamily, solutionDream, app;
var varStartAgain = false;
var childrenIncrementClass = false;
var globalVariable

sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.saaprojSAADevlopment.view.App
		 */
		onInit: function() {
			// 
			app = this;

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
					"personDobValidation":"",
					"partnerDobValidation":"",
					"childDobValidation":"",

				}

			};

			var model4 = new sap.ui.model.json.JSONModel(data);
			this.getView().setModel(model4, "GData");
			sap.ui.getCore().setModel(model4, "GData");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.saaprojSAADevlopment.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.saaprojSAADevlopment.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.saaprojSAADevlopment.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});