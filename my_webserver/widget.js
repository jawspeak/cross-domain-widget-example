JAW = window.JAW || {};

(function() {
    if (!JAW || !JAW.Widget) {
	JAW.Widget = function() {
	    this.init();
	};
	var loader = {};
	var idOrEl = function(el) {
            if (typeof el == "string") return document.getElementById(el);
            return el;
	};
	loader.loadStyleSheet = function(href) {
	    var linkTag = document.createElement("link");
	    linkTag.href = href;
	    linkTag.rel = "stylesheet";
	    linkTag.type = "text/css";
	    document.getElementsByTagName("head")[0].appendChild(linkTag);
	};
	(function() {
	    JAW.Widget.jsonP = function(src) {
		var scriptTag = document.createElement("script");
		var head = document.getElementsByTagName("head")[0];
		scriptTag.type = "text/javascript";
		scriptTag.src = src;
		head.insertBefore(scriptTag, head.firstChild);
		return scriptTag;
	    };
	    JAW.Widget.callback_function = function(data) {
		alert('jsonp data received: ' + data.message);
	    };
	    JAW.Widget.prototype = function() {
		return {
		    init: function() {
			this.id = "jaw-widget";
			document.write('<div class="jaw-widget" id="' + this.id + '">This is inserted by the widget!</div>');
			this.widgetEl = idOrEl(this.id);
			loader.loadStyleSheet('http://localhost:4444/widget.css');
			
			return this;
		    },
		    start: function() {
			JAW.Widget.jsonP('http://localhost:5555/jsonp_data.js');
		    }
		};
	    }();
	})();
    }
})();