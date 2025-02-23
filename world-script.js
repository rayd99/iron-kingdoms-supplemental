Hooks.once("init", () => {
// Deleting languages that don't fit this world
    delete CONFIG.DND5E.languages.druidic;
    delete CONFIG.DND5E.languages.exotic.children.aarakocra;
    delete CONFIG.DND5E.languages.exotic.children.primordial;    
    
// Adding Kingdom Languages
CONFIG.DND5E.languages.standard.children.gibberish = {
    label: "Kingdom Dialects",
    children: {
      cygnaran: "Cygnaran",
      khadoran: "Khadoran",
      menite: "Menite",
      llaelese: "Llaelese",
      rhulic: "Rhulic"
    }
  };
    
  });