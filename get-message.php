<?php
    session_start();
    require 'db_login.php';
    $name = isset($_POST["name"]) ? $_POST["name"] : $_GET["name"]; 
    $sql = "SELECT * FROM emp_message WHERE name = '$name' ORDER BY `time` DESC";
    $select = mysqli_query($db,$sql);
    $num=mysqli_num_rows($select);
    $result_array = array();
    $count = 1;
    while ($row = mysqli_fetch_array($select, MYSQLI_ASSOC)){
        $time = $row['time'];
        $message = nl2br($row['message']);
        $response = nl2br($row['response']);
        $checked = $row['checked'];

        $result_array[$count]= array("time"=>$time,"message"=>$message,"response"=>$response,"checked"=>$checked);
        $count += 1;
    }

    if($num == 0) {
        echo 'no data';
    } else {
        echo json_encode($result_array);
    }
    
?>