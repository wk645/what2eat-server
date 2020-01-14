"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var bodyParser = _interopRequireWildcard(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express.default();

const httpServer = _http.default.createServer(app);

const defaultPort = 8000;

class ExpressServer {
  constructor() {
    app.set('appPath', `${global}client`);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use((0, _cors.default)());
    app.disable('x-powered-by');
  }

  router(routes) {
    routes(app);
    return this;
  }

  listen(port = defaultPort) {
    const httpPromise = new Promise(resolve => {
      httpServer.listen(port, () => {
        resolve();
      }).on('error', error => {
        console.error(`${error}`);
        process.exit(0);
      });
    });
    ['SIGINT', 'SIGTERM'].forEach(signal => process.on(signal, () => {
      console.log(`Shutting down server on port: ${port} (HTTP)`);
      process.exit(0);
    }));
    return Promise.all([httpPromise]).then(() => {
      const env = process.env.NODE_ENV || 'development';
      const ports = `${port} (HTTP)`;
      console.log(`Up and running in ${env} on port: ${ports}`);
      return app;
    });
  }

}

exports.default = ExpressServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiYXBwIiwiRXhwcmVzcyIsImh0dHBTZXJ2ZXIiLCJodHRwIiwiY3JlYXRlU2VydmVyIiwiZGVmYXVsdFBvcnQiLCJFeHByZXNzU2VydmVyIiwiY29uc3RydWN0b3IiLCJzZXQiLCJnbG9iYWwiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImRpc2FibGUiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJsaXN0ZW4iLCJwb3J0IiwiaHR0cFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm9uIiwiZXJyb3IiLCJjb25zb2xlIiwicHJvY2VzcyIsImV4aXQiLCJmb3JFYWNoIiwic2lnbmFsIiwibG9nIiwiYWxsIiwidGhlbiIsImVudiIsIk5PREVfRU5WIiwicG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsZ0JBQUosRUFBWjs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLGNBQUtDLFlBQUwsQ0FBa0JKLEdBQWxCLENBQW5COztBQUVBLE1BQU1LLFdBQVcsR0FBRyxJQUFwQjs7QUFFZSxNQUFNQyxhQUFOLENBQW9CO0FBQ2pDQyxFQUFBQSxXQUFXLEdBQUc7QUFDWlAsSUFBQUEsR0FBRyxDQUFDUSxHQUFKLENBQVEsU0FBUixFQUFvQixHQUFFQyxNQUFPLFFBQTdCO0FBQ0FULElBQUFBLEdBQUcsQ0FBQ1UsR0FBSixDQUFRQyxVQUFVLENBQUNDLElBQVgsRUFBUjtBQUNBWixJQUFBQSxHQUFHLENBQUNVLEdBQUosQ0FBUUMsVUFBVSxDQUFDRSxVQUFYLENBQXNCO0FBQzVCQyxNQUFBQSxRQUFRLEVBQUU7QUFEa0IsS0FBdEIsQ0FBUjtBQUdBZCxJQUFBQSxHQUFHLENBQUNVLEdBQUosQ0FBUSxvQkFBUjtBQUNBVixJQUFBQSxHQUFHLENBQUNlLE9BQUosQ0FBWSxjQUFaO0FBQ0Q7O0FBRURDLEVBQUFBLE1BQU0sQ0FBQ0MsTUFBRCxFQUFTO0FBQ2JBLElBQUFBLE1BQU0sQ0FBQ2pCLEdBQUQsQ0FBTjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVEa0IsRUFBQUEsTUFBTSxDQUFDQyxJQUFJLEdBQUdkLFdBQVIsRUFBcUI7QUFDekIsVUFBTWUsV0FBVyxHQUFHLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhO0FBQzNDcEIsTUFBQUEsVUFBVSxDQUNQZ0IsTUFESCxDQUNVQyxJQURWLEVBQ2dCLE1BQU07QUFDbEJHLFFBQUFBLE9BQU87QUFDUixPQUhILEVBSUdDLEVBSkgsQ0FJTSxPQUpOLEVBSWdCQyxLQUFELElBQVc7QUFDdEJDLFFBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFlLEdBQUVBLEtBQU0sRUFBdkI7QUFDQUUsUUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBYjtBQUNELE9BUEg7QUFRRCxLQVRtQixDQUFwQjtBQVdBLEtBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0JDLE9BQXRCLENBQStCQyxNQUFELElBQzVCSCxPQUFPLENBQUNILEVBQVIsQ0FBV00sTUFBWCxFQUFtQixNQUFNO0FBQ3ZCSixNQUFBQSxPQUFPLENBQUNLLEdBQVIsQ0FBYSxpQ0FBZ0NYLElBQUssU0FBbEQ7QUFDQU8sTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsQ0FBYjtBQUNELEtBSEQsQ0FERjtBQU9BLFdBQU9OLE9BQU8sQ0FBQ1UsR0FBUixDQUFZLENBQUNYLFdBQUQsQ0FBWixFQUEyQlksSUFBM0IsQ0FBZ0MsTUFBTTtBQUMzQyxZQUFNQyxHQUFHLEdBQUdQLE9BQU8sQ0FBQ08sR0FBUixDQUFZQyxRQUFaLElBQXdCLGFBQXBDO0FBQ0EsWUFBTUMsS0FBSyxHQUFJLEdBQUVoQixJQUFLLFNBQXRCO0FBQ0FNLE1BQUFBLE9BQU8sQ0FBQ0ssR0FBUixDQUFhLHFCQUFvQkcsR0FBSSxhQUFZRSxLQUFNLEVBQXZEO0FBQ0EsYUFBT25DLEdBQVA7QUFDRCxLQUxNLENBQVA7QUFNRDs7QUF6Q2dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBFeHByZXNzKCk7XG5jb25zdCBodHRwU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuY29uc3QgZGVmYXVsdFBvcnQgPSA4MDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzU2VydmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYXBwLnNldCgnYXBwUGF0aCcsIGAke2dsb2JhbH1jbGllbnRgKTtcbiAgICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgICBleHRlbmRlZDogdHJ1ZVxuICAgIH0pKTtcbiAgICBhcHAudXNlKGNvcnMoKSk7XG4gICAgYXBwLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpO1xuICB9XG5cbiAgcm91dGVyKHJvdXRlcykge1xuICAgIHJvdXRlcyhhcHApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgbGlzdGVuKHBvcnQgPSBkZWZhdWx0UG9ydCkge1xuICAgIGNvbnN0IGh0dHBQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGh0dHBTZXJ2ZXJcbiAgICAgICAgLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnJvcn1gKTtcbiAgICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgWydTSUdJTlQnLCAnU0lHVEVSTSddLmZvckVhY2goKHNpZ25hbCkgPT5cbiAgICAgIHByb2Nlc3Mub24oc2lnbmFsLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTaHV0dGluZyBkb3duIHNlcnZlciBvbiBwb3J0OiAke3BvcnR9IChIVFRQKWApO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2h0dHBQcm9taXNlXSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuICAgICAgY29uc3QgcG9ydHMgPSBgJHtwb3J0fSAoSFRUUClgO1xuICAgICAgY29uc29sZS5sb2coYFVwIGFuZCBydW5uaW5nIGluICR7ZW52fSBvbiBwb3J0OiAke3BvcnRzfWApO1xuICAgICAgcmV0dXJuIGFwcDtcbiAgICB9KTtcbiAgfVxufVxuIl19