<?php

$botToken = "141016846:AAHfBA6FwLbz-_pj3bsn2nVen2pW4eDXZC0";
$website = "https://api.telegram.org/bot".$botToken;

$update = file_get_contents($website."/getupdates");

$updateArray = json_decode($update, TRUE);
print_r($update);

?>