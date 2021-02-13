// Brute Force Solution
const rainFalls = (arr) => {
  const indexOfMax = (arr) => {
    return arr.indexOf(Math.max(...arr));
  };

  const rightArr = arr.slice(indexOfMax(arr), arr.length);
  const rightArrWithoutMax = rightArr.slice(1, rightArr.length);

  let rightSum = 0;

  let arrOfMaxAndHeight = rightArr;
  let arrWithoutMax = rightArrWithoutMax;
  let height = Math.max(...rightArrWithoutMax);
  let sliceToIterateOn = arrWithoutMax.slice(0, indexOfMax(arrWithoutMax));

  for (let i = 0; i < rightArr.length; i++) {
    for (let j = 0; j < sliceToIterateOn.length; j++) {
      rightSum += height - sliceToIterateOn[j];
    }

    arrOfMaxAndHeight = arrOfMaxAndHeight.slice(
      indexOfMax(arrWithoutMax) + 1,
      rightArr.length
    );

    arrWithoutMax = arrOfMaxAndHeight.slice(1, rightArr.length);
    height = Math.max(...arrWithoutMax);
    sliceToIterateOn = arrWithoutMax.slice(0, indexOfMax(arrWithoutMax));

    if (arrOfMaxAndHeight.length === (0 || 1)) break;
  }

  const leftArr = arr.slice(0, indexOfMax(arr) + 1);
  const lefttArrWithoutMax = leftArr.slice(0, indexOfMax(arr));

  let leftSum = 0;

  let LarrOfMaxAndHeight = leftArr;
  let LarrWithoutMax = lefttArrWithoutMax;
  let Lheight = Math.max(...lefttArrWithoutMax);
  let LsliceToIterateOn = LarrWithoutMax.slice(
    indexOfMax(LarrWithoutMax) + 1,
    LarrOfMaxAndHeight.length
  );
  console.log(LsliceToIterateOn, LarrWithoutMax, leftArr);

  for (let i = leftArr.length - 1; i > 0; i--) {
    for (let j = LsliceToIterateOn.length - 1; j > 0; j--) {
      console.log(leftSum);
      leftSum += Lheight - LsliceToIterateOn[j];
    }

    LarrOfMaxAndHeight = LarrOfMaxAndHeight.slice(0, indexOfMax(LarrWithoutMax) + 1);

    LarrWithoutMax = LarrOfMaxAndHeight.slice(1, leftArr.length);
    Lheight = Math.max(...LarrWithoutMax);
    LsliceToIterateOn = LarrWithoutMax.slice(0, indexOfMax(LarrWithoutMax));

    if (LarrOfMaxAndHeight.length === (0 || 1)) break;
  }

  const rain = rightSum + leftSum;

  return rain;
};

console.log(rainFalls([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
