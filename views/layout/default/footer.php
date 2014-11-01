        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="<?php echo $_layoutParams['ruta_js']; ?>bootstrap.min.js"></script>
        
        <script src="<?php echo $_layoutParams['ruta_js']; ?>script.js"></script>
		<?php
		
		if(isset($_layoutParams['js']) && count($_layoutParams['js'])): ?>
			<?php for($i=0;$i<count($_layoutParams['js']);$i++): ?>
				<script type="text/javascript" src="<?php echo $_layoutParams['js'][$i]; ?>"></script>
			<?php endfor; ?>
		<?php endif; ?>
	</body>
</html>