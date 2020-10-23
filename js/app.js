import "/css/app.scss";
import $ from "jquery";
import { checkValues } from "./check-values";
import { drawBMI } from "./draw-bmi";
import { getBMI } from "./get-bmi";

$(document).ready(function () {
  $(".js-calculate").on("click", function () {
    let height = $(".js-height").val();
    let weight = $(".js-weight").val();
    if (checkValues(height, weight) == true) {
      alert("Please enter valid numbers");
      return;
    } else {
      var bmiResult = getBMI(height, weight);
      drawBMI(bmiResult);
    }
  });
});
