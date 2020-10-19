import $ from "jquery";

export function getBMI() {
  const ui = {
    $height: $(".js-height"),
    $weight: $(".js-weight"),
  };
  let height = ui.$height.val();
  let weight = ui.$weight.val();
  let BMI = (weight / ((height / 100) * (height / 100))).toFixed(2);
  return BMI;
}
