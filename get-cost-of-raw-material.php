<?php
    session_start();
    require_once 'db_login.php';
    
    $sql = "SELECT * FROM cost";
    
    $select = mysqli_query($db,$sql);
    $num = mysqli_num_rows($select);
    $result_array = array();
    $count = 1;
    while ($row = mysqli_fetch_array($select, MYSQLI_ASSOC)){
        $name = $row['name'];
        $gross_weight = $row['gross_weight'] ? (float)$row['gross_weight'] : null;
        $net_weight = $row['net_weight'] ? (float)$row['net_weight'] : null;
        $weight_persent = $gross_weight ? (string)(number_format(($net_weight/$gross_weight),3)*100).'%' : null;
        $unit = $row['unit'];
        $cost = $row['cost'];
        $unit_cost = $row['unit_cost'];
        $kind = $row['kind'];
        $notes = $row['notes'];

        $result_array[$count]= array("name"=>$name,"gross_weight"=>$gross_weight,"net_weight"=>$net_weight,"weight_persent"=>$weight_persent,"unit"=>$unit,"cost"=>$cost,"unit_cost"=>$unit_cost,"kind"=>$kind,"notes"=>$notes);
        $count += 1;
    }

    // print_r($result_array);
    if($num == 0) {
        echo 'no data';
    } else {
        echo json_encode($result_array);
    }




?>