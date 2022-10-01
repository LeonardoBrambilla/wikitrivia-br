import { Item, PlayedItem } from "../types/item";
import { createWikimediaImage } from "./image";

export function getRandomItem(deck: Item[], played: Item[]): Item {
  // console.log(deck)
  // console.log(played)
  const periods: [number, number][] = [
    [-100000, 1000],
    [1000, 1800],
    [1800, 2020],
  ];
  const [fromYear, toYear] =
    periods[Math.floor(Math.random() * periods.length)];
  const avoidPeople = Math.random() > 0.5;
  const candidates = deck.filter((candidate) => {
    if (avoidPeople && candidate.instance_of.includes("human")) {
      return false;
    }
    if (candidate.year < fromYear || candidate.year > toYear) {
      return false;
    }
    if (tooClose(candidate, played)) {
      return false;
    }
    return true;
  });

  // if (candidates.length > 0) {
  //   return candidates[Math.floor(Math.random() * candidates.length)];

  // }
  // addEventListener('keypress', (event) => {});
  const newitem = deck[Math.floor(Math.random() * deck.length)]
  deck.map(e=>{
    if(newitem == e) {
      const newitem = deck[Math.floor(Math.random() * deck.length)]
    }}
    )
    // console.log(newitem)
    return newitem

}

function tooClose(item: Item, played: Item[]) {
  let distance = (played.length < 40) ? 5 : 1;
  if (played.length < 11)
    distance = 110 - 10 * played.length;

  return played.some((p) => Math.abs(item.year - p.year) < distance);
}

export function checkCorrect(
  played: PlayedItem[],
  item: Item,
  index: number,
  newNextButOne:PlayedItem[]
): { correct: boolean; delta: number } {
  const sorted = [...played, item].sort((a, b) => a.year - b.year);
  const array = [...played]
  array.push(newNextButOne)  
  const t = array.find((i) => i.year == item.year)
  if(t){
    return { correct: true, delta: 0 };
  }  

  const correctIndex = sorted.findIndex((i) => {
    return i.id === item.id;
  });

  if (index !== correctIndex) {
    return { correct: false, delta: correctIndex - index };
  }
  if (index == correctIndex) {
    return { correct: true, delta: 0 };
  }

  return { correct: true, delta: 0 };
}

export function preloadImage(url: string): HTMLImageElement {
  const img = new Image();
  img.src = createWikimediaImage(url);
  return img;
}
