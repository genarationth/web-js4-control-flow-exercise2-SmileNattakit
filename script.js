const dayNumber = 0;

switch (true) {
  case dayNumber == 0:
    console.log("สวัสดีวันอาทิตย์");
    break;
  case dayNumber == 1:
    console.log("สวัสดีวันจันทร์");
    break;
  case dayNumber == 2:
    console.log("สวัสดีวันอังคาร");
    break;
  case dayNumber == 3:
    console.log("สวัสดีวันพุธ");
    break;
  case dayNumber == 4:
    console.log("สวัสดีวันพฤหัสบดี");
    break;
  case dayNumber == 5:
    console.log("สวัสดีวันศุกร์");
    break;
  case dayNumber == 6:
    console.log("สวัสดีวันเสาร์");
    break;
  default:
    console.log("คุณกรอกข้อมูลไม่ถูกต้อง / Invalid day number");
}
