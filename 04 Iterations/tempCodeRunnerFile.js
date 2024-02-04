const mtTotal = myNumbers.reduce(function (acc, curVal) {
   console.log(`acc: ${acc} and curVal: ${curVal}`);
   return acc + curVal;
}, 0);
