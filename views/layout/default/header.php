<!DOCTYPE html>

<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="<?php echo APP_SLOGAN; ?>">
        <meta name="viewport" content="width=device-width, user-scalable=no">
        
        <link rel="shortcut icon" type="image/x-icon" href="<?php echo $_layoutParams['ruta_img']; ?>icon.png">
        
        <title><?php echo APP_NAME; ?></title>
        
        <!-- Bootstrap -->
        <link href="<?php echo $_layoutParams['ruta_css']; ?>bootstrap.min.css" rel="stylesheet">
        
        <!-- Personal Style -->
        <link href="<?php echo $_layoutParams['ruta_css']; ?>estilos.css" rel="stylesheet" type="text/css">
        
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>

    <body>
        <?php if(isset($this->_error)){ ?><div id="error"><?php echo $this->_error; ?></div><?php } ?>
        <?php if(isset($this->_mensaje)){ ?><div id="mensaje"><?php echo $this->_mensaje; ?></div><?php } ?>
        
        <div id="menu_top" style="padding: 35px 15px 15px 15px;">
            <div class="col-md-12" style="padding-bottom: 10px; border-bottom: 1px solid #c5432e;">
                <div class="row">
                    <div class="col-md-4 col-xs-6">
                        <a href="<?php echo BASE_URL; ?>"><img src="<?php echo $_layoutParams['ruta_img']; ?>logo.png" class="img-responsive" /></a>
                    </div>
                </div>
            </div>
        </div>