sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/saaprojSAADevlopment/utils/formatter"

], function(Controller, formatter) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.DetailsPage", {
		formatter: formatter,

		numberInputOnly: function(oEvent) {
			var _oInput = oEvent.getSource();
			var val = _oInput.getValue();
			val = val.replace(/[^\d]/g, '');
			_oInput.setValue(val);
		},
		onInit: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this._onObjectMatched, this);
			solutionFamily = this;
			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				this.getView().setModel(new sap.ui.model.json.JSONModel({
					currentPage: 0,
					totalPages: this.byId("navCon10").getPages().length,
					enabled: false,

					images: {

						checklist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Checklist.svg"),
						Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/HaveAFarm.svg"),
						healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
						24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
						25: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/Health2BackImage.svg"),
						26: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/26.jpg"),
						27: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/27.jpg"),
						28: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/28.jpg"),
						29: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/29.jpg"),
						11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
						12: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/Children2Back.svg"),
						map: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/map.svg"),
						13: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/13.jpg"),
						14: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/14.jpg"),
						15: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/15.jpg"),
						16: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/16.jpg"),
						Doctor: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Doctor.svg"),
						Lawyer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Laywer.svg"),
						Teacher: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Teacher.svg"),
						Artist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Artist.svg"),
						Government_Officer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GovernmentOfficer.svg"),
						Business_leader: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/BuisnessLeader.svg"),
						17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
						18: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/18.jpg"),
						19: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/19.jpg"),
						20: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/20.jpg"),
						21: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/21.jpg"),
						23: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/23.jpg"),
						101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),
						familyData: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/FamilyBack2.svg"),

						// Dreams
						37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
						38: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/DreamBack2.svg"),
						39: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/39.jpg"),
						40: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/40.jpg"),
						41: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/41.jpg"),
						42: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/42.jpg"),
						To_have_a_nice_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/HaveANiceCar.svg"),
						To_raise_successful_children: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/english/HappyChildren.svg"),
						Expore_the_world: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/WorldExplore.svg"),
						Own_a_house: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/NiceHouseApartment.svg"),
						Be_successful_business_person: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/english/SuccessfulBuisnessPerson.svg"),
						// 101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),
						// Retirement

						30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
						31: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/retirement2.svg"),
						32: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/32.jpg"),
						33: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/33.jpg"),
						34: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/34.jpg"),
						35: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/35.jpg"),
						36: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/36.jpg"),
						travelWithMyPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/TravelWithPartner.svg"),
						// Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Have_a_Farm.svg"),
						Enjoy_Social_Activities: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/english/SocialActivities.svg"),
						Run_asmallBuisness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/SmallBuisness.svg"),
						Goback_hometown: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/BackToHome.svg"),
						Staywhere_I_am: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/StayWhereIAm.svg"),
						5560: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/55_60.svg"),

						//Health
						criticalllness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/CriticalIllness.svg"),
						AnAccident: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/AnAccident.svg"),
						mySelf: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/MySelf.svg"),
						myParent: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/MyParent.svg"),
						myPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/MyPartner.svg"),
						myChildren: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/MyChildren.svg"),
						qualityHealthcare: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/QualityHealthcare.svg"),
						ChildMale: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ChildMale.svg"),
						ChildFemale: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ChildFemale.svg"),

					}
				}), "dataModel");
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				this.getView().setModel(new sap.ui.model.json.JSONModel({
					currentPage: 0,
					totalPages: this.byId("navCon10").getPages().length,
					enabled: false,

					images: {

						checklist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Checklist.svg"),
						Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/haveAFarm.svg"),
						healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
						24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
						25: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/HealthBack2.svg"),
						26: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/26.jpg"),
						27: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/27.jpg"),
						28: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/28.jpg"),
						29: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/29.jpg"),
						11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
						12: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/ChildrenBack2.svg"),
						map: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/map.svg"),
						13: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/13.jpg"),
						14: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/14.jpg"),
						15: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/15.jpg"),
						16: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/16.jpg"),
						Doctor: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/Doctor.svg"),
						Lawyer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/lawyer.svg"),
						Teacher: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/teacher.svg"),
						Artist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/artist.svg"),
						Government_Officer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/governmentOfficer.svg"),
						Business_leader: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/buisnessLeader.svg"),
						17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
						18: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/18.jpg"),
						19: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/19.jpg"),
						20: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/20.jpg"),
						21: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/21.jpg"),
						23: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/23.jpg"),
						101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),
						familyData: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/FamilyBack2.svg"),
						// Dreams
						37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
						38: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/dream2Back.svg"),
						39: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/39.jpg"),
						40: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/40.jpg"),
						41: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/41.jpg"),
						42: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/42.jpg"),
						To_have_a_nice_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/niceCar.svg"),
						To_raise_successful_children: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/veitnamese/successfulAndHappyChildren.svg"),
						Expore_the_world: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/exploringTheWorld.svg"),
						Own_a_house: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/niceHouseOrApartment.svg"),
						Be_successful_business_person: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/veitnamese/successfulBuisnessPerson.svg"),
						// Retirement
						30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
						31: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/retirement2Back.svg"),
						32: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/32.jpg"),
						33: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/33.jpg"),
						34: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/34.jpg"),
						35: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/35.jpg"),
						36: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/36.jpg"),
						travelWithMyPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/travelWithPartner.svg"),
						// Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Have_a_Farm.svg"),
						Enjoy_Social_Activities: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/veitnamese/socialActivities.svg"),
						Run_asmallBuisness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/smallBuisness.svg"),
						Goback_hometown: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/GoBack2Home.svg"),
						Staywhere_I_am: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/stayWhereIAm.svg"),
						5560: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/55_60.svg"),

						//Health
						criticalllness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/Criticalllness.svg"),
						AnAccident: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/anAccident.svg"),
						mySelf: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/mySelf.svg"),
						myParent: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/myParent.svg"),
						myPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/myPartner.svg"),
						myChildren: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/myChildren.svg"),
						qualityHealthcare: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/qualityHealthCare.svg"),
						ChildMale: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ChildMale.svg"),
						ChildFemale: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ChildFemale.svg"),

					}
				}), "dataModel");
			}
		},

		childImageSelected: function(oEvent) {
			var globalModel = sap.ui.getCore().getModel("GData").oData.GloBalJson;
			oEvent.getSource().toggleStyleClass("imageButtonSelected");
			switch (oEvent.getSource().getTooltip()) {
				case "childFemale1":

					break;
				case "childFemale2":

					break;
				case "childFemale3":

					break;
				case "childFemale4":

					break;
				case "childFemale5":

					break;
				case "childFemale6":

					break;

			}

		},

		navContainerOnNavigate: function(oEvent) {

			this.selectedAge = 0;

			if (oEvent.getParameter("toId") === this.getView().createId("childrenDomain")) {

				var globalModel = sap.ui.getCore().getModel("GData").oData.GloBalJson;
				var totalFemale = sap.ui.getCore().getModel("GData").oData.GloBalJson.totalFemale;

				var ageOfChildren1 = sap.ui.getCore().getModel("GData").oData.GloBalJson.Child1Birthdt;
				var ageOfChildren2 = sap.ui.getCore().getModel("GData").oData.GloBalJson.Child2Birthdt;
				var ageOfChildren3 = sap.ui.getCore().getModel("GData").oData.GloBalJson.Child3Birthdt;
				var ageOfChildren4 = sap.ui.getCore().getModel("GData").oData.GloBalJson.Child4Birthdt;
				var ageOfChildren5 = sap.ui.getCore().getModel("GData").oData.GloBalJson.Child5Birthdt;
				var ageOfChildren6 = sap.ui.getCore().getModel("GData").oData.GloBalJson.Child6Birthdt;

				this.byId("idHBoxChildrenAdded").removeAllItems();

				if (ageOfChildren1 || ageOfChildren2 || ageOfChildren3) {
					var dateObject1 = new Date().getFullYear() - new Date(ageOfChildren1).getFullYear();
					var dateObject2 = new Date().getFullYear() - new Date(ageOfChildren2).getFullYear();
					var dateObject3 = new Date().getFullYear() - new Date(ageOfChildren3).getFullYear();
					if (dateObject1 || dateObject1 === 0) {
						if (isNaN(dateObject1)) {
							return;
						} else {
							if (dateObject1 >= 0 && dateObject1 < 22) {
								var childname1 = this.getView().getModel("FData").getProperty("/GloBalJson/Childname1");
								var childname = this.hello1(childname1);

								// =========================================================
								var oNewMaleCard = new sap.m.VBox({
									items: [
										new sap.m.Text({
											text: childname
												//	<!--<Text text="{parts:[{path:'i18n>dataSolutionLetUsShow'}], formatter: 'jQuery.sap.formatMessage'}" class="solutioParagraph " visible="true"></Text>-->
												// text: "{FData>/GloBalJson/Childname1}"
										}).addStyleClass("childrenName"),
										new sap.m.Image({
											src: "{dataModel>/images/ChildFemale}",
											height: "180px",
											width: "180px",
											class: "childFemale1",
											tooltip: "childFemale1",
											press: function(oEvent) {
												// oEvent.getSource().toggleStyleClass("imageButtonSelected");
												globalModel.selectedChildName = globalModel.Childname1;
												globalModel.selectedChildAge = new Date(globalModel.Child1Birthdt).getFullYear();
												// sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).addStyleClass("imageButtonSelected");
												if (sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).hasStyleClass(
														"imageButtonSelected")) {
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildName", "");
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildAge", "");
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).removeStyleClass(
														"imageButtonSelected");

												} else {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).addStyleClass(
														"imageButtonSelected");

												}
												if ($(".childFemale2").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale3").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale4").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale5").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale6").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
											},
											alt: "child1",

										}).addStyleClass("childFemale1").addStyleClass(sap.ui.getCore().getModel("GData").getData().GloBalJson.selectedChildName.toUpperCase() ===
											childname.toUpperCase() ? "imageButtonSelected" : "")
									]
								}).addStyleClass("child1Class");
								this.byId("idHBoxChildrenAdded").addItem(oNewMaleCard);
							}
						}
					}
					if (dateObject2 || dateObject2 === 0) {
						if (isNaN(dateObject2)) {
							return;
						} else {
							if (dateObject2 < 22 && dateObject2 >= 0) {
								var childname2 = this.getView().getModel("FData").getProperty("/GloBalJson/Childname2");
								var childname = this.hello1(childname2);

								var oNewMaleCard = new sap.m.VBox({
									items: [
										new sap.m.Text({
											// text: "{FData>/GloBalJson/Childname2}"
											text: childname
										}).addStyleClass("childrenName"),
										new sap.m.Image({
											src: "{dataModel>/images/ChildFemale}",
											height: "180px",
											width: "180px",
											class: "childFemale2",
											tooltip: "childFemale2",
											press: function() {
												globalModel.selectedChildName = globalModel.Childname2;
												globalModel.selectedChildAge = new Date().getFullYear() - new Date(globalModel.Child2Birthdt).getFullYear();
												// sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).addStyleClass("imageButtonSelected");

												if (sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).hasStyleClass(
														"imageButtonSelected")) {
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildName", "");
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildAge", "");
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).removeStyleClass(
														"imageButtonSelected");

												} else {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).addStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale1").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale3").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale4").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale5").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale6").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
											},
										}).addStyleClass("childFemale2").addStyleClass(sap.ui.getCore().getModel("GData").getData().GloBalJson.selectedChildName.toUpperCase() ===
											childname.toUpperCase() ? "imageButtonSelected" : "")
									]
								}).addStyleClass("child2Class");
								this.byId("idHBoxChildrenAdded").addItem(oNewMaleCard);
							}
						}
					}
					if (dateObject3 || dateObject3 === 0) {
						if (isNaN(dateObject3)) {
							return;
						} else {
							if (dateObject3 < 22 && dateObject3 >= 0) {

								var childname3 = this.getView().getModel("FData").getProperty("/GloBalJson/Childname3");
								var childname = this.hello1(childname3);
								var oNewMaleCard = new sap.m.VBox({
									items: [
										new sap.m.Text({
											//text: "{FData>/GloBalJson/Childname3}"
											text: childname

										}).addStyleClass("childrenName"),
										new sap.m.Image({
											src: "{dataModel>/images/ChildFemale}",
											height: "180px",
											width: "180px",
											class: "childFemale3",
											tooltip: "childFemale3",
											press: function() {
												globalModel.selectedChildName = globalModel.Childname3;
												globalModel.selectedChildAge = new Date().getFullYear() - new Date(globalModel.Child3Birthdt).getFullYear();
												// sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).addStyleClass("imageButtonSelected");
												if (sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).hasStyleClass(
														"imageButtonSelected")) {
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildName", "");
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildAge", "");
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).removeStyleClass(
														"imageButtonSelected");

												} else {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).addStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale2").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale1").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale4").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale5").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale6").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
											},
										}).addStyleClass("childFemale3").addStyleClass(sap.ui.getCore().getModel("GData").getData().GloBalJson.selectedChildName.toUpperCase() ===
											childname.toUpperCase() ? "imageButtonSelected" : "")
									]
								}).addStyleClass("child3Class");
								this.byId("idHBoxChildrenAdded").addItem(oNewMaleCard);
							}
						}
					}

				}
				if (ageOfChildren4 || ageOfChildren5 || ageOfChildren6) {
					var dateObject4 = new Date().getFullYear() - new Date(ageOfChildren4).getFullYear();
					var dateObject5 = new Date().getFullYear() - new Date(ageOfChildren5).getFullYear();
					var dateObject6 = new Date().getFullYear() - new Date(ageOfChildren6).getFullYear();
					if (dateObject4 || dateObject4 === 0) {
						if (isNaN(dateObject4)) {
							return;
						} else {
							if (dateObject4 < 22 && dateObject4 >= 0) {
								var childname4 = this.getView().getModel("FData").getProperty("/GloBalJson/Childname4");
								var childname = this.hello1(childname4);
								var oNewMaleCard = new sap.m.VBox({
									items: [
										new sap.m.Text({
											text: childname
												// text: "{FData>/GloBalJson/Childname4}"
										}).addStyleClass("childrenName"),
										new sap.m.Image({
											src: "{dataModel>/images/ChildMale}",
											height: "180px",
											width: "180px",
											class: "childFemale4",
											tooltip: "childFemale4",
											press: function() {
												globalModel.selectedChildName = globalModel.Childname4;
												globalModel.selectedChildAge = new Date().getFullYear() - new Date(globalModel.Child4Birthdt).getFullYear();
												// sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).addStyleClass("imageButtonSelected");
												if (sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).hasStyleClass(
														"imageButtonSelected")) {
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildName", "");
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildAge", "");
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).removeStyleClass(
														"imageButtonSelected");

												} else {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).addStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale2").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale3").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale1").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale5").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale6").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
											},
										}).addStyleClass("childFemale4").addStyleClass(sap.ui.getCore().getModel("GData").getData().GloBalJson.selectedChildName.toUpperCase() ===
											childname.toUpperCase() ? "imageButtonSelected" : "")
									]
								}).addStyleClass("child4Class");
								this.byId("idHBoxChildrenAdded").addItem(oNewMaleCard);
							}
						}
					}
					if (dateObject5 || dateObject5 === 0) {
						if (isNaN(dateObject5)) {
							return;
						} else {
							if (dateObject5 <= 22 && dateObject5 >= 0) {
								this.selectedAge = dateObject5;
								var childname5 = this.getView().getModel("FData").getProperty("/GloBalJson/Childname5");
								var childname = this.hello1(childname5);
								var oNewMaleCard = new sap.m.VBox({
									items: [
										new sap.m.Text({
											// text: "{FData>/GloBalJson/Childname5}"
											text: childname
										}).addStyleClass("childrenName"),
										new sap.m.Image({
											src: "{dataModel>/images/ChildMale}",
											height: "180px",
											width: "180px",
											class: "childFemale5",
											tooltip: "childFemale5",
											press: function() {
												globalModel.selectedChildName = globalModel.Childname5;
												globalModel.selectedChildAge = new Date().getFullYear() - new Date(globalModel.Child5Birthdt).getFullYear();
												// sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).addStyleClass("imageButtonSelected");
												if (sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).hasStyleClass(
														"imageButtonSelected")) {
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildName", "");
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildAge", "");
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).removeStyleClass(
														"imageButtonSelected");

												} else {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).addStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale2").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale3").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale4").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale1").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale6").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
											},
										}).addStyleClass("childFemale5").addStyleClass(sap.ui.getCore().getModel("GData").getData().GloBalJson.selectedChildName.toUpperCase() ===
											childname.toUpperCase() ? "imageButtonSelected" : "")
									]
								}).addStyleClass("child5Class");
								this.byId("idHBoxChildrenAdded").addItem(oNewMaleCard);
							}
						}
					}
					if (dateObject6) {
						if (isNaN(dateObject6)) {
							return;
						} else {
							if (dateObject6 <= 22 && dateObject6 >= 0) {
								var childname6 = this.getView().getModel("FData").getProperty("/GloBalJson/Childname6");
								var childname = this.hello1(childname6);
								var oNewMaleCard = new sap.m.VBox({
									items: [
										new sap.m.Text({
											// text: "{FData>/GloBalJson/Childname6}"
											text: childname
										}).addStyleClass("childrenName"),
										new sap.m.Image({
											src: "{dataModel>/images/ChildMale}",
											height: "180px",
											width: "180px",
											class: "childFemale6",
											tooltip: "childFemale6",
											press: function() {
												globalModel.selectedChildName = globalModel.Childname6;
												globalModel.selectedChildAge = new Date().getFullYear() - new Date(globalModel.Child6Birthdt).getFullYear();
												// sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).addStyleClass("imageButtonSelected");
												if (sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).hasStyleClass(
														"imageButtonSelected")) {
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildName", "");
													sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/selectedChildAge", "");
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).removeStyleClass(
														"imageButtonSelected");

												} else {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale6").item(0).id).addStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale2").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale2").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale3").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale3").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale4").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale4").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale5").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale5").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
												if ($(".childFemale1").length > 0) {
													sap.ui.getCore().byId(document.getElementsByClassName("childFemale1").item(0).id).removeStyleClass(
														"imageButtonSelected");
												}
											}
										}).addStyleClass("childFemale6").addStyleClass(sap.ui.getCore().getModel("GData").getData().GloBalJson.selectedChildName.toUpperCase() ===
											childname.toUpperCase() ? "imageButtonSelected" : "")
									]
								}).addStyleClass("child6Class");
								this.byId("idHBoxChildrenAdded").addItem(oNewMaleCard);
							}
						}
					}
				}
			}
		},
		_onObjectMatched: function(oEvent) {
			$(".sidenav ").removeClass("expanded");
			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				solutionFamily.getView().byId("idDreamEn").setVisible(true);
				solutionFamily.getView().byId("idDreamVi").setVisible(false);
				solutionFamily.getView().byId("idRetirementEn").setVisible(true);
				solutionFamily.getView().byId("idRetirementVn").setVisible(false);
				solutionFamily.getView().byId("idFamilyEn").setVisible(true);
				solutionFamily.getView().byId("idFamilyVi").setVisible(false);
				solutionFamily.getView().byId("idRetirementAmountEn").setVisible(true);
				solutionFamily.getView().byId("idRetirementAmountVi").setVisible(false);
				solutionFamily.getView().byId("idDreamAmountEn").setVisible(true);
				solutionFamily.getView().byId("idDreamAmountVi").setVisible(false);
				solutionFamily.getView().byId("idHealthAmountEn").setVisible(true);
				solutionFamily.getView().byId("idHealthAmountVi").setVisible(false);
				solutionFamily.getView().byId("idHealthCareFamilyAmountEn").setVisible(true);
				solutionFamily.getView().byId("idHealthCareFamilyAmountVi").setVisible(false);
				solutionFamily.getView().byId("idHealthWorriesEn").setVisible(true);
				solutionFamily.getView().byId("idHealthWorriesVi").setVisible(false);
				solutionFamily.getView().byId("idDreamForFutureEn").setVisible(true);
				solutionFamily.getView().byId("idDreamForFutureVi").setVisible(false);
				solutionFamily.getView().byId("idFamilyNeedSupportEn").setVisible(true);
				solutionFamily.getView().byId("idFamilyNeedSupportVi").setVisible(false);
				solutionFamily.getView().byId("idFamilyMoneySupportEn").setVisible(true);
				solutionFamily.getView().byId("idFamilyMoneySupportVi").setVisible(false);
				solutionFamily.getView().byId("idFamilySavedForFamilyEn").setVisible(true);
				solutionFamily.getView().byId("idFamilySavedForFamilyVi").setVisible(false);
				solutionFamily.getView().byId("idFamilyTotalIncomeEn").setVisible(true);
				solutionFamily.getView().byId("idFamilyTotalIncomeVi").setVisible(false);
				solutionFamily.getView().byId("idChildrenCrrerEn").setVisible(true);
				solutionFamily.getView().byId("idChildrenCrrerVi").setVisible(false);
				solutionFamily.getView().byId("idChildrenTotalEn").setVisible(true);
				solutionFamily.getView().byId("idChildrenTotalVi").setVisible(false);
				solutionFamily.getView().byId("idTitleHealth2En").setVisible(true);
				solutionFamily.getView().byId("idTitleHealth2Vi").setVisible(false);

				this.getView().setModel(new sap.ui.model.json.JSONModel({
					currentPage: 0,
					totalPages: this.byId("navCon10").getPages().length,
					enabled: false,

					images: {
						checklist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Checklist.svg"),
						Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/HaveAFarm.svg"),
						healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
						24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
						25: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/Health2BackImage.svg"),
						26: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/26.jpg"),
						27: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/27.jpg"),
						28: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/28.jpg"),
						29: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/29.jpg"),
						11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
						12: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/Children2Back.svg"),
						map: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/map.svg"),
						13: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/13.jpg"),
						14: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/14.jpg"),
						15: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/15.jpg"),
						16: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/16.jpg"),
						Doctor: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Doctor.svg"),
						Lawyer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Laywer.svg"),
						Teacher: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Teacher.svg"),
						Artist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/Artist.svg"),
						Government_Officer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/GovernmentOfficer.svg"),
						Business_leader: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/BuisnessLeader.svg"),
						17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
						18: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/18.jpg"),
						19: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/19.jpg"),
						20: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/20.jpg"),
						21: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/21.jpg"),
						23: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/23.jpg"),
						101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),
						familyData: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/FamilyBack2.svg"),

						// Dreams
						37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
						38: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/DreamBack2.svg"),
						39: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/39.jpg"),
						40: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/40.jpg"),
						41: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/41.jpg"),
						42: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/42.jpg"),
						To_have_a_nice_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/HaveANiceCar.svg"),
						To_raise_successful_children: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/english/HappyChildren.svg"),
						Expore_the_world: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/WorldExplore.svg"),
						Own_a_house: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/NiceHouseApartment.svg"),
						Be_successful_business_person: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/english/SuccessfulBuisnessPerson.svg"),
						// 101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),
						// Retirement

						30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
						31: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/retirement2.svg"),
						32: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/32.jpg"),
						33: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/33.jpg"),
						34: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/34.jpg"),
						35: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/35.jpg"),
						36: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/36.jpg"),
						travelWithMyPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/TravelWithPartner.svg"),
						// Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Have_a_Farm.svg"),
						Enjoy_Social_Activities: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/english/SocialActivities.svg"),
						Run_asmallBuisness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/SmallBuisness.svg"),
						Goback_hometown: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/BackToHome.svg"),
						Staywhere_I_am: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/StayWhereIAm.svg"),
						5560: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/55_60.svg"),
						//Health
						criticalllness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/CriticalIllness.svg"),
						AnAccident: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/AnAccident.svg"),
						mySelf: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/MySelf.svg"),
						myParent: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/MyParent.svg"),
						myPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/MyPartner.svg"),
						myChildren: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/MyChildren.svg"),
						qualityHealthcare: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/QualityHealthcare.svg"),
						ChildMale: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ChildMale.svg"),
						ChildFemale: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ChildFemale.svg"),
					}
				}), "dataModel");
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				solutionFamily.getView().byId("idDreamEn").setVisible(false);
				solutionFamily.getView().byId("idDreamVi").setVisible(true);
				solutionFamily.getView().byId("idRetirementEn").setVisible(false);
				solutionFamily.getView().byId("idRetirementVn").setVisible(true);
				solutionFamily.getView().byId("idFamilyEn").setVisible(false);
				solutionFamily.getView().byId("idFamilyVi").setVisible(true);
				solutionFamily.getView().byId("idRetirementAmountEn").setVisible(false);
				solutionFamily.getView().byId("idRetirementAmountVi").setVisible(true);
				solutionFamily.getView().byId("idDreamAmountEn").setVisible(false);
				solutionFamily.getView().byId("idDreamAmountVi").setVisible(true);
				solutionFamily.getView().byId("idHealthAmountEn").setVisible(false);
				solutionFamily.getView().byId("idHealthAmountVi").setVisible(true);
				solutionFamily.getView().byId("idHealthCareFamilyAmountEn").setVisible(false);
				solutionFamily.getView().byId("idHealthCareFamilyAmountVi").setVisible(true);
				solutionFamily.getView().byId("idHealthWorriesEn").setVisible(false);
				solutionFamily.getView().byId("idHealthWorriesVi").setVisible(true);
				solutionFamily.getView().byId("idDreamForFutureEn").setVisible(false);
				solutionFamily.getView().byId("idDreamForFutureVi").setVisible(true);
				solutionFamily.getView().byId("idFamilyNeedSupportEn").setVisible(false);
				solutionFamily.getView().byId("idFamilyNeedSupportVi").setVisible(true);
				solutionFamily.getView().byId("idFamilyMoneySupportEn").setVisible(false);
				solutionFamily.getView().byId("idFamilyMoneySupportVi").setVisible(true);
				solutionFamily.getView().byId("idFamilySavedForFamilyEn").setVisible(false);
				solutionFamily.getView().byId("idFamilySavedForFamilyVi").setVisible(true);
				solutionFamily.getView().byId("idFamilyTotalIncomeEn").setVisible(false);
				solutionFamily.getView().byId("idFamilyTotalIncomeVi").setVisible(true);
				solutionFamily.getView().byId("idChildrenCrrerEn").setVisible(false);
				solutionFamily.getView().byId("idChildrenCrrerVi").setVisible(true);
				solutionFamily.getView().byId("idChildrenTotalEn").setVisible(false);
				solutionFamily.getView().byId("idChildrenTotalVi").setVisible(true);
				solutionFamily.getView().byId("idTitleHealth2En").setVisible(false);
				solutionFamily.getView().byId("idTitleHealth2Vi").setVisible(true);

				this.getView().setModel(new sap.ui.model.json.JSONModel({
					currentPage: 0,
					totalPages: this.byId("navCon10").getPages().length,
					enabled: false,

					images: {

						checklist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Checklist.svg"),
						Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/haveAFarm.svg"),
						healthy: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/healthy.svg"),
						24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/24.jpg"),
						25: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/HealthBack2.svg"),
						26: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/26.jpg"),
						27: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/27.jpg"),
						28: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/28.jpg"),
						29: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/29.jpg"),
						11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/11.jpg"),
						12: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/ChildrenBack2.svg"),
						map: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/childeducation/map.svg"),
						13: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/13.jpg"),
						14: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/14.jpg"),
						15: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/15.jpg"),
						16: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/16.jpg"),
						Doctor: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/Doctor.svg"),
						Lawyer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/lawyer.svg"),
						Teacher: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/teacher.svg"),
						Artist: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/artist.svg"),
						Government_Officer: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/governmentOfficer.svg"),
						Business_leader: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/buisnessLeader.svg"),
						17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/17.jpg"),
						18: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/18.jpg"),
						19: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/19.jpg"),
						20: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/20.jpg"),
						21: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/21.jpg"),
						23: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/23.jpg"),
						101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),
						familyData: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/FamilyBack2.svg"),

						// Dreams
						37: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/37.jpg"),
						38: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/dream2Back.svg"),
						39: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/39.jpg"),
						40: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/40.jpg"),
						41: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/41.jpg"),
						42: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/42.jpg"),
						To_have_a_nice_car: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/niceCar.svg"),
						To_raise_successful_children: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/veitnamese/successfulAndHappyChildren.svg"),
						Expore_the_world: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/exploringTheWorld.svg"),
						Own_a_house: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/niceHouseOrApartment.svg"),
						Be_successful_business_person: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/veitnamese/successfulBuisnessPerson.svg"),
						// 101520: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/10_15_20.svg"),
						// Retirement

						30: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/30.jpg"),
						31: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/retirement2Back.svg"),
						32: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/32.jpg"),
						33: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/33.jpg"),
						34: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/34.jpg"),
						35: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/35.jpg"),
						36: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/36.jpg"),
						travelWithMyPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/travelWithPartner.svg"),
						// Have_a_Farm: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/Have_a_Farm.svg"),
						Enjoy_Social_Activities: jQuery.sap.getModulePath("com.saaprojSAADevlopment",
							"/media/veitnamese/socialActivities.svg"),
						Run_asmallBuisness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/smallBuisness.svg"),
						Goback_hometown: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/GoBack2Home.svg"),
						Staywhere_I_am: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/stayWhereIAm.svg"),
						5560: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/reti_Dream/55_60.svg"),

						//Health
						criticalllness: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/Criticalllness.svg"),
						AnAccident: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/anAccident.svg"),
						mySelf: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/mySelf.svg"),
						myParent: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/myParent.svg"),
						myPartner: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/myPartner.svg"),
						myChildren: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/myChildren.svg"),
						qualityHealthcare: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/veitnamese/qualityHealthCare.svg"),
						ChildMale: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ChildMale.svg"),
						ChildFemale: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/ChildFemale.svg"),
					}
				}), "dataModel");
			}
			var data = sap.ui.getCore().getModel("GData");
			var model22 = new sap.ui.model.json.JSONModel(data);
			this.getView().setModel(model22, "FData");
			this.getView().setModel(data, "FData");
			sap.ui.getCore().setModel(data, "FData");
			var solutionFamilyId = solutionFamily.byId("navCon10");
			var domainSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected;
			var oDataModel1 = this.getView().getModel("dataModel");

			switch (domainSelected) {
				case "EDUCATION":

					if (sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored === "backtToDetail") {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 12);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "";
					} else {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 6);
					}

					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "HEALTH":
					if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "1") {
						this.getView().byId("idMyChildren").setVisible(false);
						this.getView().byId("idMyPartner").setVisible(false);
					} else if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "2") {
						this.getView().byId("idMyChildren").setVisible(false);
						this.getView().byId("idMyPartner").setVisible(true);
					} else if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3") {
						this.getView().byId("idMyPartner").setVisible(true);
						this.getView().byId("idMyChildren").setVisible(true);
					} else if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
						this.getView().byId("idMyPartner").setVisible(false);
						this.getView().byId("idMyChildren").setVisible(true);
					}
					if (sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored === "backtToDetail") {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 5);

						sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "";
					} else {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 0);
					}
					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "FAMILY":
					if (sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored === "backtToDetail") {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 18);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "";
					} else {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 13);
					}
					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "DREAMS":
					if (sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored === "backtToDetail") {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 24);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "";
					} else {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 19);
					}
					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "RETIREMENT":
					if (sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored === "backtToDetail") {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 31);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "";
					} else {
						oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 25);
					}

					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
			}

		},

		familySupportYear: function(oEvent) {
			oEvent.getSource().toggleStyleClass("familyButtonActive");
			switch (oEvent.getSource().getTooltip()) {
				case "1":
					this.getView().byId("idUnder1015").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1520").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder20").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.familyButtonSupportedYear = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idUnder10").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/familyButtonSupportedYear", "");
					}
					break;
				case "2":
					this.getView().byId("idUnder10").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1520").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder20").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.familyButtonSupportedYear = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idUnder1015").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/familyButtonSupportedYear", "");
					}
					break;
				case "3":
					this.getView().byId("idUnder10").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1015").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder20").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.familyButtonSupportedYear = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idUnder1520").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/familyButtonSupportedYear", "");
					}
					break;
				case "4":
					this.getView().byId("idUnder10").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1015").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder1520").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.familyButtonSupportedYear = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idUnder20").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/familyButtonSupportedYear", "");
					}
					break;

				default:
					break;
			}
		},

		//Retirement Age Selection on Button
		onRetirementButton: function(oEvent) {
			// 
			oEvent.getSource().toggleStyleClass("familyButtonActive");

			switch (oEvent.getSource().getTooltip()) {
				case "1":
					this.getView().byId("idUnder5060Retirement").removeStyleClass("familyButtonActive");
					this.getView().byId("idOver60Retirement").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.retirementAge = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idUnder55Retirement").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/retirementAge", "");
					}
					break;
				case "2":
					this.getView().byId("idUnder55Retirement").removeStyleClass("familyButtonActive");
					this.getView().byId("idOver60Retirement").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.retirementAge = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idUnder5060Retirement").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/retirementAge", "");
					}
					break;

				case "3":
					this.getView().byId("idUnder5060Retirement").removeStyleClass("familyButtonActive");
					this.getView().byId("idUnder55Retirement").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.retirementAge = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idOver60Retirement").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/retirementAge", "");
					}

					break;
				default:
					break;
			}

		},

		educationCity: function(oEvent) {
			oEvent.getSource().toggleStyleClass("familyButtonActive");
			switch (oEvent.getSource().getTooltip()) {
				case "1":
					this.getView().byId("idEUROPE").removeStyleClass("familyButtonActive");
					this.getView().byId("idVIETNAM").removeStyleClass("familyButtonActive");
					this.getView().byId("idAUSTRALIA").removeStyleClass("familyButtonActive");
					this.getView().byId("idASIA").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idAMERICA").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/educationCity", "");
					}
					break;
				case "2":
					this.getView().byId("idAMERICA").removeStyleClass("familyButtonActive");
					this.getView().byId("idVIETNAM").removeStyleClass("familyButtonActive");
					this.getView().byId("idAUSTRALIA").removeStyleClass("familyButtonActive");
					this.getView().byId("idASIA").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idEUROPE").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/educationCity", "");
					}
					break;
				case "3":
					this.getView().byId("idEUROPE").removeStyleClass("familyButtonActive");
					this.getView().byId("idAMERICA").removeStyleClass("familyButtonActive");
					this.getView().byId("idAUSTRALIA").removeStyleClass("familyButtonActive");
					this.getView().byId("idASIA").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idVIETNAM").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/educationCity", "");
					}
					break;
				case "4":
					this.getView().byId("idEUROPE").removeStyleClass("familyButtonActive");
					this.getView().byId("idVIETNAM").removeStyleClass("familyButtonActive");
					this.getView().byId("idAMERICA").removeStyleClass("familyButtonActive");
					this.getView().byId("idASIA").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idAUSTRALIA").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/educationCity", "");
					}
					break;
				case "5":
					this.getView().byId("idEUROPE").removeStyleClass("familyButtonActive");
					this.getView().byId("idVIETNAM").removeStyleClass("familyButtonActive");
					this.getView().byId("idAUSTRALIA").removeStyleClass("familyButtonActive");
					this.getView().byId("idAMERICA").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idASIA").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/educationCity", "");
					}
					break;
			}
		},
		onDreamFuture: function(oEvent) {

			oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");

			//TODO Needs to fix as per logic
			switch (oEvent.getSource().getAlt()) {
				case "1":
					this.getView().byId("idSuccessfulChildren").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idExploreWolrd").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idOwnHouse").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idSuccessfulBuisnessPerson").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture = oEvent.getSource().getAlt();
					if (!this.getView().byId("idNiceCar").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamFuture", "");
					}

					break;
				case "2":
					this.getView().byId("idNiceCar").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idExploreWolrd").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idOwnHouse").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idSuccessfulBuisnessPerson").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture = oEvent.getSource().getAlt();
					if (!this.getView().byId("idSuccessfulChildren").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamFuture", "");
					}

					break;
				case "3":
					this.getView().byId("idNiceCar").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idSuccessfulChildren").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idOwnHouse").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idSuccessfulBuisnessPerson").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture = oEvent.getSource().getAlt();
					if (!this.getView().byId("idExploreWolrd").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamFuture", "");
					}

					// this.getView().byId("idS1WithKids").removeStyleClass("imageButtonSelected");
					break;
				case "4":
					this.getView().byId("idSuccessfulChildren").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idExploreWolrd").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idNiceCar").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idSuccessfulBuisnessPerson").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture = oEvent.getSource().getAlt();
					if (!this.getView().byId("idOwnHouse").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamFuture", "");
					}

					break;
				case "5":
					this.getView().byId("idSuccessfulChildren").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idExploreWolrd").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idOwnHouse").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idNiceCar").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture = oEvent.getSource().getAlt();
					if (!this.getView().byId("idSuccessfulBuisnessPerson").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamFuture", "");
					}

					// this.getView().byId("idS1WithKids").removeStyleClass("imageButtonSelected");
					break;

				default:
					break;
			}
		},

		onDreamComeTrue: function(oEvent) {
			oEvent.getSource().toggleStyleClass("familyButtonActive");
			switch (oEvent.getSource().getTooltip()) {
				case "1":
					this.getView().byId("idDreamComeTrue2").removeStyleClass("familyButtonActive");
					this.getView().byId("idDreamComeTrue3").removeStyleClass("familyButtonActive");
					this.getView().byId("idDreamComeTrue4").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamComeTrueYear = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idDreamComeTrue1").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamComeTrueYear", "");
					}
					break;
				case "2":
					this.getView().byId("idDreamComeTrue1").removeStyleClass("familyButtonActive");
					this.getView().byId("idDreamComeTrue3").removeStyleClass("familyButtonActive");
					this.getView().byId("idDreamComeTrue4").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamComeTrueYear = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idSuccessfulBuisnessPerson").hasStyleClass("imageButtonSelected")) {

						if (!this.getView().byId("idDreamComeTrue2").hasStyleClass("familyButtonActive")) {
							sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamComeTrueYear", "");
						}
					}
					break;
				case "3":
					this.getView().byId("idDreamComeTrue1").removeStyleClass("familyButtonActive");
					this.getView().byId("idDreamComeTrue2").removeStyleClass("familyButtonActive");
					this.getView().byId("idDreamComeTrue4").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamComeTrueYear = oEvent.getSource().getTooltip();
					// this.getView().byId("idS1WithKids").removeStyleClass("imageButtonSelected");
					if (!this.getView().byId("idDreamComeTrue3").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamComeTrueYear", "");
					}
					break;
				case "4":
					this.getView().byId("idDreamComeTrue1").removeStyleClass("familyButtonActive");
					this.getView().byId("idDreamComeTrue2").removeStyleClass("familyButtonActive");
					this.getView().byId("idDreamComeTrue3").removeStyleClass("familyButtonActive");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamComeTrueYear = oEvent.getSource().getTooltip();
					if (!this.getView().byId("idDreamComeTrue4").hasStyleClass("familyButtonActive")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/dreamComeTrueYear", "");
					}
					break;

				default:
					break;
			}

		},

		onWorriesHealth: function(oEvent) {
			oEvent.getSource().toggleStyleClass("imageButtonSelected");
			switch (oEvent.getSource().getAlt()) {
				case "1":
					this.getView().byId("idAnAccdent").removeStyleClass("imageButtonSelected");
					this.getView().byId("idPoorQualityHelthcare").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.worriesFamilyHealth = oEvent.getSource().getAlt();
					if (!this.getView().byId("idCriticalIllness").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/worriesFamilyHealth", "");
					}
					break;
				case "2":
					this.getView().byId("idCriticalIllness").removeStyleClass("imageButtonSelected");
					this.getView().byId("idPoorQualityHelthcare").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.worriesFamilyHealth = oEvent.getSource().getAlt();
					if (!this.getView().byId("idAnAccdent").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/worriesFamilyHealth", "");
					}
					break;
				case "3":
					this.getView().byId("idCriticalIllness").removeStyleClass("imageButtonSelected");
					this.getView().byId("idAnAccdent").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.worriesFamilyHealth = oEvent.getSource().getAlt();
					if (!this.getView().byId("idPoorQualityHelthcare").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/worriesFamilyHealth", "");
					}
					break;
				default:
					break;
			}
		},
		onHealthCoveredPolicy: function(oEvent) {
			oEvent.getSource().toggleStyleClass("imageButtonSelected");
			switch (oEvent.getSource().getAlt()) {
				case "1":
					this.getView().byId("idMyChildren").removeStyleClass("imageButtonSelected");
					this.getView().byId("idMyPartner").removeStyleClass("imageButtonSelected");
					this.getView().byId("idMySelf").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoveredBy = oEvent.getSource().getAlt();
					if (!this.getView().byId("idMyParent").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/policyCoveredBy", "");
					}
					break;
				case "2":
					this.getView().byId("idMyParent").removeStyleClass("imageButtonSelected");
					this.getView().byId("idMyPartner").removeStyleClass("imageButtonSelected");
					this.getView().byId("idMySelf").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoveredBy = oEvent.getSource().getAlt();
					if (!this.getView().byId("idMyChildren").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/policyCoveredBy", "");
					}
					break;
				case "3":
					this.getView().byId("idMyParent").removeStyleClass("imageButtonSelected");
					this.getView().byId("idMyChildren").removeStyleClass("imageButtonSelected");
					this.getView().byId("idMySelf").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoveredBy = oEvent.getSource().getAlt();
					if (!this.getView().byId("idMyPartner").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/policyCoveredBy", "");
					}
					break;
				case "4":
					this.getView().byId("idMyParent").removeStyleClass("imageButtonSelected");
					this.getView().byId("idMyPartner").removeStyleClass("imageButtonSelected");
					this.getView().byId("idMyChildren").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoveredBy = oEvent.getSource().getAlt();
					if (!this.getView().byId("idMySelf").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/policyCoveredBy", "");
					}
					break;
				default:
					break;
			}
		},
		onWhenRetire: function(oEvent) {
			oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");
			switch (oEvent.getSource().getAlt()) {
				case "1":
					this.getView().byId("idHaveAFarm").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idEnjoySocialActivities").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idRunASmallBuisness").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.wantToDoWhenRetire = oEvent.getSource().getAlt();
					if (!this.getView().byId("idTravelWithMyPartner").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/wantToDoWhenRetire", "");
					}
					break;
				case "2":
					this.getView().byId("idTravelWithMyPartner").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idEnjoySocialActivities").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idRunASmallBuisness").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.wantToDoWhenRetire = oEvent.getSource().getAlt();
					if (!this.getView().byId("idHaveAFarm").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/wantToDoWhenRetire", "");
					}
					break;
				case "3":
					this.getView().byId("idHaveAFarm").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idTravelWithMyPartner").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idRunASmallBuisness").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.wantToDoWhenRetire = oEvent.getSource().getAlt();
					if (!this.getView().byId("idEnjoySocialActivities").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/wantToDoWhenRetire", "");
					}
					break;
				case "4":
					this.getView().byId("idHaveAFarm").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idEnjoySocialActivities").removeStyleClass("imageButtonSelectedPink");
					this.getView().byId("idTravelWithMyPartner").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.wantToDoWhenRetire = oEvent.getSource().getAlt();
					if (!this.getView().byId("idRunASmallBuisness").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/wantToDoWhenRetire", "");
					}
					break;
				default:
					break;
			}
		},
		onChildeCareerPursue: function(oEvent) {
			oEvent.getSource().toggleStyleClass("imageButtonSelected");
			switch (oEvent.getSource().getAlt()) {
				case "1":
					this.getView().byId("idLawyer").removeStyleClass("imageButtonSelected");
					this.getView().byId("idTeacher").removeStyleClass("imageButtonSelected");
					this.getView().byId("idArtist").removeStyleClass("imageButtonSelected");
					this.getView().byId("idGovernmentOffice").removeStyleClass("imageButtonSelected");
					this.getView().byId("idBuisnessLeader").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.childCarrerWantPursue = oEvent.getSource().getAlt();
					if (!this.getView().byId("idDoctor").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/childCarrerWantPursue", "");
					}
					break;
				case "2":
					this.getView().byId("idDoctor").removeStyleClass("imageButtonSelected");
					this.getView().byId("idTeacher").removeStyleClass("imageButtonSelected");
					this.getView().byId("idArtist").removeStyleClass("imageButtonSelected");
					this.getView().byId("idGovernmentOffice").removeStyleClass("imageButtonSelected");
					this.getView().byId("idBuisnessLeader").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.childCarrerWantPursue = oEvent.getSource().getAlt();
					if (!this.getView().byId("idLawyer").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/childCarrerWantPursue", "");
					}
					break;
				case "3":
					this.getView().byId("idLawyer").removeStyleClass("imageButtonSelected");
					this.getView().byId("idDoctor").removeStyleClass("imageButtonSelected");
					this.getView().byId("idArtist").removeStyleClass("imageButtonSelected");
					this.getView().byId("idGovernmentOffice").removeStyleClass("imageButtonSelected");
					this.getView().byId("idBuisnessLeader").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.childCarrerWantPursue = oEvent.getSource().getAlt();
					if (!this.getView().byId("idTeacher").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/childCarrerWantPursue", "");
					}
					break;
				case "4":
					this.getView().byId("idLawyer").removeStyleClass("imageButtonSelected");
					this.getView().byId("idTeacher").removeStyleClass("imageButtonSelected");
					this.getView().byId("idDoctor").removeStyleClass("imageButtonSelected");
					this.getView().byId("idGovernmentOffice").removeStyleClass("imageButtonSelected");
					this.getView().byId("idBuisnessLeader").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.childCarrerWantPursue = oEvent.getSource().getAlt();
					if (!this.getView().byId("idArtist").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/childCarrerWantPursue", "");
					}
					break;
				case "5":
					this.getView().byId("idLawyer").removeStyleClass("imageButtonSelected");
					this.getView().byId("idTeacher").removeStyleClass("imageButtonSelected");
					this.getView().byId("idArtist").removeStyleClass("imageButtonSelected");
					this.getView().byId("idDoctor").removeStyleClass("imageButtonSelected");
					this.getView().byId("idBuisnessLeader").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.childCarrerWantPursue = oEvent.getSource().getAlt();
					if (!this.getView().byId("idGovernmentOffice").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/childCarrerWantPursue", "");
					}
					break;
				case "6":
					this.getView().byId("idLawyer").removeStyleClass("imageButtonSelected");
					this.getView().byId("idTeacher").removeStyleClass("imageButtonSelected");
					this.getView().byId("idArtist").removeStyleClass("imageButtonSelected");
					this.getView().byId("idGovernmentOffice").removeStyleClass("imageButtonSelected");
					this.getView().byId("idDoctor").removeStyleClass("imageButtonSelected");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.childCarrerWantPursue = oEvent.getSource().getAlt();
					if (!this.getView().byId("idBuisnessLeader").hasStyleClass("imageButtonSelected")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/childCarrerWantPursue", "");
					}
					break;
				default:
					break;
			}
		},
		onLiveAfterRetirement: function(oEvent) {
			oEvent.getSource().toggleStyleClass("imageButtonSelectedPink");
			switch (oEvent.getSource().getAlt()) {
				case "1":
					this.getView().byId("idStayWhereIAm").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.liveAfterRetirement = oEvent.getSource().getAlt();
					if (!this.getView().byId("idGoBackToHomeTown").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/liveAfterRetirement", "");
					}
					break;
				case "2":
					this.getView().byId("idGoBackToHomeTown").removeStyleClass("imageButtonSelectedPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.liveAfterRetirement = oEvent.getSource().getAlt();
					if (!this.getView().byId("idStayWhereIAm").hasStyleClass("imageButtonSelectedPink")) {
						sap.ui.getCore().getModel("GData").setProperty("/GloBalJson/liveAfterRetirement", "");
					}
					break;
				default:
					break;
			}
		},
		handleNavNext: function(evt) {
			var navCon = this.byId("navCon10");
			var oDataModel = this.getView().getModel("dataModel");
			var userData = sap.ui.getCore().getModel("GData").oData.GloBalJson;
			var domainSelected = userData.domainSelected;
			if (oDataModel.getProperty("/currentPage") === 2 && userData.worriesFamilyHealth === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 3 && userData.policyCoveredBy === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if ((oDataModel.getProperty("/currentPage") === 4 && userData.familyMonthlySaved === "") || (oDataModel.getProperty(
					"/currentPage") === 4 && isNaN(userData.familyMonthlySaved[0]))) {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 8 && userData.selectedChildName === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 9 && userData.childCarrerWantPursue === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 10 && userData.educationCity === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if ((oDataModel.getProperty("/currentPage") === 11 && userData.familyMonthlySaved === "") || (oDataModel.getProperty(
					"/currentPage") === 11 && isNaN(userData.familyMonthlySaved[0]))) {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 15 && userData.familyButtonSupportedYear === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if ((oDataModel.getProperty("/currentPage") === 16 && userData.familyNeedSuportCurrency === "00") || (oDataModel.getProperty(
					"/currentPage") === 16 && isNaN(userData.familyNeedSuportCurrency[0]))) {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if ((oDataModel.getProperty("/currentPage") === 17 && userData.familyMonthlySaved === "") || (oDataModel.getProperty(
					"/currentPage") === 17 && isNaN(userData.familyMonthlySaved[0]))) {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 21 && userData.dreamFuture === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 22 && userData.dreamComeTrueYear === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if ((oDataModel.getProperty("/currentPage") === 23 && userData.familyMonthlySaved === "") || (oDataModel.getProperty(
					"/currentPage") === 23 && isNaN(userData.familyMonthlySaved[0]))) {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 27 && userData.retirementAge === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 28 && userData.liveAfterRetirement === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if (oDataModel.getProperty("/currentPage") === 29 && userData.wantToDoWhenRetire === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return true;
			} else if ((oDataModel.getProperty("/currentPage") === 30 && userData.familyMonthlySaved === "") || (oDataModel.getProperty(
					"/currentPage") === 30 && isNaN(userData.familyMonthlySaved[0]))) {
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
			switch (domainSelected) {
				case "EDUCATION":
					if (oDataModel.getProperty("/currentPage") != 12) {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					} else if (oDataModel.getProperty("/currentPage") === 12) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("solutionpage");
					}
					break;
				case "HEALTH":
					if (oDataModel.getProperty("/currentPage") != 5) {

						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					} else if (oDataModel.getProperty("/currentPage") === 5) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("solutionpage");
					}
					break;
				case "FAMILY":
					if (oDataModel.getProperty("/currentPage") != 18) {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					} else if (oDataModel.getProperty("/currentPage") === 18) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("solutionpage");
					}
					break;
				case "DREAMS":

					if (oDataModel.getProperty("/currentPage") != 24) {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					} else if (oDataModel.getProperty("/currentPage") === 24) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("solutionpage");
					}
					break;
				case "RETIREMENT":
					if (oDataModel.getProperty("/currentPage") != 31) {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");

					} else if (oDataModel.getProperty("/currentPage") === 31) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("solutionpage");

					}
					break;
			}
		},
		handleNavPrev: function(evt) {
			var navCon = this.byId("navCon10");
			var oDataModel = this.getView().getModel("dataModel");
			var domainSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected;
			switch (domainSelected) {
				case "EDUCATION":
					if (oDataModel.getProperty("/currentPage") === 6) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("interestepage");
					} else {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					}
					break;
				case "HEALTH":
					if (oDataModel.getProperty("/currentPage") === 0) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("interestepage");
					} else {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					}
					break;
				case "FAMILY":
					if (oDataModel.getProperty("/currentPage") === 13) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("interestepage");

					} else {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					}
					break;
				case "DREAMS":
					if (oDataModel.getProperty("/currentPage") === 19) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("interestepage");
					} else {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					}
					break;
				case "RETIREMENT":
					if (oDataModel.getProperty("/currentPage") === 25) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("interestepage");

					} else {
						oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
						navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
					}
					break;
			}
			// oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
		},
		hello1: function(str) {

			var splitStr = str.toLowerCase().split(' ');
			for (var i = 0; i < splitStr.length; i++) {
				// You do not need to check if i is larger than splitStr length, as your for does that for you
				// Assign it back to the array
				splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
			}
			// Directly return the joined string
			return splitStr.join(' ');
		},

	});

});