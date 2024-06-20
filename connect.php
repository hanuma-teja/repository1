<?php
    $name = $_POST['name'];

    $conn = new mysqli('localhost','root','','testphp');
    if($conn->connect_error){
        die('connection Failed : '.$conn->connect_error);
        
    }else{
        $stmt = $conn->prepare("insert into registration(name) value(?)");
        $stmt->bind_param("s",$name);
        $stmt->execute();
        echo "registration successfull";
        $stmt->close();
        $conn->close();
    }
    

?>
