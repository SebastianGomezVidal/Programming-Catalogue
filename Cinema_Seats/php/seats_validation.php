<?php
require_once 'db_connection.php';

function seats_validation (){

    session_start();

    //Getting the user choosen seats
    if(isset($_COOKIE['seats_for_db']))
    {
        $pick_as_array = explode(',',$_COOKIE['seats_for_db']);

        $userid=$_SESSION['userid'];

        if(!empty($pick_as_array[0]) && isset($pick_as_array))
        {
            // Getting the number of user choosen seats
            $number_seats=count($pick_as_array);

            // Free seats cunter
            $free_seats = 0;

            //Connecting to the DataBase
            $dbc = mysqli_connect(db_host,db_user,db_password,db_name) or die ("Error Connecting to DB");

            mysqli_query($dbc,"LOCK TABLES seats WRITE;");

                foreach($pick_as_array as $pick)
                {

                //Quering the seat user's chooses
                $query = "SELECT `$pick[1]` FROM seats WHERE ID=$pick[0]";

                //Retrieving data from the DataBase
                $data = mysqli_query($dbc,$query) or die ("Error executing query");
    
                // Fecthing the data
                $result = mysqli_fetch_row ($data);

                foreach($result as $val) if ($val == 0) $free_seats++;
                }

                if ($number_seats == $free_seats)
                {
                    foreach($pick_as_array as $pick)
                    {
                        $query1 = "UPDATE seats SET `$pick[1]` = $userid WHERE ID = $pick[0]";
                        $data1 = mysqli_query($dbc,$query1) or die ("Error executing query");
                    }
                    $message = "You have succesfully booked $number_seats seats";
                } else $message = "one ore more seats were already booked by other user";

                mysqli_query($db, "UNLOCK TABLES;");
                mysqli_close($dbc);

        } else $message =""; 
    } else $message ="";
    return $message;

}
?>