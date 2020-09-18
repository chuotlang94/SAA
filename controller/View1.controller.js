jQuery.sap.require('com.saaprojSAADevlopment.utils.UIHelper');
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.View1", {

		onInit: function() {

			solutionFamily = this;

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this._onObjectMatched, this);

			this.ar = [];
			this.priorityArray = [];
			// sap.ui.getCore().byId("__xmlview2--idCusLI1").addStyleClass("li-custom1");
			this.childCounter = 0;
			this.childCounterMale = 0;

			this.childCountePrer = 0;
			this.childCountePreMale = 0;

			var pp = [0, 1, 2, 3, 4];
			var oModel1 = new sap.ui.model.json.JSONModel(pp);
			sap.ui.getCore().setModel(oModel1, "oModelTest");

			// var data = {
			// 	"GloBalJson": {

			// 		"nameOfPerson": "",
			// 		"dobOfPerson": "",
			// 		"genderOfPerson": "",
			// 		"marryStatusOfPerson": "",
			// 		"nameOfPartner": "",
			// 		"dobOfPartner": "",
			// 		"genderOfPartner": "",
			// 		"dobOfChild": "",
			// 		"Childname1": "",
			// 		"Child1Birthdt": "",
			// 		"Child1Gender": "2",
			// 		"Childname2": "",
			// 		"Child2Birthdt": "",
			// 		"Child2Gender": "2",
			// 		"Childname3": "",
			// 		"Child3Birthdt": "",
			// 		"Child3Gender": "2",
			// 		"Childname4": "",
			// 		"Child4Birthdt": "",
			// 		"Child4Gender": "1",
			// 		"Childname5": "",
			// 		"Child5Birthdt": "",
			// 		"Child5Gender": "1",
			// 		"Childname6": "",
			// 		"Child6Birthdt": "",
			// 		"Child6Gender": "1",
			// 		"livingArrangement": "",
			// 		"topPriorities": "",
			// 		"topPriorities1": "",
			// 		"domainSelected": "",
			// 		"educationCity": "",
			// 		"dreamFuture": "",
			// 		"worriesFamilyHealth": "",
			// 		"policyCoveredBy": "",
			// 		"liveAfterRetirement": "",
			// 		"wantToDoWhenRetire": "",
			// 		"childCarrerWantPursue": "",
			// 		"femaleChild": 0,
			// 		"maleChild": 0,
			// 		"familyButtonSupportedYear": "",
			// 		"familyMonthlySaved": "",
			// 		"familyNeedSuportCurrency": "00",
			// 		"dreamSavedMoney": "",
			// 		"retirementAge": "",
			// 		"retirementSaved": "",
			// 		"childrenMoenySaved": "",
			// 		"dreamComeTrueYear": "",
			// 		"totalIncome": "",
			// 		"personAge": "",
			// 		"partnerAge": "",
			// 		"savingCost": "",
			// 		"cost": "",
			// 		"familyYear": "",
			// 		"totalCalculation": "",
			// 		"savingBridgeGap": "",
			// 		"perOfTotalIncom": "",
			// 		"livingData": "",
			// 		"futureDreamString": "",
			// 		"dreamYear": "",
			// 		"retireAgeInYear": "",
			// 		"stringAfterLiveRetirement": "",
			// 		"stringWantToDoWhenRetire": "",
			// 		"selectedEducationCity": "",
			// 		"totalFemale": "",
			// 		"totalMale": "",
			// 		"selectedChildName": "",
			// 		"selectedChildAge": "",
			// 		"childrenAgePass": "",
			// 		"healthMonth": "",
			// 		"policyCoverSolution": "",
			// 		"totalChildren": "",
			// 		"productSelected": "",
			// 		"summary1": "",
			// 		"totalIncomeSummary": "",
			// 		"saaAplicationNo": "",
			// 		"degreeString": "",
			// 		"backDataStored": "",
			// 		"backToAboutYou": "",
			// 		"accidentHelathCareZeoSavinging": "",
			// 		"retirementGenderSelection": "",
			// 		"childrenFlag": false,
			// 		"childSelectedNumber":"",
			// 		"StartTime":"",
			// 		"ProdChosenTime":"",
			// 		"QqNavTime":"",
			// 		"EmailSentTime":""

			// 	}

			// };

			// var model4 = new sap.ui.model.json.JSONModel(data);
			// this.getView().setModel(model4, "GData");
			// sap.ui.getCore().setModel(model4, "GData");

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {

				this.getView().setModel(new sap.ui.model.json.JSONModel({
					currentPage: 0,
					totalPages: this.byId("navCon").getPages().length,
					enabled: false,
					dob: new Date(),
					images: {

						5: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/5.jpg"),
						6: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/6.jpg"),
						7: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/7.jpg"),
						8: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/8.jpg"),
						9: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/9.jpg"),
						11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
						17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
						24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
						30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
						37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
						healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
						With_Family: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/WithFamily.svg"),
						Renting: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Renting.svg"),
						Owned_Home: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/OwnedHome.svg"),
						Staying_Healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/StayingHealthy.svg"),
						Gender_Male: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Male.svg"),
						Gender_Female: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Female.svg"),
						Single: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Single.svg"),
						Married: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Married.svg"),
						WithKids: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/WithKids.svg"),
						The_future_Education: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/FutureChildren.svg"),
						Providing_for_family: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ProvidingFamily.svg"),
						Buying_dreamhouse_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/DreamHouseCar.svg"),
						Worryfree_retirement: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/WorryRetirement.svg"),
						Exploring_World: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ExploringWorld.svg"),
						Male: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GenderMale.svg"),
						Female: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GenderFemale.svg"),
						plus: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/plus.svg"),
						Minus: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Minus.svg"),
					}
				}), "dataModel");

			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				this.getView().setModel(new sap.ui.model.json.JSONModel({
					currentPage: 0,
					totalPages: this.byId("navCon").getPages().length,
					enabled: false,
					dob: new Date(),
					images: {

						5: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/5.jpg"),
						6: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/6.jpg"),
						7: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/7.jpg"),
						8: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/8.jpg"),
						9: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/9.jpg"),
						11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
						17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
						24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
						30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
						37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
						healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
						With_Family: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/With_Family.svg"),
						Renting: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/renting.svg"),
						Owned_Home: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/ownedHome.svg"),
						Staying_Healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/stayingHealth.svg"),
						Gender_Male: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Male.svg"),
						Gender_Female: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Female.svg"),
						Single: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/single.svg"),
						Married: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/married.svg"),
						WithKids: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/withKids.svg"),
						The_future_Education: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/childrenEducation.svg"),
						Providing_for_family: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/providingForFamily.svg"),
						Buying_dreamhouse_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/dreamHouseCar.svg"),
						Worryfree_retirement: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/worryRetirement.svg"),
						Exploring_World: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/exploringTheWorld.svg"),
						Male: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GenderMale.svg"),
						Female: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GenderFemale.svg"),
						plus: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/plus.svg"),
						Minus: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Minus.svg"),
					}
				}), "dataModel");
			}

			sap.ui.getCore().getModel("GData").oData.GloBalJson.femaleChild = this.childCounter;

		},

		_onObjectMatched: function(oEvent) {

			var maxdate = new Date();
			maxdate.setHours(0, 0, 0, 0);
			this.getView().byId("date1").setMaxDate(maxdate);
			this.getView().byId("date2").setMaxDate(maxdate);

			this.getView().byId("idChildrenIncrementEn").setVisible(true);
			this.getView().byId("idChildrenIncrementVi").setVisible(false);
			this.getView().byId("idLivingArrngementEn").setVisible(true);
			this.getView().byId("idLivingArrngementVi").setVisible(false);
			this.getView().byId("idTopPrioritiesEn").setVisible(true);
			this.getView().byId("idTopPrioritiesVi").setVisible(false);
			var childData = {
				"results": [{

					"Name": "",
					"ChildDob": ""

				}]
			};
			var model = new sap.ui.model.json.JSONModel(childData);
			this.getView().setModel(model, "ChildInfoData");

			$(".sidenav ").removeClass("expanded");

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {

				this.getView().setModel(new sap.ui.model.json.JSONModel({
					currentPage: 0,
					totalPages: this.byId("navCon").getPages().length,
					enabled: false,
					dob: new Date(),
					images: {

						5: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/5.jpg"),
						6: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/6.jpg"),
						7: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/7.jpg"),
						8: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/8.jpg"),
						9: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/9.jpg"),
						11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
						17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
						24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
						30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
						37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
						healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
						With_Family: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/WithFamily.svg"),
						Renting: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Renting.svg"),
						Owned_Home: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/OwnedHome.svg"),
						Staying_Healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/StayingHealthy.svg"),
						Gender_Male: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Male.svg"),
						Gender_Female: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Female.svg"),
						Single: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Single.svg"),
						Married: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Married.svg"),
						WithKids: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/WithKids.svg"),
						The_future_Education: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/FutureChildren.svg"),
						Providing_for_family: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ProvidingFamily.svg"),
						Buying_dreamhouse_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/DreamHouseCar.svg"),
						Worryfree_retirement: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/WorryRetirement.svg"),
						Exploring_World: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ExploringWorld.svg"),
						Male: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GenderMale.svg"),
						Female: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GenderFemale.svg"),
						plus: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/plus.svg"),
						Minus: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Minus.svg"),
					}
				}), "dataModel");

			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {

				this.getView().byId("idChildrenIncrementEn").setVisible(false);
				this.getView().byId("idChildrenIncrementVi").setVisible(true);
				this.getView().byId("idLivingArrngementEn").setVisible(false);
				this.getView().byId("idLivingArrngementVi").setVisible(true);
				this.getView().byId("idTopPrioritiesEn").setVisible(false);
				this.getView().byId("idTopPrioritiesVi").setVisible(true);

				this.getView().setModel(new sap.ui.model.json.JSONModel({
					currentPage: 0,
					totalPages: this.byId("navCon").getPages().length,
					enabled: false,
					dob: new Date(),
					images: {

						5: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/5.jpg"),
						6: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/6.jpg"),
						7: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/7.jpg"),
						8: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/8.jpg"),
						9: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/9.jpg"),
						11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
						17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
						24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
						30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
						37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
						healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
						With_Family: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/WithFamily.svg"),
						Renting: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/renting.svg"),
						Owned_Home: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/ownedHome.svg"),
						Staying_Healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/stayingHealth.svg"),
						Gender_Male: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Male.svg"),
						Gender_Female: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Female.svg"),
						Single: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/single.svg"),
						Married: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/married.svg"),
						WithKids: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/withKids.svg"),
						The_future_Education: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/childrenEducation.svg"),
						Providing_for_family: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/providingForFamily.svg"),
						Buying_dreamhouse_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/dreamHouseCar.svg"),
						Worryfree_retirement: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/worryRetirement.svg"),
						Exploring_World: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/exploringTheWorld.svg"),
						Male: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GenderMale.svg"),
						Female: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GenderFemale.svg"),
						plus: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/plus.svg"),
						Minus: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Minus.svg"),
					}
				}), "dataModel");
			}
 
			if (childrenIncrementClass) {
				$(".card_custom1").each(function(index, item) {
					sap.ui.getCore().byId(item.id).destroy();
				});
				childrenIncrementClass = false;
				// if($(".card_custom1").length){ 
				// 	sap.ui.getCore().byId($(".card_custom1")[0].parentElement.id).removeAllItems();
				// }
				this.FemaleChildrenIds = [];
				this.maleChildrenIds = [];

			}

			// dataModel.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 1);
			var a = this.getView().getModel("dataModel");
			var navCon = this.getView().byId("navCon");
			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.backToAboutYou === "backtToAboutYou") {
				sap.ui.getCore().getModel("GData").oData.GloBalJson.backToAboutYou = "";
				a.setProperty("/currentPage", a.getProperty("/currentPage") + 4);
			} else {
				a.setProperty("/currentPage", a.getProperty("/currentPage") + 0);
			}

			navCon.to(navCon.getPages()[a.getProperty("/currentPage")].getId(), "slide");

		},

		childMaleIncrament: function() {
			// Get / Create the array of Child Card IDs for easier reference while removing 
			this.maleChildrenIds = this.maleChildrenIds || [];

			//Error handling in case the array is already of length 3
			if (this.maleChildrenIds.length === 3) {
				// TODO Message to be shown as per requirement
				// sap.m.MessageToast.show("You can add a maximum of 3 Male Children");
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("maleIncrementError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					onClose: null,
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return;
			}

			var tempDatePicker = new sap.m.DatePicker({
				displayFormat: "dd/MM/yyyy",
				valueFormat: "yyyy-MM-ddT00:00:00",
				placeholder: "{i18n>placeHolderDate}",
				change: function(oEvent) {

					var bValid = oEvent.getParameter("valid");
					if (!bValid) {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.childDobValidation = "true";
					} else {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.childDobValidation = "false";
					}
				},
				value: "{GData>/GloBalJson/Child" + (this.maleChildrenIds.length + 4) + "Birthdt}"
			}).addStyleClass("dateMargin").addStyleClass("inputDatePicker").addStyleClass("datePickerInputChild");

			// Create a new Card for Male Child
			var oNewMaleCard = new sap.m.VBox({
				items: [
					new sap.m.Input({
							value: "{GData>/GloBalJson/Childname" + (this.maleChildrenIds.length + 4) + "}",
							placeholder: "{i18n>placeHolderName}",

						}

					).addStyleClass("inputAbout").addStyleClass("inputAbout2").addStyleClass("inputAbout3").addStyleClass(
						"inputDoteed").addStyleClass("inputCapital"),
					tempDatePicker
				]
			}).addStyleClass("card_custom1");

			// Add to the Parent Box
			this.byId("idHBoxMale").addItem(oNewMaleCard);
			var maxdate = new Date();
			maxdate.setHours(0, 0, 0, 0);
			tempDatePicker.setMaxDate(maxdate);
			// Keep the ID in the array
			this.maleChildrenIds.push(oNewMaleCard.getId());
			sap.ui.getCore().getModel("GData").oData.GloBalJson.totalMale = this.maleChildrenIds.length;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.maleChild = this.maleChildrenIds.length;
			this.getView().getModel("GData").refresh(true);
		},

		childMaleDecreament: function() {

			// Check that the array of IDs is defined and current length is more than 0
			if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
				// Get the last ID of the Card and remove it from container
				// this.byId("idHBoxMale").removeItem(this.maleChildrenIds.pop());

				var index = this.byId("idHBoxMale").getItems().length - 1;
				if (this.byId("idHBoxMale").getItems().length > 2) {

					this.byId("idHBoxMale").getItems()[index].getItems()[0].setValue("");
					this.byId("idHBoxMale").getItems()[index].getItems()[1].setValue("");
					//index--;
				}

				var sIdToBeRemovedMale = this.maleChildrenIds.pop();
				this.byId("idHBoxMale").removeItem(sIdToBeRemovedMale);
				if ($("#" + sIdToBeRemovedMale).length) {
					$("#" + sIdToBeRemovedMale).remove();
				}

			}
			sap.ui.getCore().getModel("GData").oData.GloBalJson.totalMale = this.maleChildrenIds.length;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.maleChild = this.maleChildrenIds.length;
			this.getView().getModel("GData").refresh(true);
		},

		childFemaleIncrament1: function() {

			// Get / Create the array of Child Card IDs for easier reference while removing 
			this.FemaleChildrenIds = this.FemaleChildrenIds || [];

			//Error handling in case the array is already of length 3
			if (this.FemaleChildrenIds.length === 3) {
				// TODO Message to be shown as per requirement
				// sap.m.MessageToast.show("You can add a maximum of 3 Female Children");
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("feMaleIncrementError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					onClose: null,
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return;
			}

			var picker = new sap.m.DatePicker({
				displayFormat: "dd/MM/yyyy",
				valueFormat: "yyyy-MM-ddT00:00:00",
				placeholder: "{i18n>placeHolderDate}",
				change: function(oEvent) {

					var bValid = oEvent.getParameter("valid");
					if (!bValid) {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.childDobValidation = "true";
					} else {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.childDobValidation = "false";
					}
				},
				value: "{GData>/GloBalJson/Child" + (this.FemaleChildrenIds.length + 1) + "Birthdt}"
			}).addStyleClass("dateMargin").addStyleClass("inputDatePicker").addStyleClass("datePickerInputChild").addStyleClass(
				"childDatePicker");

			var oNewMaleCard =
				new sap.m.VBox({

					items: [
						new sap.m.Input({
								value: "{GData>/GloBalJson/Childname" + (this.FemaleChildrenIds.length + 1) + "}",
								placeholder: "{i18n>placeHolderName}"
							}

						).addStyleClass("inputAbout").addStyleClass("inputAbout2").addStyleClass("inputAbout3").addStyleClass(
							"inputDoteed").addStyleClass("inputCapital"),
						picker

					]
				}).addStyleClass("card_custom1");
			var maxdate = new Date();
			maxdate.setHours(0, 0, 0, 0);
			picker.setMaxDate(maxdate);
			// Add to the Parent Box
			this.byId("idHBoxFemale").addItem(oNewMaleCard);

			// Keep the ID in the array
			this.FemaleChildrenIds.push(oNewMaleCard.getId());
			sap.ui.getCore().getModel("GData").oData.GloBalJson.totalFemale = this.FemaleChildrenIds
				.length;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.femaleChild = this.FemaleChildrenIds.length;
			this.getView().getModel(
				"GData").refresh(true);
		},

		childFemaleDecreament1: function() {

			// Check that the array of IDs is defined and current length is more than 0
			if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
				// Get the last ID of the Card and remove it from container

				var index = this.byId("idHBoxFemale").getItems().length - 1;
				if (this.byId("idHBoxFemale").getItems().length > 2) {

					this.byId("idHBoxFemale").getItems()[index].getItems()[0].setValue("");
					this.byId("idHBoxFemale").getItems()[index].getItems()[1].setValue("");
					//index--;
				}
				var sIdToBeRemoved = this.FemaleChildrenIds.pop();
				this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

				if ($("#" + sIdToBeRemoved).length) {
					$("#" + sIdToBeRemoved).remove();
				}

			}
			sap.ui.getCore().getModel("GData").oData.GloBalJson.totalFemale = this.FemaleChildrenIds.length;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.femaleChild = this.FemaleChildrenIds.length;
			this.getView().getModel("GData").refresh(true);
		},

		onImageButtonGender: function(oEvent) {

			oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");

			switch (oEvent.getSource().getAlt()) {
				case "1":
					this.getView().byId("idS1Female").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson = oEvent.getSource().getAlt();
					if (!this.getView().byId("idS1Male").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPerson", "");
						// delete sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson;
					}

					break;
				case "2":
					this.getView().byId("idS1Male").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson = oEvent.getSource().getAlt();
					if (!this.getView().byId("idS1Female").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPerson", "");

					}
					break;
			}
		},
		onImageButtonGenderPartner: function(oEvent) {

			oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");

			switch (oEvent.getSource().getAlt()) {
				case "1":
					this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPartner = oEvent.getSource().getAlt();
					if (!this.getView().byId("idS1Male1").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");

					}
					break;
				case "2":
					this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPartner = oEvent.getSource().getAlt();
					if (!this.getView().byId("idS1Female1").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");

					}
					break;
			}
		},

		onImageButtonPressed: function(oEvent) {

			var index2 = 0;
			var errorModel = sap.ui.getCore().getModel("GData").oData.GloBalJson;
			var keys = Object.keys(errorModel);

			if (this.getOwnerComponent().initializePage) {
				this.ar.length = 0;
				this.getOwnerComponent().initializePage = false;
			}

			oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");
			switch (oEvent.getSource().getAlt()) {

				case "Single":
					this.getView().byId("idS1Married").removeStyleClass("imageButtonSelectedPink");
					break;
				case "Married":
					this.getView().byId("idS1Single").removeStyleClass("imageButtonSelectedPink");
					break;
				case "WithKids":
					break;
				default:
					break;
			}

			var imgSelect = oEvent.getSource().getAlt();

			// If Single Removed the Married 
			if (imgSelect === "Single") {
				index2 = this.ar.indexOf("Married");
				if (this.ar[0] === "Married" || this.ar[1] === "Married") {
					this.ar.splice(index2, 1);
				}

			} else if (imgSelect === "Married") {
				index2 = this.ar.indexOf("Single");
				if (this.ar[0] === "Single" || this.ar[1] === "Single") {
					this.ar.splice(index2, 1);
				}
			}

			if (this.ar.includes(imgSelect)) {
				for (var p = 0; p < this.ar.length; p++) {
						if (this.ar[p] === imgSelect) {
						this.ar.splice(p, 1);
					}
					if (this.ar[0] === "Single") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "1";
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}

						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);

						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");

						if (!this.getView().byId("idS1Single").hasStyleClass("imageButtonSelectedPink")) {
							sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/marryStatusOfPerson", "");

						}

					} else if (this.ar[0] === "Married") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "2";
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);

						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");
						if (!this.getView().byId("idS1Married").hasStyleClass("imageButtonSelectedPink")) {
							sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/marryStatusOfPerson", "");

						}
					} else if (this.ar[1] === "Single") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "1";
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);
						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");

						if (!this.getView().byId("idS1Single").hasStyleClass("imageButtonSelectedPink")) {
							sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/marryStatusOfPerson", "");

						}

					} else if (this.ar[1] === "Married") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "2";
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);
						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");
						if (!this.getView().byId("idS1Married").hasStyleClass("imageButtonSelectedPink")) {
							sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/marryStatusOfPerson", "");

						}
					}
				

				}
			} else {
				this.ar.push(imgSelect);
				if (this.ar.length === 1) {
					if (this.ar[0] === "Single") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "1";

						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");

						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");

						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);

						if (!this.getView().byId("idS1Single").hasStyleClass("imageButtonSelectedPink")) {
							sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/marryStatusOfPerson", "");

						}

					} else if (this.ar[0] === "Married") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "2";
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");

						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);
						if (!this.getView().byId("idS1Married").hasStyleClass("imageButtonSelectedPink")) {
							sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/marryStatusOfPerson", "");

						}
					}

				} else if (this.ar.length === 2) {
					if (this.ar[0] === "Single" && this.ar[1] === "WithKids") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "4";
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");

						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);
					} else if (this.ar[0] === "Married" && this.ar[1] === "WithKids") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "3";
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");

						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);
					} else if (this.ar[0] === "WithKids" && this.ar[1] === "Single") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "4";
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");

						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);
					} else if (this.ar[0] === "WithKids" && this.ar[1] === "Married") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson = "3";
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/nameOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dobOfPartner", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/genderOfPartner", "");
						this.getView().byId("idS1Male1").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idS1Female1").removeStyleClass("imageButtonSelectedPink");
						//Remove the Female Box From the Dom
						if (errorModel.totalFemale > 0) {
							for (var k = 0; k < this.FemaleChildrenIds.length; k++) {
								if (this.FemaleChildrenIds && this.FemaleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.FemaleChildrenIds.pop();
									this.byId("idHBoxFemale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						//Remove the Male Box From the Dom
						if (errorModel.totalMale > 0) {
							for (var k = 0; k < this.maleChildrenIds.length; k++) {
								if (this.maleChildrenIds && this.maleChildrenIds.length > 0) {
									// Get the last ID of the Card and remove it from container

									var sIdToBeRemoved = this.maleChildrenIds.pop();
									this.byId("idHBoxMale").removeItem(sIdToBeRemoved);

									if ($("#" + sIdToBeRemoved).length) {
										$("#" + sIdToBeRemoved).remove();
									}
								}
							}
						}
						if (errorModel.totalFemale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 1; j <= errorModel.totalFemale; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var nameData = "Childname" + j;
										var dobData = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + nameData, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobData, "");

									}
								}
							}
						}
						if (errorModel.totalMale > 0) {
							for (var i = 0; i < Object.keys(errorModel).length; i++) {
								for (var j = 4; j <= errorModel.totalMale + 3; j++) {

									if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
										var maleName = "Childname" + j;
										var dobMale = "Child" + j + "Birthdt";

										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + maleName, "");
										sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/" + dobMale, "");
									}
								}
							}
						}
						this.priorityArray = [];
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/topPriorities1", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
						this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idProvidingFamily").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idBuyingDreamCar").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idFutureEducation").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idWorryFreeRetirement").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idExploringWorld").removeStyleClass("imageButtonSelectedPink");
						this.getView().byId("idStayingHealthy").removeStyleClass("imageButtonSelectedPink");

						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalFemale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/totalMale", "");
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/femaleChild", 0);
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/maleChild", 0);
					}
				}
			}
		},

		onPriorities: function(oEvent) {

			if (varStartAgain) {
				this.priorityArray.length = 0;
				varStartAgain = false;

			}
			if (!oEvent.getSource().hasStyleClass("imageButtonSelectedPink") && $(".productSelection.imageButtonSelectedPink").length >= 2) {
				// TODO Error Handling
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("topPrioritiesMassage"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null,
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return;
			} else {

				var imgSelect = oEvent.getSource().getAlt();
				if (this.priorityArray.includes(imgSelect)) {
					for (var i = 0; i < this.priorityArray.length; i++) {
						if (this.priorityArray[i] === imgSelect) {
							this.priorityArray.splice(i, 1);
						}
					}
					if (oEvent.getSource().hasStyleClass("imageButtonSelectedPink")) {
						var indexOfElement = this.priorityArray.indexOf(imgSelect);
						if (sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities === imgSelect) {
							oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");
							sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities = "";
						} else if (sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities1 === imgSelect) {
							oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");
							sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities1 = "";
						}
					}

				} else {

					if (this.priorityArray.length === 2) {

						return;
					} else {
						this.priorityArray.push(imgSelect);
						if (sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities === "") {
							oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");
							sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities = imgSelect;
							return;
						}
						if (sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities1 === "") {
							oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");
							sap.ui.getCore().getModel("GData").oData.GloBalJson.topPriorities1 = imgSelect;
							return;
						}

					}

				}
				return;
			}

		},

		onInputPerson: function(evt) {

			var nameOfThePerson = evt.getSource().getValue();
		},
		//Policy Dob  validation
		// while typing the Date into a datepicker checking date is valid or not means format 
		onDobValidation: function(oEvent) {

			var bValid = oEvent.getParameter("valid");
			if (!bValid) {
				sap.ui.getCore().getModel("GData").oData.GloBalJson.personDobValidation = "true";
			} else {
				sap.ui.getCore().getModel("GData").oData.GloBalJson.personDobValidation = "false";
			}
		},

		//Partner Dob validation
		dobPartnerValidation: function(oEvent) {

			var bValid = oEvent.getParameter("valid");
			if (!bValid) {
				sap.ui.getCore().getModel("GData").oData.GloBalJson.partnerDobValidation = "true";
			} else {
				sap.ui.getCore().getModel("GData").oData.GloBalJson.partnerDobValidation = "false";
			}
		},
		//Children Dob Validation
		// childrenDobValidation: function(oEvent) {
		// 	 
		// 	var bValid = oEvent.getParameter("valid");
		// 	if (!bValid) {
		// 		sap.ui.getCore().getModel("GData").oData.GloBalJson.childDobValidation = "true";
		// 	} else {
		// 		sap.ui.getCore().getModel("GData").oData.GloBalJson.childDobValidation = "false";
		// 	}
		// },

		personDob: function(oEvent) {

			var bValid = oEvent.getParameter("valid");
			if (!bValid) {
				sap.m.MessageBox.information("Enter the date in the dd/MM/yyyy format.", {
					title: "Information", // default
					onClose: null, // default
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
			} else {
				var dobOfPerSon = oEvent.getSource().getValue();
				sap.ui.getCore().getModel("GData").oData.GloBalJson.dobOfPerson = dobOfPerSon;
			}

		},
		onInputPartner: function(evt) {
			var nameOfThePartner = evt.getSource().getValue();
		},
		onDobPartner: function(oEvent) {
			var bValid = oEvent.getParameter("valid");
			if (!bValid) {
				sap.m.MessageBox.information("Enter the date in the dd/MM/yyyy format.", {
					title: "Information", // default
					onClose: null, // default
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
			} else {
				var dobOfPerSon = oEvent.getSource().getValue();
				sap.ui.getCore().getModel("GData").oData.GloBalJson.dobOfPartner = dobOfPerSon;
			}
		},

		childDobInput: function(evt) {
			var dobOfPerSon = evt.getSource().getValue();
			sap.ui.getCore().getModel("GData").oData.GloBalJson.dobOfChild = dobOfPerSon;
		},

		onSelectLiving: function(oEvent) {

			oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");

			//TODO Needs to fix as per logic
			switch (oEvent.getSource().getAlt()) {
				case "WITHFAMILY":
					this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.livingArrangement = oEvent.getSource().getAlt();
					if (!this.getView().byId("idWithFamily").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
					}

					break;
				case "RENTING":
					this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idWithOwnedHome").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.livingArrangement = oEvent.getSource().getAlt();
					if (!this.getView().byId("idWithRenting").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
					}

					break;
				case "OWNEDHOME":
					this.getView().byId("idWithFamily").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idWithRenting").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.livingArrangement = oEvent.getSource().getAlt();
					if (!this.getView().byId("idWithOwnedHome").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/livingArrangement", "");
					}

					// this.getView().byId("idS1WithKids").removeStyleClass("imageButtonSelectedPink");
					break;

				default:
					break;
			}

		},

		aboutYouController: function(oEvent) {

			var totalMale = sap.ui.getCore().getModel("GData").oData.GloBalJson.totalMale;
			var errorModel = sap.ui.getCore().getModel("GData").oData.GloBalJson;
			var keys = Object.keys(errorModel);
			var femaleCounter = 0;
			var maleCounter = 0;
			var totalGender = errorModel.totalFemale + errorModel.totalMale;
			if (oEvent.getParameter("toId") === this.getView().createId("idTopPrioritiesPage")) {
				for (var i = 0; i < Object.keys(errorModel).length; i++) {
					for (var j = 1; j <= errorModel.totalFemale; j++) {

						if (keys[i] === "Child" + j + "Birthdt") {
							if (new Date().getFullYear() - new Date(errorModel[keys[i]]).getFullYear() > 22) {
								femaleCounter++;
							}

						}
					}

				}
				for (var i = 0; i < Object.keys(errorModel).length; i++) {
					for (var j = 4; j <= errorModel.totalMale + 3; j++) {
						if (keys[i] === "Child" + j + "Birthdt") {
							if (new Date().getFullYear() - new Date(errorModel[keys[i]]).getFullYear() > 22) {
								maleCounter++;
							}
						}
					}

				}

				var totalCounter = maleCounter + femaleCounter;
				if (totalCounter === parseInt(totalGender)) {
					errorModel.childrenFlag = true;

				} else {
					errorModel.childrenFlag = false;
				}
				if (errorModel.marryStatusOfPerson === "1" || errorModel.marryStatusOfPerson === "2" || errorModel.childrenFlag === true) {
					this.getView().byId("idFutureEducation").setVisible(false);

				} else {
					this.getView().byId("idFutureEducation").setVisible(true);

				}

			}

		},
// Navigation : Navigation to next page
		handleNavNext: function(evt) {
			// Referenec of Navconatiner
			var navCon = this.byId("navCon");
			var oDataModel = this.getView().getModel("dataModel");
			var errorModel = sap.ui.getCore().getModel("GData").oData.GloBalJson;
			var keys = Object.keys(errorModel);

			if (this.ar.length === 1) {
				if (this.ar[0] === "WithKids") {
					sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
						onClose: null, // default
						actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
						styleClass: "", // default
						initialFocus: null, // default
						textDirection: sap.ui.core.TextDirection.Inherit // default
					});
					return true;
				}
			}
			// Validation for Input
			if (oDataModel.getProperty("/currentPage") === 0) {
				if (errorModel.marryStatusOfPerson === "" || errorModel.nameOfPerson === "" || errorModel.dobOfPerson === "") {
					sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
						onClose: null, // default
						actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
						styleClass: "", // default
						initialFocus: null, // default
						textDirection: sap.ui.core.TextDirection.Inherit // default
					});
					return true;
				}
				if (!Date.parse(errorModel.dobOfPerson) ||
					errorModel.genderOfPerson === "" || new Date(errorModel.dobOfPerson) > new Date() || errorModel.personDobValidation ===
					"true" ||
					new Date().getFullYear() - new Date(errorModel.dobOfPerson).getFullYear() <= 18
				) {
					sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dobValidationError"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
						onClose: null, // default
						actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
						styleClass: "", // default
						initialFocus: null, // default
						textDirection: sap.ui.core.TextDirection.Inherit // default
					});
					return true;
				}

			} else if (oDataModel.getProperty("/currentPage") === 1) {
				if (errorModel.nameOfPartner === "" || errorModel.genderOfPartner === "" || errorModel.dobOfPartner === "") {
					sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
						onClose: null, // default
						actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
						styleClass: "", // default
						initialFocus: null, // default
						textDirection: sap.ui.core.TextDirection.Inherit // default
					});
					return true;
				}
				if (!Date.parse(errorModel.dobOfPartner) || new Date(errorModel.dobOfPartner) >
					new Date() || errorModel.partnerDobValidation === "true") {
					sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dobValidationError"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
						onClose: null, // default
						actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
						styleClass: "", // default
						initialFocus: null, // default
						textDirection: sap.ui.core.TextDirection.Inherit // default
					});
					return true;
				}
			} else if (oDataModel.getProperty("/currentPage") === 2) {

				errorModel.totalChildren = errorModel.totalMale + errorModel.totalFemale;

				for (var i = 0; i < Object.keys(errorModel).length; i++) {
					for (var j = 1; j <= errorModel.totalFemale; j++) {

						if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
							if (errorModel[keys[i]] === "") {

								sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
									title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
									onClose: null, // default
									actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
									styleClass: "", // default
									initialFocus: null, // default
									textDirection: sap.ui.core.TextDirection.Inherit // default
								});
								return true;
							}
							if (errorModel[keys[i]] !== "" && keys[i] === "Child" + j + "Birthdt" && !Date.parse(errorModel["Child" + j + "Birthdt"]) ||
								new Date(errorModel[keys[i]]) > new Date() || errorModel.childDobValidation === "true"
							) {
								sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dobValidationError"), {
									title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
									onClose: null, // default
									actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
									styleClass: "", // default
									initialFocus: null, // default
									textDirection: sap.ui.core.TextDirection.Inherit // default
								});
								return true;
							}

						} else {

						}
					}

				}

				for (var i = 0; i < Object.keys(errorModel).length; i++) {
					for (var j = 4; j <= errorModel.totalMale + 3; j++) {

						if (keys[i] === "Childname" + j || keys[i] === "Child" + j + "Birthdt") {
							if (errorModel[keys[i]] === "") {

								sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
									title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
									onClose: null, // default
									actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
									styleClass: "", // default
									initialFocus: null, // default
									textDirection: sap.ui.core.TextDirection.Inherit // default
								});
								return true;
							}
							if (errorModel[keys[i]] !== "" && keys[i] === "Child" + j + "Birthdt" && !Date.parse(errorModel["Child" + j + "Birthdt"]) ||
								errorModel.childDobValidation === "true" || new Date(errorModel[keys[i]]) > new Date()
							) {
								sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dobValidationError"), {
									title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
									onClose: null, // default
									actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
									styleClass: "", // default
									initialFocus: null, // default
									textDirection: sap.ui.core.TextDirection.Inherit // default
								});
								return true;
							}

						} else {

						}
					}

				}

				if (errorModel.totalChildren === "" || errorModel.totalChildren === 0 || errorModel.totalChildren === "0") {
					sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
						onClose: null, // default
						actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
						styleClass: "", // default
						initialFocus: null, // default
						textDirection: sap.ui.core.TextDirection.Inherit // default
					});
					return true;
				}
			} else if (oDataModel.getProperty("/currentPage") === 3) {
				if (errorModel.livingArrangement === "") {
					sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
						onClose: null, // default
						actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
						styleClass: "", // default
						initialFocus: null, // default
						textDirection: sap.ui.core.TextDirection.Inherit // default
					});
					return true;
				}
			} else if (oDataModel.getProperty("/currentPage") === 4) {
				if (errorModel.topPriorities === "" && errorModel.topPriorities1 === "") {
					sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
						title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
						onClose: null, // default
						actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
						styleClass: "", // default
						initialFocus: null, // default
						textDirection: sap.ui.core.TextDirection.Inherit // default
					});
					return true;
				}
			}

			//Visible False For Top Priorities

			if (oDataModel.getProperty("/currentPage") === 4) {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("interestepage");
			}

			if (this.ar.length === 1) {
				var arrValue = this.ar[0];
				if (arrValue === "Single" && oDataModel.getProperty("/currentPage") === 0) {

					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 3); // Increase the index
				} else if (arrValue === "Married" && oDataModel.getProperty("/currentPage") === 1) {

					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 2);
				} else if (arrValue === "Married") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);

				} else if (arrValue === "Single") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
				}

				/// 

			} else if (this.ar.length === 2) {
				if (this.ar[0] === "Single" && this.ar[1] === "WithKids" && oDataModel.getProperty("/currentPage") === 0) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 2); // Increase the index
				} else if (this.ar[0] === "Married" && this.ar[1] === "WithKids") {

					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1); // Increase the index
				} else if (this.ar[0] === "WithKids" && this.ar[1] === "Married") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1); // Increase the index
				} else if (this.ar[0] === "WithKids" && this.ar[1] === "Single" && oDataModel.getProperty("/currentPage") === 0) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 2);
				} else if (this.ar[0] === "Single" && this.ar[1] === "WithKids" && oDataModel.getProperty("/currentPage") === 2) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
				} else if (this.ar[0] === "WithKids" && this.ar[1] === "Single" && oDataModel.getProperty("/currentPage") === 2) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
				} else {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
				}

			}

			if (navCon === undefined) {
				return true;
			}
			// else if(navCon.getPages()[oDataModel.getProperty("/currentPage")]===undefined)
			// {
			// 	return true;
			// }
			else {
				navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			}

		},

		handleNavPrev: function(evt) {

			var navCon = this.byId("navCon");
			var oDataModel = this.getView().getModel("dataModel");
			if (oDataModel.getProperty("/currentPage") === 0) {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("videoHomeScreen");
			}
			if (this.ar.length === 1) {
				if (oDataModel.getProperty("/currentPage") === 4 && this.ar[0] === "Single") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
				} else if (this.ar[0] === "Single") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 3);
				} else if (this.ar[0] === "Married" && oDataModel.getProperty("/currentPage") === 3) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 2);
				} else if (this.ar[0] === "Married") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
				}
			} else if (this.ar.length === 2) {

				if (this.ar[0] === "Single" && this.ar[1] === "WithKids" && oDataModel.getProperty("/currentPage") === 4) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1); // Increase the index
				} else if (this.ar[0] === "WithKids" && this.ar[1] === "Single" && oDataModel.getProperty("/currentPage") === 4) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
				} else if (this.ar[0] === "WithKids" && this.ar[1] === "Single" && oDataModel.getProperty("/currentPage") === 3) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
				} else if (this.ar[0] === "Single" && this.ar[1] === "WithKids" && oDataModel.getProperty("/currentPage") === 3) {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
				} else if (this.ar[0] === "Single" && this.ar[1] === "WithKids") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 2);
				} else if (this.ar[0] === "Married" && this.ar[1] === "WithKids") {

					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
				} else if (this.ar[0] === "WithKids" && this.ar[1] === "Married") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
				} else if (this.ar[0] === "WithKids" && this.ar[1] === "Single") {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 2);
				} else {
					oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
				}
			}
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
		},
		someFunction: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
		},
		some: function() {
			this.getView().byId("idWithFamily").addStyleClass("imageSelect");
		}

	});
});