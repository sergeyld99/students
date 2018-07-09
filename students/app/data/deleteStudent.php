<?php
    include_once('dbProxy.php');
    $id = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    //$group = $_POST['group'];
    $idGroup = $_POST['id_group'];
    // далее проводим обработку полученных данных
    
    $dbConn = new dbProxy();
    if ($dbConn->deleteStudent($id, $name))
        echo "{ \"success\": true, \"message\":\"Студент:  $id.$name ($age),(группа $groupId) удален\"}";
    else
    {
        $message = $dbConn->getErrorText();
        echo "{ \"success\": false, \"message\": \"$message\" }";
    }
?>
