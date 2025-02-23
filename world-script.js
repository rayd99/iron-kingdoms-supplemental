Hooks.once("init", () => {
// Deleting languages that don't fit this world
    delete CONFIG.DND5E.languages.standard.elvish;
    delete CONFIG.DND5E.languages.standard.giant;
    delete CONFIG.DND5E.languages.standard.gnomish;
    delete CONFIG.DND5E.languages.standard.goblin;
    delete CONFIG.DND5E.languages.standard.halfling;
    delete CONFIG.DND5E.languages.standard.orc;

// Deleting exotic languages that don't fit this world
    delete CONFIG.DND5E.languages.druidic;
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
  });