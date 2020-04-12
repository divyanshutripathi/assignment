const minTickCost = async () => {
  const arr = [
    [2500, 4000, 3500],
    [4000, 6000, 3500],
    [2000, 4000, 2500],
  ];

  const minRow = await minRowValue(arr);
  const rowSubArr = await subtractRow(minRow, arr);
  const minCol = await minColValue(rowSubArr);
  const colSubArr = await subtractCol(minCol, rowSubArr);
  const { minCost, places } = await calculateMinCost(colSubArr, arr);
  console.log("min Cost is : ", minCost);
  console.log("places : ", places);
};

const calculateMinCost = async (arr, originalArray) => {
  const placesArr = [
    ["Jaipur", "Pune", "Banglore"],
    ["Delhi", "Keral", "Mumbai"],
  ];
  let min = 9999999;
  let sum = 0;
  let p = [];
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (arr[0][i] === 0) {
        min = originalArray[0][i];
        p[
          i
        ] = `${placesArr[0][0]} to ${placesArr[1][i]} - ${originalArray[0][i]}`;
      }
      if (arr[j][i] === 0) {
        if (originalArray[j][i] < min) {
          min = originalArray[j][i];
          p[
            i
          ] = `${placesArr[0][j]} to ${placesArr[1][i]} - ${originalArray[0][i]}`;
        }
      }
    }
    sum = sum + min;
  }
  return { minCost: sum, places: p };
};

const minRowValue = async (arr) => {
  const minRow = [];
  for (i = 0; i < 3; i++) {
    const mincal = Math.min.apply(Math, arr[i]);

    minRow.push(mincal);
  }
  return minRow;
};
const minColValue = async (arr) => {
  const minCol = [];
  for (i = 0; i < 3; i++) {
    let min = 999999999;
    for (j = 0; j < 3; j++) {
      console.log(`arr[${j}][${i}] = ${arr[j][i]}`);
      if (arr[j][i] < min) {
        min = arr[j][i];
      }
    }
    minCol.push(min);
  }
  return minCol;
};
const subtractRow = async (min, arr) => {
  let newArrRow = [[], [], []];
  let value = 0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
      value = arr[i][j] - min[i];
      if (value < 0) {
        value = 0;
      }
      newArrRow[i][j] = value;
    }
  }
  return newArrRow;
};
const subtractCol = async (min, arr) => {
  let newArrCol = [[], [], []];
  let value = 0;
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      console.log(`arr[${j}][${i}] = ${arr[j][i]}`);

      value = arr[j][i] - min[i];
      if (value < 0) {
        value = 0;
      }
      newArrCol[j][i] = value;
    }
  }
  return newArrCol;
};
minTickCost();
