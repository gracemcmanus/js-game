(function() {

  // https://github.com/elnarddogg/httpd-node
  var httpd = require( 'httpd-node' );

  httpd.environ( 'root' , __dirname );

  new httpd().start();

}());