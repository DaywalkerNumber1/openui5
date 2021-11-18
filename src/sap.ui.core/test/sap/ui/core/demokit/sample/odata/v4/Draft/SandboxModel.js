/*!
 * ${copyright}
 */
// The SandboxModel is used in the manifest instead of OData V4 model for the following purposes:
// Certain constructor parameters are taken from URL parameters. For the "non-realOData" case, a
// mock server for the back-end requests is set up.
sap.ui.define([
	"sap/ui/core/sample/common/SandboxModelHelper",
	"sap/ui/model/odata/v4/ODataModel"
], function (SandboxModelHelper, ODataModel) {
	"use strict";

	var oMockData = {
			mFixture : {
				"$metadata?sap-language=EN" : {
					source : "metadata.xml"
				},
				"Products?$count=true&$filter=IsActiveEntity%20eq%20false%20or%20SiblingEntity/IsActiveEntity%20eq%20null&$select=ID,IsActiveEntity,amount,categoryID,name&$skip=0&$top=5" : {
					source : "Products.json"
				},
				"Products(ID=10,IsActiveEntity=true)?$select=DraftAdministrativeData,HasActiveEntity,HasDraftEntity,_Category&$expand=DraftAdministrativeData($select=CreationDateTime,DraftUUID,LastChangeDateTime),_Category($select=ID,IsActiveEntity,name)" : {
					source : "Products_10_true.json"
				},
				"POST Products(ID=10,IsActiveEntity=true)/SampleService.draftEdit?$select=HasActiveEntity,HasDraftEntity,ID,IsActiveEntity,amount,categoryID,name&$expand=DraftAdministrativeData($select=CreationDateTime,DraftUUID,LastChangeDateTime),_Category($select=ID,IsActiveEntity,name)" : {
					source : "Products_10_false.json"
				},
				// "PATCH Products(ID=10,IsActiveEntity=false)"
				// "DELETE Products(ID=10,IsActiveEntity=false)"
				"POST Products(ID=10,IsActiveEntity=false)/SampleService.draftActivate?$select=HasActiveEntity,HasDraftEntity,ID,IsActiveEntity,amount,categoryID,name&$expand=DraftAdministrativeData($select=CreationDateTime,DraftUUID,LastChangeDateTime),_Category($select=ID,IsActiveEntity,name)" : {
					source : "Products_10_true_PATCHed.json"
				}
			},
			sFilterBase : "/MyProducts/",
			sSourceBase : "sap/ui/core/sample/odata/v4/Draft/data"
	};

	return ODataModel.extend("sap.ui.core.sample.odata.v4.Draft.SandboxModel", {
		constructor : function (mParameters) {
			return SandboxModelHelper.adaptModelParametersAndCreateModel(mParameters, oMockData);
		}
	});
});