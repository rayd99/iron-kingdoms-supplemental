// Languages
Hooks.once("init", () => {
// Deleting languages that don't fit this world
    delete CONFIG.DND5E.languages.druidic;
    delete CONFIG.DND5E.languages.exotic.children.aarakocra;
    delete CONFIG.DND5E.languages.exotic.children.primordial;    
    
// Adding Kingdom Languages
    CONFIG.DND5E.languages.standard.kingdomdialects = "Kingdom Dialects";
    CONFIG.DND5E.languages.standard.kingdomdialects.children.cygnaran = "Cygnaran";
    CONFIG.DND5E.languages.standard.kingdomdialects.children.khadorn = "Khadoran";
    CONFIG.DND5E.languages.standard.kingdomdialects.children.khadorn = "Menite";
    CONFIG.DND5E.languages.standard.kingdomdialects.children.khadorn = "Llaelese";
    CONFIG.DND5E.languages.standard.kingdomdialects.children.khadorn = "Rhulic";
  });