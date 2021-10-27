sap.ui.define(['exports'], function (exports) { 'use strict';

	const BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT = {key: "BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT", defaultText: "Cancel"};const BARCODE_SCANNER_DIALOG_LOADING_TXT = {key: "BARCODE_SCANNER_DIALOG_LOADING_TXT", defaultText: "Loading"};const FCL_START_COLUMN_TXT = {key: "FCL_START_COLUMN_TXT", defaultText: "First column"};const FCL_MIDDLE_COLUMN_TXT = {key: "FCL_MIDDLE_COLUMN_TXT", defaultText: "Middle column"};const FCL_END_COLUMN_TXT = {key: "FCL_END_COLUMN_TXT", defaultText: "Last column"};const FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP = {key: "FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP", defaultText: "Expand the first column"};const FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP = {key: "FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP", defaultText: "Collapse the first column"};const FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP = {key: "FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP", defaultText: "Expand the last column"};const FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP = {key: "FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP", defaultText: "Collapse the last column"};const NOTIFICATION_LIST_ITEM_TXT = {key: "NOTIFICATION_LIST_ITEM_TXT", defaultText: "Notification"};const NOTIFICATION_LIST_ITEM_SHOW_MORE = {key: "NOTIFICATION_LIST_ITEM_SHOW_MORE", defaultText: "Show More"};const NOTIFICATION_LIST_ITEM_SHOW_LESS = {key: "NOTIFICATION_LIST_ITEM_SHOW_LESS", defaultText: "Show Less"};const NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE = {key: "NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE", defaultText: "More"};const NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE = {key: "NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE", defaultText: "Close"};const NOTIFICATION_LIST_ITEM_READ = {key: "NOTIFICATION_LIST_ITEM_READ", defaultText: "Read"};const NOTIFICATION_LIST_ITEM_UNREAD = {key: "NOTIFICATION_LIST_ITEM_UNREAD", defaultText: "Unread"};const NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT = {key: "NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT", defaultText: "High Priority"};const NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT = {key: "NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT", defaultText: "Medium Priority"};const NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT = {key: "NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT", defaultText: "Low Priority"};const NOTIFICATION_LIST_GROUP_ITEM_TXT = {key: "NOTIFICATION_LIST_GROUP_ITEM_TXT", defaultText: "Notification Group"};const NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT = {key: "NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT", defaultText: "Counter"};const NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE = {key: "NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE", defaultText: "Close All"};const NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE = {key: "NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE", defaultText: "Collapse Group"};const NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE = {key: "NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE", defaultText: "Expand Group"};const TIMELINE_ARIA_LABEL = {key: "TIMELINE_ARIA_LABEL", defaultText: "Timeline"};const UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT", defaultText: "Cancel"};const UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT", defaultText: "Rename"};const UPLOADCOLLECTIONITEM_ERROR_STATE = {key: "UPLOADCOLLECTIONITEM_ERROR_STATE", defaultText: "Terminated"};const UPLOADCOLLECTIONITEM_READY_STATE = {key: "UPLOADCOLLECTIONITEM_READY_STATE", defaultText: "Pending"};const UPLOADCOLLECTIONITEM_UPLOADING_STATE = {key: "UPLOADCOLLECTIONITEM_UPLOADING_STATE", defaultText: "Uploading"};const UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT", defaultText: "Terminate"};const UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT", defaultText: "Retry"};const UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT = {key: "UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT", defaultText: "Edit"};const UPLOADCOLLECTION_NO_DATA_TEXT = {key: "UPLOADCOLLECTION_NO_DATA_TEXT", defaultText: "No files found."};const UPLOADCOLLECTION_NO_DATA_DESCRIPTION = {key: "UPLOADCOLLECTION_NO_DATA_DESCRIPTION", defaultText: "Drop files to upload them or use the \"Upload\" button."};const UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION = {key: "UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION", defaultText: "Upload Collection"};const UPLOADCOLLECTION_DRAG_FILE_INDICATOR = {key: "UPLOADCOLLECTION_DRAG_FILE_INDICATOR", defaultText: "Drag files here."};const UPLOADCOLLECTION_DROP_FILE_INDICATOR = {key: "UPLOADCOLLECTION_DROP_FILE_INDICATOR", defaultText: "Drop files to upload them."};const SHELLBAR_LABEL = {key: "SHELLBAR_LABEL", defaultText: "Shell Bar"};const SHELLBAR_LOGO = {key: "SHELLBAR_LOGO", defaultText: "Logo"};const SHELLBAR_COPILOT = {key: "SHELLBAR_COPILOT", defaultText: "CoPilot"};const SHELLBAR_NOTIFICATIONS = {key: "SHELLBAR_NOTIFICATIONS", defaultText: "{0} Notifications"};const SHELLBAR_PROFILE = {key: "SHELLBAR_PROFILE", defaultText: "Profile"};const SHELLBAR_PRODUCTS = {key: "SHELLBAR_PRODUCTS", defaultText: "Products"};const PRODUCT_SWITCH_CONTAINER_LABEL = {key: "PRODUCT_SWITCH_CONTAINER_LABEL", defaultText: "Products"};const SHELLBAR_SEARCH = {key: "SHELLBAR_SEARCH", defaultText: "Search"};const SHELLBAR_OVERFLOW = {key: "SHELLBAR_OVERFLOW", defaultText: "More"};const SHELLBAR_CANCEL = {key: "SHELLBAR_CANCEL", defaultText: "Cancel"};const WIZARD_NAV_ARIA_LABEL = {key: "WIZARD_NAV_ARIA_LABEL", defaultText: "Wizard Progress Bar"};const WIZARD_LIST_ARIA_LABEL = {key: "WIZARD_LIST_ARIA_LABEL", defaultText: "Wizard Steps"};const WIZARD_LIST_ARIA_DESCRIBEDBY = {key: "WIZARD_LIST_ARIA_DESCRIBEDBY", defaultText: "To activate, press the space bar or Enter"};const WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL = {key: "WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL", defaultText: "Steps"};const WIZARD_OPTIONAL_STEP_ARIA_LABEL = {key: "WIZARD_OPTIONAL_STEP_ARIA_LABEL", defaultText: "Optional"};const WIZARD_STEP_ACTIVE = {key: "WIZARD_STEP_ACTIVE", defaultText: "Active"};const WIZARD_STEP_INACTIVE = {key: "WIZARD_STEP_INACTIVE", defaultText: "Inactive"};const WIZARD_STEP_ARIA_LABEL = {key: "WIZARD_STEP_ARIA_LABEL", defaultText: "Step {0}"};const WIZARD_NAV_ARIA_ROLE_DESCRIPTION = {key: "WIZARD_NAV_ARIA_ROLE_DESCRIPTION", defaultText: "Wizard"};const WIZARD_NAV_STEP_DEFAULT_HEADING = {key: "WIZARD_NAV_STEP_DEFAULT_HEADING", defaultText: "Step"};const VSD_DIALOG_TITLE_SORT = {key: "VSD_DIALOG_TITLE_SORT", defaultText: "View Settings"};const VSD_SUBMIT_BUTTON = {key: "VSD_SUBMIT_BUTTON", defaultText: "OK"};const VSD_CANCEL_BUTTON = {key: "VSD_CANCEL_BUTTON", defaultText: "Cancel"};const VSD_RESET_BUTTON = {key: "VSD_RESET_BUTTON", defaultText: "Reset"};const VSD_SORT_ORDER = {key: "VSD_SORT_ORDER", defaultText: "Sort Order"};const VSD_FILTER_BY = {key: "VSD_FILTER_BY", defaultText: "Filter By"};const VSD_SORT_BY = {key: "VSD_SORT_BY", defaultText: "Sort By"};const VSD_ORDER_ASCENDING = {key: "VSD_ORDER_ASCENDING", defaultText: "Ascending"};const VSD_ORDER_DESCENDING = {key: "VSD_ORDER_DESCENDING", defaultText: "Descending"};const IM_TITLE_BEFORESEARCH = {key: "IM_TITLE_BEFORESEARCH", defaultText: "Let's get some results"};const IM_SUBTITLE_BEFORESEARCH = {key: "IM_SUBTITLE_BEFORESEARCH", defaultText: "Start by providing your search criteria."};const IM_TITLE_NOACTIVITIES = {key: "IM_TITLE_NOACTIVITIES", defaultText: "You've not added any activities yet"};const IM_SUBTITLE_NOACTIVITIES = {key: "IM_SUBTITLE_NOACTIVITIES", defaultText: "Would you like to add one now?"};const IM_TITLE_NODATA = {key: "IM_TITLE_NODATA", defaultText: "There's no data yet"};const IM_SUBTITLE_NODATA = {key: "IM_SUBTITLE_NODATA", defaultText: "When there is, you'll see it here."};const IM_TITLE_NOMAIL = {key: "IM_TITLE_NOMAIL", defaultText: "No new mail"};const IM_SUBTITLE_NOMAIL = {key: "IM_SUBTITLE_NOMAIL", defaultText: "Check back again later."};const IM_TITLE_NOENTRIES = {key: "IM_TITLE_NOENTRIES", defaultText: "There are no entries yet"};const IM_SUBTITLE_NOENTRIES = {key: "IM_SUBTITLE_NOENTRIES", defaultText: "When there are, you'll see them here."};const IM_TITLE_NONOTIFICATIONS = {key: "IM_TITLE_NONOTIFICATIONS", defaultText: "You've not got any new notifications"};const IM_SUBTITLE_NONOTIFICATIONS = {key: "IM_SUBTITLE_NONOTIFICATIONS", defaultText: "Check back again later."};const IM_TITLE_NOSAVEDITEMS = {key: "IM_TITLE_NOSAVEDITEMS", defaultText: "You've not added any favorites yet"};const IM_SUBTITLE_NOSAVEDITEMS = {key: "IM_SUBTITLE_NOSAVEDITEMS", defaultText: "Would you like to create a list of your favorite items now?"};const IM_TITLE_NOSEARCHRESULTS = {key: "IM_TITLE_NOSEARCHRESULTS", defaultText: "No results found"};const IM_SUBTITLE_NOSEARCHRESULTS = {key: "IM_SUBTITLE_NOSEARCHRESULTS", defaultText: "Try changing your search criteria."};const IM_TITLE_NOTASKS = {key: "IM_TITLE_NOTASKS", defaultText: "You’ve not got any new tasks"};const IM_SUBTITLE_NOTASKS = {key: "IM_SUBTITLE_NOTASKS", defaultText: "When you do, you'll see them here."};const IM_TITLE_UNABLETOLOAD = {key: "IM_TITLE_UNABLETOLOAD", defaultText: "Unable to load data"};const IM_SUBTITLE_UNABLETOLOAD = {key: "IM_SUBTITLE_UNABLETOLOAD", defaultText: "Check your Internet connection. If that doesn’t help, try reloading. If that doesn't help either, check with your administrator."};const IM_TITLE_UNABLETOUPLOAD = {key: "IM_TITLE_UNABLETOUPLOAD", defaultText: "Unable to upload data"};const IM_SUBTITLE_UNABLETOUPLOAD = {key: "IM_SUBTITLE_UNABLETOUPLOAD", defaultText: "Check your Internet connection. If that doesn’t help, check the file format and file size. Otherwise contact your administrator."};

	exports.BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT = BARCODE_SCANNER_DIALOG_CANCEL_BUTTON_TXT;
	exports.BARCODE_SCANNER_DIALOG_LOADING_TXT = BARCODE_SCANNER_DIALOG_LOADING_TXT;
	exports.FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP = FCL_END_COLUMN_COLLAPSE_BUTTON_TOOLTIP;
	exports.FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP = FCL_END_COLUMN_EXPAND_BUTTON_TOOLTIP;
	exports.FCL_END_COLUMN_TXT = FCL_END_COLUMN_TXT;
	exports.FCL_MIDDLE_COLUMN_TXT = FCL_MIDDLE_COLUMN_TXT;
	exports.FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP = FCL_START_COLUMN_COLLAPSE_BUTTON_TOOLTIP;
	exports.FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP = FCL_START_COLUMN_EXPAND_BUTTON_TOOLTIP;
	exports.FCL_START_COLUMN_TXT = FCL_START_COLUMN_TXT;
	exports.IM_SUBTITLE_BEFORESEARCH = IM_SUBTITLE_BEFORESEARCH;
	exports.IM_SUBTITLE_NOACTIVITIES = IM_SUBTITLE_NOACTIVITIES;
	exports.IM_SUBTITLE_NODATA = IM_SUBTITLE_NODATA;
	exports.IM_SUBTITLE_NOENTRIES = IM_SUBTITLE_NOENTRIES;
	exports.IM_SUBTITLE_NOMAIL = IM_SUBTITLE_NOMAIL;
	exports.IM_SUBTITLE_NONOTIFICATIONS = IM_SUBTITLE_NONOTIFICATIONS;
	exports.IM_SUBTITLE_NOSAVEDITEMS = IM_SUBTITLE_NOSAVEDITEMS;
	exports.IM_SUBTITLE_NOSEARCHRESULTS = IM_SUBTITLE_NOSEARCHRESULTS;
	exports.IM_SUBTITLE_NOTASKS = IM_SUBTITLE_NOTASKS;
	exports.IM_SUBTITLE_UNABLETOLOAD = IM_SUBTITLE_UNABLETOLOAD;
	exports.IM_SUBTITLE_UNABLETOUPLOAD = IM_SUBTITLE_UNABLETOUPLOAD;
	exports.IM_TITLE_BEFORESEARCH = IM_TITLE_BEFORESEARCH;
	exports.IM_TITLE_NOACTIVITIES = IM_TITLE_NOACTIVITIES;
	exports.IM_TITLE_NODATA = IM_TITLE_NODATA;
	exports.IM_TITLE_NOENTRIES = IM_TITLE_NOENTRIES;
	exports.IM_TITLE_NOMAIL = IM_TITLE_NOMAIL;
	exports.IM_TITLE_NONOTIFICATIONS = IM_TITLE_NONOTIFICATIONS;
	exports.IM_TITLE_NOSAVEDITEMS = IM_TITLE_NOSAVEDITEMS;
	exports.IM_TITLE_NOSEARCHRESULTS = IM_TITLE_NOSEARCHRESULTS;
	exports.IM_TITLE_NOTASKS = IM_TITLE_NOTASKS;
	exports.IM_TITLE_UNABLETOLOAD = IM_TITLE_UNABLETOLOAD;
	exports.IM_TITLE_UNABLETOUPLOAD = IM_TITLE_UNABLETOUPLOAD;
	exports.NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE = NOTIFICATION_LIST_GROUP_ITEM_CLOSE_BTN_TITLE;
	exports.NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT = NOTIFICATION_LIST_GROUP_ITEM_COUNTER_TXT;
	exports.NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE = NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_COLLAPSE_TITLE;
	exports.NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE = NOTIFICATION_LIST_GROUP_ITEM_TOGGLE_BTN_EXPAND_TITLE;
	exports.NOTIFICATION_LIST_GROUP_ITEM_TXT = NOTIFICATION_LIST_GROUP_ITEM_TXT;
	exports.NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE = NOTIFICATION_LIST_ITEM_CLOSE_BTN_TITLE;
	exports.NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT = NOTIFICATION_LIST_ITEM_HIGH_PRIORITY_TXT;
	exports.NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT = NOTIFICATION_LIST_ITEM_LOW_PRIORITY_TXT;
	exports.NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT = NOTIFICATION_LIST_ITEM_MEDIUM_PRIORITY_TXT;
	exports.NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE = NOTIFICATION_LIST_ITEM_OVERLOW_BTN_TITLE;
	exports.NOTIFICATION_LIST_ITEM_READ = NOTIFICATION_LIST_ITEM_READ;
	exports.NOTIFICATION_LIST_ITEM_SHOW_LESS = NOTIFICATION_LIST_ITEM_SHOW_LESS;
	exports.NOTIFICATION_LIST_ITEM_SHOW_MORE = NOTIFICATION_LIST_ITEM_SHOW_MORE;
	exports.NOTIFICATION_LIST_ITEM_TXT = NOTIFICATION_LIST_ITEM_TXT;
	exports.NOTIFICATION_LIST_ITEM_UNREAD = NOTIFICATION_LIST_ITEM_UNREAD;
	exports.PRODUCT_SWITCH_CONTAINER_LABEL = PRODUCT_SWITCH_CONTAINER_LABEL;
	exports.SHELLBAR_CANCEL = SHELLBAR_CANCEL;
	exports.SHELLBAR_COPILOT = SHELLBAR_COPILOT;
	exports.SHELLBAR_LABEL = SHELLBAR_LABEL;
	exports.SHELLBAR_LOGO = SHELLBAR_LOGO;
	exports.SHELLBAR_NOTIFICATIONS = SHELLBAR_NOTIFICATIONS;
	exports.SHELLBAR_OVERFLOW = SHELLBAR_OVERFLOW;
	exports.SHELLBAR_PRODUCTS = SHELLBAR_PRODUCTS;
	exports.SHELLBAR_PROFILE = SHELLBAR_PROFILE;
	exports.SHELLBAR_SEARCH = SHELLBAR_SEARCH;
	exports.TIMELINE_ARIA_LABEL = TIMELINE_ARIA_LABEL;
	exports.UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT = UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT;
	exports.UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT = UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT;
	exports.UPLOADCOLLECTIONITEM_ERROR_STATE = UPLOADCOLLECTIONITEM_ERROR_STATE;
	exports.UPLOADCOLLECTIONITEM_READY_STATE = UPLOADCOLLECTIONITEM_READY_STATE;
	exports.UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT = UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT;
	exports.UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT = UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT;
	exports.UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT = UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT;
	exports.UPLOADCOLLECTIONITEM_UPLOADING_STATE = UPLOADCOLLECTIONITEM_UPLOADING_STATE;
	exports.UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION = UPLOADCOLLECTION_ARIA_ROLE_DESCRIPTION;
	exports.UPLOADCOLLECTION_DRAG_FILE_INDICATOR = UPLOADCOLLECTION_DRAG_FILE_INDICATOR;
	exports.UPLOADCOLLECTION_DROP_FILE_INDICATOR = UPLOADCOLLECTION_DROP_FILE_INDICATOR;
	exports.UPLOADCOLLECTION_NO_DATA_DESCRIPTION = UPLOADCOLLECTION_NO_DATA_DESCRIPTION;
	exports.UPLOADCOLLECTION_NO_DATA_TEXT = UPLOADCOLLECTION_NO_DATA_TEXT;
	exports.VSD_CANCEL_BUTTON = VSD_CANCEL_BUTTON;
	exports.VSD_DIALOG_TITLE_SORT = VSD_DIALOG_TITLE_SORT;
	exports.VSD_FILTER_BY = VSD_FILTER_BY;
	exports.VSD_ORDER_ASCENDING = VSD_ORDER_ASCENDING;
	exports.VSD_ORDER_DESCENDING = VSD_ORDER_DESCENDING;
	exports.VSD_RESET_BUTTON = VSD_RESET_BUTTON;
	exports.VSD_SORT_BY = VSD_SORT_BY;
	exports.VSD_SORT_ORDER = VSD_SORT_ORDER;
	exports.VSD_SUBMIT_BUTTON = VSD_SUBMIT_BUTTON;
	exports.WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL = WIZARD_ACTIONSHEET_STEPS_ARIA_LABEL;
	exports.WIZARD_LIST_ARIA_DESCRIBEDBY = WIZARD_LIST_ARIA_DESCRIBEDBY;
	exports.WIZARD_LIST_ARIA_LABEL = WIZARD_LIST_ARIA_LABEL;
	exports.WIZARD_NAV_ARIA_LABEL = WIZARD_NAV_ARIA_LABEL;
	exports.WIZARD_NAV_ARIA_ROLE_DESCRIPTION = WIZARD_NAV_ARIA_ROLE_DESCRIPTION;
	exports.WIZARD_NAV_STEP_DEFAULT_HEADING = WIZARD_NAV_STEP_DEFAULT_HEADING;
	exports.WIZARD_OPTIONAL_STEP_ARIA_LABEL = WIZARD_OPTIONAL_STEP_ARIA_LABEL;
	exports.WIZARD_STEP_ACTIVE = WIZARD_STEP_ACTIVE;
	exports.WIZARD_STEP_ARIA_LABEL = WIZARD_STEP_ARIA_LABEL;
	exports.WIZARD_STEP_INACTIVE = WIZARD_STEP_INACTIVE;

	Object.defineProperty(exports, '__esModule', { value: true });

});
