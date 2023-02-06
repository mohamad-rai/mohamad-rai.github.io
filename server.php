<?php

    if(isset($_POST['data'])){
        $post = $_POST['data'];

        $message = "email: {$post['email']}\nsubject: {$post['subject']}\nmessage:\n {$post['message']}";
        
        $header = 'From: <auto@mrezaahmadi.ir>' . "\r\n";
        header('Content-Type: application/json');
        
        if(mail("me@mrezaahmadi.ir","Site-Contact",$message,$header))
            echo json_encode(["result" => true]);
        else
            echo json_encode(["result" => false]);
    }
    else
        echo json_encode(["result" => false]);