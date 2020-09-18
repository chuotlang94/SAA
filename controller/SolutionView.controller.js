sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/saaprojSAADevlopment/utils/formatter"

], function(Controller, formatter) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.SolutionView", {
		formatter: formatter,

		capitalize: function(str) {

			var splitStr = str.toLowerCase().split(' ');
			for (var i = 0; i < splitStr.length; i++) {
				// You do not need to check if i is larger than splitStr length, as your for does that for you
				// Assign it back to the array
				splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
			}
			// Directly return the joined string
			return splitStr.join(' ');
		},
		onInit: function(oEvent) {

			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.attachRouteMatched(this.routeMatched, this);

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this._onObjectMatched, this);
			solutionDream = this;
			// this.personAgeCal();
			// this.partnerAgeCal();
			// this.familyCalculation();
			// var model = new sap.ui.model.json.JSONModel();
			// model.setData({
			// 	number: sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson.split(" ")[0],
			// 	partner: sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPartner.split(" ")[0],
			// 	personAge: sap.ui.getCore().getModel("GData").oData.GloBalJson.personAge,
			// 	partnerAge: sap.ui.getCore().getModel("GData").oData.GloBalJson.partnerAge
			// });

			// this.getView().setModel(model, "view");
			// this.getView().getModel("view").refresh(true);
			var genderModel = {
				"GenderOdata": {
					"genderSelection": "",
					"personName": "",
					"partnerGender": "",
					"partnerName": "",
					"retirementGenderSelection": ""
				}
			};
			var genderModel = new sap.ui.model.json.JSONModel(genderModel);
			this.getView().setModel(genderModel, "genData");
			sap.ui.getCore().setModel(genderModel, "genData");

			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navConSolution").getPages().length,
				enabled: false,
				dob: new Date(),
				images: {

					children43: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children43.jpg"),
					children44: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children44.jpg"),
					children45: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children45.jpg"),
					children46: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children46.jpg"),
					children47: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children47.jpg"),
					48: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/48.jpg"),
					49: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/49.jpg"),
					50: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/50.jpg"),
					51: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/51.jpg"),
					52: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/52.jpg"),
					53: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/53.jpg"),
					dream54: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream54.jpg"),
					dream55: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream55.jpg"),
					dream56: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream56.jpg"),
					dream57: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream57.jpg"),
					dream58: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream58.jpg"),
				}
			}), "dataModel");
		},

		personAgeCal: function() {

			var dobOfPerson = sap.ui.getCore().getModel("GData").oData.GloBalJson.dobOfPerson;
			var age = new Date(dobOfPerson);
			var date = new Date();
			age = date.getFullYear() - age.getFullYear();
			sap.ui.getCore().getModel("GData").oData.GloBalJson.personAge = age;
		},
		partnerAgeCal: function() {
			var dobOfPerson = sap.ui.getCore().getModel("GData").oData.GloBalJson.dobOfPartner;
			var age = new Date(dobOfPerson);
			var date = new Date();
			age = date.getFullYear() - age.getFullYear();
			sap.ui.getCore().getModel("GData").oData.GloBalJson.partnerAge = age;
		},
		livingArrangement: function() {
			var livingArra = sap.ui.getCore().getModel("GData").oData.GloBalJson.livingArrangement;
			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {

				switch (livingArra) {
					case "WITHFAMILY":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.livingData = "You are living with your family.";
						break;
					case "RENTING":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.livingData = " You are renting a house .";
						break;
					case "OWNEDHOME":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.livingData = "You are living with owned house.";
						break;
				}

			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				switch (livingArra) {
					case "WITHFAMILY":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.livingData = "Bạn đang sống cùng với bố mẹ.";
						break;
					case "RENTING":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.livingData = "Bạn đang đi thuê nhà.";
						break;
					case "OWNEDHOME":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.livingData = "Bạn đang sở hữu nhà riêng.";
						break;
				}
			}

		},
		dreamFuture: function() {
			var dreamFuture = sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture;
			var dreamYears = sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamComeTrueYear;
			switch (dreamYears) {
				case "1":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamYear = "10";
					break;
				case "2":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamYear = "10-15";
					break;
				case "3":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamYear = "15-20";
					break;
				case "4":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamYear = "20";
					break;
			}

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				switch (dreamFuture) {
					case "1": //Nice Car
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "have a nice car";
						break;
					case "2": //SuccessfulChildren
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "raise successful, happy children";
						break;
					case "3": //Explore the World
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "explore the world";
						break;
					case "4": //Own House
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "buy a house";
						break;
					case "5": //Successful Buisness
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "run a business";
						break;
				}
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				switch (dreamFuture) {
					case "1": //Nice Car
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "sở hữu một chiếc xe ô tô";
						break;
					case "2": //SuccessfulChildren
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "nuôi dưỡng con cái thành công, hạnh phúc";
						break;
					case "3": //Explore the World
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "khám phá thế giới";
						break;
					case "4": //Own House
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "sở hữu căn hộ hoặc nhà đất đẹp";
						break;
					case "5": //Successful Buisness
						sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "mở cửa hàng kinh doanh";
						break;
				}
			}

			// switch (dreamFuture) {
			// 	case "1": //Nice Car
			// 		sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "buy a car";
			// 		break;
			// 	case "2": //SuccessfulChildren
			// 		sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "raise successful children";
			// 		break;
			// 	case "3": //Explore the World
			// 		sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "explore the world";
			// 		break;
			// 	case "4": //Own House
			// 		sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "buy a house";
			// 		break;
			// 	case "5": //Successful Buisness
			// 		sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString = "successful buisness person";
			// 		break;
			// }

		},

		retirementGender: function() {

			var jsonModelData = sap.ui.getCore().getModel("GData").oData.GloBalJson;
			var genderStatus = sap.ui.getCore().getModel("genData");
			if (jsonModelData.marryStatusOfPerson === "1" || jsonModelData.marryStatusOfPerson === "4") {
				if (jsonModelData.genderOfPerson === "1") {
					genderStatus.oData.GenderOdata.retirementGenderSelection = "MR.";
				} else if (jsonModelData.genderOfPerson === "2") {
					genderStatus.oData.GenderOdata.retirementGenderSelection = "MRS.";
				}
			} else {
				if (jsonModelData.genderOfPerson === "1") {
					genderStatus.oData.GenderOdata.retirementGenderSelection = "MR.";
				} else if (jsonModelData.genderOfPerson === "2") {
					genderStatus.oData.GenderOdata.retirementGenderSelection = "MRS.";
				}
			}
		},

		retimentAgeCalculation: function() {
			var personAge = sap.ui.getCore().getModel("GData").oData.GloBalJson.personAge;
			var selectedRetirementAge = sap.ui.getCore().getModel("GData").oData.GloBalJson.retirementAge;
			var wantLiveAfterRetirement = sap.ui.getCore().getModel("GData").oData.GloBalJson.liveAfterRetirement;
			var wantTodoWhenRetire = sap.ui.getCore().getModel("GData").oData.GloBalJson.wantToDoWhenRetire;
			var assumeRetirementAge = 0;
			this.retirementGender();
			switch (selectedRetirementAge) {
				case "1":
					assumeRetirementAge = 55;
					break;
				case "2":
					assumeRetirementAge = 58;
					break;
				case "3":
					assumeRetirementAge = 60;
					break;
			}

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				switch (wantLiveAfterRetirement) {
					case "1": //Go back to Home
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringAfterLiveRetirement = "plan to go back your hometown";
						break;
					case "2": //Stay Where I am
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringAfterLiveRetirement = "plan to stay where I am";
						break;
				}
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {

				switch (wantLiveAfterRetirement) {
					case "1": //Go back to Home
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringAfterLiveRetirement = "có kế hoạch trở về quê";
						break;
					case "2": //Stay Where I am
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringAfterLiveRetirement = "sẽ ở lại nơi mình sinh sống";
						break;
				}

			}

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				switch (wantTodoWhenRetire) {
					case "1": //Travel With Partner
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire = "travel with my partner";
						break;
					case "2": //Have a Farm
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire = "own a farm";
						break;
					case "3": //Socail Activities
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire = "enjoy social activities";
						break;
					case "4": //Run a Small Buisness
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire = "run a small business";
						break;
				}

			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {

				switch (wantTodoWhenRetire) {
					case "1": //Travel With Partner
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire = "đi du lịch cùng gia đình.";
						break;
					case "2": //Have a Farm
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire = "sở hữu một trang trại.";
						break;
					case "3": //Socail Activities
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire = "tham gia các hoạt động xã hội.";
						break;
					case "4": //Run a Small Buisness
						sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire = "mở kinh doanh nhỏ.";
						break;
				}

			}

			sap.ui.getCore().getModel("GData").oData.GloBalJson.retireAgeInYear = assumeRetirementAge - personAge;
		},
		childrenEducationLocation: function() {
			var educationCity = sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity;

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				switch (educationCity) {
					case "1": //America
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "America";
						break;
					case "2": //Europe
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Europe";
						break;
					case "3": //Veitnam
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Vietnam";
						break;
					case "4": //Australia
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Australia";
						break;
					case "5": //Asia
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Asia";
						break;
				}
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				switch (educationCity) {
					case "1": //America
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Mỹ";
						break;
					case "2": //Europe
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Châu Âu";
						break;
					case "3": //Veitnam
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Việt Nam";
						break;
					case "4": //Australia
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Châu Úc";
						break;
					case "5": //Asia
						sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity = "Châu Á";
						break;
				}
			}

		},
		policyCover: function() {
			var policyCoverBy = sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoveredBy;
			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				switch (policyCoverBy) {
					case "1": //Parent
						sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "your parent";
						break;
					case "2": //Children
						sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "your child";
						break;
					case "3": //Partner
						sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "your partner";
						break;
					case "4": //MySelf
						sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "yourself";
						break;
				}
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				switch (policyCoverBy) {
					case "1": //Parent
						sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "bố mẹ bạn";
						break;
					case "2": //Children
						sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "con cái của bạn";
						break;
					case "3": //Partner

						if (sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson === "1") {
							sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "với vợ bạn";

						} else if (sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson === "2") {
							sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "với chồng bạn";
						}

						break;
					case "4": //MySelf
						sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution = "bản thân bạn";
						break;
				}
			}

		},
		totalCildren: function() {
			var totalChildren = sap.ui.getCore().getModel("GData").oData.GloBalJson.totalMale + sap.ui.getCore().getModel("GData").oData.GloBalJson
				.totalFemale;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.totalChildren = totalChildren;

		},
		currencyformatter: function(currency) {
			var oCurrency = new sap.ui.model.type.Currency({
				decimals: 0,
				showMeasure: false
			});
			return oCurrency.formatValue([currency], "string");
		},
		lastNameOfPersonUppercase: function(name) {

			var st = name.trim();

			var n = st.split(" ");
			return n[n.length - 1].toUpperCase();
		},
		lastNameOfPerson: function(name) {
			var st = name.trim();

			var n = st.split(" ");
			return this.capitalize(n[n.length - 1].toUpperCase());

		},
		lastNameOfPerson1: function(name) {
			var st = name.trim();

			var n = st.split(" ");
			return this.capitalize(n[n.length - 1].toUpperCase());

		},

		_onObjectMatched: function(oEvent) {

			$(".sidenav ").removeClass("expanded");

			var domainSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected;
			this.personAgeCal();
			this.partnerAgeCal();
			this.totalIncome30();
			this.totalCildren();
			this.livingArrangement();
			this.policyCover();
			this.dreamFuture();
			this.retimentAgeCalculation();
			this.childrenEducationLocation();
			//Checking the domain select
			switch (domainSelected) {
				case "EDUCATION":
					this.childrenEduactionCalculation();
					break;
				case "HEALTH":
					this.healthCalculation();
					break;
				case "FAMILY":
					this.familyCalculation();
					break;
				case "DREAMS":
					this.dreamCalculation();
					break;
				case "RETIREMENT":
					this.retirementCalculation();
					break;
			}

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				this.getView().byId("idSolutionVBoxApartmentEn").setVisible(true);
				this.getView().byId("idSolutionVBoxApartmentVn").setVisible(false);
				this.getView().byId("idSolutionKeyVboxEn").setVisible(true);
				this.getView().byId("idSolutionKeyVboxVi").setVisible(false);
				this.getView().byId("idsolutionHBOxRetirmentFlightEn").setVisible(true);
				this.getView().byId("idsolutionHBOxRetirmentFlightVi").setVisible(false);
				this.getView().byId("idTextRotateRetirementEn").setVisible(true);
				this.getView().byId("idTextRotateRetirementVi").setVisible(false);
				this.getView().byId("idsolutionVBOXTextEn").setVisible(true);
				this.getView().byId("idsolutionVBOXTextVi").setVisible(false);
				this.getView().byId("idOxfordCertificateEn").setVisible(true);
				this.getView().byId("idOxfordCertificateVi").setVisible(false);
				this.getView().byId("idHarvardCertificateEn").setVisible(true);
				this.getView().byId("idHarvardCertificateVi").setVisible(false);
				this.getView().byId("idVietnamEn").setVisible(true);
				this.getView().byId("idVietnamVi").setVisible(false);
				this.getView().byId("idAustraliaEn").setVisible(true);
				this.getView().byId("idAustraliaVi").setVisible(false);
				this.getView().byId("idAsiaEn").setVisible(true);
				this.getView().byId("idAsiaVi").setVisible(false);

			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				this.getView().byId("idSolutionVBoxApartmentEn").setVisible(false);
				this.getView().byId("idSolutionVBoxApartmentVn").setVisible(true);
				this.getView().byId("idSolutionKeyVboxEn").setVisible(false);
				this.getView().byId("idSolutionKeyVboxVi").setVisible(true);
				this.getView().byId("idsolutionHBOxRetirmentFlightVi").setVisible(true);
				this.getView().byId("idsolutionHBOxRetirmentFlightEn").setVisible(false);
				this.getView().byId("idTextRotateRetirementVi").setVisible(true);
				this.getView().byId("idTextRotateRetirementEn").setVisible(false);
				this.getView().byId("idsolutionVBOXTextVi").setVisible(true);
				this.getView().byId("idsolutionVBOXTextEn").setVisible(false);
				this.getView().byId("idOxfordCertificateEn").setVisible(false);
				this.getView().byId("idOxfordCertificateVi").setVisible(true);
				this.getView().byId("idHarvardCertificateEn").setVisible(false);
				this.getView().byId("idHarvardCertificateVi").setVisible(true);
				this.getView().byId("idVietnamEn").setVisible(false);
				this.getView().byId("idVietnamVi").setVisible(true);
				this.getView().byId("idAustraliaEn").setVisible(false);
				this.getView().byId("idAustraliaVi").setVisible(true);
				this.getView().byId("idAsiaEn").setVisible(false);
				this.getView().byId("idAsiaVi").setVisible(true);
			}

			var totalCalulationVnd = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingBridgeGap;
			var totalIncomeVnd = sap.ui.getCore().getModel("GData").oData.GloBalJson.perOfTotalIncom;
			var savingMoneyVnd = sap.ui.getCore().getModel("GData").oData.GloBalJson.familyMonthlySaved[0];

			var model = new sap.ui.model.json.JSONModel();
			model.setData({
				number: this.lastNameOfPerson1(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson),
				partner: this.lastNameOfPerson1(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPartner),
				personAge: sap.ui.getCore().getModel("GData").oData.GloBalJson.personAge,
				partnerAge: sap.ui.getCore().getModel("GData").oData.GloBalJson.partnerAge,
				assumeYear: sap.ui.getCore().getModel("GData").oData.GloBalJson.familyYear,
				totalCalculation: this.currencyformatter(totalCalulationVnd),
				perOfTotalIncom: this.currencyformatter(totalIncomeVnd),
				livingArr: sap.ui.getCore().getModel("GData").oData.GloBalJson.livingData,
				futureDreamString: sap.ui.getCore().getModel("GData").oData.GloBalJson.futureDreamString,
				dreamYear: sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamYear,
				retireAgeInYear: sap.ui.getCore().getModel("GData").oData.GloBalJson.retireAgeInYear,
				stringAfterLiveRetirement: sap.ui.getCore().getModel("GData").oData.GloBalJson.stringAfterLiveRetirement,
				stringWantToDoWhenRetire: sap.ui.getCore().getModel("GData").oData.GloBalJson.stringWantToDoWhenRetire,
				selectedEducationCity: sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedEducationCity,
				selectedChild: this.capitalize(sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedChildName),
				childrenAgePass: sap.ui.getCore().getModel("GData").oData.GloBalJson.childrenAgePass,
				healthMonth: sap.ui.getCore().getModel("GData").oData.GloBalJson.healthMonth,
				policyCoverSolution: sap.ui.getCore().getModel("GData").oData.GloBalJson.policyCoverSolution,
				savedMoneyHealth: this.currencyformatter(savingMoneyVnd),
				totalChildren: sap.ui.getCore().getModel("GData").oData.GloBalJson.totalChildren,
				degreeString: sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString,
				accidentHelathCareZeoSavinging: this.currencyformatter(sap.ui.getCore().getModel("GData").oData.GloBalJson.accidentHelathCareZeoSavinging),
				retirementGenderSelection: sap.ui.getCore().getModel("GData").oData.GloBalJson.retirementGenderSelection,

			});
			this.getView().setModel(model, "view");
			this.getView().getModel("view").refresh(true);

			var a = sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson;

			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navConSolution").getPages().length,

				images: {

					children43: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children43.jpg"),
					children44: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children44.jpg"),
					children45: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children45.jpg"),
					children46: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children46.jpg"),
					children47: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/children47.jpg"),
					48: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/48.jpg"),
					49: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/49.jpg"),
					50: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/50.jpg"),
					51: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/51.jpg"),
					52: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/52.jpg"),
					53: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/53.jpg"),
					dream54: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream54.jpg"),
					dream55: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream55.jpg"),
					dream56: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream56.jpg"),
					dream57: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream57.jpg"),
					dream58: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/dream58.jpg"),
				}
			}), "dataModel");

			var oDataModel1 = this.getView().getModel("dataModel");
			var solutionFamilyId = solutionDream.byId("navConSolution");
			var navigatingId = this.getView().byId("navConSolution");
			var educationCity = sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity;
			var totalIncomeEntered = sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncome[0];
			var dreamFutureSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture;
			var maritalStatus = sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson;
			var retirementSelcted = sap.ui.getCore().getModel("GData").oData.GloBalJson.wantToDoWhenRetire;
			var worriesFamilyHealth = sap.ui.getCore().getModel("GData").oData.GloBalJson.worriesFamilyHealth;
			var totalSaving = 0;
			var totalCost = 0;
			// this.getView().byId("solutionFalse").setVisible(false);
			// this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("dataSolutionDream11", sap.ui.getCore().getModel("GData").oData
			// 	.GloBalJson.nameOfPerson.split(" ")[0].toUpperCase());
			// this.getOwnerComponent().getModel("i18n").refresh(true);
			// sap.ui.getCore().getModel("i18n").refresh(true);
			switch (domainSelected) {
				case "EDUCATION":
					// var solutionFamilyId = solutionFamily.byId("navCon10");

					switch (educationCity) {
						case "1": //America
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("educationPart21").setVisible(true);
								this.getView().byId("educationPart22").setVisible(false);
								this.getView().byId("educationPart23").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart21").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("educationPart23").setVisible(true);
								this.getView().byId("educationPart21").setVisible(false);
								this.getView().byId("educationPart22").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart23").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("educationPart22").setVisible(true);
								this.getView().byId("educationPart21").setVisible(false);
								this.getView().byId("educationPart23").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart22").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalEducation1").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalEducation1").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalEducation1").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 3);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}

							break;
						case "2": //Europe
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("educationPart31").setVisible(true);
								this.getView().byId("educationPart32").setVisible(false);
								this.getView().byId("educationPart33").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart31").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("educationPart33").setVisible(true);
								this.getView().byId("educationPart31").setVisible(false);
								this.getView().byId("educationPart32").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart33").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("educationPart32").setVisible(true);
								this.getView().byId("educationPart31").setVisible(false);
								this.getView().byId("educationPart33").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart32").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalEducation2").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalEducation2").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalEducation2").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 2);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "3": //Vietnam
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("educationPart41").setVisible(true);
								this.getView().byId("educationPart42").setVisible(false);
								this.getView().byId("educationPart43").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart41").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("educationPart43").setVisible(true);
								this.getView().byId("educationPart41").setVisible(false);
								this.getView().byId("educationPart42").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart43").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("educationPart42").setVisible(true);
								this.getView().byId("educationPart41").setVisible(false);
								this.getView().byId("educationPart43").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart42").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalEducation3").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalEducation3").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalEducation3").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 0);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "4": //Australia
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("educationPart51").setVisible(true);
								this.getView().byId("educationPart52").setVisible(false);
								this.getView().byId("educationPart53").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart51").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("educationPart53").setVisible(true);
								this.getView().byId("educationPart51").setVisible(false);
								this.getView().byId("educationPart52").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart53").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("educationPart52").setVisible(true);
								this.getView().byId("educationPart51").setVisible(false);
								this.getView().byId("educationPart53").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart52").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalEducation4").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalEducation4").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalEducation4").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 1);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "5": //Asia
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("educationPart61").setVisible(true);
								this.getView().byId("educationPart62").setVisible(false);
								this.getView().byId("educationPart63").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart61").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("educationPart63").setVisible(true);
								this.getView().byId("educationPart61").setVisible(false);
								this.getView().byId("educationPart62").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart63").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("educationPart62").setVisible(true);
								this.getView().byId("educationPart61").setVisible(false);
								this.getView().byId("educationPart63").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("educationPart62").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalEducation5").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalEducation5").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalEducation5").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 4);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
					}

					break;
				case "HEALTH":

					this.getView().getModel("view").refresh(true);
					switch (maritalStatus) {
						case "1":
							this.getView().byId("health1").setVisible(true);
							this.getView().byId("health2").setVisible(false);
							this.getView().byId("health3").setVisible(false);
							this.getView().byId("health4").setVisible(false);
							break;
						case "2":
							this.getView().byId("health2").setVisible(true);
							this.getView().byId("health1").setVisible(false);
							this.getView().byId("health3").setVisible(false);
							this.getView().byId("health4").setVisible(false);
							break;
						case "3":
							this.getView().byId("health3").setVisible(true);
							this.getView().byId("health1").setVisible(false);
							this.getView().byId("health2").setVisible(false);
							this.getView().byId("health4").setVisible(false);
							break;
						case "4":
							this.getView().byId("health4").setVisible(true);
							this.getView().byId("health2").setVisible(false);
							this.getView().byId("health3").setVisible(false);
							this.getView().byId("health1").setVisible(false);
							break;

					}

					if (worriesFamilyHealth === "1") {

						totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
						totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
						if (totalSaving >= totalCost) {
							this.getView().byId("idHealth1").setVisible(true); //Display the data if Total Saving is Greater or Equal
							this.getView().byId("idHealth2").setVisible(false); //Set Visible false rest of the Thing
							this.getView().byId("idHealth3").setVisible(false);
							this.getView().byId("idHealth5").setVisible(false);
							this.getView().byId("idHealth4").setVisible(false);
							sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("idHealth1").getText();

						} else if (totalSaving === 0) {
							this.getView().byId("idHealth3").setVisible(true); //Display the data if Total Saving  
							this.getView().byId("idHealth2").setVisible(false);
							this.getView().byId("idHealth1").setVisible(false);
							this.getView().byId("idHealth5").setVisible(false);
							this.getView().byId("idHealth4").setVisible(false);
							sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("idHealth3").getText();
						} else if (totalSaving < totalCost) {
							this.getView().byId("idHealth2").setVisible(true); //Display the data if Total Saving is less 
							this.getView().byId("idHealth1").setVisible(false);
							this.getView().byId("idHealth3").setVisible(false);
							this.getView().byId("idHealth5").setVisible(false);
							this.getView().byId("idHealth4").setVisible(false);
							sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("idHealth2").getText();
						}

					} else if (worriesFamilyHealth === "2" || worriesFamilyHealth === "3") {
						totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
						if (totalSaving === 0) {
							this.getView().byId("idHealth5").setVisible(true);
							this.getView().byId("idHealth4").setVisible(false);
							this.getView().byId("idHealth1").setVisible(false);
							this.getView().byId("idHealth2").setVisible(false);
							this.getView().byId("idHealth3").setVisible(false);

							sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("idHealth5").getText();
						} else {
							this.getView().byId("idHealth4").setVisible(true);
							this.getView().byId("idHealth5").setVisible(false);
							this.getView().byId("idHealth1").setVisible(false);
							this.getView().byId("idHealth2").setVisible(false);
							this.getView().byId("idHealth3").setVisible(false);
							sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("idHealth4").getText();
						}
					}

					if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
						this.getView().byId("idHealth7").setVisible(false);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
					} else {
						this.getView().byId("idHealth7").setVisible(true);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("idHealth7").getText();
					}
					oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 10);
					if (solutionFamilyId === undefined) {
						navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					} else {
						solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					}
					break;
				case "FAMILY":

					this.getView().getModel("view").refresh(true);
					switch (maritalStatus) {
						case "1":
							this.getView().byId("family1").setVisible(true);
							this.getView().byId("family2").setVisible(false);
							this.getView().byId("family3").setVisible(false);
							this.getView().byId("family4").setVisible(false);
							break;
						case "2":
							this.getView().byId("family2").setVisible(true);
							this.getView().byId("family1").setVisible(false);
							this.getView().byId("family3").setVisible(false);
							this.getView().byId("family4").setVisible(false);
							break;
						case "3":
							this.getView().byId("family3").setVisible(true);
							this.getView().byId("family1").setVisible(false);
							this.getView().byId("family2").setVisible(false);
							this.getView().byId("family4").setVisible(false);
							break;
						case "4":
							this.getView().byId("family4").setVisible(true);
							this.getView().byId("family1").setVisible(false);
							this.getView().byId("family2").setVisible(false);
							this.getView().byId("family3").setVisible(false);
							break;

					}
					totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
					totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
					if (totalSaving === 0) {
						this.getView().byId("familyPart23").setVisible(true);
						this.getView().byId("familyPart22").setVisible(false);
						this.getView().byId("familyPart21").setVisible(false);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("familyPart23").getText();
					} else if (totalSaving >= totalCost) {
						this.getView().byId("familyPart21").setVisible(true);
						this.getView().byId("familyPart22").setVisible(false);
						this.getView().byId("familyPart23").setVisible(false);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("familyPart21").getText();

					} else if (totalSaving < totalCost) {
						this.getView().byId("familyPart22").setVisible(true);
						this.getView().byId("familyPart21").setVisible(false);
						this.getView().byId("familyPart23").setVisible(false);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("familyPart22").getText();
					}
					if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
						this.getView().byId("totalIncomEntered").setVisible(false);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
					} else {
						this.getView().byId("totalIncomEntered").setVisible(true);
						sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEntered").getText();
					}

					oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 9);
					if (solutionFamilyId === undefined) {
						navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					} else {
						solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					}
					break;
				case "DREAMS":
					switch (dreamFutureSelected) {
						case "1": //NIce Car
							;
							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("dream21").setVisible(true);
									this.getView().byId("dream22").setVisible(false);
									this.getView().byId("dream23").setVisible(false);
									this.getView().byId("dream24").setVisible(false);
									break;
								case "2":
									this.getView().byId("dream22").setVisible(true);
									this.getView().byId("dream21").setVisible(false);
									this.getView().byId("dream23").setVisible(false);
									this.getView().byId("dream24").setVisible(false);
									break;
								case "3":
									this.getView().byId("dream23").setVisible(true);
									this.getView().byId("dream21").setVisible(false);
									this.getView().byId("dream22").setVisible(false);
									this.getView().byId("dream24").setVisible(false);
									break;
								case "4":
									this.getView().byId("dream24").setVisible(true);
									this.getView().byId("dream21").setVisible(false);
									this.getView().byId("dream22").setVisible(false);
									this.getView().byId("dream23").setVisible(false);
									break;

							}

							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("dreamPart41").setVisible(true);
								this.getView().byId("dreamPart42").setVisible(false);
								this.getView().byId("dreamPart43").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart41").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("dreamPart43").setVisible(true);
								this.getView().byId("dreamPart41").setVisible(false);
								this.getView().byId("dreamPart42").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart43").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("dreamPart42").setVisible(true);
								this.getView().byId("dreamPart41").setVisible(false);
								this.getView().byId("dreamPart43").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart42").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredDream1").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredDream1").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredDream1").getText();
							}

							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 12);
							if (solutionFamilyId === undefined) {
								// return true;

								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");

							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "2": //Suucessfull Happy Children
							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("dream51").setVisible(true);
									this.getView().byId("dream52").setVisible(false);
									this.getView().byId("dream53").setVisible(false);
									this.getView().byId("dream54").setVisible(false);
									break;
								case "2":
									this.getView().byId("dream52").setVisible(true);
									this.getView().byId("dream51").setVisible(false);
									this.getView().byId("dream53").setVisible(false);
									this.getView().byId("dream54").setVisible(false);
									break;
								case "3":
									this.getView().byId("dream53").setVisible(true);
									this.getView().byId("dream51").setVisible(false);
									this.getView().byId("dream52").setVisible(false);
									this.getView().byId("dream54").setVisible(false);
									break;
								case "4":
									this.getView().byId("dream54").setVisible(true);
									this.getView().byId("dream51").setVisible(false);
									this.getView().byId("dream52").setVisible(false);
									this.getView().byId("dream53").setVisible(false);
									break;

							}
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("dreamPart71").setVisible(true);
								this.getView().byId("dreamPart72").setVisible(false);
								this.getView().byId("dreamPart73").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart71").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("dreamPart73").setVisible(true);
								this.getView().byId("dreamPart71").setVisible(false);
								this.getView().byId("dreamPart72").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart73").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("dreamPart72").setVisible(true);
								this.getView().byId("dreamPart71").setVisible(false);
								this.getView().byId("dreamPart73").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart72").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredDream4").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredDream4").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredDream4").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 15);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "3": //Explore the World
							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("dream31").setVisible(true);
									this.getView().byId("dream32").setVisible(false);
									this.getView().byId("dream33").setVisible(false);
									this.getView().byId("dream34").setVisible(false);

									break;
								case "2":
									this.getView().byId("dream32").setVisible(true);
									this.getView().byId("dream31").setVisible(false);
									this.getView().byId("dream33").setVisible(false);
									this.getView().byId("dream34").setVisible(false);
									break;
								case "3":
									this.getView().byId("dream33").setVisible(true);
									this.getView().byId("dream31").setVisible(false);
									this.getView().byId("dream32").setVisible(false);
									this.getView().byId("dream34").setVisible(false);
									break;
								case "4":
									this.getView().byId("dream34").setVisible(true);
									this.getView().byId("dream31").setVisible(false);
									this.getView().byId("dream32").setVisible(false);
									this.getView().byId("dream33").setVisible(false);
									break;

							}
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("dreamPart51").setVisible(true);
								this.getView().byId("dreamPart52").setVisible(false);
								this.getView().byId("dreamPart53").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart51").getText();
							} else if (totalSaving === 0) {
								this.getView().byId("dreamPart53").setVisible(true);
								this.getView().byId("dreamPart52").setVisible(false);
								this.getView().byId("dreamPart51").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart53").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("dreamPart52").setVisible(true);
								this.getView().byId("dreamPart51").setVisible(false);
								this.getView().byId("dreamPart53").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart52").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredDream2").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredDream2").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredDream2").getText();
							}

							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 13);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "4": //Nice House Apartment

							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("dream1").setVisible(true);
									this.getView().byId("dream2").setVisible(false);
									this.getView().byId("dream3").setVisible(false);
									this.getView().byId("dream4").setVisible(false);
									break;
								case "2":
									this.getView().byId("dream2").setVisible(true);
									this.getView().byId("dream1").setVisible(false);
									this.getView().byId("dream3").setVisible(false);
									this.getView().byId("dream4").setVisible(false);
									break;
								case "3":
									this.getView().byId("dream3").setVisible(true);
									this.getView().byId("dream1").setVisible(false);
									this.getView().byId("dream2").setVisible(false);
									this.getView().byId("dream4").setVisible(false);
									break;
								case "4":
									this.getView().byId("dream4").setVisible(true);
									this.getView().byId("dream1").setVisible(false);
									this.getView().byId("dream2").setVisible(false);
									this.getView().byId("dream3").setVisible(false);
									break;

							}
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("dreamPart31").setVisible(true);
								this.getView().byId("dreamPart32").setVisible(false);
								this.getView().byId("dreamPart33").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart31").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("dreamPart33").setVisible(true);
								this.getView().byId("dreamPart31").setVisible(false);
								this.getView().byId("dreamPart32").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart33").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("dreamPart32").setVisible(true);
								this.getView().byId("dreamPart31").setVisible(false);
								this.getView().byId("dreamPart33").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart32").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredDream").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredDream").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredDream").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 11);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "5": //Buisness person

							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("dream41").setVisible(true);
									this.getView().byId("dream42").setVisible(false);
									this.getView().byId("dream43").setVisible(false);
									this.getView().byId("dream44").setVisible(false);
									break;
								case "2":
									this.getView().byId("dream42").setVisible(true);
									this.getView().byId("dream41").setVisible(false);
									this.getView().byId("dream43").setVisible(false);
									this.getView().byId("dream44").setVisible(false);
									break;
								case "3":
									this.getView().byId("dream43").setVisible(true);
									this.getView().byId("dream41").setVisible(false);
									this.getView().byId("dream42").setVisible(false);
									this.getView().byId("dream44").setVisible(false);
									break;
								case "4":
									this.getView().byId("dream44").setVisible(true);
									this.getView().byId("dream41").setVisible(false);
									this.getView().byId("dream42").setVisible(false);
									this.getView().byId("dream43").setVisible(false);
									break;

							}
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("dreamPart61").setVisible(true);
								this.getView().byId("dreamPart62").setVisible(false);
								this.getView().byId("dreamPart63").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart61").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("dreamPart63").setVisible(true);
								this.getView().byId("dreamPart62").setVisible(false);
								this.getView().byId("dreamPart61").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart63").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("dreamPart62").setVisible(true);
								this.getView().byId("dreamPart61").setVisible(false);
								this.getView().byId("dreamPart63").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("dreamPart62").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredDream3").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredDream3").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredDream3").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 14);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
					}
					// oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 11);
					// solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "RETIREMENT":

					switch (retirementSelcted) {
						case "1": //Travel With Partner
							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("retirementPart21").setVisible(true);
									this.getView().byId("retirementPart22").setVisible(false);
									this.getView().byId("retirementPart23").setVisible(false);
									this.getView().byId("retirementPart24").setVisible(false);
									break;
								case "2":
									this.getView().byId("retirementPart22").setVisible(true);
									this.getView().byId("retirementPart21").setVisible(false);
									this.getView().byId("retirementPart23").setVisible(false);
									this.getView().byId("retirementPart24").setVisible(false);
									break;
								case "3":
									this.getView().byId("retirementPart23").setVisible(true);
									this.getView().byId("retirementPart21").setVisible(false);
									this.getView().byId("retirementPart22").setVisible(false);
									this.getView().byId("retirementPart24").setVisible(false);
									break;
								case "4":
									this.getView().byId("retirementPart24").setVisible(true);
									this.getView().byId("retirementPart21").setVisible(false);
									this.getView().byId("retirementPart22").setVisible(false);
									this.getView().byId("retirementPart23").setVisible(false);
									break;

							}
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("retirementPartCost41").setVisible(true);
								this.getView().byId("retirementPartCost42").setVisible(false);
								this.getView().byId("retirementPartCost43").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost41").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("retirementPartCost43").setVisible(true);
								this.getView().byId("retirementPartCost41").setVisible(false);
								this.getView().byId("retirementPartCost42").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost43").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("retirementPartCost42").setVisible(true);
								this.getView().byId("retirementPartCost41").setVisible(false);
								this.getView().byId("retirementPartCost43").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost42").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredRetirement2").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredRetirement2").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredRetirement2").getText();
							}

							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 6);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "2": //Have a Farm
							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("retirementPart1").setVisible(true);
									this.getView().byId("retirementPart2").setVisible(false);
									this.getView().byId("retirementPart3").setVisible(false);
									this.getView().byId("retirementPart4").setVisible(false);
									break;
								case "2":
									this.getView().byId("retirementPart2").setVisible(true);
									this.getView().byId("retirementPart1").setVisible(false);
									this.getView().byId("retirementPart3").setVisible(false);
									this.getView().byId("retirementPart4").setVisible(false);
									break;
								case "3":
									this.getView().byId("retirementPart3").setVisible(true);
									this.getView().byId("retirementPart1").setVisible(false);
									this.getView().byId("retirementPart2").setVisible(false);
									this.getView().byId("retirementPart4").setVisible(false);
									break;
								case "4":
									this.getView().byId("retirementPart4").setVisible(true);
									this.getView().byId("retirementPart1").setVisible(false);
									this.getView().byId("retirementPart2").setVisible(false);
									this.getView().byId("retirementPart3").setVisible(false);
									break;

							}
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("retirementPartCost31").setVisible(true);
								this.getView().byId("retirementPartCost32").setVisible(false);
								this.getView().byId("retirementPartCost33").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost31").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("retirementPartCost33").setVisible(true);
								this.getView().byId("retirementPartCost31").setVisible(false);
								this.getView().byId("retirementPartCost32").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost33").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("retirementPartCost32").setVisible(true);
								this.getView().byId("retirementPartCost31").setVisible(false);
								this.getView().byId("retirementPartCost33").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost32").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredRetirement").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredRetirement").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredRetirement").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 5);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "3": //Social Activities
							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("retirementPart41").setVisible(true);
									this.getView().byId("retirementPart42").setVisible(false);
									this.getView().byId("retirementPart43").setVisible(false);
									this.getView().byId("retirementPart44").setVisible(false);
									break;
								case "2":
									this.getView().byId("retirementPart42").setVisible(true);
									this.getView().byId("retirementPart41").setVisible(false);
									this.getView().byId("retirementPart43").setVisible(false);
									this.getView().byId("retirementPart44").setVisible(false);
									break;
								case "3":
									this.getView().byId("retirementPart43").setVisible(true);
									this.getView().byId("retirementPart41").setVisible(false);
									this.getView().byId("retirementPart42").setVisible(false);
									this.getView().byId("retirementPart44").setVisible(false);
									break;
								case "4":
									this.getView().byId("retirementPart44").setVisible(true);
									this.getView().byId("retirementPart41").setVisible(false);
									this.getView().byId("retirementPart42").setVisible(false);
									this.getView().byId("retirementPart43").setVisible(false);
									break;

							}
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("retirementPartCost61").setVisible(true);
								this.getView().byId("retirementPartCost62").setVisible(false);
								this.getView().byId("retirementPartCost63").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost61").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("retirementPartCost63").setVisible(true);
								this.getView().byId("retirementPartCost61").setVisible(false);
								this.getView().byId("retirementPartCost62").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost63").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("retirementPartCost62").setVisible(true);
								this.getView().byId("retirementPartCost61").setVisible(false);
								this.getView().byId("retirementPartCost63").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost62").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredRetirement4").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredRetirement4").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredRetirement4").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 8);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
						case "4": //Run a Small Buisness
							this.getView().getModel("view").refresh(true);
							switch (maritalStatus) {
								case "1":
									this.getView().byId("retirementPart31").setVisible(true);
									this.getView().byId("retirementPart32").setVisible(false);
									this.getView().byId("retirementPart33").setVisible(false);
									this.getView().byId("retirementPart34").setVisible(false);
									break;
								case "2":
									this.getView().byId("retirementPart32").setVisible(true);
									this.getView().byId("retirementPart31").setVisible(false);
									this.getView().byId("retirementPart33").setVisible(false);
									this.getView().byId("retirementPart34").setVisible(false);
									break;
								case "3":
									this.getView().byId("retirementPart33").setVisible(true);
									this.getView().byId("retirementPart31").setVisible(false);
									this.getView().byId("retirementPart32").setVisible(false);
									this.getView().byId("retirementPart34").setVisible(false);
									break;
								case "4":
									this.getView().byId("retirementPart34").setVisible(true);
									this.getView().byId("retirementPart31").setVisible(false);
									this.getView().byId("retirementPart32").setVisible(false);
									this.getView().byId("retirementPart33").setVisible(false);
									break;

							}
							totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost;
							totalCost = sap.ui.getCore().getModel("GData").oData.GloBalJson.cost;
							if (totalSaving >= totalCost) {
								this.getView().byId("retirementPartCost51").setVisible(true);
								this.getView().byId("retirementPartCost52").setVisible(false);
								this.getView().byId("retirementPartCost53").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost51").getText();

							} else if (totalSaving === 0) {
								this.getView().byId("retirementPartCost53").setVisible(true);
								this.getView().byId("retirementPartCost51").setVisible(false);
								this.getView().byId("retirementPartCost52").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost53").getText();
							} else if (totalSaving < totalCost) {
								this.getView().byId("retirementPartCost52").setVisible(true);
								this.getView().byId("retirementPartCost51").setVisible(false);
								this.getView().byId("retirementPartCost53").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.summary1 = this.getView().byId("retirementPartCost52").getText();
							}
							if (totalIncomeEntered === undefined || isNaN(totalIncomeEntered)) {
								this.getView().byId("totalIncomEnteredRetirement3").setVisible(false);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = "";
							} else {
								this.getView().byId("totalIncomEnteredRetirement3").setVisible(true);
								sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncomeSummary = this.getView().byId("totalIncomEnteredRetirement3").getText();
							}
							oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 7);
							if (solutionFamilyId === undefined) {
								navigatingId.to(navigatingId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							} else {
								solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
							}
							break;
					}

					break;
			}

		},
		//Solution Health Text Display
		//Children Education
		childrenEduactionCalculation: function() {

			var countryFees = 0;
			var totalCalulation = 0;
			var totalSaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.familyMonthlySaved[0];
			var childPursue = sap.ui.getCore().getModel("GData").oData.GloBalJson.childCarrerWantPursue;

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				switch (childPursue) {
					case "1":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "MEDICINE";
						break;
					case "2":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "LAW";
						break;
					case "3":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "EDUCATION";
						break;
					case "4":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "ART";
						break;
					case "5":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "POLITICS";
						break;
					case "6":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "BUSINESS MANAGEMENT";
						break;

				}
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				switch (childPursue) {
					case "1":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "MEDICINE";
						break;
					case "2":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "LAW";
						break;
					case "3":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "EDUCATION";
						break;
					case "4":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "ART";
						break;
					case "5":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "POLITICS";
						break;
					case "6":
						sap.ui.getCore().getModel("GData").oData.GloBalJson.degreeString = "BUSINESS MANAGEMENT";
						break;

				}
			}

			switch (sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity) {
				case "1":
					countryFees = 1160000000;
					if (childPursue === "1") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 7 * countryFees;

						totalCalulation = 7 * countryFees - totalSaving;

					} else {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 4 * countryFees;
						totalCalulation = 4 * countryFees - totalSaving;
					}
					break;
				case "2":
					countryFees = 600000000;
					if (childPursue === "1") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 7 * countryFees;
						totalCalulation = 7 * countryFees - totalSaving;

					} else {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 4 * countryFees;
						totalCalulation = 4 * countryFees - totalSaving;
					}
					break;
				case "3":
					countryFees = 54000000;
					if (childPursue === "1") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 7 * countryFees;
						totalCalulation = 7 * countryFees - totalSaving;
					} else {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 4 * countryFees;
						totalCalulation = 4 * countryFees - totalSaving;
					}
					break;
				case "4":
					countryFees = 906000000;
					if (childPursue === "1") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 7 * countryFees;
						totalCalulation = 7 * countryFees - totalSaving;
					} else {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 4 * countryFees;
						totalCalulation = 4 * countryFees - totalSaving;
					}
					break;
				case "5":
					countryFees = 500000000;
					if (childPursue === "1") {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 7 * countryFees;
						totalCalulation = 7 * countryFees - totalSaving;
					} else {
						sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 4 * countryFees;
						totalCalulation = 4 * countryFees - totalSaving;
					}
					break;
				default:
					break;
			}
			var selectedChildAge = sap.ui.getCore().getModel("GData").oData.GloBalJson.selectedChildAge;

			if (childPursue === "1") {

				sap.ui.getCore().getModel("GData").oData.GloBalJson.childrenAgePass = selectedChildAge + 25;
			} else {
				sap.ui.getCore().getModel("GData").oData.GloBalJson.childrenAgePass = selectedChildAge + 22;
			}
			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost = totalSaving;

			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingBridgeGap = totalCalulation;

		},

		//Health Calculation
		healthCalculation: function() {

			var totalSavedHealth = sap.ui.getCore().getModel("GData").oData.GloBalJson.familyMonthlySaved[0];
			var totalCalculation = 0;
			var XMonth = 0;
			var globlaJsonData = sap.ui.getCore().getModel("GData").oData.GloBalJson;

			sap.ui.getCore().getModel("genData").refresh(true);

			if ((globlaJsonData.worriesFamilyHealth === "2" || globlaJsonData.worriesFamilyHealth === "3") && totalSavedHealth === 0) {
				if (globlaJsonData.worriesFamilyHealth === "2") {
					globlaJsonData.accidentHelathCareZeoSavinging = 100000000;
				} else if (globlaJsonData.worriesFamilyHealth === "3") {
					globlaJsonData.accidentHelathCareZeoSavinging = 200000000;
				}

			}

			switch (sap.ui.getCore().getModel("GData").oData.GloBalJson.worriesFamilyHealth) {
				case "1": //Critical Illness
					totalCalculation = 700 * 1000000 - totalSavedHealth;
					sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 700 * 1000000;
					break;
				case "2": //An Accident
					XMonth = Math.round(totalSavedHealth * 30 / 100000000);
					sap.ui.getCore().getModel("GData").oData.GloBalJson.healthMonth = XMonth;
					sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 100000000;
					break;
				case "3": //Poor healthCare
					XMonth = Math.round(totalSavedHealth * 30 / 200000000);
					sap.ui.getCore().getModel("GData").oData.GloBalJson.healthMonth = XMonth;
					sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = 200000000;
					break;
				default:
					break;
			}

			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost = totalSavedHealth;

			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingBridgeGap = totalCalculation;
		},

		//Retirement Calculation
		retirementCalculation: function() {
			var age = 0;
			var MoreComfortableRetirement = 0;
			var expensesPerMonth = 15000000;
			var ageDiffer = 0;
			var totalSavedRetiremnet = sap.ui.getCore().getModel("GData").oData.GloBalJson.familyMonthlySaved[0];
			var genderStatus = sap.ui.getCore().getModel("genData");
			genderStatus.oData.GenderOdata.personName = this.lastNameOfPersonUppercase(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson);

			sap.ui.getCore().getModel("genData").refresh(true);
			switch (sap.ui.getCore().getModel("GData").oData.GloBalJson.retirementAge) {
				case "1":
					age = 55;
					ageDiffer = 75 - age;
					break;
				case "2":
					age = 58;
					ageDiffer = 75 - age;
					break;
				case "3":
					age = 60;
					ageDiffer = 75 - age;
					break;
				default:
					break;
			}

			MoreComfortableRetirement = (expensesPerMonth * 12 * ageDiffer) - totalSavedRetiremnet;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost = totalSavedRetiremnet;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = expensesPerMonth * 12 * ageDiffer;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingBridgeGap = MoreComfortableRetirement;
		},

		//Dream Calculation
		dreamCalculation: function() {

			var genderStatus = sap.ui.getCore().getModel("genData");

			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.marryStatusOfPerson === "1" || sap.ui.getCore().getModel("GData").oData.GloBalJson
				.marryStatusOfPerson === "4") {
				if (sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson === "1") {
					genderStatus.oData.GenderOdata.genderSelection = "Mr.";
					genderStatus.oData.GenderOdata.partnerGender = " ";
					genderStatus.oData.GenderOdata.partnerName = " ";
					genderStatus.oData.GenderOdata.personName = this.lastNameOfPerson(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson);
				} else if (sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson === "2") {
					genderStatus.oData.GenderOdata.genderSelection = "Mrs.";
					genderStatus.oData.GenderOdata.partnerGender = " ";
					genderStatus.oData.GenderOdata.partnerName = " ";
					genderStatus.oData.GenderOdata.personName = this.lastNameOfPerson(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson);
				}
			} else {
				if (sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson === "1") {
					genderStatus.oData.GenderOdata.genderSelection = "Mr.";
					genderStatus.oData.GenderOdata.partnerGender = "Mrs.";
					genderStatus.oData.GenderOdata.partnerName = this.lastNameOfPerson(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPartner);
					genderStatus.oData.GenderOdata.personName = this.lastNameOfPerson(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson);
				} else if (sap.ui.getCore().getModel("GData").oData.GloBalJson.genderOfPerson === "2") {
					// genderStatus.oData.GenderOdata.genderSelection = "Mrs.";
					// genderStatus.oData.GenderOdata.personName = this.lastNameOfPerson(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson);
					genderStatus.oData.GenderOdata.partnerGender = "Mr.";
					genderStatus.oData.GenderOdata.genderSelection = "Mrs.";
					genderStatus.oData.GenderOdata.partnerName = this.lastNameOfPerson(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPartner);
					genderStatus.oData.GenderOdata.personName = this.lastNameOfPerson(sap.ui.getCore().getModel("GData").oData.GloBalJson.nameOfPerson);
				}
			}

			sap.ui.getCore().getModel("genData").refresh(true);

			var dreamSavedMoney = sap.ui.getCore().getModel("GData").oData.GloBalJson.familyMonthlySaved[0];;
			var totalAssumedCost = 0;
			var totalCalculationForDream = 0;
			switch (sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture) {
				case "1":
					totalAssumedCost = 500000000;
					break;
				case "2":
					totalAssumedCost = 1500000000;
					break;
				case "3":
					totalAssumedCost = 500000000;
					break;
				case "4":
					totalAssumedCost = 3000000000;
					break;
				case "5":
					totalAssumedCost = 1000000000;
					break;

				default:
					break;
			}
			totalCalculationForDream = totalAssumedCost - dreamSavedMoney;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost = dreamSavedMoney;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = totalAssumedCost;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingBridgeGap = totalCalculationForDream;

		},

		// Family Currency Calculation 
		familyCalculation: function() {

			var familySupported = sap.ui.getCore().getModel("GData").oData.GloBalJson.familyNeedSuportCurrency[0];
			var familySaving = sap.ui.getCore().getModel("GData").oData.GloBalJson.familyMonthlySaved[0];

			var totalSaving = familySaving;
			var totalCost = familySupported;
			var Calculation = 0;
			var assumedYear = 0;
			switch (sap.ui.getCore().getModel("GData").oData.GloBalJson.familyButtonSupportedYear) {
				case "1":
					assumedYear = 10;
					break;
				case "2":
					assumedYear = 12;
					break;
				case "3":
					assumedYear = 18;
					break;
				case "4":
					assumedYear = 20;
					break;
			}
			totalCost = totalCost * 12 * assumedYear;
			Calculation = totalCost - totalSaving;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingCost = totalSaving;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.cost = totalCost;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.savingBridgeGap = Calculation;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.familyYear = assumedYear;
			sap.ui.getCore().getModel("GData").refresh(true);

		},

		totalIncome30: function() {

			var perOfTotalCincome = sap.ui.getCore().getModel("GData").oData.GloBalJson.totalIncome[0];
			perOfTotalCincome = 10 * perOfTotalCincome / 100;
			sap.ui.getCore().getModel("GData").oData.GloBalJson.perOfTotalIncom = perOfTotalCincome;
		},

		handleNavNext: function(evt) {

			var navCon = this.byId("navConSolution");
			var oDataModel = this.getView().getModel("dataModel");
			var domainSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected;
			var dreamFutureSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture;
			var educationCity = sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity;
			var retirementSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.wantToDoWhenRetire;
			switch (domainSelected) {
				case "EDUCATION":
					switch (educationCity) {
						case "1":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "2":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "3":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "4":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "5":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
					}
					break;
				case "HEALTH":
					if (oDataModel.getProperty("/currentPage") === 10) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
					}
					break;
				case "FAMILY":
					if (oDataModel.getProperty("/currentPage") === 9) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
					}
					break;
				case "DREAMS":

					switch (dreamFutureSelected) {
						case "1":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "2":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "3":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "4":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "5":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
					}

					break;
				case "RETIREMENT":
					switch (retirementSelected) {
						case "1":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "2":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "3":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;
						case "4":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("productpage");
							break;

					}
					break;
			}

			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
		},

		handleNavPrev: function(evt) {
			// 
			var navCon = this.byId("navConSolution");
			var oDataModel = this.getView().getModel("dataModel");
			var dreamFutureSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.dreamFuture;
			var domainSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected;
			var educationCity = sap.ui.getCore().getModel("GData").oData.GloBalJson.educationCity;
			var retirementSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.wantToDoWhenRetire;

			switch (domainSelected) {
				case "EDUCATION":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "backtToDetail";
					switch (educationCity) {
						case "1":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "2":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "3":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "4":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "5":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
					}
					break;
				case "HEALTH":

					sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "backtToDetail";
					if (oDataModel.getProperty("/currentPage") === 10) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					}
					break;
				case "FAMILY":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "backtToDetail";
					if (oDataModel.getProperty("/currentPage") === 9) {
						sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
					}
					break;
				case "DREAMS":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "backtToDetail";
					switch (dreamFutureSelected) {
						case "1":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "2":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "3":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "4":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "5":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
					}

					break;
				case "RETIREMENT":
					sap.ui.getCore().getModel("GData").oData.GloBalJson.backDataStored = "backtToDetail";
					switch (retirementSelected) {
						case "1":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "2":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "3":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;
						case "4":
							sap.ui.core.UIComponent.getRouterFor(this).navTo("detailspage");
							break;

					}
					break;
			}
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");

		},
	});

});