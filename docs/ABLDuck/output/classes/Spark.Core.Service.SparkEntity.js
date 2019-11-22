Ext.data.JsonP.Spark_Core_Service_SparkEntity({"files":[],"uses":["Progress.Json.ObjectModel.*","Ccs.BusinessLogic.*","OpenEdge.BusinessLogic.*","OpenEdge.BusinessLogic.Filter.*","OpenEdge.BusinessLogic.Query.*","Spark.Core.Manager.IClientContext","Spark.Core.Manager.ICatalogManager","Spark.Core.Manager.ILoggingManager","Spark.Core.Message.IContextMessage","Spark.Core.Util.*"],"id":"class-Spark.Core.Service.SparkEntity","tagname":"class","name":"Spark.Core.Service.SparkEntity","extends":"OpenEdge.BusinessLogic.BusinessEntity","author":"","comment":"\u003cp\u003eDefined in OpenEdge.BusinessLogic.BusinessEntity as handle to DataSet in context:\ndefine protected property ProDataSet as handle no-undo get. set.\u003c/p\u003e\n","icon":"class","superclasses":["OpenEdge.BusinessLogic.BusinessEntity","Spark.Core.Service.SparkEntity"],"subclasses":["Spark.Core.Service.DynamicEntity"],"implements":["Spark.Core.Service.ISparkEntity"],"members":[{"id":"constructor-SparkEntity1","name":"SparkEntity","owner":"Spark.Core.Service.SparkEntity","tagname":"constructor","comment":"","meta":{}},{"id":"constructor-SparkEntity2","name":"SparkEntity","owner":"Spark.Core.Service.SparkEntity","tagname":"constructor","comment":"","parameters":[{"name":"phDataset","datatype":"DATASET-HANDLE","mode":"INPUT"}],"meta":{}},{"id":"property-oClientContext","name":"oClientContext","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"Spark.Core.Manager.IClientContext","comment":"\u003cp\u003eDefined in OpenEdge.BusinessLogic.BusinessEntity as handle to DataSet in context:\ndefine protected property ProDataSet as handle no-undo get. set.\u003c/p\u003e\n","meta":{"protected":true}},{"id":"property-oLoggingManager","name":"oLoggingManager","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"Spark.Core.Manager.ILoggingManager","comment":"","meta":{"protected":true}},{"id":"property-oCatalogManager","name":"oCatalogManager","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"Spark.Core.Manager.ICatalogManager","comment":"","meta":{"protected":true}},{"id":"property-oContextMessage","name":"oContextMessage","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"Spark.Core.Message.IContextMessage","comment":"","meta":{}},{"id":"property-LastCount","name":"LastCount","owner":"Spark.Core.Service.SparkEntity","tagname":"property","datatype":"INT64","comment":"","meta":{}},{"id":"method-getClassName","name":"getClassName","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","returns":{"datatype":"CHARACTER","comment":""},"meta":{"protected":true,"final":true}},{"id":"method-getFilterObject","name":"getFilterObject","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcRawFilter","datatype":"LONGCHAR","mode":"INPUT"}],"returns":{"datatype":"JsonObject","comment":""},"meta":{"protected":true}},{"id":"method-filterData","name":"filterData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcFilter","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"INT64","comment":""},"meta":{"protected":true}},{"id":"method-getFilterOnly","name":"getFilterOnly","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"poFilter","datatype":"JsonObject","mode":"INPUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{"protected":true}},{"id":"method-getRecCount","name":"getRecCount","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcRawFilter","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"INT64","comment":""},"meta":{"protected":true}},{"id":"method-getRecCount-1","name":"getRecCount","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcFilter","datatype":"CHARACTER","mode":"INPUT"},{"name":"phTable","datatype":"HANDLE","mode":"INPUT"}],"returns":{"datatype":"INT64","comment":""},"meta":{"protected":true}},{"id":"method-preCommitLogic","name":"preCommitLogic","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcAction","datatype":"CHARACTER","mode":"INPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"protected":true}},{"id":"method-postCommitLogic","name":"postCommitLogic","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcAction","datatype":"CHARACTER","mode":"INPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"protected":true}},{"id":"method-postFetchRecord","name":"postFetchRecord","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","returns":{"comment":""},"meta":{"protected":true}},{"id":"method-validateData","name":"validateData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"pcAction","datatype":"CHARACTER","mode":"INPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{"protected":true}},{"id":"method-initialize","name":"initialize","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","returns":{"comment":""},"meta":{}},{"id":"method-dispose","name":"dispose","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","returns":{"comment":""},"meta":{}},{"id":"method-getDataset","name":"getDataset","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataset","datatype":"DATASET-HANDLE","mode":"OUTPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-postRowFill","name":"postRowFill","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataset","datatype":"DATASET-HANDLE","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-readData","name":"readData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"filter","datatype":"CHARACTER","mode":"INPUT"},{"name":"numRecs","datatype":"INT64","mode":"OUTPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"OUTPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-createData","name":"createData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"override":true}},{"id":"method-updateData","name":"updateData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"override":true}},{"id":"method-deleteData","name":"deleteData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{"override":true}},{"id":"method-submitData","name":"submitData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-getData","name":"getData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"poRequest","datatype":"IGetDataRequest","mode":"INPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"OUTPUT"}],"returns":{"datatype":"IGetDataResponse","comment":""},"meta":{}},{"id":"method-getResultCount","name":"getResultCount","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"poRequest","datatype":"IGetDataRequest","mode":"INPUT"}],"returns":{"datatype":"IGetResultCountResponse","comment":""},"meta":{}},{"id":"method-updateData-1","name":"updateData","owner":"Spark.Core.Service.SparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"},{"name":"poUpdateDataRequest","datatype":"IUpdateDataRequest","mode":"INPUT"}],"returns":{"datatype":"Progress.Lang.Object","comment":""},"meta":{}}],"meta":{"abstract":true}});