const oneModWorldGenDefinition = {
    base: null,
    modify: (filterManager) => {
        filterManager.AppendFilter(['one_mod', 'center'], 1);
filterManager.AppendFilter(['one_mod', 'set1'], 1);
    }
};

SNIPPET_InheritsFromGameMode('one_mod', () => {
    SetWorldGenDefinition(oneModWorldGenDefinition);
});