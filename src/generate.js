const testFolder = './src/';
const fs = require('fs');

try {
  if (fs.existsSync('./src/index.js')) {
    fs.unlinkSync('./src/index.js');
  }
} catch (err) {
  console.error(err);
}

fs.readdirSync(testFolder).forEach(file => {
  const imp = file.split('.')[0];
  if (file.includes('.css')) {
    const write = `import ${imp} from './${file}' \n`;
    fs.appendFileSync('./src/index.js', write, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('Auto Imported is done.');
    });
  }
});
