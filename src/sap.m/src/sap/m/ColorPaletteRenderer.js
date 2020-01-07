/*
 * ${copyright}
 */

sap.ui.define(['sap/ui/Device'],
	function (Device) {
		"use strict";

		/**
		 * ColorPalette renderer.
		 * @namespace
		 */
		var ColorPaletteRenderer = {
			apiVersion: 2
		};


		// reference to the message bundle
		var oLibraryResourceBundle = sap.ui.getCore().getLibraryResourceBundle("sap.m");

		/**
		 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
		 * @param {sap.m.ColorPalette} oColorPalette A palette instance
		 */
		ColorPaletteRenderer.render = function (oRm, oColorPalette) {
			oRm.openStart("div", oColorPalette);
			oRm.class("sapMColorPalette");
			oRm.openEnd();

			//render default button
			if (oColorPalette._getShowDefaultColorButton()) {
				this.renderDefaultColorButton(oRm, oColorPalette);
				this.renderSeparator(oRm);
			}

			//render squares
			this.renderSwatches(oRm, oColorPalette);


			//render more colors button
			if (oColorPalette._getShowMoreColorsButton()) {
				this.renderSeparator(oRm);
				this.renderMoreColorsButton(oRm, oColorPalette);
				if (Device.system.phone) { // for phones there should be one additional separator after More Colors
					this.renderSeparator(oRm);
				}
			}
			oRm.close("div"); //close palette container
		};

		/**
		 * Renders the palette color boxes.
		 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
		 * @param {sap.m.ColorPalette} oColorPalette A palette instance
		 */
		ColorPaletteRenderer.renderSwatches = function (oRm, oColorPalette) {
			var sColors = oColorPalette.getColors();

			oRm.openStart("div", oColorPalette.getId() + "-swatchCont");
			oRm.class("sapMColorPaletteContent");
			oRm.accessibilityState(oColorPalette, {
				"role": "region",
				"label": oLibraryResourceBundle.getText("COLOR_PALETTE_SWATCH_CONTAINER_TITLE")
			});
			oRm.openEnd();

			sColors.forEach(function (sColor, iIndex) {
				this.renderSquare(oRm, oColorPalette, sColor, iIndex);
			}, this);

			oRm.close("div"); //close palette squares container
		};

		/**
		 * Renders one palette color box.
		 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
		 * @param {sap.m.ColorPalette} oColorPalette A palette instance
		 * @param {sap.ui.core.CSSColor} sColor A color used as background
		 * @param {number} iIndex the index of the color amongst its siblings
		 */
		ColorPaletteRenderer.renderSquare = function (oRm, oColorPalette, sColor, iIndex) {
			var sNamedColor = oColorPalette._ColorsHelper.getNamedColor(sColor),
				sCustomOrPredefinedColor = (sNamedColor === undefined) ? oLibraryResourceBundle.getText("COLOR_PALETTE_PREDEFINED_COLOR_CUSTOM") : oLibraryResourceBundle.getText("COLOR_PALETTE_PREDEFINED_COLOR_" + sNamedColor.toUpperCase()),
				sColorNameAria = oLibraryResourceBundle.getText("COLOR_PALETTE_PREDEFINED_COLOR", [iIndex + 1, sCustomOrPredefinedColor]);

			oRm.openStart("div");
			oRm.class("sapMColorPaletteSquare");
			oRm.attr("data-sap-ui-color", sColor);
			oRm.attr("tabindex", "-1");

			oRm.attr("title", sColorNameAria);
			oRm.accessibilityState(oColorPalette, {
				"role": "button",
				"label": sColorNameAria
			});
			oRm.openEnd();

			//swatch inner content
			oRm.openStart("div");
			oRm.style("background-color", sColor);
			oRm.openEnd();
			oRm.close("div");

			oRm.close("div"); //close palette swatch
		};

		ColorPaletteRenderer.renderSeparator = function (oRm) {
			oRm.openStart("div");
			oRm.class("sapMColorPaletteSeparator");
			oRm.openEnd();
			oRm.voidStart("hr").voidEnd();
			oRm.close("div");
		};

		/**
		 * Renders the default color button.
		 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
		 * @param {sap.m.ColorPalette} oColorPalette A palette instance
		 */
		ColorPaletteRenderer.renderDefaultColorButton = function (oRm, oColorPalette) {
			oRm.renderControl(oColorPalette._getDefaultColorButton());
		};

		/**
		 * Renders the more colors button.
		 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
		 * @param {sap.m.ColorPalette} oColorPalette A palette instance
		 */
		ColorPaletteRenderer.renderMoreColorsButton = function (oRm, oColorPalette) {
			oRm.renderControl(oColorPalette._getMoreColorsButton());
		};

		return ColorPaletteRenderer;

	}, /* bExport= */ true);
