function gladiatorExpenses(fights, helmet, sword, shield, armor) {

    let lostFights = fights;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;

    let brokenShields = 0;
    let result = 0;

    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {

        if (currentFight % 2 === 0) {
            result += helmetPrice;
        }

        if (currentFight % 3 === 0) {
            result += swordPrice;
        }

        if (currentFight % 2 === 0 && currentFight % 3 === 0) {
            result += shieldPrice;
            brokenShields++;

            if (brokenShields % 2 === 0) {
                result += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5)