const applyBarrelLockAndShockModifier = require('./barrelLockShock');

describe('Barrel, Lock and Shock modifier', () => {
    test(`does nothing to a tied game`, () => {
        const player1 = "jack";
        const player2 = "jack";
        const modifier1 = "barrel, lock & shock";
        const modifier2 = "barrel, lock & shock";

        expect(applyBarrelLockAndShockModifier(player1, player2, modifier1, modifier2)).toEqual(-1);
    });
});
