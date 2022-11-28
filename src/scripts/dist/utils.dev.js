"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCarousel = exports.daysUntilNextDodo = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ITEM_LENGTH = 11;

var fetchNextDodo = function fetchNextDodo() {
  var response, data;
  return regeneratorRuntime.async(function fetchNextDodo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://faas-lon1-917a94a7.doserverless.co/api/v1/web/fn-e61fc1e4-1801-4bd5-8c0c-92857d566040/notion/fetch"));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", [data.next, data.event]);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var daysUntilNextDodo = function daysUntilNextDodo() {
  var _ref, _ref2, nextDodo, event, today, nextDodoDate, diffTime, diffDays;

  return regeneratorRuntime.async(function daysUntilNextDodo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchNextDodo());

        case 2:
          _ref = _context2.sent;
          _ref2 = _slicedToArray(_ref, 2);
          nextDodo = _ref2[0];
          event = _ref2[1];
          today = new Date();
          nextDodoDate = new Date(nextDodo);
          diffTime = Math.abs(nextDodoDate - today);
          diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return _context2.abrupt("return", [diffDays, event]);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.daysUntilNextDodo = daysUntilNextDodo;

var loadCarousel = function loadCarousel() {
  var carrouselItemsContainer = document.querySelector('.carrousel-items');
  var carrouselItems = getItems();
  var domItems = [];
  carrouselItems.forEach(function (item) {
    var img = document.createElement('img');
    img.src = item;
    img.classList.add('carrousel-item');
    carrouselItemsContainer.appendChild(img);
    domItems.push(img);
  });
  var i = Math.floor(Math.random() * domItems.length);
  domItems[i].classList.add('visible');
  var beforeI = 0;
  setInterval(function () {
    domItems[beforeI].classList.remove('after');
    domItems[i].classList.remove('visible'); // get random number between 0 and 10

    beforeI = i;
    domItems[i].classList.add('after');
    i = (i + 1) % domItems.length;
    domItems[i].classList.add('visible');
  }, 3000 + 10000 * Math.random());
};

exports.loadCarousel = loadCarousel;

var getItems = function getItems() {
  var items = [];

  for (var i = 0; i < ITEM_LENGTH; i++) {
    items.push("./assets/images/".concat(i + 1, ".jpg"));
  }

  return items;
};