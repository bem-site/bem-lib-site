var data = require('bem-lib-site-data'),
    view = require('bem-lib-site-view');

module.exports = function(pathToLib) {
    if (!pathToLib) {
        console.log('Please provide path to library');
        process.exit(1);
    }

    return data(pathToLib).then(function(result) {
        return view(result.path);
    });
}
