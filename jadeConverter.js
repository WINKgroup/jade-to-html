var jade = require('jade'),
    fs = require('fs'),
    glob = require("glob")

// config
var folderName = "jadeConverted";

// create file folder  named : jadeConverted
var mkdirSync = function (path) {
    try {
        fs.mkdirSync("./" + folderName);
    } catch (e) {
        if (e.code != 'EEXIST') console.error("Folder exist")
    }
}();
// options is optional
glob("**/*.jade", {}, function (er, files) {
    console.log("Number of jade file in folder " + files.length);
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    for (var i = 0; i < files.length; i++) {
        console.log("files[i", files[i])
        var html = jade.renderFile('./' + files[i], {});
        fs.writeFile("./jadeConverted/" + files[i].split('.')[0] + ".html", html, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("The file" + files[i].split('.')[0] + ".html, " + " was saved!");
            }
        });
    }
});