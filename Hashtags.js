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

console.log(Hashtags("asi##d", "af#d"));
