var localtunnel = require("localtunnel");

localtunnel(5000, { subdomain: "ackkaqsdhfcwiacdbhaksdhjb" }, function(
  err,
  tunnel
) {
  console.log("localtunnel listening on " + tunnel.url);
});
