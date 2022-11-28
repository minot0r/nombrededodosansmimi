"use strict";

var _utils = require("./utils.js");

var _hearts = require("./hearts.js");

var _floating = _interopRequireDefault(require("./floating.js"));

var _confettiMin = _interopRequireDefault(require("./confetti.min.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

document.addEventListener('DOMContentLoaded', function _callee() {
  var overlay, _ref, _ref2, days, event, daysContainer, _loop, i, confetti, text, subtext, credits, hearts;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          overlay = document.querySelector('.loading-overlay');
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _utils.daysUntilNextDodo)());

        case 3:
          _ref = _context2.sent;
          _ref2 = _slicedToArray(_ref, 2);
          days = _ref2[0];
          event = _ref2[1];
          overlay.classList.add('hidden');
          (0, _utils.loadCarousel)();
          _context2.next = 11;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
          }));

        case 11:
          daysContainer = document.querySelector('.days'); // animate days decrement from 100 to days

          _loop = function _loop(i) {
            return regeneratorRuntime.async(function _loop$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    daysContainer.innerHTML = i;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(new Promise(function (resolve) {
                      return setTimeout(resolve, 50 + (100 - i) - i);
                    }));

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          i = 100;

        case 14:
          if (!(i >= days)) {
            _context2.next = 20;
            break;
          }

          _context2.next = 17;
          return regeneratorRuntime.awrap(_loop(i));

        case 17:
          i--;
          _context2.next = 14;
          break;

        case 20:
          confetti = new _confettiMin["default"]("days");
          confetti.draw();
          text = document.querySelector('.text');
          text.classList.add('visible');
          subtext = document.querySelector('.subtext');
          subtext.innerHTML = event;
          subtext.classList.add('visible');
          credits = document.querySelector('.credits');
          credits.classList.add('visible');
          hearts = ["💖", "💘", "💓", "💕", "💛", "💙", "💜", "💚", "💗", "💝", "💞", "💟"];
          (0, _floating["default"])({
            content: hearts[Math.floor(Math.random() * hearts.length)],
            number: days,
            size: 2
          });

        case 31:
        case "end":
          return _context2.stop();
      }
    }
  });
});