/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  var $window = $(window),\n      $body = $('body'),\n      $wrapper = $('#wrapper'),\n      $header = $('#header'),\n      $footer = $('#footer'),\n      $main = $('#main'),\n      $main_articles = $main.children('article'); // Breakpoints.\n\n  breakpoints({\n    xlarge: ['1281px', '1680px'],\n    large: ['981px', '1280px'],\n    medium: ['737px', '980px'],\n    small: ['481px', '736px'],\n    xsmall: ['361px', '480px'],\n    xxsmall: [null, '360px']\n  }); // Play initial animations on page load.\n\n  $window.on('load', function () {\n    window.setTimeout(function () {\n      $body.removeClass('is-preload');\n    }, 100);\n  }); // Fix: Flexbox min-height bug on IE.\n\n  if (browser.name == 'ie') {\n    var flexboxFixTimeoutId;\n    $window.on('resize.flexbox-fix', function () {\n      clearTimeout(flexboxFixTimeoutId);\n      flexboxFixTimeoutId = setTimeout(function () {\n        if ($wrapper.prop('scrollHeight') > $window.height()) $wrapper.css('height', 'auto');else $wrapper.css('height', '100vh');\n      }, 250);\n    }).triggerHandler('resize.flexbox-fix');\n  } // Nav.\n\n\n  var $nav = $header.children('nav'),\n      $nav_li = $nav.find('li'); // Add \"middle\" alignment classes if we're dealing with an even number of items.\n\n  if ($nav_li.length % 2 == 0) {\n    $nav.addClass('use-middle');\n    $nav_li.eq($nav_li.length / 2).addClass('is-middle');\n  } // Main.\n\n\n  var delay = 325,\n      locked = false; // Methods.\n\n  $main._show = function (id, initial) {\n    var $article = $main_articles.filter('#' + id); // No such article? Bail.\n\n    if ($article.length == 0) return; // Handle lock.\n    // Already locked? Speed through \"show\" steps w/o delays.\n\n    if (locked || typeof initial != 'undefined' && initial === true) {\n      // Mark as switching.\n      $body.addClass('is-switching'); // Mark as visible.\n\n      $body.addClass('is-article-visible'); // Deactivate all articles (just in case one's already active).\n\n      $main_articles.removeClass('active'); // Hide header, footer.\n\n      $header.hide();\n      $footer.hide(); // Show main, article.\n\n      $main.show();\n      $article.show(); // Activate article.\n\n      $article.addClass('active'); // Unlock.\n\n      locked = false; // Unmark as switching.\n\n      setTimeout(function () {\n        $body.removeClass('is-switching');\n      }, initial ? 1000 : 0);\n      return;\n    } // Lock.\n\n\n    locked = true; // Article already visible? Just swap articles.\n\n    if ($body.hasClass('is-article-visible')) {\n      // Deactivate current article.\n      var $currentArticle = $main_articles.filter('.active');\n      $currentArticle.removeClass('active'); // Show article.\n\n      setTimeout(function () {\n        // Hide current article.\n        $currentArticle.hide(); // Show article.\n\n        $article.show(); // Activate article.\n\n        setTimeout(function () {\n          $article.addClass('active'); // Window stuff.\n\n          $window.scrollTop(0).triggerHandler('resize.flexbox-fix'); // Unlock.\n\n          setTimeout(function () {\n            locked = false;\n          }, delay);\n        }, 25);\n      }, delay);\n    } // Otherwise, handle as normal.\n    else {\n        // Mark as visible.\n        $body.addClass('is-article-visible'); // Show article.\n\n        setTimeout(function () {\n          // Hide header, footer.\n          $header.hide();\n          $footer.hide(); // Show main, article.\n\n          $main.show();\n          $article.show(); // Activate article.\n\n          setTimeout(function () {\n            $article.addClass('active'); // Window stuff.\n\n            $window.scrollTop(0).triggerHandler('resize.flexbox-fix'); // Unlock.\n\n            setTimeout(function () {\n              locked = false;\n            }, delay);\n          }, 25);\n        }, delay);\n      }\n  };\n\n  $main._hide = function (addState) {\n    var $article = $main_articles.filter('.active'); // Article not visible? Bail.\n\n    if (!$body.hasClass('is-article-visible')) return; // Add state?\n\n    if (typeof addState != 'undefined' && addState === true) history.pushState(null, null, '#'); // Handle lock.\n    // Already locked? Speed through \"hide\" steps w/o delays.\n\n    if (locked) {\n      // Mark as switching.\n      $body.addClass('is-switching'); // Deactivate article.\n\n      $article.removeClass('active'); // Hide article, main.\n\n      $article.hide();\n      $main.hide(); // Show footer, header.\n\n      $footer.show();\n      $header.show(); // Unmark as visible.\n\n      $body.removeClass('is-article-visible'); // Unlock.\n\n      locked = false; // Unmark as switching.\n\n      $body.removeClass('is-switching'); // Window stuff.\n\n      $window.scrollTop(0).triggerHandler('resize.flexbox-fix');\n      return;\n    } // Lock.\n\n\n    locked = true; // Deactivate article.\n\n    $article.removeClass('active'); // Hide article.\n\n    setTimeout(function () {\n      // Hide article, main.\n      $article.hide();\n      $main.hide(); // Show footer, header.\n\n      $footer.show();\n      $header.show(); // Unmark as visible.\n\n      setTimeout(function () {\n        $body.removeClass('is-article-visible'); // Window stuff.\n\n        $window.scrollTop(0).triggerHandler('resize.flexbox-fix'); // Unlock.\n\n        setTimeout(function () {\n          locked = false;\n        }, delay);\n      }, 25);\n    }, delay);\n  }; // Articles.\n\n\n  $main_articles.each(function () {\n    var $this = $(this); // Close.\n\n    $('<div class=\"close\">Close</div>').appendTo($this).on('click', function () {\n      location.hash = '';\n    }); // Prevent clicks from inside article from bubbling.\n\n    $this.on('click', function (event) {\n      event.stopPropagation();\n    });\n  }); // Events.\n\n  $body.on('click', function (event) {\n    // Article visible? Hide.\n    if ($body.hasClass('is-article-visible')) $main._hide(true);\n  });\n  $window.on('keyup', function (event) {\n    switch (event.keyCode) {\n      case 27:\n        // Article visible? Hide.\n        if ($body.hasClass('is-article-visible')) $main._hide(true);\n        break;\n\n      default:\n        break;\n    }\n  });\n  $window.on('hashchange', function (event) {\n    // Empty hash?\n    if (location.hash == '' || location.hash == '#') {\n      // Prevent default.\n      event.preventDefault();\n      event.stopPropagation(); // Hide.\n\n      $main._hide();\n    } // Otherwise, check for a matching article.\n    else if ($main_articles.filter(location.hash).length > 0) {\n        // Prevent default.\n        event.preventDefault();\n        event.stopPropagation(); // Show article.\n\n        $main._show(location.hash.substr(1));\n      }\n  }); // Scroll restoration.\n  // This prevents the page from scrolling back to the top on a hashchange.\n\n  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';else {\n    var oldScrollPos = 0,\n        scrollPos = 0,\n        $htmlbody = $('html,body');\n    $window.on('scroll', function () {\n      oldScrollPos = scrollPos;\n      scrollPos = $htmlbody.scrollTop();\n    }).on('hashchange', function () {\n      $window.scrollTop(oldScrollPos);\n    });\n  } // Initialize.\n  // Hide main, articles.\n\n  $main.hide();\n  $main_articles.hide(); // Initial article.\n\n  if (location.hash != '' && location.hash != '#') $window.on('load', function () {\n    $main._show(location.hash.substr(1), true);\n  });\n})(jQuery);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });