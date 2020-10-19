import { drawBMI } from "./drawBMI";
import $ from "jquery";

$(document).ready(function () {
  $(".js-calculate").on("click", function () {
    let height = $(".js-height").val();
    let width = $(".js-weight").val();
    if (height == "" || width == "") {
      alert("Please enter valid numbers");
      return;
    } else {
      drawBMI();
    }
  });
});
