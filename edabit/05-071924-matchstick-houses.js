function matchHouses(step) {
  if (step === 0) {
    return 0;
  } else if (step === 1) {
    return 6;
  } else {
    return 6 + (step - 1) * 5;
  }
}

// TESTS
console.log(matchHouses(1)); // 6
console.log(matchHouses(0)); // 0
console.log(matchHouses(17)); // 86
console.log(matchHouses(36)); // 181
console.log(matchHouses(15)); // 76
console.log(matchHouses(99)); // 496
console.log(matchHouses(3)); // 16
console.log(matchHouses(87)); // 436
