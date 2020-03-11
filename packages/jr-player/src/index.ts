import auth from '@demo/jr-auth/src/index';
import lib from '@demo/jr-lib/src/index';

// Color mod: blue

module.exports = {
  signIn: function() {
    return auth().then(function(value) {
      return value + lib.getVersion();
    });
  }
};
