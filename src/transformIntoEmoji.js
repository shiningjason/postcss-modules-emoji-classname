import emojis from 'emojis-list';

let j = 0, number = 1;
const cache = {};

const random = (key) => {
  if (cache[key]) return cache[key];

  const totalAmt = emojis.length;
  const cahceAmt = Object.keys(cache).length;
  const div = Math.floor(cahceAmt / totalAmt);
  const mod = cahceAmt % totalAmt;

  let emoji = emojis[mod];
  for (let i = 1; i < number; i++) {
    emoji += emojis[(mod + div * i) % totalAmt];
  }

  j++;
  if (j === totalAmt * (div > 0 ? totalAmt : 1)) {
    j = 0; number++;
  }

  cache[key] = emoji;
  return emoji;
};
