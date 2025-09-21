Hooks.once("init", () => {
 // Defining the module namespace for easier reference
const ns = "iron-kingdoms-supplemental";

// Adding Steamjack Parts
const additions = {
    steamjackCore:    `${ns}.SteamjackCore`,
    steamjackCortex:  `${ns}.SteamjackCortex`,
    steamjackUpgrade: `${ns}.SteamjackUpgrade`
  };

  // 1) Merge into the Equipment-Type dropdown
  foundry.utils.mergeObject(
    CONFIG.DND5E.miscEquipmentTypes,
    additions,
    { overwrite: false }
  );
  console.log("→ equipmentTypes:", CONFIG.DND5E.equipmentTypes);

  // Steamjack Weapons
  foundry.utils.mergeObject(
    CONFIG.DND5E.weaponTypes,
    {
      steamjackWeapon: `${ns}.SteamjackWeapon`
    },
    { overwrite: false }
  );
  console.log("→ weaponTypes:", CONFIG.DND5E.weaponTypes);

  // Steamjack Plating
  foundry.utils.mergeObject(
    CONFIG.DND5E.armorTypes,
    {
      steamjackPlating: `${ns}.SteamjackPlating`
    },
    { overwrite: false }
  );
  console.log("→ armorTypes:", CONFIG.DND5E.armorTypes);
// Adding new ammo types:

    CONFIG.DND5E.consumableTypes.ammo.subtypes.riflerounds = "Bullet, Shell"
    CONFIG.DND5E.consumableTypes.ammo.subtypes.slugrounds = "Bullet, Slug"

// Deleting languages that don't fit this world
    delete CONFIG.DND5E.languages.standard.children.elvish;
    delete CONFIG.DND5E.languages.standard.children.giant;
    delete CONFIG.DND5E.languages.standard.children.gnomish;
    delete CONFIG.DND5E.languages.standard.children.goblin;
    delete CONFIG.DND5E.languages.standard.children.halfling;
    delete CONFIG.DND5E.languages.standard.children.orc;

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

// Mapping new tool proficiencies
CONFIG.DND5E.tools.mechanik = {
    ability: "int",
    id: "Compendium.iron-kingdoms-supplemental.iron-kingdoms-items.Item.NuBqHpkTS0OUxFEL"
}

// Deleting Firearms Type
delete CONFIG.DND5E.weaponTypes.firearm;

// Deleting Firearms Proficiency
delete CONFIG.DND5E.weaponProficiencies.firearm;

// New Firearm Types
CONFIG.DND5E.weaponTypes.simpleF = "Simple Firearms";
CONFIG.DND5E.weaponTypes.martialF = "Martial Firearms";

CONFIG.DND5E.weaponProficienciesMap.simpleF = "sim";
CONFIG.DND5E.weaponProficienciesMap.martialF = "mar";

CONFIG.DND5E.weaponTypeMap.simpleF = "ranged";
CONFIG.DND5E.weaponTypeMap.martialF = "ranged";

// Map New WeaponIDs
CONFIG.DND5E.weaponIds.pistol = "Compendium.iron-kingdoms-supplemental.iron-kingdoms-items.Item.DVdX2oarOwe34JTq";
CONFIG.DND5E.weaponIds.carbine = "Compendium.iron-kingdoms-supplemental.iron-kingdoms-items.Item.cDA0avbkYzIhMdQe";

// Ending of script
});