<?php
error_reporting(0);
$conn = mysql_connect('localhost', 'root', 'root') or dir('Connect error');
mysql_select_db('message', $conn) or die('DB error');
$sql = "select * from text";  //select * from 你自己创建的表名
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
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $watch = $_GET['watch'];
    $content = $_GET['content'];
    $sql = "insert into text (`name`,`email`,`phone`,`watch`,`content`) values ('{$name}','{$email}',{$phone},'{$watch}', '{$content}')";
    mysql_query($sql);
    echo $sql;
    break;
  case 'del':
    $id = $_GET['id'];
    $sql = "delete from text where id={$id}";
    mysql_query($sql);
}


















?>

