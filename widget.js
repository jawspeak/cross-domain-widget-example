JAW = window.JAW || {},

function() {
    if (!JAW || !JAW.Widget) {
	JAW.Widget = function() {
	    this.init()
	} 
	var loader = {},
	idOrEl = function(el) {
            if (typeof el == "string") return document.getElementById(el);
            return el
	},
	loader.loadStyleSheet = function(href, element) {
	    var linkTag = document.createElement("link");
	    linkTag.href = href
	    linkTag.rel = "stylesheet"
	    linkTag.type = "text/css"
	    document.getElementsByTagName("head")[0].appendChild(linkTag);
	}, function() {
	    JAW.Widget.prototype = function() {
		return {
		    init: function() {
			this.id = "jaw-widget"
			document.write('<div class="jaw-widget" id="' + this.id + '">Widget goes here</div>')
			this.widgetEl = idOrEl(this.id)
			loadStyleSheet('http://localhost:3333/widget.css', this,widgetEl)
			return this
		    }
		}
	    }();
	}();
    }
}();