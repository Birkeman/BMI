export function getBMI(height, weight) {
  let BMI = (weight / ((height / 100) * (height / 100))).toFixed(2);
  return BMI;
}
