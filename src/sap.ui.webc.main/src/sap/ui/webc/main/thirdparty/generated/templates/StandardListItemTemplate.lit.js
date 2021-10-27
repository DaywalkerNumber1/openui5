sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<li tabindex="${litRender.ifDefined(context.tabIndex)}" class="${litRender.classMap(context.classes.main)}" dir="${litRender.ifDefined(context.effectiveDir)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keyup="${context._onkeyup}" @keydown="${context._onkeydown}" @mouseup="${context._onmouseup}" @mousedown="${context._onmousedown}" @touchstart="${context._ontouchstart}" @touchend="${context._ontouchend}" @click="${context._onclick}" role="${litRender.ifDefined(context._accInfo.role)}" aria-expanded="${litRender.ifDefined(context._accInfo.ariaExpanded)}" title="${litRender.ifDefined(context.title)}" aria-level="${litRender.ifDefined(context._accInfo.ariaLevel)}" aria-posinset="${litRender.ifDefined(context._accInfo.posinset)}" aria-setsize="${litRender.ifDefined(context._accInfo.setsize)}" aria-describedby="${litRender.ifDefined(context._id)}-invisibleText-describedby" aria-labelledby="${litRender.ifDefined(context._id)}-invisibleText ${litRender.ifDefined(context._id)}-content" aria-disabled="${litRender.ifDefined(context.ariaDisabled)}">${ context.placeSelectionElementBefore ? block1(context, tags, suffix) : undefined }<div id="${litRender.ifDefined(context._id)}-content" class="ui5-li-content">${ context.displayImage ? block5(context, tags, suffix) : undefined }${ context.displayIconBegin ? block6(context, tags, suffix) : undefined }<div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title"><slot></slot></span>${ context.description ? block7(context) : undefined }${ !context.typeActive ? block9(context) : undefined }</div>${ !context.description ? block10(context) : undefined }</div>${ context.displayIconEnd ? block12(context, tags, suffix) : undefined }${ context.typeDetail ? block13(context, tags, suffix) : undefined }${ context.placeSelectionElementAfter ? block14(context, tags, suffix) : undefined }<span id="${litRender.ifDefined(context._id)}-invisibleText" class="ui5-hidden-text">${litRender.ifDefined(context._accInfo.listItemAriaLabel)}${litRender.ifDefined(context.accessibleName)}</span><span id="${litRender.ifDefined(context._id)}-invisibleText-describedby" class="ui5-hidden-text">${litRender.ifDefined(context._accInfo.ariaSelectedText)}</span></li> `;
	const block1 = (context, tags, suffix) => litRender.html`${ context.modeSingleSelect ? block2(context, tags, suffix) : undefined }${ context.modeMultiSelect ? block3(context, tags, suffix) : undefined }${ context.renderDeleteButton ? block4(context, tags, suffix) : undefined }`;
	const block2 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-radio-button", tags, suffix)} ?disabled="${context.isInactive}" accessible-name="${litRender.ifDefined(context._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${litRender.ifDefined(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></${litRender.scopeTag("ui5-radio-button", tags, suffix)}>`;
	const block3 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-checkbox", tags, suffix)} ?disabled="${context.isInactive}" tabindex="-1" id="${litRender.ifDefined(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${litRender.ifDefined(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></${litRender.scopeTag("ui5-checkbox", tags, suffix)}>`;
	const block4 = (context, tags, suffix) => litRender.html`<div class="ui5-li-deletebtn"><${litRender.scopeTag("ui5-button", tags, suffix)} tabindex="-1" data-sap-no-tab-ref id="${litRender.ifDefined(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${litRender.ifDefined(context.deleteText)}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div>`;
	const block5 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-avatar", tags, suffix)} shape="Square" class="ui5-li-img"><img src="${litRender.ifDefined(context.image)}" class="ui5-li-img-inner" /></${litRender.scopeTag("ui5-avatar", tags, suffix)}>`;
	const block6 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-icon", tags, suffix)} part="icon" name="${litRender.ifDefined(context.icon)}" class="ui5-li-icon"></${litRender.scopeTag("ui5-icon", tags, suffix)}>`;
	const block7 = (context, tags, suffix) => litRender.html`<div class="ui5-li-description-info-wrapper"><span part="description" class="ui5-li-desc">${litRender.ifDefined(context.description)}</span>${ context.additionalText ? block8(context) : undefined }</div>`;
	const block8 = (context, tags, suffix) => litRender.html`<span part="additional-text" class="ui5-li-additional-text">${litRender.ifDefined(context.additionalText)}</span>`;
	const block9 = (context, tags, suffix) => litRender.html`<span class="ui5-hidden-text">${litRender.ifDefined(context.type)}</span>`;
	const block10 = (context, tags, suffix) => litRender.html`${ context.additionalText ? block11(context) : undefined }`;
	const block11 = (context, tags, suffix) => litRender.html`<span part="additional-text" class="ui5-li-additional-text">${litRender.ifDefined(context.additionalText)}</span>`;
	const block12 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-icon", tags, suffix)} part="icon" name="${litRender.ifDefined(context.icon)}" class="ui5-li-icon"></${litRender.scopeTag("ui5-icon", tags, suffix)}>`;
	const block13 = (context, tags, suffix) => litRender.html`<div class="ui5-li-detailbtn"><${litRender.scopeTag("ui5-button", tags, suffix)} design="Transparent" icon="edit" @click="${context.onDetailClick}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div>`;
	const block14 = (context, tags, suffix) => litRender.html`${ context.modeSingleSelect ? block15(context, tags, suffix) : undefined }${ context.modeMultiSelect ? block16(context, tags, suffix) : undefined }${ context.renderDeleteButton ? block17(context, tags, suffix) : undefined }`;
	const block15 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-radio-button", tags, suffix)} ?disabled="${context.isInactive}" accessible-name="${litRender.ifDefined(context._accInfo.ariaLabelRadioButton)}" tabindex="-1" id="${litRender.ifDefined(context._id)}-singleSelectionElement" class="ui5-li-singlesel-radiobtn" ?checked="${context.selected}" @click="${context.onSingleSelectionComponentPress}"></${litRender.scopeTag("ui5-radio-button", tags, suffix)}>`;
	const block16 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-checkbox", tags, suffix)} ?disabled="${context.isInactive}" tabindex="-1" id="${litRender.ifDefined(context._id)}-multiSelectionElement" class="ui5-li-multisel-cb" ?checked="${context.selected}" aria-label="${litRender.ifDefined(context._accInfo.ariaLabel)}" @click="${context.onMultiSelectionComponentPress}"></${litRender.scopeTag("ui5-checkbox", tags, suffix)}>`;
	const block17 = (context, tags, suffix) => litRender.html`<div class="ui5-li-deletebtn"><${litRender.scopeTag("ui5-button", tags, suffix)} tabindex="-1" data-sap-no-tab-ref id="${litRender.ifDefined(context._id)}-deleteSelectionElement" design="Transparent" icon="decline" ?disabled="${context.disableDeleteButton}" @click="${context.onDelete}" title="${litRender.ifDefined(context.deleteText)}"></${litRender.scopeTag("ui5-button", tags, suffix)}></div>`;

	return block0;

});
