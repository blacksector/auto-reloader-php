# auto-reloader-php
A simple live reloader / auto reloader for PHP

This project is a fork of the Reloadr project: https://github.com/dbergey/Reloadr And in the words of the original project creator: "Makes a local site you're working on automatically reload when specified files are [changed]."

For me the project wasn't working for some reason, admittedly I am using a Windows machine on XAMPP but maybe it was some other issues? Not sure, but I got it working again and decided to release my version. I will most probably update this more if I add features or can think of ways to make it more efficient. Here is how to use it:

### 1. Download and include the JS file
Download this project and store it in your project directory. Then, include the JS file into your HTML like this:
```HTML
<script src="/js/reloadr.js"></script>
```
### 2. Add some options and start auto reloading!
```HTML
<script>
	Reloader.go({
		server: [
			'C:\\xampp\\htdocs\\ProjectX\\*.php',
      'C:\\xampp\\htdocs\\ProjectX\\config\\*.php',
      'C:\\xampp\\htdocs\\ProjectX\\css\\*.css',
      'C:\\xampp\\htdocs\\ProjectX\\js\\*.js',
		],
		path: 'libraries\\reloadr.php',
		frequency: 2000
	});
</script>
```

### 3. Enjoy development!

No more annoying F5 button clicks! You now have a mini, simple version of live reloading for your PHP application!
