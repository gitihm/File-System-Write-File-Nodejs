var fs = require('fs');
fs.mkdir('test',function(){
    fs.writeFileSync('./test/readme.txt','hello guy!');
});
