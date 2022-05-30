// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"script.js":[function(require,module,exports) {
//Parallax function for the background logo on the desktop version of the homepage
(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  var elem = document.querySelector("#parallax"); // Magic happens here

  function parallax(e) {
    var _w = window.innerWidth / 2;

    var _h = window.innerHeight / 2;

    var _mouseX = e.clientX;
    var _mouseY = e.clientY;

    var _depth1 = "".concat(50 - (_mouseX - _w) * 0.001, "% ").concat(50 - (_mouseY - _h) * 0.01, "%");

    var _depth2 = "".concat(50 - (_mouseX - _w) * 0.001, "% ").concat(50 - (_mouseY - _h) * 0.02, "%");

    var _depth3 = "".concat(50 - (_mouseX - _w) * 0.002, "% ").concat(50 - (_mouseY - _h) * 0.06, "%");

    var x = "".concat(_depth3, ", ").concat(_depth2, ", ").concat(_depth1);
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();
/* scroll to top script-------------------------------------------------------------*/


function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}
/* dark mode-------------------------------------------------------------*/


function functionDarkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
/* animation background-------------------------------------------------------------*/
// Some random colors


var colors = ["#FCF15D", "#D97E50", "#CF65F0", "#51A6DB", "#5FFA57"];
var numBalls = 100;
var balls = [];

for (var i = 0; i < numBalls; i++) {
  var ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = "".concat(Math.floor(Math.random() * 70), "vw");
  ball.style.top = "".concat(Math.floor(Math.random() * 310), "vh");
  ball.style.transform = "scale(".concat(Math.random(), ")");
  ball.style.width = "".concat(Math.random(), "em");
  ball.style.height = ball.style.width;
  balls.push(ball);
  document.body.append(ball);
} // Keyframes


balls.forEach(function (el, i, ra) {
  var to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };
  var anim = el.animate([{
    transform: "translate(0, 0)"
  }, {
    transform: "translate(".concat(to.x, "rem, ").concat(to.y, "rem)")
  }], {
    duration: (Math.random() + 1) * 5000,
    // random duration
    direction: "alternate",
    fill: "both",
    iterations: Infinity,
    easing: "ease-in-out"
  });
});
var myText = document.getElementsByClassName("input-selector");

var _loop = function _loop(_i) {
  myText[_i].addEventListener('click', function () {
    myText[_i].style.backgroundColor = "white";
    myText[_i].style.fontSize = "16px";
    myText[_i].style.fontFamily = "Roboto";
    myText[_i].style.fontWeight = "bold";
  });
};

for (var _i = 0; _i < myText.length; _i++) {
  _loop(_i);
}

;
var myMsg = document.getElementById("message-form");
myMsg.addEventListener('click', function () {
  myMsg.style.backgroundColor = "white";
  myMsg.style.fontFamily = "Roboto";
  myMsg.style.fontSize = "16px";
  myMsg.style.fontWeight = "bold";
});
var userName = document.querySelector("#name");
var form = document.querySelector(".contact-form");

form.onsubmit = function (event) {
  event.preventDefault();
  alert("Merci ".concat(userName.value, " de nous avoir contact\xE9!"));
}; //Text animation on the student name for the mobile version of the fiche pages
// animation aline


var txtAnim1 = document.querySelector('.aline');
new Typewriter(txtAnim1, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Aline Dubois").start();
var txtAnim2 = document.querySelector('.baptiste');
new Typewriter(txtAnim2, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Baptiste Grias").start(); // animation david

var txtAnim3 = document.querySelector('.david');
new Typewriter(txtAnim3, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("David D'Amato").start(); // animation edouard

var txtAnim4 = document.querySelector('.edouard');
new Typewriter(txtAnim4, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Edouard Larroche").start(); // animation gregory

var txtAnim5 = document.querySelector('.gregory');
new Typewriter(txtAnim5, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Gregory Bouteville").start(); // animation jerome

var txtAnim6 = document.querySelector('.jerome');
new Typewriter(txtAnim6, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Jérôme Shaaban").start(); // animation julienb

var txtAnim7 = document.querySelector('.julienb');
new Typewriter(txtAnim7, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Julien Bourgineau").start(); // animation julienN

var txtAnim8 = document.querySelector('.julienN');
new Typewriter(txtAnim8, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Julien Nicolas").start(); // animation kevin

var txtAnim9 = document.querySelector('.kevin');
new Typewriter(txtAnim9, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Kevin Touyard").start(); // animation manon

var txtAnim10 = document.querySelector('.manon');
new Typewriter(txtAnim10, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Manon Josse").start(); // animation marie-anne

var txtAnim11 = document.querySelector('.marie');
new Typewriter(txtAnim11, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Marie-Anne Duvieu").start(); // animation milad

var txtAnim12 = document.querySelector('.milad');
new Typewriter(txtAnim12, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Milad Behzadi").start(); // animation pauline

var txtAnim13 = document.querySelector('.pauline');
new Typewriter(txtAnim13, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Pauline Labbé").start(); // animation pierre

var txtAnim14 = document.querySelector('.pierre');
new Typewriter(txtAnim14, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Pierre Houot").start(); // animation sarah

var txtAnim15 = document.querySelector('.sarah');
new Typewriter(txtAnim15, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Sarah	Bensouna").start(); // animation sophie

var txtAnim16 = document.querySelector('.sophie');
new Typewriter(txtAnim16, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Sophie Topart").start(); // animation sylvain

var txtAnim17 = document.querySelector('.sylvain');
new Typewriter(txtAnim17, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Sylvain Laconi").start(); // animation tom

var txtAnim18 = document.querySelector('.tom');
new Typewriter(txtAnim18, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Tom carpentier").start(); // animation violaine

var txtAnim19 = document.querySelector('.violaine');
new Typewriter(txtAnim19, {
  deleteSpeed: 10
}).changeDelay(40).typeString("Bienvenue sur ma fiche !").pauseFor(500).deleteChars(24).typeString("N'hésitez pas à me contacter ").pauseFor(500).deleteChars(29).typeString("Bonne visite 🙂").pauseFor(1000).deleteChars(15).typeString("Violaine Ernotte").start();
},{}],"../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59038" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map