var request = require("request");
var fs = require("fs");

console.log("Populacao entre 60 e 99 anos");

var fileOutputName = "bulk_razao_populacao_60_99.txt";
var id = 1130000;
var url = ""; 
var datasetname = "razao_populacao_60_mais"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "https://geoservicos.ibge.gov.br/geoserver/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=CGEO:vw_per_pess60anosoumais&outputFormat=JSON";
result = {"dataset":datasetname,"idade":{min:60,max:99}}
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
					content.total_idade = parseInt(resultSet[a].properties.PESS60anosOUmais,0);
					
					fs.appendFileSync(fileOutputName,'{"index":{"_id":"'+id+'"}}\n',function(){});
					fs.appendFileSync(fileOutputName,JSON.stringify(content),function(){});
					fs.appendFileSync(fileOutputName,"\n",function(){});
					
					id++;
			}
	
	    }
	})
}
