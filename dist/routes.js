"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = _interopRequireDefault(require("./api/controllers/cuisines/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  const baseURL = '/api/what2eat/v1';
  app.use(`${baseURL}/cuisines`, _router.default);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVzIiwiYXBwIiwiYmFzZVVSTCIsInVzZSIsImN1aXNpbmVzUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQjtBQUNsQyxRQUFNQyxPQUFPLEdBQUcsa0JBQWhCO0FBRUFELEVBQUFBLEdBQUcsQ0FBQ0UsR0FBSixDQUFTLEdBQUVELE9BQVEsV0FBbkIsRUFBK0JFLGVBQS9CO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3Vpc2luZXNSb3V0ZXIgZnJvbSAnLi9hcGkvY29udHJvbGxlcnMvY3Vpc2luZXMvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVzKGFwcCkge1xuICBjb25zdCBiYXNlVVJMID0gJy9hcGkvd2hhdDJlYXQvdjEnO1xuXG4gIGFwcC51c2UoYCR7YmFzZVVSTH0vY3Vpc2luZXNgLCBjdWlzaW5lc1JvdXRlcik7XG59Il19