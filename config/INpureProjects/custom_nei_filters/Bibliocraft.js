if (FML.isModLoaded("BiblioCraft") && Bibliocraft_enabled) {
    NEI.override("BiblioCraft:*", [0]);
}

if (FML.isModLoaded("BiblioWoodsNatura") && Bibliocraft_enabled) {
	NEI.override("BiblioWoodsNatura:*", [0]);
}

if (FML.isModLoaded("BiblioWoodsBoP") && Bibliocraft_enabled) {
	NEI.override("BiblioWoodsBoP:*", [0]);
}

if (FML.isModLoaded("BiblioWoodsForestry") && Bibliocraft_enabled) {
	NEI.override("BiblioWoodsForestry:*", [0]);
}
