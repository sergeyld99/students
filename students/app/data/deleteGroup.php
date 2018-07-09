<?php
    include_once('dbProxy.php');
    $id = $_POST['id'];
    $name = $_POST['name'];
    // далее проводим обработку полученных данных
    $dbConn = new dbProxy();
    if ($dbConn->deleteGroup($id))
        echo '{ "success": true, "message":"Группа: ' . $id . '. ' . $name . ' удалена"}';
    else
    {
        $message = $dbConn->getErrorText();
        echo "{ \"success\": false, \"message\": \"$message\" }";
    }
?>
