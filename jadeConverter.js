var jade = require('jade'),
    fs = require('fs'),
    glob = require("glob")

// config
var folderDestinationName = "jadeConverted",
    filesPath = "**/*";

// create file folder  named : jadeConverted
var mkdirSync = function (path) {
    try {
        fs.mkdirSync("./" + folderDestinationName);
    } catch (e) {
        if (e.code != 'EEXIST') console.error("Folder exist")
    }
}();
// options is optional
glob(filesPath+".jade", {}, function (er, files) {
    console.log("Number of jade file in folder " + files.length);
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    for (var i = 0; i < files.length; i++) {
        var html = jade.renderFile('./' + files[i], {});
        fs.writeFile("./"+folderDestinationName+"/" + files[i].split('.')[0] + ".html", html, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });
    }
});
