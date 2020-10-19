import { getBMI } from "./getBMI";
import $ from "jquery";

export function drawBMI() {
  $(".js-result").html(getBMI());
}
