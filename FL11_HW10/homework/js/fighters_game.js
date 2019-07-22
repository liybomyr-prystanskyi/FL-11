class Fighter {
  constructor(object) {
    this.percent = 100;
    this.name = object.name;
    this.damage = object.damage;
    this.hp = object.hp;
    this.agility = object.agility;
    this.totalHP = object.hp;
    this.wins = 0;
    this.loss = 0;
  }

  getAgility() {
    return this.agility;
  }

  getDamage() {
    return this.damage;
  }

  getHealth() {
    return this.hp;
  }

  getName() {
    return this.name;
  }

  heal(points) {
    this.hp += points;
    if (this.hp > this.totalHP) {
      this.hp = this.totalHP;
    }
  }

  logCombatHistory(name, wins, losses) {
    return `Name: ${name}, Wins: ${wins}, Losses: ${losses}`;
  }

  addWin(point) {
    this.wins += point;
  }
  addLoss(point) {
    this.loss += point;
  }

  attack(guard) {
    let chance = Math.floor(Math.random() * this.percent + 1);
    if (chance > guard.getAgility()) {
      let damageByHit = this.getDamage();
      this.dealDamage(damageByHit, guard);
      console.log(
        this.getName() +
          'make' +
          this.getDamage() +
          'damage to' +
          guard.getName()
      );
    } else {
      console.log(this.getName() + 'attack missed');
    }
  }

  dealDamage(damageByHit, guard) {
    guard.hp = guard.getHealth() - damageByHit;
  }
}

const first_fighter = new Fighter({
  name: 'John',
  damage: 20,
  agility: 25,
  hp: 100
});

const second_fighter = new Fighter({
  name: 'Jim',
  damage: 40,
  agility: 40,
  hp: 100
});
console.log(first_fighter, second_fighter);

function battle(first_fighter, second_fighter) {
  let fight = true;
  const m_number = -1;

  if (first_fighter.getHealth() <= 0 || second_fighter.getHealth() <= 0) {
    if (first_fighter.getHealth() <= 0) {
      return console.log(`${first_fighter.getName()} is dead and can't fight`);
    } else if (second_fighter.getHealth() === 0) {
      return console.log(`${second_fighter.getName()} is dead and can't fight`);
    }
  }

  while (fight) {
    if (first_fighter.getHealth() <= 0) {
      console.log(`${first_fighter.getName()} Lose`);
      first_fighter.heal(first_fighter.getHealth() * -m_number);
      first_fighter.addLoss();
      second_fighter.addWin();
      break;
    }

    first_fighter.attack(second_fighter);

    if (second_fighter.getHealth() <= 0) {
      console.log(`${second_fighter.getName()} Lose`);
      second_fighter.heal(second_fighter.getHealth() * -m_number);
      first_fighter.addWin();
      second_fighter.addLoss();
      break;
    }

    second_fighter.attack(first_fighter);
  }
}
battle(first_fighter,second_fighter);
