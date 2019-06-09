<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS.css">
    <title>Register Page</title>
</head>
<body>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="Receipt.php" class="navbar-brand"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span> IMAGE</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-nav-demo">
        <ul class="nav navbar-nav navbar-right">
            <li class="active"><a href="Register.php">Mess Register Page <i class="fas fa-user"></i></a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="index.php">Mess Login Page <i class="fas fa-user"></i></a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="jumbotron" style="background: none; color: white;">
        <h1 align="center">Random Text</h1>
    </div>
    <p style="font-size:55px; color: lightblue ;" align='center'>
    <font face="FreeSerif">Register</font></p>
    <form class="box" method="POST" onsubmit='return login()'>
        <center><div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <div class="thumbnail">
                    <label for="mname" style="font-size: 20px;"><b>Mess name:</b></label>
                    <input required type="text" onkeypress="return NAME(event,this);" class="validate form-control input" id="uname" name="uname" placeholder="Enter mess name..">
                    <div id='adminerr'></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <div class="thumbnail">
                    <label for="psw" style="font-size: 20px;"><b>Password:</b></label>
                    <input required type="password" placeholder="Enter Password..." name="psw" id="pass">
                    <div id='passerr'></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <div class="thumbnail">
                    <label for="cpsw" style="font-size: 20px;"><b>Confirm Password:</b></label>
                    <input required type="password" placeholder="Enter the password again..." name="cpsw" id="cpass">
                    <div id='cpasserr'></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <button class="btn btn2" type="submit"  name="regbtn" value="REG">Register <i class="fas fa-user-plus"></i></button>
            </div>
        </div>
        </div></center>
    </form>
    <form class="box" method="POST" action="register.php">
        <div class="row"><center>
            <div class="thumbnail">
                <div class="col-sm-8 col-sm-offset-2">
                    <label style="font-size: 20px;"><b>If you are already registered, click-></b></label>
                    <button class="btn btn4" type="submit"  name="loginbtn" value="LOGIN">Login <i class="fas fa-sign-in-alt"></i></button>
                </div>
            </div></center>
        </div>
    </form>
  </div>
  <script src="https://code.jquery.com/jquery-3.4.0.js" integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo=" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
  <script>
    function login()
    {
        var admin=document.getElementById('admin').value;
        var pass=document.getElementById('pass').value;
        if(admin=='')
        {
            document.getElementById('adminerr').innerHTML="Enter mess name.";
            return false;
        }
        if(pass=='')
        {
            document.getElementById('passerr').innerHTML="Enter password.";
            return false;
        }
        if(cpass=='')
        {
            document.getElementById('cpasserr').innerHTML="Enter the password again.";
            return false;
        }
        return true;
    }
  </script>
</body>
</html>