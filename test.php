<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/navbar-for-emp.css">
    <title>tsst</title>
    
</head>


<body>
    7/1<input type="text" name="" id="1">
    7/2<input type="text" name="" id="2">
    7/3<input type="text" name="" id="3">
    7/4<input type="text" name="" id="4">
    7/5<input type="text" name="" id="5">
    7/6<input type="text" name="" id="6">
    7/7<input type="text" name="" id="7">
    7/8<input type="text" name="" id="8">
    7/9<input type="text" name="" id="9">
    <p>Keypresses:<span>0</span></p>
    <script>
        var id=1;
        $(document).on('keypress',function(e) {
            
            if(e.which == 13) {
                var v = $('#'+id).val();
                console.log(v);
                id+=1;
                $('#'+id).focus();
            }
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js " integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8 " crossorigin="anonymous "></script>
</body>

</html>