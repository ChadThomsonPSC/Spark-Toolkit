Ext.data.JsonP.Spark_Core_Service_ISparkEntity({"files":[],"uses":[],"id":"class-Spark.Core.Service.ISparkEntity","tagname":"class","name":"Spark.Core.Service.ISparkEntity","extends":"Ccs.BusinessLogic.IUpdatableBusinessEntity","author":"Dustin Grau (dugrau@progress.com)\n","comment":"\u003ch3\u003eFile:\u003c/h3\u003e\n\u003cp\u003eISparkEntity\u003c/p\u003e\n\u003ch3\u003ePurpose:\u003c/h3\u003e\n\u003cp\u003eProvides standard/supporting methods for use with dynamic\ndiscovery of business logic through the CatalogManager.\u003c/p\u003e\n\u003ch3\u003eCreated:\u003c/h3\u003e\n\u003cp\u003eTue Mar 17 09:29:59 EDT 2015\u003c/p\u003e\n","icon":"interface","superclasses":["Ccs.BusinessLogic.IUpdatableBusinessEntity","Spark.Core.Service.ISparkEntity"],"subclasses":[],"implementers":["Spark.Core.Service.SparkEntity"],"members":[{"id":"property-oContextMessage","name":"oContextMessage","owner":"Spark.Core.Service.ISparkEntity","tagname":"property","datatype":"Spark.Core.Message.IContextMessage","comment":"","meta":{}},{"id":"property-LastCount","name":"LastCount","owner":"Spark.Core.Service.ISparkEntity","tagname":"property","datatype":"INT64","comment":"","meta":{}},{"id":"method-postRowFill","name":"postRowFill","owner":"Spark.Core.Service.ISparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataset","datatype":"DATASET-HANDLE","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-readData","name":"readData","owner":"Spark.Core.Service.ISparkEntity","tagname":"method","comment":"","parameters":[{"name":"filter","datatype":"CHARACTER","mode":"INPUT"},{"name":"numRecs","datatype":"INT64","mode":"OUTPUT"},{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"OUTPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-createData","name":"createData","owner":"Spark.Core.Service.ISparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-updateData","name":"updateData","owner":"Spark.Core.Service.ISparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-deleteData","name":"deleteData","owner":"Spark.Core.Service.ISparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-submitData","name":"submitData","owner":"Spark.Core.Service.ISparkEntity","tagname":"method","comment":"","parameters":[{"name":"phDataSet","datatype":"DATASET-HANDLE","mode":"INOUT"}],"returns":{"comment":""},"meta":{}}],"meta":{}});