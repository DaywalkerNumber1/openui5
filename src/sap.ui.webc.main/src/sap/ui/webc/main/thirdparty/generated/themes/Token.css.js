sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => parametersBundle_css);
	var styles = {packageName:"@ui5/webcomponents",fileName:"themes/Token.css",content:":host{display:inline-block;background:var(--sapButton_Background);border-width:1px;border-style:solid;border-color:var(--sapButton_TokenBorderColor);border-radius:var(--_ui5_token_border_radius);color:var(--_ui5_token_text_color);height:var(--_ui5_token_height);box-sizing:border-box}:host([overflows]){visibility:hidden}:host(:not([readonly]):hover){background:var(--sapButton_Hover_Background);border-color:var(--sapButton_Hover_BorderColor)}:host([selected]:not([readonly])){color:var(--sapButton_Selected_TextColor);background:var(--sapButton_Selected_Background);border:1px solid var(--sapButton_Selected_BorderColor)}:host([selected]:not([readonly]):hover){background:var(--sapButton_Selected_Hover_Background);border:1px solid var(--sapButton_Selected_Hover_BorderColor)}:host([readonly]){color:var(--sapContent_ForegroundTextColor)}:host([readonly]) .ui5-token--wrapper{padding-right:.3125rem}:host([selected]) .ui5-token--wrapper:focus{outline:var(--_ui5_token_focus_outline_width) dotted var(--sapContent_ContrastFocusColor)}.ui5-token--wrapper{display:flex;align-items:center;height:100%;width:100%;cursor:default;padding:.25rem 0;padding-left:.3125rem;box-sizing:border-box;font-size:var(--sapFontSize);font-family:\"72override\",var(--sapFontFamily);user-select:none}.ui5-token--wrapper:focus{outline-offset:-2px;outline:var(--_ui5_token_focus_outline_width) dotted var(--sapContent_FocusColor)}.ui5-token--text{white-space:nowrap}.ui5-token--icon{display:flex}:host([selected]) .ui5-token--icon>[ui5-icon],:host([selected]) ::slotted([ui5-icon]){color:var(--sapButton_Selected_TextColor)}.ui5-token--icon>[ui5-icon],::slotted([ui5-icon]){color:inherit;cursor:pointer;width:var(--_ui5_token_icon_size);height:var(--_ui5_token_icon_size);padding:var(--_ui5_token_icon_padding);color:var(--_ui5_token_icon_color)}:host(:not([readonly])) .ui5-token--wrapper[dir=rtl]{padding-right:var(--_ui5_token_wrapper_right_padding);padding-left:var(--_ui5_token_wrapper_left_padding)}"};

	return styles;

});
