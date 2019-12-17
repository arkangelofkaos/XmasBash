const applyBarrelLockAndShockModifier = require('./barrelLockShock');

describe('Barrel, Lock and Shock modifier', () => {
    test(`does nothing to a tied game`, () => {
        const player1 = "jack";
        const player2 = "jack";
        const modifier1 = "barrel, lock & shock";
        const modifier2 = "barrel, lock & shock";
        const normalResult = -1;

        expect(applyBarrelLockAndShockModifier(normalResult, player1, player2, modifier1, modifier2)).toEqual(-1);
    });

    test(`when both modifiers are BLS, then outcome is normal`, () => {
        const player1 = "jack";
        const player2 = "santa";
        const modifier1 = "barrel, lock & shock";
        const modifier2 = "barrel, lock & shock";
        const normalResult = 0;

        expect(applyBarrelLockAndShockModifier(normalResult, player1, player2, modifier1, modifier2)).toEqual(0);
    });
});
