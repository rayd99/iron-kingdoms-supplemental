Hooks.once("init", () => {
// Deleting languages that don't fit this world
    delete CONFIG.DND5E.languages.standard.children.elvish;
    delete CONFIG.DND5E.languages.standard.children.giant;
    delete CONFIG.DND5E.languages.standard.children.gnomish;
    delete CONFIG.DND5E.languages.standard.children.goblin;
    delete CONFIG.DND5E.languages.standard.children.halfling;
    delete CONFIG.DND5E.languages.standard.children.orc;

// Deleting exotic languages that don't fit this world
    delete CONFIG.DND5E.languages.exotic.children.aarakocra;
    delete CONFIG.DND5E.languages.exotic.children.primordial;    
    delete CONFIG.DND5E.languages.exotic.children.deepspeech;
    delete CONFIG.DND5E.languages.exotic.children.gith;
    delete CONFIG.DND5E.languages.exotic.children.gnoll;
    delete CONFIG.DND5E.languages.exotic.children.sylvan;
    
// Adding Iron Kingdom Languages
    CONFIG.DND5E.languages.standard.children.cygnaran = "Cygnaran";
    CONFIG.DND5E.languages.standard.children.shyr = "Shyr";
    CONFIG.DND5E.languages.standard.children.gobberish = "Gobberish";
    CONFIG.DND5E.languages.standard.children.khadoran = "Khadoran";
    CONFIG.DND5E.languages.standard.children.llaelese = "Llaelese";
    CONFIG.DND5E.languages.standard.children.menite = "Menite";
    CONFIG.DND5E.languages.standard.children.molgurog = "Molgur-Og";
    CONFIG.DND5E.languages.standard.children.molgurtrul = "Molgur-Trul";
    CONFIG.DND5E.languages.standard.children.ordic = "Ordic";
    CONFIG.DND5E.languages.standard.children.scharde = "Scharde";

// Adding rare languages
CONFIG.DND5E.languages.exotic.children.seeker = "Seeker";

// Adding new tool proficiencies
CONFIG.DND5E.tools.mechanik = {
    ability: "int",
    id: "Compendium.iron-kingdoms-supplemental.iron-kingdoms-items.Item.NuBqHpkTS0OUxFEL"
}

// Testing Firearm categorization
// Main group
CONFIG.DND5E.weaponProficiencies.simplefirearms = "Simple Firearms";
CONFIG.DND5E.weaponProficiencies.martialfirearms = "Martial Firearms";

// Subgroups
CONFIG.DND5E.weaponTypes.carbines = "Carbines";
CONFIG.DND5E.weaponTypes.rifles = "Rifles";
CONFIG.DND5E.weaponTypes.pistols = "Pistols";

// What main group the subgroups belong to
CONFIG.DND5E.weaponProficienciesMap.pistols = "simplefirearms";
CONFIG.DND5E.weaponProficienciesMap.carbines = "martialfirearms";
CONFIG.DND5E.weaponProficienciesMap.rifles = "martialfirearms";


/* 
CONFIG.DND5E.weaponProficiencies.martialFirearms = "Martial Firearms";
CONFIG.DND5E.weaponTypes.martialFirearms = "Martial Firearms";

CONFIG.DND5E.weaponProficiencies.simpleFirearms = "Simple Firearms";
CONFIG.DND5E.weaponTypes.simpleFirearms = "Simple Firearms";

CONFIG.DND5E.weaponProficienciesMap.simpleFirearms = "firearms";
CONFIG.DND5E.weaponProficienciesMap.martialFirearms = "firearms";
*/
// Ending of script
});