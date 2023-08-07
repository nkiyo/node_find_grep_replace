const glob = require('glob')

glob("**/*.py", function(err, files) {
  console.log(files)
}
