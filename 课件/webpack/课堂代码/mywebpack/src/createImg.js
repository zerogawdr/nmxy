import $ from "jquery"
import hsq from "./assets/hsq.jpg"

export default function(){
    $("<img>").prop("src", hsq).appendTo($("#root"));
}