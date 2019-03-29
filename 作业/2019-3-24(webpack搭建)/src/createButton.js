import $ from "jquery"
import styles from "./button.css"

export default function () {
    //创建一个按钮
    $("<button>").addClass(styles.btn).html("一个普普通通的按钮!!!!!!!").appendTo($("#content"));
}