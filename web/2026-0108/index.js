// 计算字符的重复次数

const str = "hufashuvigeiuagvuieabfautfhaubfuia";

const arr = str.split("");

const data = arr.reduce(
  (a, b) => (
    // 1
    // if (a[b]) {
    //   a[b]++;
    // } else {
    //   a[b] = 1;
    // }
    // return a;

    // 2
    // a[b]++ || (a[b] = 1);
    // return a;

    // 3
    a[b]++ || (a[b] = 1), a
  ),
  {}
);

console.log(data);
