<?php
    include_once('dbProxy.php');
    $id = 0;
    $name = $_POST['name'];
    // далее проводим обработку полученных данных
    $dbConn = new dbProxy();
    if ($dbConn->insOrUpdateGroup($id, $name))
        echo '{ "success": true, "message":"Группа: ' . $name . ' создана"}';
    else
    {
        $message = $dbConn->getErrorText();
        echo "{ \"success\": false, \"message\": \"$message\" }";
    }
?>
