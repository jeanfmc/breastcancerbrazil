var request = require("request");
var fs = require("fs");

console.log("Saude - Rastreamento exame citopatologico por municipio");

var fileOutputName = "bulk_rastreamento_25_64_citopatologico_municipio.txt";
var id = 1070000;
var url = "";
var datasetname = "rastreamento_25_64_citopatologico_municipio"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "http://api.pgi.gov.br/api/1/serie/2610.json";
result = {"dataset":datasetname,"idade":{min:25,max:64}}
loadData(id, url, result);


function loadData(id, url, result){
	request({
		url: url,
    	json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
			var resultSet = body.valores;
			for (var a = 0; a < resultSet.length; a++) {
					var content = JSON.parse(JSON.stringify(result));
					content.exame = parseInt(resultSet[a].valor,0);
					content.municipio = parseInt(resultSet[a].municipio_ibge,0);
					content.ano = parseInt(resultSet[a].ano,0);
					fs.appendFileSync(fileOutputName,'{"index":{"_id":"'+id+'"}}\n',function(){});
					fs.appendFileSync(fileOutputName,JSON.stringify(content),function(){});
					fs.appendFileSync(fileOutputName,"\n",function(){});
					
					id++;
			}
	
	    }
	})
}
		

