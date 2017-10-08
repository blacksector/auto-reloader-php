/*
TO USE: include reloader.js and tell it what to check:

	Reloader.go({
		server: [
			'index.php'
		],
		path: '/Reloader.php',
		frequency: 2000
	});

	All keys are optional. If you don't give client or server, though, it won't do anything.

	Shortcut: Reloader.watch([
		'/js/main.js',
		'/css/layout.css'
	]);
*/

var Reloader = {
  options: {
    frequency: 2000,
    client: [],
    server: [],
    path: 'reloader.php'
  },
  req: new XMLHttpRequest(),
  timeout: null,
  watch: function(options) {
    this.go.call(this, options);
  },
  go: function(options) {
    if (options)

      // deal with array being passed
      if (typeof options.length != 'undefined')
        this.options.client = options;

      // change any options given
      else
        for (x in options)
          this.options[x] = options[x];

    // set up new timeout
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function() {
      Reloader.poll.call(Reloader);
    }, this.options.frequency);
  },
  ajax: function(url, callback) {
    this.req.open("GET", url, false);
    this.req.setRequestHeader('If-Modified-Since', window._Reloader_LoadTime.toUTCString());
    this.req.send(null);
    if (this.req.status == 200)
      callback.call(
        Date.parse(
          this.req.getResponseHeader('Last-Modified')
        )
      );
  },
  poll: function(options) {
    var urls = this.options.client.slice();

    // build url for server-side files
    if (this.options.server.length)
      urls.push(this.options.path + '?' + this.options.server.join(','));

    // check 'em
    for (i in urls)
      this.ajax.call(this, urls[i], function() {
        if (this > Date.parse(window._Reloader_LoadTime))
          location.reload()
      });

    this.go();
  },
  init: function(options) {
    window._Reloader_LoadTime = new Date();
  }
};
Reloader.init();
