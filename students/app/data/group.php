<?php
   include_once('dbProxy.php');
   $dbConn = new dbProxy();
   $dbConn->getGroupsList();
?>