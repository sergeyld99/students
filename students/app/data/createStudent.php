<?php
    include_once('dbProxy.php');
    $id = 0;
    $name = $_POST['name'];
    $age = $_POST['age'];
    //$group = $_POST['group'];
    $idGroup = $_POST['id_group'];
    // далее проводим обработку полученных данных
    
    $dbConn = new dbProxy();
    if ($dbConn->insOrUpdateStudent($id, $name, $age, $idGroup))
        echo "{ \"success\": true, \"message\":\"Студент:  $id.$name ($age),(группа $idGroup) создан\"}";
    else
    {
        $message = $dbConn->getErrorText();
        echo "{ \"success\": false, \"message\": \"$message\" }";
    }
?>
