
const applyMamaWhoModifier = (result, modifier1, modifier2) => {
    return [modifier1, modifier2].includes('mama who') ? -1 : result;
};

module.exports = applyMamaWhoModifier;