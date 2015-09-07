<nav class="main-menu dont-print">
	&copy; <?= date('Y');?> <a href="https://pixeline.be">pixeline.be</a>
	<span class="spacer">•</span>	
	<a class="ajax <?php echo ($menu_active === 'home')? 'active':''; ?>" href="/">Memos</a>
	<span class="spacer">•</span>
	<a class="ajax about <?php echo ($menu_active === 'about')? 'active':''; ?>" href="/about">?</a>
	<span class="spacer">•</span>	
	<a class="ajax dont-print  <?php echo ($menu_active === 'tips')? 'active':''; ?>" href="/tips" >Tips</a>
	<span class="spacer">•</span>	
	<a class="facebook-page dont-print" title="Share it on our facebook page" href="https://www.facebook.com/do.not.forget.me.webapp" target="_blank"><b>on facebook</b></a>
</nav>