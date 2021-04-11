//Given Strings S and T, return if they equal when both are typed out.
//Any "#" that appears in the string counts as a backspace.

const Hashtags = (S, T) => {
  const buildString = (str) => {
    let builtArr = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        builtArr.pop();
      } else {
        builtArr.push(str[i]);
      }
    }

    return builtArr.join("");
  };

  if (buildString(S) === buildString(T)) {
    return true;
  } else {
    return false;
  }
};

console.log(Hashtags("asi##d", "af#d")); // Big(O): - Time Complexity: O(a+b) / - Space Complexity: O(a+b)

const Hashtags2 = (S, T) => {
  let p1 = S.length - 1;
  let p2 = T.length - 1;

  let result = false;

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (S[p1] === "#") {
            backCount += 2;
          }
        }
      }
      if (T[p2] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }
    }

    if (S[p1] !== T[p2]) {
      result = false;
    } else if (S[p1] === T[p2]) {
      result = true;
    }

    p1--;
    p2--;
  }

  return result;
};

console.log(Hashtags2("ask##d", "af#d")); // Big(O): - Time Complexity: O(a+B) / - Space Complexity: O(1)
