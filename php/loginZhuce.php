<?php
error_reporting(0);
$conn = mysql_connect('localhost', 'root', 'root') or dir('Connect error');
mysql_select_db('message', $conn) or die('DB error');
$sql = "select * from user";  //select * from 你自己创建的表名
mysql_query('set names utf8');
$query = mysql_query($sql);

$get = $_GET['bct'];
switch ($get) {
  case 'list':  
    while($res = mysql_fetch_assoc($query)) {
      $arr[] = $res;
    }
    echo json_encode($arr);
    break;
  case 'add':
    $name = $_GET['name'];
    $password = $_GET['password'];
    $phone = $_GET['phone'];
    $sql = "insert into user (`name`,`password`,`phone`) values ('{$name}','{$password}','{$phone}')";
    mysql_query($sql);
    echo $sql;
}


















?>

