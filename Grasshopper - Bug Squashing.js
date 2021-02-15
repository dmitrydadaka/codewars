let health = 100,
    position = 0,
    coins = 0

function main () {
  const actions = [rollDice,move,combat,getCoins,buyHealth,printStatus];
  actions.forEach(e => e());
}
