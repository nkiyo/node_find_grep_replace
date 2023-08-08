const glob = require("glob");
const fs = require("fs");

// find
glob("**/*.py", function (err: any, files: string[]) {
  console.log(files);
  files.forEach(function (file, index, array) {
    fs.readFile(file, "utf8", function (err: any, data: string) {
      console.log(`${file} ${index} ${data}`);

      const replaced = data.replaceAll(/(\d{3})/gi, (m: string, p1: string) => {
        console.log(`${typeof p1}`);
        return `${parseInt(p1, 10) + 1}`;
      });
      fs.writeFile(file, replaced, "utf8", function (err: any) {
        if (err) return console.log(err);
      });
    });
  });
});
