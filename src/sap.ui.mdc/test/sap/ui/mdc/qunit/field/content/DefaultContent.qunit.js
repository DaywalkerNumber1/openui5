/*globals sinon*/
sap.ui.define([
	"sap/ui/thirdparty/qunit-2",
	"sap/ui/mdc/field/content/DefaultContent",
	"sap/ui/mdc/Field",
	"sap/m/Text",
	"sap/m/ExpandableText",
	"sap/ui/mdc/field/FieldInput",
	"sap/ui/mdc/field/FieldMultiInput",
	"sap/m/TextArea",
	"sap/m/Token"
], function(QUnit, DefaultContent, Field, Text, ExpandableText, FieldInput, FieldMultiInput, TextArea, Token) {
	"use strict";

	var oControlMap = {
		"Display": {
			getPathsFunction: "getDisplay",
			paths: ["sap/m/Text"],
			instances: [Text],
			createFunction: "createDisplay"
		},
		"DisplayMultiValue": {
			getPathsFunction: "getDisplayMultiValue",
			paths: ["sap/m/ExpandableText"],
			instances: [ExpandableText],
			createFunction: "createDisplayMultiValue"
		},
		"DisplayMultiLine": {
			getPathsFunction: "getDisplayMultiLine",
			paths: ["sap/m/ExpandableText"],
			instances: [ExpandableText],
			createFunction: "createDisplayMultiLine"
		},
		"Edit": {
			getPathsFunction: "getEdit",
			paths: ["sap/ui/mdc/field/FieldInput"],
			instances: [FieldInput],
			createFunction: "createEdit"
		},
		"EditMultiValue": {
			getPathsFunction: "getEditMultiValue",
			paths: ["sap/ui/mdc/field/FieldMultiInput", "sap/m/Token"],
			instances: [FieldMultiInput, Token],
			createFunction: "createEditMultiValue"
		},
		"EditMultiLine": {
			getPathsFunction: "getEditMultiLine",
			paths: ["sap/m/TextArea"],
			instances: [TextArea],
			createFunction: "createEditMultiLine"
		},
		"EditForHelp": {
			getPathsFunction: "getEditForHelp",
			paths: ["sap/ui/mdc/field/FieldInput"],
			instances: [FieldInput],
			createFunction: "createEditForHelp"
		}
	};

	var aControlMapKeys = Object.keys(oControlMap);

	QUnit.module("Getters");

	aControlMapKeys.forEach(function(sControlMapKey) {
		var oValue = oControlMap[sControlMapKey];
		QUnit.test(oValue.getPathsFunction, function(assert) {
			assert.deepEqual(DefaultContent[oValue.getPathsFunction](), oValue.paths, "Correct control path returned for ContentMode '" + sControlMapKey + "'.");
		});
	});

	QUnit.test("getEditOperator", function(assert) {
		assert.deepEqual(DefaultContent.getEditOperator(), [null], "Correct editOperator value returned.");
	});

	QUnit.test("getUseDefaultEnterHandler", function(assert) {
		assert.ok(DefaultContent.getUseDefaultEnterHandler(), "Correct useDefaultEnterHandler value returned.");
	});

	QUnit.test("getUseDefaultFieldHelp", function(assert) {
		var oUseDefaultFieldHelp = DefaultContent.getUseDefaultFieldHelp();
		assert.equal(oUseDefaultFieldHelp.name, "defineConditions", "Correct useDefaultFieldHelp.name value returned.");
		assert.notOk(oUseDefaultFieldHelp.oneOperatorSingle, "Correct useDefaultFieldHelp.oneOperatorSingle value returned.");
		assert.notOk(oUseDefaultFieldHelp.oneOperatorMulti, "Correct useDefaultFieldHelp.oneOperatorMulti value returned.");
	});

	QUnit.test("getControlNames", function(assert) {
		/* no need to use oOperator here as there is no editOperator*/
		assert.deepEqual(DefaultContent.getControlNames(null), ["sap/ui/mdc/field/FieldInput"], "Correct default controls returned for ContentMode null");
		assert.deepEqual(DefaultContent.getControlNames(undefined), ["sap/ui/mdc/field/FieldInput"], "Correct default controls returned for ContentMode undefined");
		assert.deepEqual(DefaultContent.getControlNames("idghsoidpgdfhkfokghkl"), ["sap/ui/mdc/field/FieldInput"], "Correct default controls returned for not specified ContentMode");

		assert.deepEqual(DefaultContent.getControlNames("Edit"), ["sap/ui/mdc/field/FieldInput"], "Correct default controls returned for ContentMode 'Edit'");
		assert.deepEqual(DefaultContent.getControlNames("Display"), ["sap/m/Text"], "Correct default controls returned for ContentMode 'Display'");
		assert.deepEqual(DefaultContent.getControlNames("DisplayMultiValue"), ["sap/m/ExpandableText"], "Correct default controls returned for ContentMode 'DisplayMultiValue'");
		assert.deepEqual(DefaultContent.getControlNames("DisplayMultiLine"), ["sap/m/ExpandableText"], "Correct default controls returned for ContentMode 'DisplayMultiLine'");
		assert.deepEqual(DefaultContent.getControlNames("EditMultiValue"), ["sap/ui/mdc/field/FieldMultiInput", "sap/m/Token"], "Correct default controls returned for ContentMode 'EditMultiValue'");
		assert.deepEqual(DefaultContent.getControlNames("EditMultiLine"), ["sap/m/TextArea"], "Correct default controls returned for ContentMode 'EditMultiLine'");
		assert.deepEqual(DefaultContent.getControlNames("EditOperator"), [null], "Correct default controls returned for ContentMode 'EditOperator'");
		assert.deepEqual(DefaultContent.getControlNames("EditForHelp"), ["sap/ui/mdc/field/FieldInput"], "Correct default controls returned for ContentMode 'EditForHelp'");
	});

	QUnit.module("Content creation", {
		beforeEach: function() {
			this.oField = new Field({});
			this.aControls = [];
		},
		afterEach: function() {
			delete this.oField;
			while (this.aControls.length > 0) {
				var oControl = this.aControls.pop();
				if (oControl) {
					oControl.destroy();
				}
			}
		}
	});

	var fnCreateControls = function(oContentFactory, sContentMode, sIdPostFix) {
		return DefaultContent.create(oContentFactory, sContentMode, null, oControlMap[sContentMode].instances, sContentMode + sIdPostFix);
	};

	var fnSpyOnCreateFunction = function(sContentMode) {
		return oControlMap[sContentMode].createFunction ? sinon.spy(DefaultContent, oControlMap[sContentMode].createFunction) : null;
	};

	var fnSpyCalledOnce = function(fnSpyFunction, sContentMode, assert) {
		if (fnSpyFunction) {
			assert.ok(fnSpyFunction.calledOnce, oControlMap[sContentMode].createFunction + " called once.");
		}
	};

	QUnit.test("create", function(assert) {
		var done = assert.async();
		var oContentFactory = this.oField._oContentFactory;
		this.oField.awaitControlDelegate().then(function() {
			var aDisplayControls = oControlMap["Display"].instances;
			var aDisplayMultiValueControls = oControlMap["DisplayMultiValue"].instances;
			var aDisplayMultiLineControls = oControlMap["DisplayMultiLine"].instances;
			var aEditControls = oControlMap["Edit"].instances;
			var aEditMultiValueControls = oControlMap["EditMultiValue"].instances;
			var aEditMultiLineControls = oControlMap["EditMultiLine"].instances;
			var aEditForHelpControls = oControlMap["EditForHelp"].instances;

			var fnCreateDisplayFunction = fnSpyOnCreateFunction("Display");
			var fnCreateDisplayMultiValueFunction = fnSpyOnCreateFunction("DisplayMultiValue");
			var fnCreateDisplayMultiLineFunction = fnSpyOnCreateFunction("DisplayMultiLine");
			var fnCreateEditFunction = fnSpyOnCreateFunction("Edit");
			var fnCreateEditMultiValueFunction = fnSpyOnCreateFunction("EditMultiValue");
			var fnCreateEditMultiLineFunction = fnSpyOnCreateFunction("EditMultiLine");
			var fnCreateEditForHelpFunction = fnSpyOnCreateFunction("EditForHelp");

			var aCreatedDisplayControls = fnCreateControls(oContentFactory, "Display", "-create");
			fnSpyCalledOnce(fnCreateDisplayFunction, "Display", assert);
			var aCreatedDisplayMultiLineControls = fnCreateControls(oContentFactory, "DisplayMultiLine", "-create");
			fnSpyCalledOnce(fnCreateDisplayMultiLineFunction, "DisplayMultiLine", assert); // before DisplayMultiValue as called inside there too
			var aCreatedDisplayMultiValueControls = fnCreateControls(oContentFactory, "DisplayMultiValue", "-create");
			fnSpyCalledOnce(fnCreateDisplayMultiValueFunction, "DisplayMultiValue", assert);
			var aCreatedEditControls = fnCreateControls(oContentFactory, "Edit", "-create");
			fnSpyCalledOnce(fnCreateEditFunction, "Edit", assert);
			var aCreatedEditMultiValueControls = fnCreateControls(oContentFactory, "EditMultiValue", "-create");
			fnSpyCalledOnce(fnCreateEditMultiValueFunction, "EditMultiValue", assert);
			var aCreatedEditMultiLineControls = fnCreateControls(oContentFactory, "EditMultiLine", "-create");
			fnSpyCalledOnce(fnCreateEditMultiLineFunction, "EditMultiLine", assert);
			var aCreatedEditForHelpControls = fnCreateControls(oContentFactory, "EditForHelp", "-create");
			fnSpyCalledOnce(fnCreateEditForHelpFunction, "EditForHelp", assert);

			var aCreatedEditOperatorControls = DefaultContent.create(oContentFactory, "EditOperator", null, [null], "EditOperator" + "-create");


			assert.ok(aCreatedDisplayControls[0] instanceof aDisplayControls[0], aDisplayControls[0].getMetadata().getName() + " control created for ContentMode 'Display'.");
			assert.ok(aCreatedDisplayMultiValueControls[0] instanceof aDisplayMultiValueControls[0], aDisplayMultiValueControls[0].getMetadata().getName() + " control created for ContentMode 'DisplayMultiValue'.");
			assert.ok(aCreatedDisplayMultiLineControls[0] instanceof aDisplayMultiLineControls[0], aDisplayMultiLineControls[0].getMetadata().getName() + " control created for ContentMode 'DisplayMultiLine'.");
			assert.ok(aCreatedEditControls[0] instanceof aEditControls[0], aEditControls[0].getMetadata().getName() + " control created for ContentMode 'Edit'.");
			assert.ok(aCreatedEditMultiValueControls[0] instanceof aEditMultiValueControls[0], aEditMultiValueControls[0].getMetadata().getName() + " control created for ContentMode 'EditMultiValue'.");
			assert.ok(aCreatedEditMultiLineControls[0] instanceof aEditMultiLineControls[0], aEditMultiLineControls[0].getMetadata().getName() + " control created for ContentMode 'EditMultiLine'.");
			assert.equal(aCreatedEditOperatorControls[0], null, "No control created for ContentMode 'EditOperator'.");
			assert.ok(aCreatedEditForHelpControls[0] instanceof aEditForHelpControls[0], aEditForHelpControls[0].getMetadata().getName() + " control created for ContentMode 'EditForHelp'.");

			done();
		});
	});

	aControlMapKeys.forEach(function(sControlMapKey) {
		var oValue = oControlMap[sControlMapKey];
		if (oValue.createFunction) {
			QUnit.test(oValue.createFunction, function(assert) {
				var done = assert.async();
				var oContentFactory = this.oField._oContentFactory;
				this.oField.awaitControlDelegate().then(function() {
					var oInstance = oValue.instances[0];
					var aControls = DefaultContent.create(oContentFactory, sControlMapKey, null, oValue.instances, sControlMapKey);

					assert.ok(aControls[0] instanceof oInstance, "Correct control created in " + oValue.createFunction);
					done();
				});
			});
		}
	});

	QUnit.start();
});