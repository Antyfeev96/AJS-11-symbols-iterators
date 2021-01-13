/* eslint-disable max-len */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-return-assign */
export default class Team {
  constructor() {
    this.characters = null; // Зачем создаётся сущность с null?
  }

  [Symbol.iterator]() {
    let index = 0;
    const { characters } = this;
    const { size } = characters;

    return {
      next() {
        if (index < size) {
          return {
            done: false,
            value: [...characters][index += 1], // Зачем тут используется ... , которые разделяют массив на элементы, если потом это дело все равно заворачивается в масив?!
          };
        }

        return {
          done: true,
        };
      },
    };
  }

  insertCharacters(arr) { // Для чего создаётся этот массив?
    this.characters = new Set(arr);
  }
}

export class Person extends Team {
  constructor(name) {
    super();
    this.name = name;
  }
}

const team = new Team();
const dima = new Person('dima');
const alex = new Person('alex');
const misha = new Person('misha');

for (const prop of [dima, alex, misha]) {
  console.log(prop);
}
