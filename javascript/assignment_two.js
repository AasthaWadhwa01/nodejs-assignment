var output = [], final = [];
var fs = require('fs');
var readline = require('readline').createInterface({
    input: fs.createReadStream('../Indicators.csv')
});

readline.on('line', function(line) {           
    line.split("\n");
    var arr = line.split(",");
    
if(arr[1]==='IND' && arr[2]==="\"Birth rate")
    {
    output.push({
        year: arr[6],
       birthrate: arr[7],
       });
             
}
if(arr[1]==='IND' && arr[2]==="\"Death rate")
    {
        
    output.push({
        year: arr[6],
       deathrate: arr[7] 
});
}
});

readline.on('close', function(line) {
for(let i=0;i<output.length;i+=2)
{
    obj = {
        year: output[i].year,
        birthrate: output[i].birthrate,
        deathrate: output[i+1].deathrate
    }
    final.push(obj)
}

    fs.createWriteStream('../json/livingrate.json').write(JSON.stringify(final,null,2),'utf-8')
})