function maximumWealth(accounts: number[][]): number {
  let maximumWealth = 0

  for (let i = 0; i < accounts.length; i++) {
    let currentWealth = accounts[i].reduce((value, acum) => (value + acum), 0)
    maximumWealth = (currentWealth > maximumWealth) ? currentWealth : maximumWealth
  }

  return maximumWealth
};