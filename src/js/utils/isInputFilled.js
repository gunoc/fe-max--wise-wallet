export const isInputFilled = (value) => {
  if (value === "") {
    return false;
  }
  if (value === 0) {
    return false;
  }
  if (value === "선택하세요") {
    return false;
  }
  return true;
};
