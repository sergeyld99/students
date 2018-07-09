<?php
class dbProxy
{
    private $mysqli;
    private $errorText;
    public function __construct() {
       $this->connectToMysql();
    }
    private function connectToMysql() {

        $user_mysql = "student_user";
        $password_mysql = "12345";
        $server = "localhost";
        $base_name = "students_test";
        $this->mysqli = new mysqli($server, $user_mysql, $password_mysql, $base_name);
        $this->mysqli->set_charset("utf8");

    }

    public function getStudentsList()
    {
         $SQLString = "SELECT s.id,s.name,s.age,s.id_group,g.name AS `group` FROM students s LEFT JOIN groups g ON s.id_group=g.id";
         if ($result = $this->mysqli->query($SQLString))
         {
             $row = $result->fetch_all(MYSQLI_ASSOC);
             echo(json_encode (array("success" => true,"students" => $row)));
             $result->free();
         }
         else
            $this->errorText = $this->mysqli->error;
    }

    public function getGroupsList()
    {
         $SQLString = "SELECT id,name FROM groups";
         if ($result = $this->mysqli->query($SQLString))
         {
             $row = $result->fetch_all(MYSQLI_ASSOC);
             echo(json_encode (array("success" => true,"groups" => $row)));
             $result->free();
         }
         else
            $this->errorText = $this->mysqli->error;
    }

    public function getErrorText()
    {
      return $this->errorText;
    }

    public function insOrUpdateStudent($id, $name, $age, $idGroup)
    {
        $this->errorText = "";
        $name_escape = $this->mysqli->real_escape_string($name);
        $SQLString = "";
        if ($id>0)
           $SQLString = "UPDATE students SET name='$name_escape',age=$age,id_group=$idGroup WHERE id = $id";
        else
           $SQLString = "INSERT INTO students (name,age,id_group) VALUES('$name_escape',$age,$idGroup)";
        if ($result = $this->mysqli->query($SQLString))
        {
          $this->mysqli->commit();
          return true;
        }
        else
        {
          $this->errorText = $this->mysqli->error;
          return false;
        }

    }

    public function insOrUpdateGroup($id, $name)
    {
        $this->errorText = "";
        $name_escape = $this->mysqli->real_escape_string($name);
        $SQLString = "";
        if ($id>0)
           $SQLString = "UPDATE groups SET name='$name_escape' WHERE id = $id";
        else
           $SQLString = "INSERT INTO groups (name) VALUES('$name_escape')";
        if ($result = $this->mysqli->query($SQLString))
        {
          $this->mysqli->commit();
          return true;
        }
        else
        {
          $this->errorText = $this->mysqli->error;
          return false;
        }

    }

    public function deleteStudent($id)
    {
        $this->errorText = "";
        $SQLString = "DELETE FROM students WHERE id = $id";
        if ($result = $this->mysqli->query($SQLString))
        {
          $this->mysqli->commit();
          return true;
        }
        else
        {
          $this->errorText = $this->mysqli->error;
          return false;
        }

    }

    public function deleteGroup($id)
    {
        $this->errorText = "";
        $SQLString = "DELETE FROM groups WHERE id = $id";
        if ($result = $this->mysqli->query($SQLString))
        {
          $this->mysqli->commit();
          return true;
        }
        else
        {
          $this->errorText = $this->mysqli->error;
          return false;
        }

    }

}
?>
