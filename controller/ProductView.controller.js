sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.saaprojSAADevlopment.controller.ProductView", {

		onInit: function(oEvent) {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this._onObjectMatched, this);
			solutionDream = this;
			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navCon7").getPages().length,
				enabled: false,

				images: {

					59: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/59.jpg"),
					prodAsset3: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset3.svg"),
					prodAsset4: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset4.svg"),
					prodAsset5: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset5.svg"),
					prodAsset6: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset6.svg"),
					prodAsset7: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset7.svg"),
					prodAsset8: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset8.svg"),
					prodAsset9: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset9.svg"),
					prodAsset10: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset10.svg"),
					prodAsset11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset11.svg"),
					prodAsset12: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset12.svg"),
					prodAsset13: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset13.svg"),
					prodAsset14: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset14.svg"),
					prodAsset15: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset15.svg"),
					prodAsset16: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset16.svg"),
					prodAsset17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset17.svg"),
					prodAsset18: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset18.svg"),
					prodAsset19: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset19.svg"),
					prodAsset20: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset20.svg"),
					prodAsset21: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset21.svg"),
					prodAsset22: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset22.svg"),
					prodAsset23: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset23.svg"),
					prodAsset24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset24.svg"),
					prodAsset25: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset25.svg"),
					prodAsset26: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset26.svg"),
					education1: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/education1.png"),
					Endownment: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/Endownment.png"),
					SPA: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/SPA.png"),
					ULEducation: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/ULEducation.png"),
					ULP: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/ULP.png"),
					pdf1: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/pdf/Leaflet_MBAgeaslife_2019.png")

				}
			}), "dataModel");
		},
		
		
		productTimeStamp:function()
		{
			 
				var data = sap.ui.getCore().getModel("GData").getData().GloBalJson;
			var familyMonthlySaved = "";
			var totalIncome = "";
			var familyNeedSuportCurrency = "";

	
	

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
				"SaaAppln":data.saaAplicationNo,
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
 
					
					

					}.bind(this),
					error: function(oError) {

					}
				});

			} else {

				this.getView().getModel().create("/SaveFunctionSet", payloadForMarriedWithKids, {
					success: function(oData, response) {
 
						sap.ui.getCore().getModel("GData").oData.GloBalJson.saaAplicationNo = oData.SaaAppln;
					

					}.bind(this),
					error: function(oError) {

					}
				});

			}
		},

		productNavigate: function() {
		

			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "yyyy-MM-ddThh:mm:ss"
			});

			$(".familyProduct1").click(function() {

				$(".familyEndownment2").removeClass("imageButtonSelected");
				$(".familyPink2").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "Endowment Assurance XJ40000A0000";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());

				if ($(".familyEndownment1").hasClass("imageButtonSelected") && $(".familyPink1").hasClass("cardBodyPink")) {
					$(".familyEndownment1").removeClass("imageButtonSelected");
					$(".familyPink1").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".familyEndownment1").addClass("imageButtonSelected");
					$(".familyPink1").addClass("cardBodyPink");
				}

			});
			$(".familyProduct2").click(function() {

				$(".familyEndownment1").removeClass("imageButtonSelected");
				$(".familyPink1").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "MBAL Universal Life Package";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());

				if ($(".familyEndownment2").hasClass("imageButtonSelected") && $(".familyPink2").hasClass("cardBodyPink")) {
					$(".familyEndownment2").removeClass("imageButtonSelected");
					$(".familyPink2").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
					solutionDream.productTimeStamp();  
					$(".familyEndownment2").addClass("imageButtonSelected");
					$(".familyPink2").addClass("cardBodyPink");
				}

			});
			$(".childrenProduct1").click(function() {
				$(".educatonProduct2").removeClass("imageButtonSelected");

				$(".educationPink2").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "Child Educational Endowment 3N50000A0000";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());
				if ($(".educatonProduct1").hasClass("imageButtonSelected") && $(".educationPink1").hasClass("cardBodyPink")) {
					$(".educatonProduct1").removeClass("imageButtonSelected");
					$(".educationPink1").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".educatonProduct1").addClass("imageButtonSelected");
					$(".educationPink1").addClass("cardBodyPink");
				}

			});
			$(".childrenProduct2").click(function() {
				$(".educatonProduct1").removeClass("imageButtonSelected");

				$(".educationPink1").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "MBAL Universal Life Package";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());
				// $(".educatonProduct2").addClass("imageButtonSelected");
				if ($(".educatonProduct2").hasClass("imageButtonSelected") && $(".educationPink2").hasClass("cardBodyPink")) {
					$(".educatonProduct2").removeClass("imageButtonSelected");
					$(".educationPink2").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".educatonProduct2").addClass("imageButtonSelected");
					$(".educationPink2").addClass("cardBodyPink");
				}

			});
			$(".dreamProduct1").click(function() {
				$(".dreamProduct2Class").removeClass("imageButtonSelected");

				$(".dreamPink2").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "Endowment Assurance XJ40000A0000";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());
				// $(".dreamProduct1").addClass("imageButtonSelected");
				if ($(".dreamProduct1Class").hasClass("imageButtonSelected") && $(".dreamPink1").hasClass("cardBodyPink")) {
					$(".dreamProduct1Class").removeClass("imageButtonSelected");
					$(".dreamPink1").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".dreamProduct1Class").addClass("imageButtonSelected");
					$(".dreamPink1").addClass("cardBodyPink");
				}
			});
			$(".dreamProduct2").click(function() {
				$(".dreamProduct1Class").removeClass("imageButtonSelected");

				$(".dreamPink1").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "MBAL Universal Life Package";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());
				// $(".dreamProduct2").addClass("imageButtonSelected");
				if ($(".dreamProduct2Class").hasClass("imageButtonSelected") && $(".dreamPink2").hasClass("cardBodyPink")) {
					$(".dreamProduct2Class").removeClass("imageButtonSelected");
					$(".dreamPink2").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".dreamProduct2Class").addClass("imageButtonSelected");
					$(".dreamPink2").addClass("cardBodyPink");
				}
			});
			sap.ui.getCore().getModel("GData").refresh(true);
		},

		onAfterRendering: function() {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "yyyy-MM-ddTh:mm:ss"
			});
			$(".sidenav ").removeClass("expanded");
			$(".familyProduct1").click(function() {

				$(".familyEndownment2").removeClass("imageButtonSelected");
				$(".familyPink2").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "Endowment Assurance XJ40000A0000";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());

				if ($(".familyEndownment1").hasClass("imageButtonSelected") && $(".familyPink1").hasClass("cardBodyPink")) {
					$(".familyEndownment1").removeClass("imageButtonSelected");
					$(".familyPink1").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".familyEndownment1").addClass("imageButtonSelected");
					$(".familyPink1").addClass("cardBodyPink");
				}

			});
			$(".familyProduct2").click(function() {

				$(".familyEndownment1").removeClass("imageButtonSelected");
				$(".familyPink1").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "MBAL Universal Life Package";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());

				if ($(".familyEndownment2").hasClass("imageButtonSelected") && $(".familyPink2").hasClass("cardBodyPink")) {
					$(".familyEndownment2").removeClass("imageButtonSelected");
					$(".familyPink2").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".familyEndownment2").addClass("imageButtonSelected");
					$(".familyPink2").addClass("cardBodyPink");
				}

			});
			$(".childrenProduct1").click(function() {
				$(".educatonProduct2").removeClass("imageButtonSelected");

				$(".educationPink2").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "Child Educational Endowment 3N50000A0000";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());
				if ($(".educatonProduct1").hasClass("imageButtonSelected") && $(".educationPink1").hasClass("cardBodyPink")) {
					$(".educatonProduct1").removeClass("imageButtonSelected");
					$(".educationPink1").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".educatonProduct1").addClass("imageButtonSelected");
					$(".educationPink1").addClass("cardBodyPink");
				}

			});
			$(".childrenProduct2").click(function() {
				$(".educatonProduct1").removeClass("imageButtonSelected");

				$(".educationPink1").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "MBAL Universal Life Package";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());
				// $(".educatonProduct2").addClass("imageButtonSelected");
				if ($(".educatonProduct2").hasClass("imageButtonSelected") && $(".educationPink2").hasClass("cardBodyPink")) {
					$(".educatonProduct2").removeClass("imageButtonSelected");
					$(".educationPink2").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".educatonProduct2").addClass("imageButtonSelected");
					$(".educationPink2").addClass("cardBodyPink");
				}

			});
			$(".dreamProduct1").click(function() {
				$(".dreamProduct2Class").removeClass("imageButtonSelected");

				$(".dreamPink2").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "Endowment Assurance XJ40000A0000";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());
				// $(".dreamProduct1").addClass("imageButtonSelected");
				if ($(".dreamProduct1Class").hasClass("imageButtonSelected") && $(".dreamPink1").hasClass("cardBodyPink")) {
					$(".dreamProduct1Class").removeClass("imageButtonSelected");
					$(".dreamPink1").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".dreamProduct1Class").addClass("imageButtonSelected");
					$(".dreamPink1").addClass("cardBodyPink");
				}
			});
			$(".dreamProduct2").click(function() {
				$(".dreamProduct1Class").removeClass("imageButtonSelected");

				$(".dreamPink1").removeClass("cardBodyPink");
				sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "MBAL Universal Life Package";
				sap.ui.getCore().getModel("GData").oData.GloBalJson.ProdChosenTime = oDateFormat.format(new Date());
				// $(".dreamProduct2").addClass("imageButtonSelected");
				if ($(".dreamProduct2Class").hasClass("imageButtonSelected") && $(".dreamPink2").hasClass("cardBodyPink")) {
					$(".dreamProduct2Class").removeClass("imageButtonSelected");
					$(".dreamPink2").removeClass("cardBodyPink");
					sap.ui.getCore().getModel("GData").oData.GloBalJson.productSelected = "";
				} else {
						solutionDream.productTimeStamp();  
					$(".dreamProduct2Class").addClass("imageButtonSelected");
					$(".dreamPink2").addClass("cardBodyPink");
				}
			});
			sap.ui.getCore().getModel("GData").refresh(true);

		},

		pdfOpen: function(oEvent) {

			switch (oEvent.getSource().getTooltip()) {
				case "Endownment":
					var BSP_NAME = "zmsg_saa";
					var mediaURL = "/media/pdf/Endownment.pdf";
					var urlToOpen = jQuery.sap.getModulePath("com.saaprojSAADevlopment", mediaURL);

					if (window.location.href.search("/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html") > 0) {
						urlToOpen = "/sap/bc/bsp/sap/" + BSP_NAME + mediaURL;
					}

					var win = window.open(
						urlToOpen,
						'_blank');
					if (win) {
						//Browser has allowed it to be opened
						win.focus();
					} else {
						//Browser has blocked it
						// alert('Please allow popups for this website');
					}
					break;
				case "UlProtectorPackage":

					var BSP_NAME = "zmsg_saa";
					var mediaURL = "/media/pdf/ULProtectorPackage.pdf";
					var urlToOpen = jQuery.sap.getModulePath("com.saaprojSAADevlopment", mediaURL);

					if (window.location.href.search("/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html") > 0) {
						urlToOpen = "/sap/bc/bsp/sap/" + BSP_NAME + mediaURL;
					}

					var win = window.open(
						urlToOpen,
						'_blank');
					if (win) {
						//Browser has allowed it to be opened
						win.focus();
					} else {
						//Browser has blocked it
						// alert('Please allow popups for this website');
					}
					break;
				case "Education":
					var BSP_NAME = "zmsg_saa";
					var mediaURL = "/media/pdf/education.pdf";
					var urlToOpen = jQuery.sap.getModulePath("com.saaprojSAADevlopment", mediaURL);

					if (window.location.href.search("/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html") > 0) {
						urlToOpen = "/sap/bc/bsp/sap/" + BSP_NAME + mediaURL;
					}

					var win = window.open(
						urlToOpen,
						'_blank');
					if (win) {
						//Browser has allowed it to be opened
						win.focus();
					} else {
						//Browser has blocked it
						// alert('Please allow popups for this website');
					}
					break;
				case "UlEducationPackage":
					var BSP_NAME = "zmsg_saa";
					var mediaURL = "/media/pdf/ULEduPackage.pdf";
					var urlToOpen = jQuery.sap.getModulePath("com.saaprojSAADevlopment", mediaURL);

					if (window.location.href.search("/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html") > 0) {
						urlToOpen = "/sap/bc/bsp/sap/" + BSP_NAME + mediaURL;
					}

					var win = window.open(
						urlToOpen,
						'_blank');
					if (win) {
						//Browser has allowed it to be opened
						win.focus();
					} else {
						//Browser has blocked it
						// alert('Please allow popups for this website');
					}
					break;
				case "DreamEndowment":
					var BSP_NAME = "zmsg_saa";
					var mediaURL = "/media/pdf/Endownment.pdf";
					var urlToOpen = jQuery.sap.getModulePath("com.saaprojSAADevlopment", mediaURL);

					if (window.location.href.search("/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html") > 0) {
						urlToOpen = "/sap/bc/bsp/sap/" + BSP_NAME + mediaURL;
					}

					var win = window.open(
						urlToOpen,
						'_blank');
					if (win) {
						//Browser has allowed it to be opened
						win.focus();
					} else {
						//Browser has blocked it
						alert('Please allow popups for this website');
					}
					break;
				case "UlLimitedPaymentPackage":
					var BSP_NAME = "zmsg_saa";
					var mediaURL = "/media/pdf/ULLimitedPaymentPackage.pdf";
					var urlToOpen = jQuery.sap.getModulePath("com.saaprojSAADevlopment", mediaURL);

					if (window.location.href.search("/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html") > 0) {
						urlToOpen = "/sap/bc/bsp/sap/" + BSP_NAME + mediaURL;
					}

					var win = window.open(
						urlToOpen,
						'_blank');
					if (win) {
						//Browser has allowed it to be opened
						win.focus();
					} else {
						//Browser has blocked it
						// alert('Please allow popups for this website');
					}
					break;
			}

		},

		_onObjectMatched: function(oEvent) {

			$(".sidenav ").removeClass("expanded");

			this.getView().setModel(new sap.ui.model.json.JSONModel({
				currentPage: 0,
				totalPages: this.byId("navCon7").getPages().length,

				images: {

					59: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/background/59.jpg"),
					prodAsset3: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset3.svg"),
					prodAsset4: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset4.svg"),
					prodAsset5: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset5.svg"),
					prodAsset6: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset6.svg"),
					prodAsset7: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset7.svg"),
					prodAsset8: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset8.svg"),
					prodAsset9: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset9.svg"),
					prodAsset10: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset10.svg"),
					prodAsset11: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset11.svg"),
					prodAsset12: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset12.svg"),
					prodAsset13: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset13.svg"),
					prodAsset14: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset14.svg"),
					prodAsset15: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset15.svg"),
					prodAsset16: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset16.svg"),
					prodAsset17: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset17.svg"),
					prodAsset18: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset18.svg"),
					prodAsset19: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset19.svg"),
					prodAsset20: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset20.svg"),
					prodAsset21: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset21.svg"),
					prodAsset22: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset22.svg"),
					prodAsset23: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset23.svg"),
					prodAsset24: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset24.svg"),
					prodAsset25: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset25.svg"),
					prodAsset26: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/prodAsset26.svg"),

					education1: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/education1.png"),
					Endownment: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/Endownment.png"),
					SPA: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/SPA.png"),
					ULEducation: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/ULEducation.png"),
					ULP: jQuery.sap.getModulePath("com.saaprojSAADevlopment", "/media/icon/product/ULP.png"),

				}
			}), "dataModel");

			if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "en") {
				this.getView().byId("idEndowmentEn").setVisible(true);
				this.getView().byId("idEndowmentVi").setVisible(false);
				this.getView().byId("idEndowmentDreamEn").setVisible(true);
				this.getView().byId("idEndowmentDreamVi").setVisible(false);
				this.getView().byId("idEducationProductPackEn").setVisible(true);
				this.getView().byId("idEducationProductPackVi").setVisible(false);
			} else if (sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi") {
				this.getView().byId("idEndowmentEn").setVisible(false);
				this.getView().byId("idEndowmentVi").setVisible(true);
				this.getView().byId("idEndowmentDreamEn").setVisible(false);
				this.getView().byId("idEndowmentDreamVi").setVisible(true);
				this.getView().byId("idEducationProductPackEn").setVisible(false);
				this.getView().byId("idEducationProductPackVi").setVisible(true);
			}

			sap.ui.getCore().getModel("GData");
			var solutionFamilyId = solutionDream.byId("navCon7");
			var domainSelected = sap.ui.getCore().getModel("GData").oData.GloBalJson.domainSelected;
			var oDataModel1 = this.getView().getModel("dataModel");

			switch (domainSelected) {
				case "EDUCATION":
					oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 1);
					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "HEALTH":
					oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 0);
					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "FAMILY":
					oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 0);
					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "DREAMS":

					oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 2);
					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
				case "RETIREMENT":
					oDataModel1.setProperty("/currentPage", oDataModel1.getProperty("/currentPage") + 2);
					solutionFamilyId.to(solutionFamilyId.getPages()[oDataModel1.getProperty("/currentPage")].getId(), "slide");
					break;
			}
			// $(".cardData").onclick=function(){  ("click");};

		},

		submitQuotation: function() {

			if (sap.ui.getCore().getModel("GData").getData().GloBalJson.productSelected === "") {
				sap.m.MessageBox.show(this.getView().getModel("i18n").getResourceBundle().getText("dataValidationError"), {
					title: this.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
					onClose: null,
					styleClass: "", // default
					actions: this.getView().getModel("i18n").getResourceBundle().getText("okButton"),
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
				return;
			}

			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "yyyy-MM-ddThh:mm:ss"
			});
			sap.ui.getCore().getModel("GData").oData.GloBalJson.QqNavTime = oDateFormat.format(new Date());
			var data = JSON.parse(JSON.stringify(sap.ui.getCore().getModel("GData").getData().GloBalJson));

			var date = data.dobOfPerson;
			var dateFormat = new Date(date);
			var fullYear = dateFormat.getFullYear();
			var day = dateFormat.getDate();
			var month = dateFormat.getMonth() + 1;

			var QQDate = fullYear + "/" + month + "/" + day;
			var familyMonthlySaved = "";
			var totalIncome = "";
			var familyNeedSuportCurrency = "";
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
				"SaaAppln": data.saaAplicationNo,
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

			var totalFemale = sap.ui.getCore().getModel("GData").oData.GloBalJson.totalFemale;
			var totalMale = sap.ui.getCore().getModel("GData").oData.GloBalJson.totalMale;

			var data = sap.ui.getCore().getModel("GData").getData().GloBalJson;

			//If Application number is already generated the updating the Model.

			if (sap.ui.getCore().getModel("GData").oData.GloBalJson.saaAplicationNo) {
				this.getView().getModel().update("/SaveFunctionSet(SaaAppln='" + data.saaAplicationNo + "') ", payloadForMarriedWithKids, {
					success: function(oData, response) {

						// window.location.replace(
						// 	"/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-client=410&sap-language=EN&sap-sec_session_created=X#InsuranceQuote-create"
						// );

						sap.m.MessageBox.information(solutionDream.getView().getModel("i18n").getResourceBundle().getText("succesMessage"), {
							title: solutionDream.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
							onClose: function() {
								var genderOfPerson = data.genderOfPerson;
								if (genderOfPerson === "1") {
									genderOfPerson = "2";
								} else {
									genderOfPerson = "1";
								}
								
								var serverBaseUrl = "";
								var sSystemId = window["sap-ushell-config"].services.Container.adapter.config.system;
								
								switch (sSystemId) {
									case "LD2":			// Development
										serverBaseUrl = sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi" ? "https://d-lingua.mbageas.life" : "";
										break;
									case "LQ2":			// Quality
										serverBaseUrl = sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi" ? "https://q-lingua.mbageas.life" : "";
										break;
									case "LP2":			// Production
										serverBaseUrl = sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi" ? "https://bangminhhoa.mbageas.life" : "";
										break;
									default:			// In Any other cases
									serverBaseUrl = "";
								}

								var link = document.createElement('a');
								
								if( sap.ui.controller("com.saaprojSAADevlopment.controller.ProductView").checkVersion() === true  ){
									//link.href.replace("https://", "googlechromes://");
									link.href = encodeURI(
									serverBaseUrl + 
									'/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-sec_session_created=X#InsuranceQuote-create?app=saa&name=' +
									data.nameOfPerson + '&dob=' + QQDate + '&gender=' + genderOfPerson +
									'&product=' + data.productSelected).replace("https://", "googlechromes://");

								}
								else{
									link.href = encodeURI(
									serverBaseUrl + 
									'/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-sec_session_created=X#InsuranceQuote-create?app=saa&name=' +
									data.nameOfPerson + '&dob=' + QQDate + '&gender=' + genderOfPerson +
									'&product=' + data.productSelected);

									
								};
								console.log(link.href);
								link.target = "_blank";
								document.body.appendChild(link);
								link.click();

								// var win = window.open(

								// 	'/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-sec_session_created=X#InsuranceQuote-create?app=saa&name=' +
								// 	data.nameOfPerson + '&dob=' + QQDate + '&gender=' + data.genderOfPerson +
								// 	'&product=' + data.productSelected,
								// 	'_blank');
								// if (win) {
								// 	//Browser has allowed it to be opened
								// 	win.focus();
								// } else {

								// }
							}, // default
							actions: solutionDream.getView().getModel("i18n").getResourceBundle().getText("okButton"),
							styleClass: "", // default
							initialFocus: null, // default
							textDirection: sap.ui.core.TextDirection.Inherit // default
						});

					},
					error: function(oError) {

						("Error");
					}
				});
			} else {
				this.getView().getModel().create("/SaveFunctionSet", payloadForMarriedWithKids, {
					success: function(oData, response) {

						// window.location.replace(
						// 	"/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-client=410&sap-language=EN&sap-sec_session_created=X#InsuranceQuote-create"
						// );

						sap.m.MessageBox.information(solutionDream.getView().getModel("i18n").getResourceBundle().getText("succesMessage"), {
							title: solutionDream.getView().getModel("i18n").getResourceBundle().getText("messageBoxInformation"), // default
							onClose: function() {

								var genderOfPerson = data.genderOfPerson;
								if (genderOfPerson === "1") {
									genderOfPerson = "2";
								} else {
									genderOfPerson = "1";
								}

								var serverBaseUrl = "";
								var sSystemId = window["sap-ushell-config"].services.Container.adapter.config.system;
								
								switch (sSystemId) {
									case "LD2":			// Development
										serverBaseUrl = sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi" ? "https://d-lingua.mbageas.life" : "";
										break;
									case "LQ2":			// Quality
										serverBaseUrl = sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi" ? "https://q-lingua.mbageas.life" : "";
										break;
									case "LP2":			// Production
										serverBaseUrl = sap.ui.getCore().getModel("LData").oData.lnguageOdata.languageSelect === "vi" ? "https://bangminhhoa.mbageas.life" : "";
										break;
									default:			// In Any other cases
									serverBaseUrl = "";
								}

								var link = document.createElement('a');
								
								if( sap.ui.controller("com.saaprojSAADevlopment.controller.ProductView").checkVersion() === true ){
									//link.href.replace("https://", "googlechromes://");
									link.href = encodeURI(
									serverBaseUrl + 
									'/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-sec_session_created=X#InsuranceQuote-create?app=saa&name=' +
									data.nameOfPerson + '&dob=' + QQDate + '&gender=' + genderOfPerson +
									'&product=' + data.productSelected).replace("https://", "googlechromes://");

								}
								else{
									link.href = encodeURI(
									serverBaseUrl + 
									'/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-sec_session_created=X#InsuranceQuote-create?app=saa&name=' +
									data.nameOfPerson + '&dob=' + QQDate + '&gender=' + genderOfPerson +
									'&product=' + data.productSelected);

									
								};
								console.log(link.href);
								link.target = "_blank";
								document.body.appendChild(link);
								link.click();

								// var win = window.open(

								// 	'/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html?sap-sec_session_created=X#InsuranceQuote-create?app=saa&name=' +
								// 	data.nameOfPerson + '&dob=' + QQDate + '&gender=' + data.genderOfPerson +
								// 	'&product=' + data.productSelected,
								// 	'_blank');
								// if (win) {
								// 	//Browser has allowed it to be opened
								// 	win.focus();
								// } else {

								// }
							}, // default
							styleClass: "", // default
							actions: solutionDream.getView().getModel("i18n").getResourceBundle().getText("okButton"),
							initialFocus: null, // default
							textDirection: sap.ui.core.TextDirection.Inherit // default
						});

					},
					error: function(oError) {

						("Error");
					}
				});
			}

		},

		handleNavNext: function(evt) {
			var navCon = this.byId("navCon7");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") + 1); // Increase the index
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},
		
		checkVersion: function() {
			//var agent = window.navigator.userAgent;
			//var start = agent.indexOf( 'OS ' );
			 //   if( ( agent.indexOf( 'iPhone' ) > -1 || agent.indexOf( 'iPad' ) > -1 ) && start > -1 ){
			    //    return window.Number( agent.substr( start + 3, 3 ).replace( '_', '.' ) );
			   // }
			   // return 0;
			   if ( navigator.userAgent.match(/iPad/i) != null ||   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)  )
			   {
			   	return true;
			   }else{
			   	return false;
			   }

		},

		handleNavPrev: function(evt) {
			var navCon = this.byId("navCon7");
			var oDataModel = this.getView().getModel("dataModel");

			oDataModel.setProperty("/currentPage", oDataModel.getProperty("/currentPage") - 1);
			navCon.to(navCon.getPages()[oDataModel.getProperty("/currentPage")].getId(), "slide");
			this.onCarouselPageChanged(evt);
		},

	});

});