<?php
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $request = json_decode(file_get_contents("php://input"));
    $from_email = "StatsInSport";

    $message = "Welcome";

    $from_e = $request->email;
    $contact_message = $request->message;

    $to_email = 'dmitriy.vertiy@gmail.com';

    $contact = "<p><strong>Name:</strong>$from_name</p><p><strong>Email:</strong> $from_email</p>";

    $email_subject = "Sub";

    $email_body = '<html><body>';
    $email_body .= "$<p><strong>Name:</strong>$from_name</p><p><strong>Email:</strong> $from_e</p>
                    <p>$contact_message</p>";
    $email_body .= '</body></html>';

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "From: $from_email\n";
    $headers .= "Reply-To: $from_email";

    mail($to_email,$email_subject,$email_body,$headers);

    $response_array['status'] = 'success';
    $response_array['from'] = $from_email;

    echo json_encode($response_array);
    header($response_array);
?>