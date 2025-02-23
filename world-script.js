// Languages
Hooks.once("init", () => {
// Deleting languages that don't fit this world
    delete CONFIG.DND5E.languages.druidic;
    delete CONFIG.DND5E.languages.exotic.children.aarakocra;
    delete CONFIG.DND5E.languages.exotic.children.primordial.children.aquan;    
    
// Adding Kingdom Languages
    CONFIG.DND5E.languages.kingdomdialects = "Kingdom Dialects";
    CONFIG.DND5E.languages.kingdomdialects.children.cygnaran = "Cygnaran";
    CONFIG.DND5E.languages.kingdomdialects.children.khadorn = "Khadoran";

  });