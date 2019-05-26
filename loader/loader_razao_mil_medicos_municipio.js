var request = require("request");
var fs = require("fs");

console.log("Razao 1000 medicos por municipio");

var fileOutputName = "bulk_razao_mil_medicos_municipio.txt";
var id = 1100000;
var url = ""; 
var datasetname = "razao_mil_medicos_municipio"
var result = {};

//create file
fs.writeFileSync(fileOutputName,"", function(){});

url = "https://geoservicos.ibge.gov.br/geoserver/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=CGEO:vw_razao_medicos_1000_hab&outputFormat=JSON";
result = {"dataset":datasetname}
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
					
					content.total_medicos = parseInt(resultSet[a].properties.num_medicos,0);
					content.estimativa = parseInt(resultSet[a].properties.Pop_est_2009,0);
					content.medico_mil_habitante = parseFloat(resultSet[a].properties.razao_medicos_1000_hab);
					
					fs.appendFileSync(fileOutputName,'{"index":{"_id":"'+id+'"}}\n',function(){});
					fs.appendFileSync(fileOutputName,JSON.stringify(content),function(){});
					fs.appendFileSync(fileOutputName,"\n",function(){});
					
					id++;
			}
	
	    }
	})
}
