"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ZomatoService {
  constructor() {
    this._zomato = _axios.default.create({
      baseURL: 'https://developers.zomato.com/api/v2.1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'user-key': '813160413cfbb14fdc41ae31ab436805'
      }
    });
  }

  async getCuisines(cityId) {
    try {
      const result = await this._zomato.get(`/cuisines?city_id=${cityId}`);

      if (result && result.data) {
        console.log('cuisines data', result.data);
      }

      return null;
    } catch (error) {
      console.log('error getting cuisines', error.response.data);
    }
  }

}

var _default = new ZomatoService();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvaW50ZWdyYXRpb25zL1pvbWF0b1NlcnZpY2UuanMiXSwibmFtZXMiOlsiWm9tYXRvU2VydmljZSIsImNvbnN0cnVjdG9yIiwiX3pvbWF0byIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJBY2NlcHQiLCJnZXRDdWlzaW5lcyIsImNpdHlJZCIsInJlc3VsdCIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUNsQkMsRUFBQUEsV0FBVyxHQUFHO0FBQ1osU0FBS0MsT0FBTCxHQUFlQyxlQUFNQyxNQUFOLENBQWE7QUFDMUJDLE1BQUFBLE9BQU8sRUFBRSx3Q0FEaUI7QUFFMUJDLE1BQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQixrQkFEVDtBQUVQQyxRQUFBQSxNQUFNLEVBQUUsa0JBRkQ7QUFHUCxvQkFBWTtBQUhMO0FBRmlCLEtBQWIsQ0FBZjtBQVFEOztBQUVELFFBQU1DLFdBQU4sQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3hCLFFBQUk7QUFDRixZQUFNQyxNQUFNLEdBQUcsTUFBTSxLQUFLUixPQUFMLENBQWFTLEdBQWIsQ0FBa0IscUJBQW9CRixNQUFPLEVBQTdDLENBQXJCOztBQUVBLFVBQUlDLE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxJQUFyQixFQUEyQjtBQUN6QkMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkosTUFBTSxDQUFDRSxJQUFwQztBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNELEtBUkQsQ0FRRSxPQUFPRyxLQUFQLEVBQWM7QUFDZEYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBc0NDLEtBQUssQ0FBQ0MsUUFBTixDQUFlSixJQUFyRDtBQUNEO0FBQ0Y7O0FBeEJpQjs7ZUEyQkwsSUFBSVosYUFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgWm9tYXRvU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3pvbWF0byA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLnpvbWF0by5jb20vYXBpL3YyLjEnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3VzZXIta2V5JzogJzgxMzE2MDQxM2NmYmIxNGZkYzQxYWUzMWFiNDM2ODA1J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0Q3Vpc2luZXMoY2l0eUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3pvbWF0by5nZXQoYC9jdWlzaW5lcz9jaXR5X2lkPSR7Y2l0eUlkfWApO1xuXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5kYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjdWlzaW5lcyBkYXRhJywgcmVzdWx0LmRhdGEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGdldHRpbmcgY3Vpc2luZXMnLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFpvbWF0b1NlcnZpY2UoKTtcbiJdfQ==