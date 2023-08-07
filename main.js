const glob = require("glob");
const fs = require("fs");

// find
glob("**/*.py", function (err, files) {
  console.log(files);
  files.forEach(function (file, index, array) {
    fs.readFile(file, "utf8", function (err, data) {
      console.log(`${file} ${index} ${data}`);

      const replaced = data.replaceAll(/(\d{3})/gi, (m, p1) => {
        return `z${p1}z`;
      });
      fs.writeFile(file, replaced, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
  });
});
