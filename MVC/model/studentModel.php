<?php

    if(file_exists("common/database.php"))
    {
        include_once "common/database.php";
    }
    
    class StudentModel extends database_connection
    {
        //This function is for count the student data from database and return the data
        function studentList($filteredArray)
        {
            $status="Yes";
            $user_type="Student";
            $db=$this->connect();
            $query=$this->queryPrepare($filteredArray);
            $data=$db->prepare($query);
            $data->bindParam(":status",$status);
            $data->bindParam(":user_type",$user_type);
            $data->execute();
            $no_Of_Rows=$data->rowCount();
            return $no_Of_Rows;
        }

        //This function is for prepare the query
        function queryPrepare($filteredArray)
        {
            $query="select id,first_name,last_name,department,number,blood_group,passedout_year,location from user inner join student_details on user.id=student_details.r_id where status=:status && user_type=:user_type";
            foreach($filteredArray as $key=>$value)
            {
                $query=$query." && $key"."='$value'";
            }
            return $query;
        }

        //This function is for retrieve the data from the database and return the data
        function retrieve($filteredArray,$offset_value,$results_per_page)
        {
            $status="Yes";
            $user_type="Student";
            $db=$this->connect();
            $query=$this->queryPrepare($filteredArray);
            $query=$query." LIMIT ".$offset_value.','.$results_per_page;
            $data=$db->prepare($query);
            $data->bindParam(":status",$status);
            $data->bindParam(":user_type",$user_type);
            $data->execute();
            $rows = $data->fetchAll(PDO::FETCH_ASSOC);
            $no_Of_Rows=$data->rowCount();
            return ($no_Of_Rows==0) ? "No Records Found" : $rows;
        }

        //This function is for insert the data to the database 
        function studentForm($userArr)
        {
                $db=$this->connect();
                $data=$db->prepare("insert into user(email,password) values(:email,:password)");
                $data->bindParam(":email",$userArr['email']);
                $data->bindParam(":password",$userArr['password']);
                $data->execute();
                $id=$db->lastInsertId();
                return $id;
        }

        //This function is for insert the data to the database
        function studentDetailsForm($detailsArr)
        {
                $db=$this->connect();
                $data=$db->prepare("insert into student_details(r_id,first_name,last_name,dob,number,age,blood_group,gender,location,image,department,passedout_year) values(:id,:first_name,:last_name,:dob,:number,:age,:blood_group,:gender,:location,:image,:department,:passedout_year)");
                $data->bindParam(":id",$detailsArr["id"]);
                $data->bindParam(":first_name",$detailsArr["firstname"]);
                $data->bindParam(":last_name",$detailsArr['lastname']);
                $data->bindParam(":dob",$detailsArr['dob']);
                $data->bindParam(":number",$detailsArr['number']);
                $data->bindParam(":age",$detailsArr['age']);
                $data->bindParam(":blood_group",$detailsArr['blood_group']);
                $data->bindParam(":gender",$detailsArr['gender']);
                $data->bindParam(":location",$detailsArr['location']);
                $data->bindParam(":image",$detailsArr['image']);
                $data->bindParam(":department",$detailsArr['department']);
                $data->bindParam(":passedout_year",$detailsArr['passedout_year']);
                $data->execute();
        }

        //This function is for get particular student details from database and return the data
        function getStudentDetails($id)
        {
            $db=$this->connect();
            $data=$db->prepare("select * from user inner join student_details on user.id=student_details.r_id where id=:id");
            $data->bindParam(":id",$id);
            $data->execute();
            $rows = $data->fetchAll(PDO::FETCH_ASSOC);
            return $rows;
        }

        //This function is for update the student data
        function updateForm($arr)
        {
                $db=$this->connect();
                $data=$db->prepare("update user inner join student_details on user.id=student_details.r_id set first_name=:first_name,last_name=:last_name,dob=:dob,email=:email,number=:number,image=:image,department=:department,age=:age,blood_group=:blood_group,gender=:gender,passedout_year=:passedout_year,location=:location,password=:password where id=:id");
                $data->bindParam(":first_name",$arr["firstname"]);
                $data->bindParam(":last_name",$arr['lastname']);
                $data->bindParam(":dob",$arr['dob']);
                $data->bindParam(":email",$arr['email']);
                $data->bindParam(":number",$arr['number']);
                $data->bindParam(":image",$arr['image']);
                $data->bindParam(":id",$arr["id"]);
                $data->bindParam(":department",$arr['department']);
                $data->bindParam(":age",$arr['age']);
                $data->bindParam(":blood_group",$arr['blood_group']);
                $data->bindParam(":gender",$arr['gender']);
                $data->bindParam(":passedout_year",$arr['passedout_year']);
                $data->bindParam(":location",$arr['location']);
                $data->bindParam(":password",$arr['password']);
                $data->execute();
                $rows = $data->fetchAll(PDO::FETCH_ASSOC);
                return $rows;
        }

        //This function is for delete the student data
        function deleteStudent($id)
        {
                $status="No";
                $db=$this->connect();
                $data=$db->prepare("update student_details inner join user on student_details.r_id=user.id set status=:status where id=:id");
                $data->bindParam(":status",$status);
                $data->bindParam(":id",$id);
                $data->execute();
        }

        //This function is for get the oldImagePath from database
        function getOldImage($id)
        {
            $db=$this->connect();
            $data=$db->prepare("select image from student_details inner join user on student_details.r_id=user.id where id=:id");
            $data->bindParam(":id",$id);
            $data->execute();
            $rows = $data->fetch(PDO::FETCH_ASSOC);
            return $rows;
        }
    }
?>