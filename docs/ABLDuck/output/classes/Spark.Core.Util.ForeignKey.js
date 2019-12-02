Ext.data.JsonP.Spark_Core_Util_ForeignKey({"files":[],"uses":["Progress.Lang.*","Progress.Json.ObjectModel.*"],"id":"class-Spark.Core.Util.ForeignKey","tagname":"class","name":"Spark.Core.Util.ForeignKey","extends":"Progress.Json.ObjectModel.JsonObject","author":"dugrau@progress.com\n","comment":"\u003ch3\u003eFile:\u003c/h3\u003e\n\u003cp\u003eForeignKey\u003c/p\u003e\n\u003ch3\u003ePurpose:\u003c/h3\u003e\n\u003cp\u003eCreate a foreign key info object to enhance table schema\u003c/p\u003e\n\u003ch3\u003eDescription:\u003c/h3\u003e\n\u003cp\u003eProvides a properly-formatted JSON object to be used by\nthe CatalogManager to define a foreign key property.\u003c/p\u003e\n\u003ch3\u003eCreated:\u003c/h3\u003e\n\u003cp\u003eThu Aug 24 09:30:24 EDT 2017\u003c/p\u003e\n","icon":"class","superclasses":["Progress.Json.ObjectModel.JsonObject","Spark.Core.Util.ForeignKey"],"subclasses":[],"implements":[],"members":[{"id":"constructor-ForeignKey1","name":"ForeignKey","owner":"Spark.Core.Util.ForeignKey","tagname":"constructor","comment":"","parameters":[{"name":"pcForeignKeyName","datatype":"CHARACTER","mode":"INPUT"}],"meta":{}},{"id":"method-setForeignTable","name":"setForeignTable","owner":"Spark.Core.Util.ForeignKey","tagname":"method","comment":"","parameters":[{"name":"pcForeignTable","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-addForeignField","name":"addForeignField","owner":"Spark.Core.Util.ForeignKey","tagname":"method","comment":"","parameters":[{"name":"pcForeignField","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-addLocalField","name":"addLocalField","owner":"Spark.Core.Util.ForeignKey","tagname":"method","comment":"","parameters":[{"name":"pcLocalField","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}}],"meta":{"final":true}});