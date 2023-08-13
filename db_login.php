<?php
	$db = mysqli_connect("localhost", "root", "", "pizza");
	if (mysqli_connect_errno($db)) 
{ 
    echo "连 MySQL 失败: " . mysqli_connect_error(); 
} 
	mysqli_query($db, "SET CHARACTER SET UTF8");
	mysqli_query($db, "SET NAMES UTF8");
?>