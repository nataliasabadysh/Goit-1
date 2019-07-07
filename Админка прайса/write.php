<?php
$Espresso = $_POST['Espresso'];
$Dopio = $_POST['Dopio'];
$Raf_250 = $_POST['Raf_250'];
$Raf_400 = $_POST['Raf_400'];
$Аmerikano = $_POST['Аmerikano'];
$Kofe_po_venski = $_POST['Kofe_po_venski'];
$Flat_white_250 = $_POST['Flat_white_250'];
$Flat_white_400 = $_POST['Flat_white_400'];
$Latte_250 = $_POST['Latte_250'];
$Latte_400 = $_POST['Latte_400'];
$Latte_500 = $_POST['Latte_500'];
$Kappuchino_250 = $_POST['Kappuchino_250'];
$Kappuchino_400 = $_POST['Kappuchino_400'];
$Kappuchino_500 = $_POST['Kappuchino_500'];
$Tea_malina_apelcin = $_POST['Tea_malina_apelcin'];
$Tea_klykva_apelcin = $_POST['Tea_klykva_apelcin'];
$Tea_grenad = $_POST['Tea_grenad'];
$Tea_smorodina_appl = $_POST['Tea_smorodina_appl'];
$Tea_imbir_limon = $_POST['Tea_imbir_limon'];
$Tea_citryc = $_POST['Tea_citryc'];
$Tea_oblepiha_apelcin = $_POST['Tea_oblepiha_apelcin'];
$Tea_mango_apelcin = $_POST['Tea_mango_apelcin'];
$Ice_latte_karamel_300 = $_POST['Ice_latte_karamel_300'];
$Ice_latte_karamel_500 = $_POST['Ice_latte_karamel_500'];
$Ice_latte_kokos_300 = $_POST['Ice_latte_kokos_300'];
$Ice_latte_kokos_500 = $_POST['Ice_latte_kokos_500'];
$Ice_latte_fistashki_300 = $_POST['Ice_latte_fistashki_300'];
$Ice_latte_fistashki_500 = $_POST['Ice_latte_fistashki_500'];
$Ice_latte_sirop_300 = $_POST['Ice_latte_sirop_300'];
$Ice_latte_sirop_500 = $_POST['Ice_latte_sirop_500'];
$Milk_300 = $_POST['Milk_300'];
$Milk_500 = $_POST['Milk_500'];
$Banana_300 = $_POST['Banana_300'];
$Banana_500 = $_POST['Banana_500'];
$Sirop_300 = $_POST['Sirop_300'];
$Sirop_500 = $_POST['Sirop_500'];
$Klybnika_300 = $_POST['Klybnika_300'];
$Klybnika_500 = $_POST['Klybnika_500'];
$Kashelad_300 = $_POST['Kashelad_300'];
$Kashelad_500 = $_POST['Kashelad_500'];
$Hot_kashelad_250 = $_POST['Hot_kashelad_250'];
$Hot_kashelad_400 = $_POST['Hot_kashelad_400'];
$Kakao_250 = $_POST['Kakao_250'];
$Kakao_400 = $_POST['Kakao_400'];

$arr = array(
  'const Espresso = ' => $Espresso ,
  'const Dopio = ' => $Dopio ,
  'const Raf_250 = ' => $Raf_250 ,
  'const Raf_400 = ' => $Raf_400 ,
  'const Аmerikano = ' => $Аmerikano ,
  'const Kofe_po_venski = ' => $Kofe_po_venski ,
  'const Flat_white_250 = ' => $Flat_white_250 ,
  'const Flat_white_400 = ' => $Flat_white_400 ,
  'const Latte_250 = ' => $Latte_250 ,
  'const Latte_400 = ' => $Latte_400 ,
  'const Latte_500 = ' => $Latte_500 ,
  'const Kappuchino_250 = ' => $Kappuchino_250 ,
  'const Kappuchino_400 = ' => $Kappuchino_400 ,
  'const Kappuchino_500 = ' => $Kappuchino_500 ,
  'const Tea_malina_apelcin = ' => $Tea_malina_apelcin ,
  'const Tea_klykva_apelcin = ' => $Tea_klykva_apelcin ,
  'const Tea_grenad = ' => $Tea_grenad ,
  'const Tea_smorodina_appl = ' => $Tea_smorodina_appl ,
  'const Tea_imbir_limon = ' => $Tea_imbir_limon ,
  'const Tea_citryc = ' => $Tea_citryc ,
  'const Tea_oblepiha_apelcin = ' => $Tea_oblepiha_apelcin ,
  'const Tea_mango_apelcin = ' => $Tea_mango_apelcin ,
  'const Ice_latte_karamel_300 = ' => $Ice_latte_karamel_300 ,
  'const Ice_latte_karamel_500 = ' => $Ice_latte_karamel_500 ,
  'const Ice_latte_kokos_300 = ' => $Ice_latte_kokos_300 ,
  'const Ice_latte_kokos_500 = ' => $Ice_latte_kokos_500 ,
  'const Ice_latte_fistashki_300 = ' => $Ice_latte_fistashki_300 ,
  'const Ice_latte_fistashki_500 = ' => $Ice_latte_fistashki_500 ,
  'const Ice_latte_sirop_300 = ' => $Ice_latte_sirop_300 ,
  'const Ice_latte_sirop_500 = ' => $Ice_latte_sirop_500 ,
  'const Milk_300 = ' => $Milk_300 ,
  'const Milk_500 = ' => $Milk_500 ,
  'const Banana_300 = ' => $Banana_300 ,
  'const Banana_500 = ' => $Banana_500 ,
  'const Sirop_300 = ' => $Sirop_300 ,
  'const Sirop_500 = ' => $Sirop_500 ,
  'const Klybnika_300 = ' => $Klybnika_300 ,
  'const Klybnika_500 = ' => $Klybnika_500 ,
  'const Kashelad_300 = ' => $Kashelad_300 ,
  'const Kashelad_500 = ' => $Kashelad_500 ,
  'const Hot_kashelad_250 = ' => $Hot_kashelad_250 ,
  'const Hot_kashelad_400 = ' => $Hot_kashelad_400 ,
  'const Kakao_250 = ' => $Kakao_250 ,
  'const Kakao_400 = ' => $Kakao_400 
);

foreach($arr as $key => $value) {
    $txt .= $key.' '.$value.';';
  };


// открываем файл, если файл не существует,
//делается попытка создать его
$fp = fopen("const.js", "w");
 
// записываем в файл текст
fwrite($fp, $txt);
 
// закрываем
fclose($fp);
?>