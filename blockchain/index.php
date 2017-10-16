<!DOCTYPE html>
<html>

<head>
    <title>Blockchain</title>
   <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="res/reset2.0.min.css">
    <link rel="stylesheet" href="main.css">
    <style type="text/css">
       
    </style>
</head>
<header class="header ">
    <div class="wrapper">

         <nav class="clearfix">

            <div class="brand-nav clearfix">
                <a href="" class="brand-icon"><img src="img/blogo.png" alt=""></a>
                <a href="" class="menu-toggle">
                    <img src="img/menu.svg" alt="">
                </a>
                
            </div>
                

            
             <ul class="right-menu mobile-menu">
                <li><a href="">Home</a></li>
               
            </ul>
        </nav>
    </div>
   
</header>
<body>
    <div class="clearfix">
        <ul class="wall">

        <?php foreach (range(1,10) as $key => $value): ?>

          <li class="wall-item modal-toggle">
            <div>
                <img src="http://lorempixel.com/<?= 347 ?>/<?= rand(100,500) ?>" alt="">
                <div class="content">
                    <h4 class="heading"><a href="">this is heading</a></h4>
                    <p class="para">Lorem ipsum dolor sit amet, consectetur..</p>
                </div>
            </div>
          </li>
            
        <?php endforeach ?>
     
    </ul>  

    </div>


<div class="front-banner-box">
   <div class="front-banner-img"></div>
   <div class="front-banner-overlay">
       <div class="container text-center">
               <h1 class="banner-heading">
                   Exchange cryptocurrency <br>   
                   at the <strong class="base-color">best rate</strong>
               </h1>
           <div class="">
               <div class="inline-item">
                   <input type="text" class="form-control">
                   <select name="" id="" class="form-control">
                       <option value="">Select</option>
                   </select>
               </div>
                <div class="inline-item">
                   <input type="text" class="form-control">
                   <select name="" id="" class="form-control">
                       <option value="">Select</option>
                   </select>
               </div>
                <div class="inline-item">
                   <button class="btn">
                       Exchange
                   </button>
                  
               </div>
              
          
           </div>
       </div>
   </div>
    </div>
    <div class="container text-center">
  <h1 class="banner-heading">
       Exchange cryptocurrency  <br>
       at the <strong class="base-color">best rate</strong>
   </h1>
   <ul class="social">
       <?php foreach(['facebook', 'twitter', 'linkedin', 'insta', 'youtube', 'telegram'] as $t): ?>
           <li><a href=""><img src="img/<?= $t ?>.png" alt="<?= $t ?>"></a></li>
       <?php endforeach; ?>
   </ul>
    </div>

   
    <h1> &nbsp;</h1>
    <h1> &nbsp;</h1>


<!-- modal popup -->

 
      <div class="modal">
        <div class="modal-overlay modal-toggle"></div>
        <div class="modal-wrapper modal-transition">
          <div class="modal-header">
            <button class="modal-close modal-toggle">X</button>
            <div class="content">
            <h4 class="heading">This is a modal</h4>
                
            </div>
            <img src="img/block.jpeg" alt="">
          </div>
          
          <div class="modal-body">
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eum delectus, libero, accusantium dolores inventore obcaecati placeat cum sapiente vel laboriosam similique totam id ducimus aperiam, ratione fuga blanditiis maiores.</p>
             
            </div>
          </div>
        </div>
      </div>

<!-- modal popup END-->




    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
  <script src="js/jaliswall.js"></script>

    <script type="text/javascript">

        $('.wall').jaliswall({
          
          // item classname
          item : '.wall-item',

          
        });


        $('.modal-toggle').on('click', function(e) {
          e.preventDefault();
          $('.modal').toggleClass('is-visible');
          $('html').toggleClass('no-scroll');
        });

         $('.menu-toggle').on('click', function(e) {
          e.preventDefault();

          $('.mobile-menu').slideToggle();
          
        });

    </script>
    <footer> 
        <div class="wrapper">
             <p>
               © 2017 All rights reserved.
            </p>
        </div>   
       
    </footer>
</body>

</html>
