Ext.data.JsonP.Spark_Core_Manager_IStateManager({"files":[],"uses":["Progress.Lang.*","Ccs.Common.IManager","Spark.Core.Manager.StateLifeCycleEnum"],"id":"class-Spark.Core.Manager.IStateManager","tagname":"class","name":"Spark.Core.Manager.IStateManager","extends":"IManager","author":"","comment":"\u003cp\u003eState Manager Interface\nResponsible for reading and writing the session context data to and from a persistent store (i.e. a database)\u003c/p\u003e\n","icon":"interface","superclasses":["IManager","Spark.Core.Manager.IStateManager"],"subclasses":[],"implementers":["Spark.Core.Manager.StateManager"],"members":[{"id":"method-readContextFromStore","name":"readContextFromStore","owner":"Spark.Core.Manager.IStateManager","tagname":"method","comment":"","parameters":[{"name":"pcClassID","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcSessionContextID","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LONGCHAR","comment":""},"meta":{}},{"id":"method-readContextFromStoreAndLock","name":"readContextFromStoreAndLock","owner":"Spark.Core.Manager.IStateManager","tagname":"method","comment":"","parameters":[{"name":"pcClassID","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcSessionContextID","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LONGCHAR","comment":""},"meta":{}},{"id":"method-writeContextToStore","name":"writeContextToStore","owner":"Spark.Core.Manager.IStateManager","tagname":"method","comment":"","parameters":[{"name":"pcData","datatype":"LONGCHAR","mode":"INPUT"},{"name":"poLifeCycle","datatype":"Spark.Core.Manager.StateLifeCycleEnum","mode":"INPUT"},{"name":"pcClassID","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcSessionContextID","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-writeContextToStore-1","name":"writeContextToStore","owner":"Spark.Core.Manager.IStateManager","tagname":"method","comment":"","parameters":[{"name":"pcData","datatype":"LONGCHAR","mode":"INPUT"},{"name":"ptExpire","datatype":"DATETIME-TZ","mode":"INPUT"},{"name":"pcClassID","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcSessionContextID","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-updateLastUsed","name":"updateLastUsed","owner":"Spark.Core.Manager.IStateManager","tagname":"method","comment":"","parameters":[{"name":"pcClassID","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcSessionContextID","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-removeContextFromStore","name":"removeContextFromStore","owner":"Spark.Core.Manager.IStateManager","tagname":"method","comment":"","parameters":[{"name":"pcClassID","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcSessionContextID","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}}],"meta":{}});