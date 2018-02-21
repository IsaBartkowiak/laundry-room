webpackJsonp(["styles"],{

/***/ "./client/src/sass/massena.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./client/src/sass/massena.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/raw-loader/index.js!../../../node_modules/postcss-loader/lib/index.js??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!./massena.scss", function() {
			var newContent = require("!!../../../node_modules/raw-loader/index.js!../../../node_modules/postcss-loader/lib/index.js??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--8-3!./massena.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--8-3!./client/src/sass/massena.scss":
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700\");\n/* Fix user-agent */\n.massena-machine {\n  padding: 0 10px;\n  width: 50%;\n  display: inline-block;\n  font-size: initial;\n  text-align: center;\n  display: inline-block;\n  vertical-align: top; }\n@media (max-width: 768px) {\n    .massena-machine {\n      width: 100%;\n      font-size: 0;\n      padding: 5px 10px; } }\n.massena-machine-title {\n    margin: 8px 0;\n    font-size: 25px;\n    display: block;\n    font-size: 18px;\n    font-weight: 300; }\n@media (max-width: 768px) {\n      .massena-machine-title {\n        margin-top: 0;\n        margin-bottom: 5px;\n        font-size: 16px; } }\n.massena-machine-bg {\n    padding: 30px;\n    position: relative;\n    background-color: white;\n    -webkit-box-shadow: -1px 1px 15px 0 rgba(0, 0, 0, 0.1);\n            box-shadow: -1px 1px 15px 0 rgba(0, 0, 0, 0.1);\n    min-height: 280px; }\n@media (max-width: 768px) {\n      .massena-machine-bg {\n        display: inline-block;\n        vertical-align: top;\n        margin-top: 0;\n        padding: 20px;\n        margin-bottom: 5px;\n        width: 80%;\n        min-height: 240px; } }\n@media (max-width: 768px) {\n    .massena-machine-content {\n      width: 100%;\n      text-align: center;\n      display: inline-block;\n      vertical-align: top;\n      font-size: initial;\n      text-align: center;\n      padding-top: 20px; } }\n.massena-machine-img {\n    max-width: 30%; }\n@media (max-width: 768px) {\n      .massena-machine-img {\n        width: 30%;\n        display: inline-block;\n        vertical-align: top;\n        font-size: initial; } }\n.massena-machine-status {\n    display: inline-block;\n    width: 100%;\n    text-align: center; }\n.massena-machine-status.ok .massena-machine-status-bullet {\n      background-color: #51ca44; }\n.massena-machine-status.ok .massena-machine-status-txt {\n      color: #51ca44; }\n.massena-machine-status.nok .massena-machine-status-bullet {\n      background-color: #e83737; }\n.massena-machine-status.nok .massena-machine-status-txt {\n      color: #e83737; }\n.massena-machine-status-bullet {\n      width: 15px;\n      height: 15px;\n      display: inline-block;\n      vertical-align: top;\n      border-radius: 50%;\n      background-color: #efefef;\n      vertical-align: middle; }\n.massena-machine-status-txt {\n      font-size: 14px;\n      vertical-align: middle;\n      font-weight: bold;\n      padding-left: 5px; }\n.massena-machine-add {\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 11px;\n    padding: 10px 15px;\n    background-color: #51ca44;\n    margin-top: 25px;\n    border-radius: 3px;\n    cursor: pointer;\n    color: white;\n    font-weight: 600; }\n.massena-machine-modal {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 10px;\n    height: 100%;\n    width: 100%;\n    line-height: 280px;\n    display: inline-block;\n    background-color: rgba(0, 0, 0, 0.7); }\n@media (max-width: 768px) {\n      .massena-machine-modal {\n        font-size: initial;\n        line-height: 240px; } }\n.massena-machine-modal-content {\n      display: inline-block;\n      vertical-align: middle;\n      width: 100%;\n      color: white;\n      line-height: normal; }\n.massena-machine-modal-title {\n      margin-top: 0;\n      font-weight: 300; }\n.massena-machine-modal-input {\n      border: 1px solid #efefef;\n      padding: 7px 12px;\n      background-color: rgba(255, 255, 255, 0.8);\n      border-radius: 3px; }\n.massena-machine-modal-input:focus {\n        outline: none;\n        -webkit-box-shadow: none;\n                box-shadow: none;\n        background-color: white; }\n.massena-machine-modal-submit {\n      margin-top: 15px;\n      padding: 8px 12px;\n      background-color: #51ca44;\n      border: 0;\n      border-radius: 3px;\n      color: white;\n      text-transform: uppercase; }\n.massena-machine-modal-close {\n      font-size: 12px;\n      cursor: pointer;\n      padding-left: 5px;\n      text-decoration: underline;\n      display: block;\n      margin-top: 10px; }\n.timer {\n  margin-top: 25px;\n  color: #e83737; }\n.timer p {\n    font-weight: 300;\n    font-size: 20px;\n    margin: 0; }\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nhtml {\n  -webkit-font-smoothing: antialiased;\n  background-color: whitesmoke;\n  font-family: \"Roboto\"; }\nh1 {\n  font-weight: 200; }\n.massena {\n  font-size: 0;\n  max-width: 700px;\n  margin: auto; }\n.massena-title {\n  text-align: center;\n  padding: 10% 0 0 0;\n  margin-bottom: 0; }\n.massena-subtitle {\n  text-align: center;\n  margin-top: 5px;\n  padding-bottom: 5%;\n  color: #3e4c54;\n  font-weight: 500; }\n#timer {\n  color: #e83737;\n  font-size: 25px; }\nselect {\n  border-radius: 0;\n  display: block;\n  width: 200px;\n  height: 30px;\n  margin: 0 auto;\n  margin-top: 15px;\n  background-color: transparent;\n  color: white;\n  border-bottom: 2px solid white; }\nhtml, body {\n  height: 100%;\n  margin: 0;\n  padding: 0; }\nul {\n  list-style: none;\n  word-wrap: break-word; }\n.loader-container {\n  width: 100%;\n  text-align: center;\n  height: 100vh;\n  line-height: 100vh;\n  display: inline-block; }\n.loader-txt {\n  color: #3e4c54;\n  display: inline-block;\n  vertical-align: middle; }\n/* Pages */\n.pages {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n.page {\n  height: 100%;\n  position: absolute;\n  width: 100%; }\n/* Login Page */\n.login.page {\n  background-color: #000; }\n.login.page .form {\n  height: 100px;\n  margin-top: -100px;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  width: 100%; }\n.login.page .form .usernameInput {\n  background-color: transparent;\n  border: none;\n  border-bottom: 2px solid #fff;\n  outline: none;\n  padding-bottom: 15px;\n  text-align: center;\n  width: 400px; }\n.login.page .title {\n  font-size: 200%; }\n.login.page .usernameInput {\n  font-size: 200%;\n  letter-spacing: 3px; }\n.login.page .title, .login.page .usernameInput {\n  color: #fff;\n  font-weight: 100; }\n/* Chat page */\n.chat.page {\n  display: none; }\n/* Font */\n.messages {\n  font-size: 150%; }\n.message {\n  padding: 20px 0; }\n.inputMessage {\n  font-size: 100%; }\n.log {\n  color: gray;\n  font-size: 60%;\n  margin-top: 3px;\n  text-align: center; }\n/* Messages */\n.chatArea {\n  height: 100%;\n  padding-bottom: 60px; }\n.messages {\n  height: 100%;\n  margin: 0;\n  overflow-y: scroll;\n  padding: 10px 20px 10px 20px; }\n.message.typing .messageBody {\n  color: gray;\n  background-color: white; }\n.messageBody {\n  padding: 10px;\n  font-size: 19px;\n  background-color: white;\n  position: relative;\n  font-size: 17px; }\n.messageBody:before {\n  content: '';\n  content: '';\n  width: 0;\n  height: 0;\n  left: -8px;\n  top: 0;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-right: 10px solid white;\n  position: absolute;\n  bottom: 0;\n  margin: auto; }\n.username {\n  font-weight: 700;\n  overflow: hidden;\n  padding-right: 15px;\n  text-align: left;\n  width: 150px;\n  display: inline-block;\n  vertical-align: middle;\n  font-weight: 100;\n  font-size: 20px; }\n/* Input */\n.inputMessage {\n  bottom: 0;\n  height: 60px;\n  left: 0;\n  outline: none;\n  padding-left: 10px;\n  position: absolute;\n  right: 0;\n  width: 100%; }\n.username-lang {\n  color: black;\n  font-size: 10px; }\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./client/src/sass/massena.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map