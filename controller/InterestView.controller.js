sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.InterestView", {

		onInit: function(oEvent) {

			var that = this;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this._onObjectMatched, this);

			var interest2 = {
				"interestPoints": {
					"family": 0,
					"health": 0,
					"education": 0,
					"retirement": 0,
					"dream": 0

				}

			};
			sap.ui.getCore().setModel(interest2, "abc");

			this.getView().setModel(new sap.ui.model.json.JSONModel({
				// currentPage: 0,
				// totalPages: this.byId("navCon5").getPages().length,
				// enabled: false,
				// dob: new Date(),
				images: {
					menubar: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/Menubar.svg"),
					interestBack: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/interestBackground.png"),
					interest1: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/interest1.svg"),

				}
			}), "dataModel");

		},

		_onObjectMatched: function(oEvent) {
			debugger;
			$(".sidenav ").removeClass("expanded");

			var that = this;
			var userData = sap.ui.getCore().getModel("GData").oData.GloBalJson;
			var totalChildren = sap.ui.getCore().getModel("GData").oData.GloBalJson.totalFemale + sap.ui.getCore().getModel("GData").oData.GloBalJson
				.totalMale;
			var jsonModel = sap.ui.getCore().getModel("GData").oData.GloBalJson;
			var childAge1 = new Date().getFullYear() - new Date(jsonModel.Child1Birthdt).getFullYear();
			var childAge2 = new Date().getFullYear() - new Date(jsonModel.Child2Birthdt).getFullYear();
			var childAge3 = new Date().getFullYear() - new Date(jsonModel.Child3Birthdt).getFullYear();
			var childAge4 = new Date().getFullYear() - new Date(jsonModel.Child4Birthdt).getFullYear();
			var childAge5 = new Date().getFullYear() - new Date(jsonModel.Child5Birthdt).getFullYear();
			var childAge6 = new Date().getFullYear() - new Date(jsonModel.Child6Birthdt).getFullYear();
			if (totalChildren === "") {
				totalChildren = 0;
			}
			if (isNaN(childAge1)) {
				childAge1 = 0;
			}
			if (isNaN(childAge2)) {
				childAge2 = 0;
			}
			if (isNaN(childAge3)) {
				childAge3 = 0;
			}
			if (isNaN(childAge4)) {
				childAge4 = 0;
			}
			if (isNaN(childAge5)) {
				childAge5 = 0;
			}
			if (isNaN(childAge6)) {
				childAge6 = 0;
			}
			this.getView().setModel(new sap.ui.model.json.JSONModel({

				images: {
					interest: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/interest.svg"),
					interestBack: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/interestBackground.png"),
					interest1: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/english/interest1.svg"),

				}
			}), "dataModel");

			// Check The selected language En
			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				//Hiding Vitnam Bubble from the DOM if Language is English
				$("object")[1].classList.add("hidden");
				//removing  English Bubble from the DOM if Language is English
				$("object")[0].classList.remove("hidden");
				var sCallbackCalculatePoints = function() {
					this.getView().byId("myObject").detachBrowserEvent("load", sCallbackCalculatePoints);

					var basicSize = 162;
					var testCal = 0;
					var age = new Date(userData.dobOfPerson);
					var date = new Date();
					age = date.getFullYear() - age.getFullYear();
					var sSpAge = userData.dobOfPartner ? date.getFullYear() - new Date(userData.dobOfPartner).getFullYear() : 0;

					// var intModel = new sap.ui.model.json.JSONModel();

					this.getView().getModel().callFunction("/CalculateWeightedPoints", {
						urlParameters: {
							"Age": age,
							"Marst": userData.marryStatusOfPerson,
							"Children": totalChildren,
							"ChildAge1": childAge1,
							"ChildAge2": childAge2,
							"ChildAge3": childAge3,
							"ChildAge4": childAge4,
							"ChildAge5": childAge5,
							"ChildAge6": childAge6,
							"Living": userData.livingArrangement,
							"Concern": userData.topPriorities,
							"Concern2": userData.topPriorities1,
							"SpAge": sSpAge
						},
						success: function(oData, response) {

							var data = {
								"results": [{
									"Family": oData.results[0].Points,
									"Education": oData.results[1].Points,
									"Health": oData.results[2].Points,
									"Retirement": oData.results[3].Points,
									"Dreams": oData.results[4].Points,

								}]
							};

							var array = [];
							for (var a = 0; a <= 4; a++) {
								array[a] = oData.results[a].Domain;
							}

							var intModel1 = new sap.ui.model.json.JSONModel(data);

							var oSvg = $("object")[0].contentDocument.documentElement;
							//Check Marital Status is Single or Married or All Children Age Above 22
							debugger;
							if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "1" ||
								sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "2" ||
								sap.ui.getCore().getModel("GData").oData.GloBalJson.childrenFlag === true
							) {
								oSvg.getElementsByClassName("st14")[0].removeAttribute("r", 0); //Hide the ChildrenCircle

								oSvg.getElementsByClassName("educationBubble")[1].textContent = "";
								oSvg.getElementsByClassName("educationBubble")[2].textContent = "";

								//Retirement
								oSvg.getElementsByClassName("st11")[0].setAttribute("cx", 1386.32);
								oSvg.getElementsByClassName("st11")[0].setAttribute("cy", 977.41);
								// $(".st11").setAttribute("cx", "1386.32");
								// $(".st11").setAttribute("cy", "977.41");
								oSvg.getElementsByClassName("retirementBubble")[1].setAttribute("transform", 'matrix(1 0 0 1 1253.83 1000.03)');

								// $(".retirementTransform").setAttribute("transform", 'matrix(1 0 0 1 1253.83 1000.03)');
								//Health
								oSvg.getElementsByClassName("st3")[0].setAttribute("cx", 1386);
								oSvg.getElementsByClassName("st3")[0].setAttribute("cy", 278);
								oSvg.getElementsByClassName("healthBubble")[1].setAttribute("transform", 'matrix(1 0 0 1 1300.76 300.6)');

								//Family
								oSvg.getElementsByClassName("st7")[0].setAttribute("cx", 635);
								oSvg.getElementsByClassName("st7")[0].setAttribute("cy", 921);
								oSvg.getElementsByClassName("familyBubble")[1].setAttribute("transform", 'matrix(1 0 0 1 525.15 945.36)');

								//Dream
								oSvg.getElementsByClassName("st13")[0].setAttribute("cx", 670.3);
								oSvg.getElementsByClassName("st13")[0].setAttribute("cy", 303.6);
								oSvg.getElementsByClassName("dreamBubble")[1].setAttribute("transform", 'matrix(1 0 0 1 597.76 310.6)');

							} else {

								oSvg.getElementsByClassName("st14")[0].setAttribute("r", 162);
								//Hide the ChildrenCircle

								oSvg.getElementsByClassName("educationBubble")[1].textContent = "CHILDREN";
								oSvg.getElementsByClassName("educationBubble")[2].textContent = "EDUCATION";

								//Retirement
								oSvg.getElementsByClassName("st11")[0].setAttribute("cx", 1526);
								oSvg.getElementsByClassName("st11")[0].setAttribute("cy", 775);
								oSvg.getElementsByClassName("retirementBubble")[1].setAttribute("transform", 'matrix(1 0 0 1 1380.83 786.03)');

								//Health
								oSvg.getElementsByClassName("st3")[0].setAttribute("cx", 1438);
								oSvg.getElementsByClassName("st3")[0].setAttribute("cy", 315);
								oSvg.getElementsByClassName("healthBubble")[1].setAttribute("transform", 'matrix(1 0 0 1 1354.5601 329.03)');

								//Family
								oSvg.getElementsByClassName("st7")[0].setAttribute("cx", 520);
								oSvg.getElementsByClassName("st7")[0].setAttribute("cy", 711);
								oSvg.getElementsByClassName("familyBubble")[1].setAttribute("transform", 'matrix(1 0 0 1 417 735.36)');

								//Dream
								oSvg.getElementsByClassName("st13")[0].setAttribute("cx", 697.3);
								oSvg.getElementsByClassName("st13")[0].setAttribute("cy", 236.6);
								oSvg.getElementsByClassName("dreamBubble")[1].setAttribute("transform", 'matrix(1 0 0 1 620.76 250.6)');

							}

							var sortedResults = oData.results.sort(function(a, b) {
								return b.Points - a.Points;
							});

							var aMultipliers = [1.4, 1.2, 1.1, 1.0, 0.95];
							sortedResults.forEach(function(item, index) {
								var domainClass = "";
								var sMultiplier = aMultipliers[index];
								switch (item.Domain) {
									case "RETIREMENT":
										domainClass = "retirementBubble";
										break;
									case "HEALTH":
										domainClass = "healthBubble";
										break;
									case "EDUCATION":
										domainClass = "educationBubble";
										break;
									case "FAMILY":
										domainClass = "familyBubble";
										break;
									case "DREAMS":
										domainClass = "dreamBubble";
										break;
								}
								if (item.Domain === "EDUCATION") {
									if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" && sap.ui.getCore().getModel(
											"GData")
										.oData.GloBalJson.childrenFlag === false ||
										sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4" &&
										sap.ui.getCore().getModel("GData").oData.GloBalJson.childrenFlag === false) {
										oSvg.getElementsByClassName(domainClass).item(0).setAttribute("r", basicSize * sMultiplier);
										// oSvg.getElementsByClassName(domainClass)[1].textContent = item.Domain + "(" + item.Points + ")";
									}
								} else {
									oSvg.getElementsByClassName(domainClass).item(0).setAttribute("r", basicSize * sMultiplier);
									 //oSvg.getElementsByClassName(domainClass)[1].textContent = item.Domain ;
									//Points Display
									// oSvg.getElementsByClassName(domainClass)[1].textContent = item.Domain + "(" + item.Points + ")"; 
								}

							}.bind(this));;

							//Table Data

							//Text Click Event
							oSvg.getElementsByClassName("healthBubble")[1].onclick = function() {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "HEALTH";
								oSvg.getElementsByClassName("healthBubble").item(0).setAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("familyBubble").item(0).removeAttribute("filter", "url(#blurMe)");

								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								}

								oSvg.getElementsByClassName("retirementBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("dreamBubble").item(0).removeAttribute("filter", "url(#blurMe)");

							}.bind(this);
							oSvg.getElementsByClassName("retirementBubble")[1].onclick = function() {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "RETIREMENT";
								oSvg.getElementsByClassName("retirementBubble").item(0).setAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("familyBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("healthBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								}

								oSvg.getElementsByClassName("dreamBubble").item(0).removeAttribute("filter", "url(#blurMe)");

							}.bind(this);
							oSvg.getElementsByClassName("educationBubble")[1].onclick = function() {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "EDUCATION";
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).setAttribute("filter", "url(#blurMe)");
								}

								oSvg.getElementsByClassName("familyBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("healthBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("retirementBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("dreamBubble").item(0).removeAttribute("filter", "url(#blurMe)");

							}.bind(this);
							oSvg.getElementsByClassName("familyBubble")[1].onclick = function() {

								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "FAMILY";
								oSvg.getElementsByClassName("familyBubble").item(0).setAttribute("filter", "url(#blurMe)"); //Family
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								}

								oSvg.getElementsByClassName("healthBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("retirementBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("dreamBubble").item(0).removeAttribute("filter", "url(#blurMe)");
							}.bind(this);
							oSvg.getElementsByClassName("dreamBubble")[1].onclick = function() {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "DREAMS";
								oSvg.getElementsByClassName("dreamBubble").item(0).setAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("familyBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("healthBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("retirementBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								}

							}.bind(this);

							//Setting Effect

							oSvg.getElementsByClassName("familyBubble").item(0).onclick = function(oEvent) {
								var selectedDomain = oEvent.target.classList.value;
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "FAMILY";
								oSvg.getElementsByClassName("familyBubble").item(0).setAttribute("filter", "url(#blurMe)"); //Family
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								}

								oSvg.getElementsByClassName("healthBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("retirementBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("dreamBubble").item(0).removeAttribute("filter", "url(#blurMe)");

							}.bind(this);
							oSvg.getElementsByClassName("educationBubble").item(0).onclick = function(oEvent) {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "EDUCATION";
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).setAttribute("filter", "url(#blurMe)");
								}

								oSvg.getElementsByClassName("familyBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("healthBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("retirementBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("dreamBubble").item(0).removeAttribute("filter", "url(#blurMe)");

							}.bind(this);
							oSvg.getElementsByClassName("healthBubble").item(0).onclick = function(oEvent) {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "HEALTH";
								oSvg.getElementsByClassName("healthBubble").item(0).setAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("familyBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								}

								oSvg.getElementsByClassName("retirementBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("dreamBubble").item(0).removeAttribute("filter", "url(#blurMe)");
							}.bind(this);
							oSvg.getElementsByClassName("retirementBubble").item(0).onclick = function(oEvent) {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "RETIREMENT";
								oSvg.getElementsByClassName("retirementBubble").item(0).setAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("familyBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("healthBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								}

								oSvg.getElementsByClassName("dreamBubble").item(0).removeAttribute("filter", "url(#blurMe)");
							}.bind(this);
							oSvg.getElementsByClassName("dreamBubble").item(0).onclick = function(oEvent) {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "DREAMS";
								oSvg.getElementsByClassName("dreamBubble").item(0).setAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("familyBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("healthBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								oSvg.getElementsByClassName("retirementBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubble").item(0).removeAttribute("filter", "url(#blurMe)");
								}

							}.bind(this);

						}.bind(this),
						error: function(response) {

						}

					});

				}.bind(this);
				this.getView().byId("myObject").attachBrowserEvent("load", sCallbackCalculatePoints);

			} else {

				//Language is Vietnam
				//If Language is Vietnam Hide the English Bubble and display Vietname
				$("object")[0].classList.add("hidden");
				$("object")[1].classList.remove("hidden");
				var sCallbackCalculatePoints = function() {
					this.getView().byId("myObject").detachBrowserEvent("load", sCallbackCalculatePoints);

					var basicSize = 162;
					var testCal = 0;
					var age = new Date(userData.dobOfPerson);
					var date = new Date();
					age = date.getFullYear() - age.getFullYear();
					var sSpAge = userData.dobOfPartner ? date.getFullYear() - new Date(userData.dobOfPartner).getFullYear() : 0;

					// var intModel = new sap.ui.model.json.JSONModel();

					this.getView().getModel().callFunction("/CalculateWeightedPoints", {
						urlParameters: {
							"Age": age,
							"Marst": userData.marryStatusOfPerson,
							"Children": totalChildren,
							"ChildAge1": childAge1,
							"ChildAge2": childAge2,
							"ChildAge3": childAge3,
							"ChildAge4": childAge4,
							"ChildAge5": childAge5,
							"ChildAge6": childAge6,
							"Living": userData.livingArrangement,
							"Concern": userData.topPriorities,
							"Concern2": userData.topPriorities1,
							"SpAge": sSpAge
						},
						success: function(oData, response) {

							var data = {
								"results": [{
									"Family": oData.results[0].Points,
									"Education": oData.results[1].Points,
									"Health": oData.results[2].Points,
									"Retirement": oData.results[3].Points,
									"Dreams": oData.results[4].Points,

								}]
							};

							// var array = [];
							// for (var a = 0; a <= 4; a++) {
							// 	array[a] = oData.results[a].Points;
							// }
							// var l = array.length;
							// var max = 0.0;
							// var i;
							// var indexOfMax = 0;
							// //Finding Maximum points and the Index of Maximum Points
							// for (i = 0; l > i; i++) {
							// 	var t = parseFloat(array[i]);
							// 	if (t > max) {

							// 		max = t;
							// 		indexOfMax = i;
							// 	}
							// }
							var intModel1 = new sap.ui.model.json.JSONModel(data);

							var oSvg = $("object")[1].contentDocument.documentElement;

							if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "1" ||
								sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "2" ||
								sap.ui.getCore().getModel("GData").oData.GloBalJson.childrenFlag === true
							) {
								oSvg.getElementsByClassName("st10")[0].removeAttribute("r", 0); //Hide the ChildrenCircle

								oSvg.getElementsByClassName("educationBubbleVi")[1].textContent = "";
								oSvg.getElementsByClassName("educationBubbleVi")[2].textContent = "";

								//Retirement
								oSvg.getElementsByClassName("st8")[0].setAttribute("cx", 1386.32);
								oSvg.getElementsByClassName("st8")[0].setAttribute("cy", 977.41);
								// $(".st11").setAttribute("cx", "1386.32");
								// $(".st11").setAttribute("cy", "977.41");
								oSvg.getElementsByClassName("retirementBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 1300.56 960.64)');
								oSvg.getElementsByClassName("retirementBubbleVi")[2].setAttribute("transform", 'matrix(1 0 0 1 1313.56 1007.03)');
								oSvg.getElementsByClassName("retirementBubbleVi")[3].setAttribute("transform", 'matrix(1 0 0 1 1310.56 1050.03)');

								// $(".retirementTransform").setAttribute("transform", 'matrix(1 0 0 1 1253.83 1000.03)');
								//Health
								oSvg.getElementsByClassName("st3")[0].setAttribute("cx", 1386);
								oSvg.getElementsByClassName("st3")[0].setAttribute("cy", 278);
								oSvg.getElementsByClassName("healthBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 1300.76 280.6)');
								oSvg.getElementsByClassName("healthBubbleVi")[2].setAttribute("transform", 'matrix(1 0 0 1 1306.67 319.65)');

								//Family
								oSvg.getElementsByClassName("st6")[0].setAttribute("cx", 635);
								oSvg.getElementsByClassName("st6")[0].setAttribute("cy", 921);
								oSvg.getElementsByClassName("familyBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 535.15 920.36)');
								oSvg.getElementsByClassName("familyBubbleVi")[2].setAttribute("transform", 'matrix(1 0 0 1 540.19 965.47)');

								//Dream
								oSvg.getElementsByClassName("st9")[0].setAttribute("cx", 670.3);
								oSvg.getElementsByClassName("st9")[0].setAttribute("cy", 303.6);
								oSvg.getElementsByClassName("dreamBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 597.76 300.6)');
								oSvg.getElementsByClassName("dreamBubbleVi")[2].setAttribute("transform", 'matrix(1 0 0 1 593.44 343.22)');

							} else {

								oSvg.getElementsByClassName("st10")[0].setAttribute("r", 162);
								//Hide the ChildrenCircle

								oSvg.getElementsByClassName("educationBubbleVi")[1].textContent = "CONTRẺ";
								oSvg.getElementsByClassName("educationBubbleVi")[2].textContent = "CỦA BẠN";
								// oSvg.getElementsByClassName("educationBubbleVi")[0].setAttribute("transform", 'matrix(1 0 0 1 942.2 1104.9399)');
								// oSvg.getElementsByClassName("educationBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 939.18 1144.9399)');

								//Retirement
								oSvg.getElementsByClassName("st8")[0].setAttribute("cx", 1526);
								oSvg.getElementsByClassName("st8")[0].setAttribute("cy", 775);
								oSvg.getElementsByClassName("retirementBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 1420.56 740.64)');
								oSvg.getElementsByClassName("retirementBubbleVi")[2].setAttribute("transform", 'matrix(1 0 0 1 1432.56 786.64)');
								oSvg.getElementsByClassName("retirementBubbleVi")[3].setAttribute("transform", 'matrix(1 0 0 1 1426.83 825.03)');

								//Health
								oSvg.getElementsByClassName("st3")[0].setAttribute("cx", 1438);
								oSvg.getElementsByClassName("st3")[0].setAttribute("cy", 315);
								oSvg.getElementsByClassName("healthBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 1354.5601 317.03)');
								oSvg.getElementsByClassName("healthBubbleVi")[2].setAttribute("transform", 'matrix(1 0 0 1 1361.67 353.65)');

								//Family
								oSvg.getElementsByClassName("st6")[0].setAttribute("cx", 520);
								oSvg.getElementsByClassName("st6")[0].setAttribute("cy", 711);
								oSvg.getElementsByClassName("familyBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 417 703.36)');
								oSvg.getElementsByClassName("familyBubbleVi")[2].setAttribute("transform", 'matrix(1 0 0 1 417.19 747.64)');

								//Dream
								oSvg.getElementsByClassName("st9")[0].setAttribute("cx", 697.3);
								oSvg.getElementsByClassName("st9")[0].setAttribute("cy", 236.6);
								oSvg.getElementsByClassName("dreamBubbleVi")[1].setAttribute("transform", 'matrix(1 0 0 1 620.76 232.6)');
								oSvg.getElementsByClassName("dreamBubbleVi")[2].setAttribute("transform", 'matrix(1 0 0 1 612.44 273.22)');

							}
							var sortedResults1 = oData.results.sort(function(a, b) {
								return b.Points - a.Points;
							});

							// var sortedResults1 = oData.results.sort(function(a, b) {
							// 	return (a.Points > b.Points) ? 1 : ((b.Points > a.Points) ? -1 : 0);
							// });
							// sortedResults1.reverse();
							var aMultipliers1 = [1.4, 1.2, 1.1, 1.0, 0.95];
							sortedResults1.forEach(function(item1, index1) {
								var domainClass1 = "";
								var sMultiplier1 = aMultipliers1[index1];
								switch (item1.Domain) {
									case "RETIREMENT":
										domainClass1 = "retirementBubbleVi";
										break;
									case "HEALTH":
										domainClass1 = "healthBubbleVi";
										break;
									case "EDUCATION":
										domainClass1 = "educationBubbleVi";
										break;
									case "FAMILY":
										domainClass1 = "familyBubbleVi";
										break;
									case "DREAMS":
										domainClass1 = "dreamBubbleVi";
										break;
								}
								if (item1.Domain === "EDUCATION") {
									if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" && sap.ui.getCore().getModel(
											"GData")
										.oData.GloBalJson.childrenFlag === false ||
										sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4" &&
										sap.ui.getCore().getModel("GData").oData.GloBalJson.childrenFlag === false) {
										oSvg.getElementsByClassName(domainClass1).item(0).setAttribute("r", basicSize * sMultiplier1);

										// oSvg.getElementsByClassName(domainClass1)[1].textContent = item1.Domain + "(" + item1.Points + ")";

									}
								} else {
									oSvg.getElementsByClassName(domainClass1).item(0).setAttribute("r", basicSize * sMultiplier1);

									// oSvg.getElementsByClassName(domainClass1)[1].textContent = item1.Domain + "(" + item1.Points + ")";
								}

							}.bind(this));;

							//Text Click Event
							oSvg.getElementsByClassName("healthBubbleVi")[1].onclick = function() {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "HEALTH";
								oSvg.getElementsByClassName("healthBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("familyBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");

								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								}

								oSvg.getElementsByClassName("retirementBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("dreamBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");

							}.bind(this);
							oSvg.getElementsByClassName("retirementBubbleVi")[1].onclick = function() {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "RETIREMENT";
								oSvg.getElementsByClassName("retirementBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("familyBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("healthBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								}

								oSvg.getElementsByClassName("dreamBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");

							}.bind(this);
							oSvg.getElementsByClassName("educationBubbleVi")[1].onclick = function() {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "EDUCATION";
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)");
								}

								oSvg.getElementsByClassName("familyBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("healthBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("retirementBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("dreamBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");

							}.bind(this);
							oSvg.getElementsByClassName("familyBubbleVi")[1].onclick = function() {

								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "FAMILY";
								oSvg.getElementsByClassName("familyBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)"); //Family
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								}

								oSvg.getElementsByClassName("healthBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("retirementBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("dreamBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
							}.bind(this);
							oSvg.getElementsByClassName("dreamBubbleVi")[1].onclick = function() {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "DREAMS";
								oSvg.getElementsByClassName("dreamBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("familyBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("healthBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("retirementBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								}

							}.bind(this);

							//Setting Effect

							oSvg.getElementsByClassName("familyBubbleVi").item(0).onclick = function(oEvent) {
								var selectedDomain = oEvent.target.classList.value;
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "FAMILY";
								oSvg.getElementsByClassName("familyBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)"); //Family
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								}

								oSvg.getElementsByClassName("healthBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("retirementBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("dreamBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");

							}.bind(this);
							oSvg.getElementsByClassName("educationBubbleVi").item(0).onclick = function(oEvent) {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "EDUCATION";
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)");
								}

								oSvg.getElementsByClassName("familyBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("healthBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("retirementBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("dreamBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");

							}.bind(this);
							oSvg.getElementsByClassName("healthBubbleVi").item(0).onclick = function(oEvent) {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "HEALTH";
								oSvg.getElementsByClassName("healthBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("familyBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								}

								oSvg.getElementsByClassName("retirementBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("dreamBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
							}.bind(this);
							oSvg.getElementsByClassName("retirementBubbleVi").item(0).onclick = function(oEvent) {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "RETIREMENT";
								oSvg.getElementsByClassName("retirementBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("familyBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("healthBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								}

								oSvg.getElementsByClassName("dreamBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
							}.bind(this);
							oSvg.getElementsByClassName("dreamBubbleVi").item(0).onclick = function(oEvent) {
								sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = "DREAMS";
								oSvg.getElementsByClassName("dreamBubbleVi").item(0).setAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("familyBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("healthBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								oSvg.getElementsByClassName("retirementBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "3" ||
									sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "4") {
									oSvg.getElementsByClassName("educationBubbleVi").item(0).removeAttribute("filter", "url(#blurMe1)");
								}

							}.bind(this);

						}.bind(this),
						error: function(response) {

						}

					});

				}.bind(this);
				this.getView().byId("myObject1").attachBrowserEvent("load", sCallbackCalculatePoints);
			}

			sap.ui.getCore().getModel("GData");

		},

		onDomainSelected: function(oEvent) {

			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected === "") {
				sap.m.MessageBox.information(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null, // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					styleClass: "", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return;
			}

			switch (sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected) {
				case "DREAMS":
					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
				case "FAMILY":

					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
				case "HEALTH":
					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
				case "EDUCATION":
					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
				case "RETIREMENT":
					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
			}

		},
		navToAboutYou: function() {
			sap.ui.getCore().getModel("GData").oData.GloBalJson.backToAboutYou = "backtToAboutYou";

			sap.ui.core.UIComponent.getRouterFor(this).navTo("first");
		},
		onFamily: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("familypage");
		},
		onDream: function() {

			sap.ui.core.UIComponent.getRouterFor(this).navTo("dreamspage");
		},
		onHealth: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("helathpage");
		},
		onEducation: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("educatiopage");
		},
		onRetirement: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("retirementpage");
		},

		testing: function(oEvent) {

			switch (oEvent.getSource().getTooltip()) {
				case "DREAMS":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
				case "FAMILY":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
				case "HEALTH":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
				case "EDUCATION":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
				case "RETIREMENT":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					// sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected = oEvent.getSource().getTooltip();
					sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					break;
			}

		},

	});

});