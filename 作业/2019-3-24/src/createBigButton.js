import $ from "jquery"
import styles from "./bigbutton.css"

export default function () {
    //创建一个按钮
    $("<button>").addClass(styles.btn).html("this is a huge button").appendTo($("#content"));
}