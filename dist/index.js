"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _server = _interopRequireDefault(require("./server"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const path = require('path');
// const app = express();
const port = process.env.PORT || '8000'; // app.get('/', (req, res) => {
//   res.status(200).send('LANDING PAGE');
// });
// app.get('/cuisines', (req, res) => {
//   res.status(200).send('DIFF PAGE');
// });
// app.listen(port, () => {
//   console.log(`Listening to requests on http://localhost:${port}`);
// });

var _default = new _server.default().router(_routes.default).listen(port);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJTZXJ2ZXIiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFrQkE7O0FBQ0E7Ozs7QUFsQkE7QUFFQTtBQUNBLE1BQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosSUFBb0IsTUFBakMsQyxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7ZUFLZSxJQUFJQyxlQUFKLEdBQ1pDLE1BRFksQ0FDTEMsZUFESyxFQUVaQyxNQUZZLENBRUxQLElBRkssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuLy8gY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuLy8gY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgJzgwMDAnO1xuXG4vLyBhcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4vLyAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCdMQU5ESU5HIFBBR0UnKTtcbi8vIH0pO1xuXG4vLyBhcHAuZ2V0KCcvY3Vpc2luZXMnLCAocmVxLCByZXMpID0+IHtcbi8vICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJ0RJRkYgUEFHRScpO1xuLy8gfSk7XG5cbi8vIGFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIHRvIHJlcXVlc3RzIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApO1xuLy8gfSk7XG5cbmltcG9ydCBTZXJ2ZXIgZnJvbSAnLi9zZXJ2ZXInO1xuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2ZXIoKVxuICAucm91dGVyKHJvdXRlcylcbiAgLmxpc3Rlbihwb3J0KTtcbiJdfQ==