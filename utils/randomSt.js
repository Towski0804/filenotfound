let arr = [
  'st1_main',
  'st2_main',
  'st3_main',
  'st4_main',
  'st5_main',
  'st6_main',
  'st7_main',
  'st8_main',
  'st9_main',
  'st10_main',
];

const random = curroute => {
  const n = arr.length;
  let arr1 = arr.slice();
  for (let i = 0; i < n; i++) {
    if (curroute === arr1[i]) {
      arr1.splice(i, 1);
      break;
    }
  }

  return arr1[(Math.random() * 9) >> 0];
};

export default random;
