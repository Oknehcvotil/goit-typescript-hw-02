/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends Partial<AllType>, B extends Partial<AllType>>(top: T, bottom: B): AllType {
  return {
    name: top.name as string,
    color: top.color as string,
    position: bottom.position as number,
    weight: bottom.weight as number,
  };
}

export {};