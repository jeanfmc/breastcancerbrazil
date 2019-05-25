var request = require("request");
var fs = require("fs");

console.log("Saude - Exame citopatologico por estado de mulheres entre 50 e 69");

var fileOutputName = "bulk_citopatologico_50_69_estado.txt";
var id = 105000;
var url = "";
var datasetname = "citopatologico_estado_50_69"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "http://sage.saude.gov.br/graficos/saudeMulher/examesCitopatologicos2011.php?output=json";
result = {"dataset":datasetname, "ano":2011,"idade":{min:50,max:69}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/saudeMulher/examesCitopatologicos2012.php?output=json";
result = {"dataset":datasetname, "ano":2012,"idade":{min:50,max:69}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/saudeMulher/examesCitopatologicos2013.php?output=json";
result = {"dataset":datasetname, "ano":2013,"idade":{min:50,max:69}}
mortalidadeCancer(id, url, result);

url = "http://sage.saude.gov.br/graficos/saudeMulher/examesCitopatologicos2014.php?output=json";
result = {"dataset":datasetname, "ano":2014,"idade":{min:50,max:69}}
mortalidadeCancer(id, url, result);

function mortalidadeCancer(id, url, result){
	request({
		url: url,
    	json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
			var resultSet = body.resultset;
			for (var a = 0; a < resultSet.length; a++) {
				var content = JSON.parse(JSON.stringify(result));
				
				content.estado = resultSet[a][0];
				content.exame_total = parseInt(resultSet[a][1],0);
				content.exame_idade = parseInt(resultSet[a][2],0);
					
				fs.appendFileSync(fileOutputName,'{"index":{"_id":"'+id+'"}}\n',function(){});
				fs.appendFileSync(fileOutputName,JSON.stringify(content),function(){});
				fs.appendFileSync(fileOutputName,"\n",function(){});
				
				id++;
			}
	
	    }
	})
}
