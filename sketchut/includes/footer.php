

<footer id="footer">
<div class="container">
	<div class="row">
		<div class="col-md-6">
			<h4>Quick Links</h4>
			<ul class="list-inline links">
				<li class="active"><a href="index.php">Home</a></li>
				<li><a href="about-us.php">About Us</a></li>
				<li><a href="services.php">Services</a></li> 
				<li><a href="https://www.behance.net/sketchutdecbee">Portfolio</a></li> 
				<li><a href="#">Blog</a></li> 
			</ul>
		</div>
		<div class="col-md-6">
			<ul class="list-inline pull-right">
			<h4 style="margin-bottom: 23px;">Follow Us On</h4>
				
				<li><a href=""><img width="30" src="img/facebook-logo-button.svg" alt=""></a></li>
				<li><a href=""><img width="30" src="img/twitter-logo-button.svg" alt=""></a></li>
				<li><a href=""><img width="30" src="img/instagram-logo.svg" alt=""></a></li>
				<li><a href=""><img width="30" src="img/behance-logo.svg" alt=""></a></li>
			</ul>
		</div>
	</div>
</div>

	<p>© 2017 All rights reserved.</p>
</footer>

	<script src="js/jquery.min.js"></script>
			<script src="js/bootstrap.min.js"></script>
			<script src="js/bubble.js"></script>
			<script src="js/time.js"></script>

				<script>
					$(document).ready(function () {
					    var url = window.location;

					       // Will only work if string in href matches with location
					       
					       $('#navlist li.active').removeClass('active');
					           $('#navlist a[href="' + url + '"]').parent().addClass('active');


					       // Will also work for relative and absolute hrefs
					           $('#navlist a').filter(function () {
					               return this.href == url;
					           }).parent().addClass('active').parent().parent().addClass('active');
					});
				</script>

</body>
</html>