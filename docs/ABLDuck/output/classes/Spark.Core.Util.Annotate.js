Ext.data.JsonP.Spark_Core_Util_Annotate({"files":[],"uses":["Progress.Lang.*","Progress.Json.ObjectModel.*","OpenEdge.Net.HTTP.MethodEnum","Spark.Core.Manager.ICatalogManager","Spark.Core.Util.FieldInfo","Spark.Core.Util.OperationEnum"],"id":"class-Spark.Core.Util.Annotate","tagname":"class","name":"Spark.Core.Util.Annotate","extends":"","author":"Dustin Grau (dugrau@progress.com)\n","comment":"\u003ch3\u003eFile:\u003c/h3\u003e\n\u003cp\u003eAnnotate\u003c/p\u003e\n\u003ch3\u003ePurpose:\u003c/h3\u003e\n\u003cp\u003eProvide annotation methods for the catalog manager\u003c/p\u003e\n\u003ch3\u003eCreated:\u003c/h3\u003e\n\u003cp\u003eFri Feb 27 16:07:15 EST 2015\u003c/p\u003e\n","icon":"class","superclasses":["Spark.Core.Util.Annotate"],"subclasses":[],"implements":[],"members":[{"id":"method-addProperty","name":"addProperty","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcClassPath","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcOperationType","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcPropertyName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcPropertyType","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcPropertyValue","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-addProperty-1","name":"addProperty","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcServiceURI","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcClassPath","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcOperationType","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcPropertyName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcPropertyType","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcPropertyValue","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeEntity","name":"describeEntity","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcEntityName","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeEntity-1","name":"describeEntity","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcEntityName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcPrimaryKeys","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeEntity-2","name":"describeEntity","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcEntityName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcPrimaryKeys","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcForeignKeys","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeFields","name":"describeFields","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcEntityName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcTableName","datatype":"CHARACTER","mode":"INPUT"},{"name":"plcFieldData","datatype":"LONGCHAR","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeFields-1","name":"describeFields","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcEntityName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcTableName","datatype":"CHARACTER","mode":"INPUT"},{"name":"poFieldData","datatype":"JsonObject","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeFields-2","name":"describeFields","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"poFieldProps","datatype":"Spark.Core.Util.FieldInfo","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeCreate","name":"describeCreate","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcServiceURI","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodName","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeRead","name":"describeRead","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcServiceURI","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodName","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeUpdate","name":"describeUpdate","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcServiceURI","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodName","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeDelete","name":"describeDelete","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcServiceURI","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodName","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeSubmit","name":"describeSubmit","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcServiceURI","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodName","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeInvoke","name":"describeInvoke","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcServiceURI","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodAlternate","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcHttpMethod","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-describeResource","name":"describeResource","owner":"Spark.Core.Util.Annotate","tagname":"method","comment":"","parameters":[{"name":"pcServiceURI","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcResourceName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodName","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMethodAlternate","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcOperationType","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcOperationVerb","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}}],"meta":{}});