const { readdirSync, existsSync } = require(`fs`);
readdirSync(__dirname).forEach(file => {
  if (file !== `index.js`) {
    let hasContents = existsSync(`${__dirname}/${file}/index.js`);

    if (hasContents) {
      let exportName = file.split(`.`)[0];
      module.exports[exportName] = require(`./${file}`);
    }
  }
});
