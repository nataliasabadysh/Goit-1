<?php
 
/* https://api.telegram.org/bot878030265:AAECuHmYBV1ynrUeMR0R_62ZLBFDNivWNDM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
/* https://api.telegram.org/bot878030265:AAECuHmYBV1ynrUeMR0R_62ZLBFDNivWNDM/sendMessage?chat_id=-372222335&text=Hello, world! */
//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$datein = $_POST['datein'];
$dateout = $_POST['dateout'];
$phone = $_POST['phone'];
$man = $_POST['phone'];
 
//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "878030265:AAECuHmYBV1ynrUeMR0R_62ZLBFDNivWNDM";
 
//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-372222335";
 
//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Дата заезда: ' => $datein,
  'Дата выезда: ' => $dateout,
  'Телефон:' => $phone,
  'Кол-во человек:' => $man
);
 
//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt == "<b>".$key."</b> ".$value."%0A";
};
 
//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot878030265:AAECuHmYBV1ynrUeMR0R_62ZLBFDNivWNDM/sendMessage?chat_id=-372222335&parse_mode=html&text={$txt}","r");
 
//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
// if ($sendToTelegram) {
//   echo "Thank you";
// } else {
//   echo "Error";
// }

  ?>