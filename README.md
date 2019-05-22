# Brazilian public data formatted to be used on Kibana

### Dataset:
All dataset are provided on the dataset folder and formatted to be used on the bulk method from Elasticsearch API.

---

#### Mortalidade - Câncer de Mama:
**Name:** mortalidade_cancer_mama \
**File:** /dataset/bulk_mortalidade_cancer_mama.txt \
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

#### Mortalidade - Câncer de Colo de Útero:
**Name: mortalidade_cancer_colo \
**File:** /dataset/bulk_mortalidade_cancer_colo.txt \
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
