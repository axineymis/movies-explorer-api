const allowedCors = [
  'http://diplom.axineymis.nomoredomains.xyz',
  'https://diplom.axineymis.nomoredomains.xyz',
  'http://localhost:3000',
  'localhost:3001',
  'http://localhost:3001',
  'https://localhost:3001',
  'https://praktikum.tk',
  'http://praktikum.tk',
  'localhost:3000',
  'http://api.diplom.axineymis.nomoredomains.xyz',
  'https://api.diplom.axineymis.nomoredomains.xyz',
];

module.exports = (function (req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  return next();
});
