/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/base/Log",
	"sap/m/Button",
	"sap/m/Column",
	"sap/m/ColumnListItem",
	"sap/m/ComboBox",
	"sap/m/Input",
	"sap/m/library",
	"sap/m/ResponsivePopover",
	"sap/m/Table",
	"sap/m/Text",
	"sap/ui/core/Control",
	"sap/ui/core/Item",
	"sap/ui/model/odata/v4/ValueListType"
], function (Log, Button, Column, ColumnListItem, ComboBox, Input, library, ResponsivePopover,
		Table, Text, Control, Item, ValueListType) {
	"use strict";

	// shortcut for sap.m.PlacementType
	var PlacementType = library.PlacementType;

	return Control.extend("sap.ui.core.sample.common.ValueHelp", {
		metadata : {
			interfaces : ["sap.ui.core.IFormContent"],
			properties : {
				enabled : {type: "boolean", defaultValue: true, bindable: "bindable"},
				qualifier : {type: "string", defaultValue: "", bindable: "bindable"},
				value: {type: "string", group: "Data", defaultValue: null, bindable: "bindable"}
			},
			aggregations : {
				field : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}
			},
			associations: {
				/**
				 * Association to controls / IDs that label this control (see WAI-ARIA attribute
				 * aria-labelledby).
				 */
				ariaLabelledBy: {
					type: "sap.ui.core.Control",
					multiple: true,
					singularName: "ariaLabelledBy"
				}
			},
			events : {
				selectionChanged : {
					parameters : {
						context : {type : "object"},
						value : {type : "string"}
					}
				}
			}
		},

		renderer : {
			apiVersion: 2,
			render : function(oRm, oValueHelp) {
				oRm.openStart("div", oValueHelp).openEnd();
				oRm.renderControl(oValueHelp.getAggregation("field"));
				oRm.close("div");
			}
		},

		init : function () {
			// Note: Do not pass "this"! Template control vs. clone!
			this.attachModelContextChange(this.onModelContextChange);
		},

		addAssociation : function() {
			var oField = this.getAggregation("field");

			Control.prototype.addAssociation.apply(this, arguments);
			if (oField) {
				oField.addAssociation.apply(oField, arguments);
			}
			return this;
		},

		getAccessibilityInfo : function() {
			var oField = this.getAggregation("field");

			return oField && oField.getAccessibilityInfo();
		},

		removeAssociation : function() {
			var oField = this.getAggregation("field");

			if (oField) {
				oField.removeAssociation.apply(oField, arguments);
			}
			Control.prototype.removeAssociation.apply(this, arguments);
			return this;
		},

		onModelContextChange : function (oEvent) {
			var oBinding = this.getBinding("value"),
				that = this;

			if (oBinding && oBinding.isResolved()) {
				oBinding.requestValueListType().then(function (sValueListType) {
					var oField = that.getAggregation("field"),
						sId = that.getId() + "-field";

					if (oField // changes to sValueListType are not supported
							// no need to create a field if control is already destroyed
							|| that.bIsDestroyed) {
						return;
					}

					switch (sValueListType) {
						case ValueListType.Standard:
							oField = new Input({
								change: that.onValueChange.bind(that),
								id : sId,
								showValueHelp : true,
								value : that.getValue(),
								valueHelpRequest : that.onValueHelp.bind(that)
							});
							break;
						case ValueListType.Fixed:
							oField = new ComboBox({
								id : sId,
								loadItems : that.onLoadItems.bind(that),
								value : that.getValue()
							});
							break;
						default:
							oField = new Input({
								id : sId,
								showValueHelp : false,
								value : that.getValue()
							});
					}
					that.setAggregation("field", oField);
					that.getAriaLabelledBy().forEach(oField.addAriaLabelledBy.bind(oField));
				});
			}
		},

		onLoadItems : function (oEvent) {
			var oBinding = this.getBinding("value"),
				oComboBox = this.getAggregation("field"),
				that = this;

			oBinding.requestValueListInfo(true).then(function (mValueListInfo) {
				var oItem = new Item(),
					oValueListMapping = mValueListInfo[""],
					aParameters = oValueListMapping.Parameters,
					sKey = aParameters[0].ValueListProperty,
					sText = aParameters[1] ? aParameters[1].ValueListProperty : sKey,
					sAdditionalText = aParameters[2] && aParameters[2].ValueListProperty;

				function onSelectionChange(oEvent) {
					that.setValue(oEvent.getParameter("selectedItem").getText(),
						oBinding.getContext());
				}

				oItem.bindProperty("key", {path: sKey, model: "ValueList"});
				oItem.bindProperty("text", {path: sText, model: "ValueList"});
				if (sAdditionalText) {
					oComboBox.setShowSecondaryValues(true);
					oItem.bindProperty("additionalText",
						{path: sAdditionalText, model: "ValueList"});
				}

				oComboBox.setModel(oValueListMapping.$model, "ValueList");
				oComboBox.bindItems({
					model : "ValueList",
					path : "/" + oValueListMapping.CollectionPath,
					template : oItem
				});
				oComboBox.attachSelectionChange(onSelectionChange);
			}).catch(function (oError) {
				Log.error(oError, undefined, "sap.ui.core.sample.common.ValueHelp");
			});
		},

		onValueChange : function (oEvent) {
			this.setValue(oEvent.getParameter("newValue"), oEvent.getSource().getBindingContext());
		},

		onValueHelp : function (oEvent) {
			var oBinding = this.getBinding("value"),
				oInput = this.getAggregation("field"),
				that = this;

			oBinding.requestValueListInfo(true).then(function (mValueListInfo) {
				var oButton = new Button({
						icon : "sap-icon://decline",
						tooltip : "Close"
					}),
					oColumnListItem = new ColumnListItem(),
					oPopover = new ResponsivePopover({
						endButton : oButton,
						modal : true,
						placement : PlacementType.Auto
					}),
					oTable = new Table({
						fixedLayout : false,
						growing : true,
						mode : "SingleSelectMaster"
					}),
					oValueListMapping = mValueListInfo[that.getQualifier()];

				function onClose() {
					oPopover.close();
				}

				function onSelectionChange(oEvent) {
					that.setValue(oEvent.getParameter("listItem").getCells()[0].getText(),
						oBinding.getContext());
					oPopover.close();
				}

				oPopover.setTitle("Value Help: "
					+ (oValueListMapping.Label || oValueListMapping.CollectionPath));
				oValueListMapping.Parameters.forEach(function (oParameter) {
					var sParameterPath = oParameter.ValueListProperty;

					// TODO label from the property
					oTable.addColumn(new Column({
						header : new Text({
							text : sParameterPath,
							wrapping : false
						})
					}));
					oColumnListItem.addCell(new Text({text : "{" + sParameterPath + "}"}));
				});
				oTable.bindItems({
					path : "/" + oValueListMapping.CollectionPath,
					template : oColumnListItem
				});
				oTable.setModel(oValueListMapping.$model);
				oTable.attachSelectionChange(onSelectionChange);
				oButton.attachPress(onClose);
				oPopover.addContent(oTable);
				oPopover.data("openedBy", oInput);
				oPopover.setInitialFocus(oTable);
				oPopover.openBy(oInput);
			}).catch(function (oError) {
				Log.error(oError, undefined, "sap.ui.core.sample.common.ValueHelp");
			});
		},

		setEnabled : function (bEnabled) {
			if (this.getAggregation("field")) {
				this.getAggregation("field").setEnabled(bEnabled);
			}
		},

		setValue : function (sValue, oContext) {
			var oField = this.getAggregation("field");

			this.setProperty("value", sValue);
			if (oField) {
				oField.setValue(sValue);
			}
			if (oContext) {
				this.fireEvent("selectionChanged", {context : oContext, value : sValue});
			}
		}
	});
});
