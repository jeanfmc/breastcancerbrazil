var request = require("request");
var fs = require("fs");

console.log("Populacao entre 0 e 14 anos");

var fileOutputName = "bulk_razao_populacao_0_14.txt";
var id = 1120000;
var url = ""; 
var datasetname = "razao_populacao_0_14"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "https://geoservicos.ibge.gov.br/geoserver/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=CGEO:vw_per_pessde0a14anos&outputFormat=JSON";
result = {"dataset":datasetname,"idade":{min:0,max:14}}
loadData(id, url, result);


function loadData(id, url, result){
	request({
		url: url,
    	json: true
	}, function (error, response, body) {
	    if (!error && response.statusCode === 200) {
			var resultSet = body.features;
			for (var a = 0; a < resultSet.length; a++) {
					var content = JSON.parse(JSON.stringify(result));
					
					content.estado = resultSet[a].properties.UF;
					content.cidade = resultSet[a].properties.nome;
					content.ano = parseInt(resultSet[a].properties.Censo,0);
					
					content.total_populacao = parseInt(resultSet[a].properties.POP_TOT,0);
					content.total_idade = parseInt(resultSet[a].properties.PESSde0a14anos,0);
					content.regiao = resultSet[a].geometry.coordinates[0];
					
					fs.appendFileSync(fileOutputName,'{"index":{"_id":"'+id+'"}}\n',function(){});
					fs.appendFileSync(fileOutputName,JSON.stringify(content),function(){});
					fs.appendFileSync(fileOutputName,"\n",function(){});
					
					id++;
			}
	
	    }
	})
}
