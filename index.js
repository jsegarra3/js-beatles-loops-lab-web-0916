function theBeatlesPlay(musicians,instrument) {
  let arry = [];
  for (var i = 0; i < musicians.length; i++) {
    arry.push(`${musicians[i]} plays ${instrument[i]}`);
  }
  return arry;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  let arry=[]
  let i = 0;
  while (i<facts.length) {
    arry.push(`${facts[i]}!!!`);
    i++;
  }
  return arry;
}
function iLoveTheBeatles(num) {
  let arry = [];
  do {
    arry.push("I love the Beatles!");
    num++;
  } while (num<15);
  return arry;
}
