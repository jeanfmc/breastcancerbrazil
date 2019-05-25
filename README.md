# Brazilian public data formatted to be used on Kibana

### Dataset:
All dataset are provided on the dataset folder and formatted to be used on the bulk method from Elasticsearch API.

---

#### Mortalidade de Câncer de Mama:
**Name:** mortalidade_cancer_mama \
**File:** /dataset/loaded/bulk_mortalidade_cancer_mama.txt \
**Loader:** /loader/loader_mortalidade_cancer_mama.js \
**Source:** http://dados.gov.br/dataset/mspainelsage_59 \
**Structure:**
```javascript 
{
  "dataset" : String,
  "grupo" : String,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "ano" : Number,
  "mortes" : Number,
  "etnia" : String 
}
```

---

#### Mortalidade de Câncer de Colo de Útero:
**Name:** mortalidade_cancer_colo \
**File:** /dataset/loaded/bulk_mortalidade_cancer_colo.txt \
**Loader:** /loader/loader_mortalidade_cancer_colo.js \
**Source:** http://dados.gov.br/dataset/mspainelsage_59 \
**Structure:**
```javascript 
{
  "dataset" : String,
  "grupo" : String,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "ano" : Number,
  "mortes" : Number,
  "etnia" : String 
}
```

---

#### UPAs em funcionamento
**Name:** upa_funcionamento \
**File:** /dataset/loaded/bulk_upa_funcionamento.txt \
**Loader:** /loader/loader_upa_funcionamento.js \
**Source:** http://dados.gov.br/dataset/upa_funcionamento_cnes \
**Structure:**
```javascript 
{
  "dataset" : String,
  "nome" : String,
  "endereco" : {
  	"logradouro" : String,
  	"numero" : String,
  	"bairro" : String,
  	"cidade" : String,
  	"uf" : String,
  	"cep" : String
  },
  "telefone" : String,
  "porte" : String,
  "data_funcionamento" : Date,
  "location" : {
    "lat" : Float,
    "lon" : Float
  } 
}
```

---

#### Razão entre exames de mamografia em mulheres de 50 a 69 anos e população feminina da mesma faixa etária e local de residência
**Name:** razao_50_69_mamografia_regiao \
**File:** /dataset/loaded/bulk_razao_50_69_mamografia_regiao.txt \
**Loader:** /loader/loader_razao_50_69_mamografia_regiao.js \
**Source:** http://dados.gov.br/dataset/wms_idsus_nt_rzmamogr \
**Structure:**
```javascript 
{
  "dataset" : String,
  "cidade" : String,
  "nota" : Float,
  "data" : Date,
  "regiao" : Geometry
}
```

---

#### Relação de mamografias em mulheres entre 50 e 69 anos por estado
**Name:** exame_50_69_mamografia_estado \
**File:** /dataset/loaded/bulk_exame_50_69_mamografia_estado.txt \
**Loader:** /loader/loader_exame_50_69_mamografia_estado.js \
**Source:** http://dados.gov.br/dataset/mspainelsage_43 \
**Structure:**
```javascript 
{
  "dataset" : String,
  "nome" : String,
  "ano" : Number,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "estado" : String,
  "exame_total_" : Number,
  "exame_idade" : Number
}
```

---

#### Relação de exames citopatológicos em mulheres entre 25 e 64 anos por estado
**Name:** exame_25_64_citopatologico_estado \
**File:** /dataset/loaded/bulk_exame_25_64_citopatologico_estado.txt \
**Loader:** /loader/loader_exame_25_64_citopatologico_estado.js \
**Source:** http://dados.gov.br/dataset/mspainelsage_43 \
**Structure:**
```javascript 
{
  "dataset" : String,
  "nome" : String,
  "ano" : Number,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "estado" : String,
  "exame_total_" : Number,
  "exame_idade" : Number
}
```

---

####  Relação entre exames citopatológicos totais e exames em mulheres entre 25 e 64 anos por município
**Name:** rastreamento_25_64_citopatologico_municipio \
**File:** /dataset/loaded/bulk_rastreamento_25_64_citopatologico_municipio.txt \
**Loader:** /loader/loader_rastreamento_25_64_citopatologico_municipio.js \
**Source:** http://dados.gov.br/dataset/combate-ao-cancer-de-mama-e-colo-de-utero \
**Structure:**
```javascript 
{
  "dataset" : String,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "exame" : Number,
  "municipio" : String,
  "ano" : Number
}
```

---

####  Relação entre mamografias totais e exames em mulheres entre 50 e 69 anos por município
**Name:** rastreamento_50_69_mamografia_municipio \
**File:** /dataset/loaded/bulk_rastreamento_50_69_mamografia_municipio.txt \
**Loader:** /loader/loader_rastreamento_50_69_mamografia_municipio.js \
**Source:** http://dados.gov.br/dataset/combate-ao-cancer-de-mama-e-colo-de-utero \
**Structure:**
```javascript 
{
  "dataset" : String,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "exame" : Number,
  "municipio" : String,
  "ano" : Number
}
```

---

#### Ocorrências entre homens e mulheres por município
**Name:** razao_sexo_municipio \
**File:** /dataset/loaded/bulk_razao_sexo_municipio.txt \
**Loader:** /loader/loader_razao_sexo_municipio.js \
**Source:** http://dados.gov.br/dataset/cgeo_vw_razao_de_sexo \
**Structure:**
```javascript 
{
  "dataset" : String,
  "estado" : String,
  "cidade" : String,
  "total_homem" : Number,
  "total_mulher" : Number,
  "total" : Number,
  "regiao" : Geometry
}
```

---

#### Postos de trabalho médicos por mil habitantes por município
**Name:** razao_mil_medicos_municipio \
**File:** /dataset/loaded/bulk_razao_mil_medicos_municipio.txt \
**Loader:** /loader/loader_razao_mil_medicos_municipio.js \
**Source:** http://dados.gov.br/dataset/cgeo_vw_razao_medicos_1000_hab \
**Structure:**
```javascript 
{
  "dataset" : String,
  "estado" : String,
  "cidade" : String,
  "total_medicos" : Number,
  "estimativa" : Number,
  "medico_mil_habitante" : Float,
  "regiao" : Geometry
}
```

---

#### Habitantes entre de 15 a 49 anos de idade - relação por sexo
**Name:** razao_pupulacao_15_49_sexo \
**File:** /dataset/loaded/bulk_razao_pupulacao_15_49_sexo.txt \
**Loader:** /loader/loader_razao_pupulacao_15_49_sexo.js \
**Source:** http://dados.gov.br/dataset/cgeo_vw_per_mulheres_15a49anos \
**Structure:**
```javascript 
{
  "dataset" : String,
  "idade" : {
    "min" : Number,
    "max" : Number
  },
  "estado" : String,
  "cidade" : String,
  "total_medicos" : Number,
  "estimativa" : Number,
  "medico_mil_habitante" : Float,
  "regiao" : Geometry
}
```

