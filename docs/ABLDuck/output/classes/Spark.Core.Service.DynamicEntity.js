Ext.data.JsonP.Spark_Core_Service_DynamicEntity({"files":[],"uses":["Progress.Json.ObjectModel.*","Spark.Core.Util.FormatTools"],"id":"class-Spark.Core.Service.DynamicEntity","tagname":"class","name":"Spark.Core.Service.DynamicEntity","extends":"Spark.Core.Service.SparkEntity","author":"","comment":"\u003cp\u003eDefined in OpenEdge.BusinessLogic.BusinessEntity as handle to DataSet in context:\ndefine protected property ProDataSet as handle no-undo get. set.\u003c/p\u003e\n","icon":"class","superclasses":["OpenEdge.BusinessLogic.BusinessEntity","Spark.Core.Service.SparkEntity","Spark.Core.Service.DynamicEntity"],"subclasses":[],"implements":["Spark.Core.Service.IDynamicEntity"],"members":[{"id":"property-entityName","name":"entityName","owner":"Spark.Core.Service.DynamicEntity","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-serviceURI","name":"serviceURI","owner":"Spark.Core.Service.DynamicEntity","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"abstract":true}},{"id":"property-resourceName","name":"resourceName","owner":"Spark.Core.Service.DynamicEntity","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"abstract":true}},{"id":"property-primaryKeys","name":"primaryKeys","owner":"Spark.Core.Service.DynamicEntity","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"abstract":true}},{"id":"property-foreignKeys","name":"foreignKeys","owner":"Spark.Core.Service.DynamicEntity","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"abstract":true}},{"id":"property-mappingType","name":"mappingType","owner":"Spark.Core.Service.DynamicEntity","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"abstract":true}},{"id":"property-capabilities","name":"capabilities","owner":"Spark.Core.Service.DynamicEntity","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"abstract":true}},{"id":"property-operations","name":"operations","owner":"Spark.Core.Service.DynamicEntity","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"abstract":true}},{"id":"constructor-Spark_Core_Service_SparkEntity_SparkEntity1","name":"SparkEntity","owner":"Spark.Core.Service.SparkEntity","tagname":"constructor","comment":"","meta":{}},{"id":"constructor-Spark_Core_Service_SparkEntity_SparkEntity2","name":"SparkEntity","owner":"Spark.Core.Service.SparkEntity","tagname":"constructor","comment":"","parameters":[{"name":"phDataset","datatype":"DATASET-HANDLE","mode":"INPUT"}],"meta":{}},{"id":"property-Spark_Core_Service_SparkEntity_oClientContext","name":"oClientContext","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"IClientContext","comment":"\u003cp\u003eDefined in OpenEdge.BusinessLogic.BusinessEntity as handle to DataSet in context:\ndefine protected property ProDataSet as handle no-undo get. set.\u003c/p\u003e\n","meta":{"protected":true}},{"id":"property-Spark_Core_Service_SparkEntity_oLoggingManager","name":"oLoggingManager","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"ILoggingManager","comment":"","meta":{"protected":true}},{"id":"property-Spark_Core_Service_SparkEntity_oCatalogManager","name":"oCatalogManager","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"ICatalogManager","comment":"","meta":{"protected":true}},{"id":"property-Spark_Core_Service_SparkEntity_oContextMessage","name":"oContextMessage","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"IContextMessage","comment":"","meta":{}},{"id":"property-Spark_Core_Service_SparkEntity_LastCount","name":"LastCount","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"INT64","comment":"","meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_getClassName","name":"getClassName","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","returns":{"datatype":"CHARACTER","comment":""},"meta":{"protected":true,"final":true}},{"id":"method-Spark_Core_Service_SparkEntity_getFilterObject","name":"getFilterObject","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcRawFilter","datatype":"LONGCHAR","mode":"INPUT"}],"returns":{"datatype":"JsonObject","comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_filterData","name":"filterData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcFilter","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"INT64","comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_getFilterOnly","name":"getFilterOnly","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"poFilter","datatype":"JsonObject","mode":"INPUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_getRecCount","name":"getRecCount","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcRawFilter","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"INT64","comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_getRecCount-1","name":"getRecCount","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcFilter","datatype":"CHARACTER","mode":"INPUT"},{"name":"phTable","datatype":"HANDLE","mode":"INPUT"}],"returns":{"datatype":"INT64","comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_preCommitLogic","name":"preCommitLogic","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcAction","datatype":"CHARACTER","mode":"INPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_postCommitLogic","name":"postCommitLogic","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcAction","datatype":"CHARACTER","mode":"INPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_postFetchRecord","name":"postFetchRecord","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","returns":{"comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_validateData","name":"validateData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcAction","datatype":"CHARACTER","mode":"INPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{"protected":true}},{"id":"method-Spark_Core_Service_SparkEntity_initialize","name":"initialize","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","returns":{"comment":""},"meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_dispose","name":"dispose","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","returns":{"comment":""},"meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_getDataset","name":"getDataset","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataset","datatype":"DATASET-HANDLE","mode":"OUTPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_postRowFill","name":"postRowFill","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataset","datatype":"DATASET-HANDLE","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_readData","name":"readData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"filter","datatype":"CHARACTER","mode":"INPUT"},{"name":"numRecs","datatype":"INT64","mode":"OUTPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"OUTPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_createData","name":"createData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"override":true}},{"id":"method-Spark_Core_Service_SparkEntity_updateData","name":"updateData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"override":true}},{"id":"method-Spark_Core_Service_SparkEntity_deleteData","name":"deleteData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"override":true}},{"id":"method-Spark_Core_Service_SparkEntity_submitData","name":"submitData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_getData","name":"getData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"poRequest","datatype":"IGetDataRequest","mode":"INPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"OUTPUT"}],"returns":{"datatype":"IGetDataResponse","comment":""},"meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_getResultCount","name":"getResultCount","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"poRequest","datatype":"IGetDataRequest","mode":"INPUT"}],"returns":{"datatype":"IGetResultCountResponse","comment":""},"meta":{}},{"id":"method-Spark_Core_Service_SparkEntity_updateData-1","name":"updateData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"},{"name":"poUpdateDataRequest","datatype":"IUpdateDataRequest","mode":"INPUT"}],"returns":{"datatype":"Progress.Lang.Object","comment":""},"meta":{}}],"meta":{"abstract":true}});