Ext.data.JsonP.Spark_Core_Util_Serialize({"files":[],"uses":["Progress.IO.*","Progress.Lang.*","Spark.Core.Util.LongcharInputStream","Spark.Core.Util.LongcharOutputStream"],"id":"class-Spark.Core.Util.Serialize","tagname":"class","name":"Spark.Core.Util.Serialize","extends":"","author":"","comment":"\u003cp\u003eA static class with serialization helper methods\u003c/p\u003e\n","icon":"class","superclasses":["Spark.Core.Util.Serialize"],"subclasses":[],"implements":[],"members":[{"id":"method-serializeClassToBinary","name":"serializeClassToBinary","owner":"Spark.Core.Util.Serialize","tagname":"method","comment":"","parameters":[{"name":"poClassObj","datatype":"Progress.Lang.Object","mode":"INPUT"},{"name":"pcLongData","datatype":"LONGCHAR","mode":"OUTPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-serializeClassToBinary-1","name":"serializeClassToBinary","owner":"Spark.Core.Util.Serialize","tagname":"method","comment":"","parameters":[{"name":"poClassObj","datatype":"Progress.Lang.Object","mode":"INPUT"},{"name":"pcFilePath","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-serializeClassToJson","name":"serializeClassToJson","owner":"Spark.Core.Util.Serialize","tagname":"method","comment":"","parameters":[{"name":"poClassObj","datatype":"Progress.Lang.Object","mode":"INPUT"},{"name":"pcFilePath","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-serializeClassToJson-1","name":"serializeClassToJson","owner":"Spark.Core.Util.Serialize","tagname":"method","comment":"","parameters":[{"name":"poClassObj","datatype":"Progress.Lang.Object","mode":"INPUT"},{"name":"pcLongData","datatype":"LONGCHAR","mode":"OUTPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-deserializeClassFromBinary","name":"deserializeClassFromBinary","owner":"Spark.Core.Util.Serialize","tagname":"method","comment":"","parameters":[{"name":"pcLongData","datatype":"LONGCHAR","mode":"INPUT"}],"returns":{"datatype":"Progress.Lang.Object","comment":""},"meta":{}},{"id":"method-deserializeClassFromBinary-1","name":"deserializeClassFromBinary","owner":"Spark.Core.Util.Serialize","tagname":"method","comment":"","parameters":[{"name":"pcFilePath","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"Progress.Lang.Object","comment":""},"meta":{}},{"id":"method-deserializeClassFromJson","name":"deserializeClassFromJson","owner":"Spark.Core.Util.Serialize","tagname":"method","comment":"","parameters":[{"name":"pcLongData","datatype":"LONGCHAR","mode":"INPUT"}],"returns":{"datatype":"Progress.Lang.Object","comment":""},"meta":{}},{"id":"method-deserializeClassFromJson-1","name":"deserializeClassFromJson","owner":"Spark.Core.Util.Serialize","tagname":"method","comment":"","parameters":[{"name":"pcFilePath","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"Progress.Lang.Object","comment":""},"meta":{}}],"meta":{}});