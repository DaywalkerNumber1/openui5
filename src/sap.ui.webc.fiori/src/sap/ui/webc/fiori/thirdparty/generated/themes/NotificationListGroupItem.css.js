sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_fiori_3", () => parametersBundle_css);
	var NotificationListGroupItemCss = {packageName:"@ui5/webcomponents-fiori",fileName:"themes/NotificationListGroupItem.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%;min-height:var(--_ui5_list_item_base_height);background:var(--ui5-listitem-background-color);cursor:pointer}:host([has-border]){border-bottom:var(--ui5-listitem-border-bottom)}:host([focused]) .ui5-nli-focusable{outline:none}:host([focused]) .ui5-nli-focusable:after{content:\"\";border:var(--_ui5_listitembase_focus_width) dotted var(--sapContent_FocusColor);position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}:host([busy]){opacity:.6;pointer-events:none}:host([busy]) .ui5-nli-busy{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ui5-nli-action{flex-shrink:0;margin-right:.5rem}.ui5-nli-overflow-btn{margin-right:.5rem}[dir=rtl] .ui5-nli-group-action{margin-left:.5rem}[dir=rtl] .ui5-nli-overflow-btn{margin-left:.5rem}.ui5-prio-icon{min-width:1rem;min-height:1rem;padding-right:.5rem}.ui5-prio-icon--message-error{color:var(--sapNegativeElementColor)}.ui5-prio-icon--message-warning{color:var(--sapCriticalElementColor)}.ui5-prio-icon--message-success{color:var(--sapPositiveElementColor)}[dir=rtl] .ui5-prio-icon{padding-left:.5rem;padding-right:0}:host(:not([collapsed])) .ui5-nli-group-toggle-btn{transform:rotate(90deg)}:host([collapsed]) .ui5-nli-group-items{display:none}:host([read]) .ui5-nli-group-title-text{font-weight:400}.ui5-nli-group-root{display:flex;flex-direction:column;position:relative;width:100%;box-sizing:border-box}.ui5-nli-group-header{display:flex;align-items:center;padding:.75rem .5rem .25rem .75rem;width:100%;border-bottom:.0625rem solid var(--sapList_GroupHeaderBorderColor);box-sizing:border-box;cursor:default}.ui5-nli-group-toggle-btn{margin-right:.75rem;cursor:pointer}.ui5-nli-group-title-text{color:var(--sapGroup_TitleTextColor);font-family:\"72override\",var(--sapFontFamily);font-size:var(--sapFontHeader6Size);font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-nli-group-divider{flex:1}.ui5-nli-group-counter{margin-left:.25rem;margin-right:1rem;color:var(--sapList_TableGroupHeaderTextColor);font-size:var(--sapFontHeader6Size);font-family:\"72override\",var(--sapFontHeaderFamily)}[dir=rtl] .ui5-nli-group-toggle-btn{margin-left:1rem}[dir=rtl] .ui5-nli-group-counter{margin-right:.25rem;margin-left:1rem}"};

	return NotificationListGroupItemCss;

});
