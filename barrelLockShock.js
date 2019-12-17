
const reverse = (normalResult) => {
    if (normalResult === -1) return -1;
    return Number(!normalResult);
};

const BLS_MODIFIER = "barrel, lock & shock";
const applyBarrelLockAndShockModifier = (normalResult, player1, player2, modifier1, modifier2) => {
    const mod1IsBls = modifier1 === BLS_MODIFIER;
    const mod2IsBls = modifier2 === BLS_MODIFIER;
    if (mod1IsBls ? !mod2IsBls : mod2IsBls) {
        return reverse(normalResult);
    }

    return normalResult;
};

module.exports = applyBarrelLockAndShockModifier;