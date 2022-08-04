sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-responsive-popover", tags, suffix)} id="${litRender.ifDefined(context._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Left" placement-type=${litRender.ifDefined(context.placementType)} vertical-align=${litRender.ifDefined(context.verticalAlign)} hide-arrow allow-target-overlap ?sub-menu=${context._isSubMenu} @before-close=${context._beforePopoverClose}>${ context.isPhone ? block1(context, tags, suffix) : undefined }<div id="${litRender.ifDefined(context._id)}-menu-main">${ context._currentItems.length ? block3(context, tags, suffix) : undefined }</div></${litRender.scopeTag("ui5-responsive-popover", tags, suffix)}><div class="ui5-menu-submenus"></div>` : litRender.html`<ui5-responsive-popover id="${litRender.ifDefined(context._id)}-menu-rp" class="ui5-menu-rp" horizontal-align="Left" placement-type=${litRender.ifDefined(context.placementType)} vertical-align=${litRender.ifDefined(context.verticalAlign)} hide-arrow allow-target-overlap ?sub-menu=${context._isSubMenu} @before-close=${context._beforePopoverClose}>${ context.isPhone ? block1(context, tags, suffix) : undefined }<div id="${litRender.ifDefined(context._id)}-menu-main">${ context._currentItems.length ? block3(context, tags, suffix) : undefined }</div></ui5-responsive-popover><div class="ui5-menu-submenus"></div>`;
	const block1 = (context, tags, suffix) => suffix ? litRender.html`<div slot="header" class="ui5-menu-dialog-header">${ context.isSubMenuOpened ? block2(context, tags, suffix) : undefined }<div class="ui5-menu-dialog-title"><div>${litRender.ifDefined(context.menuHeaderTextPhone)}</div></div><${litRender.scopeTag("ui5-button", tags, suffix)} icon="decline" design="Transparent" aria-label="${litRender.ifDefined(context.labelClose)}" @click=${context.close}></${litRender.scopeTag("ui5-button", tags, suffix)}></div>` : litRender.html`<div slot="header" class="ui5-menu-dialog-header">${ context.isSubMenuOpened ? block2(context, tags, suffix) : undefined }<div class="ui5-menu-dialog-title"><div>${litRender.ifDefined(context.menuHeaderTextPhone)}</div></div><ui5-button icon="decline" design="Transparent" aria-label="${litRender.ifDefined(context.labelClose)}" @click=${context.close}></ui5-button></div>`;
	const block2 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-button", tags, suffix)} icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${litRender.ifDefined(context.labelBack)}" @click=${context._navigateBack}></${litRender.scopeTag("ui5-button", tags, suffix)}>` : litRender.html`<ui5-button icon="nav-back" class="ui5-menu-back-button" design="Transparent" aria-label="${litRender.ifDefined(context.labelBack)}" @click=${context._navigateBack}></ui5-button>`;
	const block3 = (context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-list", tags, suffix)} id="${litRender.ifDefined(context._id)}-menu-list" mode="None" separators="None" accessible-role="menu" @ui5-item-click=${litRender.ifDefined(context._itemClick)}>${ litRender.repeat(context._currentItems, (item, index) => item._id || index, (item, index) => block4(item, index, context, tags, suffix)) }</${litRender.scopeTag("ui5-list", tags, suffix)}>` : litRender.html`<ui5-list id="${litRender.ifDefined(context._id)}-menu-list" mode="None" separators="None" accessible-role="menu" @ui5-item-click=${litRender.ifDefined(context._itemClick)}>${ litRender.repeat(context._currentItems, (item, index) => item._id || index, (item, index) => block4(item, index, context, tags, suffix)) }</ui5-list>`;
	const block4 = (item, index, context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-li", tags, suffix)} .associatedItem="${litRender.ifDefined(item.item)}" class="ui5-menu-item" id="${litRender.ifDefined(context._id)}-menu-item-${index}" icon="${litRender.ifDefined(item.item.icon)}" accessible-role="menuitem" ._ariaHasPopup=${litRender.ifDefined(item.ariaHasPopup)} ?disabled=${item.item.disabled} ?starts-section=${item.item.startsSection} ?selected=${item.item.subMenuOpened} ?is-phone=${context.isPhone} @mouseover=${context._itemMouseOver} @mouseout=${context._itemMouseOut} @keydown=${context._itemKeyDown}>${ item.item.hasDummyIcon ? block5() : undefined }${litRender.ifDefined(item.item.text)}${ item.item.hasChildren ? block6(item, index, context, tags, suffix) : block7(item) }</${litRender.scopeTag("ui5-li", tags, suffix)}>` : litRender.html`<ui5-li .associatedItem="${litRender.ifDefined(item.item)}" class="ui5-menu-item" id="${litRender.ifDefined(context._id)}-menu-item-${index}" icon="${litRender.ifDefined(item.item.icon)}" accessible-role="menuitem" ._ariaHasPopup=${litRender.ifDefined(item.ariaHasPopup)} ?disabled=${item.item.disabled} ?starts-section=${item.item.startsSection} ?selected=${item.item.subMenuOpened} ?is-phone=${context.isPhone} @mouseover=${context._itemMouseOver} @mouseout=${context._itemMouseOut} @keydown=${context._itemKeyDown}>${ item.item.hasDummyIcon ? block5() : undefined }${litRender.ifDefined(item.item.text)}${ item.item.hasChildren ? block6(item, index, context, tags, suffix) : block7(item) }</ui5-li>`;
	const block5 = (item, index, context, tags, suffix) => litRender.html`<div class="ui5-menu-item-dummy-icon"></div>`;
	const block6 = (item, index, context, tags, suffix) => suffix ? litRender.html`<${litRender.scopeTag("ui5-icon", tags, suffix)} part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></${litRender.scopeTag("ui5-icon", tags, suffix)}>` : litRender.html`<ui5-icon part="icon" name="slim-arrow-right" class="ui5-menu-item-icon-end"></ui5-icon>`;
	const block7 = (item, index, context, tags, suffix) => litRender.html`${ item.item._siblingsWithChildren ? block8() : undefined }`;
	const block8 = (item, index, context, tags, suffix) => litRender.html`<div class="ui5-menu-item-no-icon-end"></div>`;

	return block0;

});