Ext.data.JsonP.Spark_Core_Util_OSTools({"files":[],"uses":["Progress.Lang.AppError","Progress.Json.ObjectModel.*","Spark.Core.Util.OSTools"],"id":"class-Spark.Core.Util.OSTools","tagname":"class","name":"Spark.Core.Util.OSTools","extends":"","author":"","comment":"\u003cp\u003eA static class with OS helper methods\u003c/p\u003e\n","icon":"class","superclasses":["Spark.Core.Util.OSTools"],"subclasses":[],"implements":[],"members":[{"id":"property-configProjectDir","name":"configProjectDir","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","comment":"\u003cp\u003eSets a custom subdirectory for config files, applicable under PASOE.\nNote that this could be a possible security risk, so the set method\nattempts to avoid setting the value if the string is deemed invalid.\u003c/p\u003e\n","meta":{}},{"id":"property-dlcdir","name":"dlcdir","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","comment":"\u003cp\u003eReturn the DLC directory\u003c/p\u003e\n","meta":{}},{"id":"property-wrkdir","name":"wrkdir","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","comment":"\u003cp\u003eReturn the current working directory of the app server agent\nUnder PASOE, this will be $CATALINA_BASE/work\u003c/p\u003e\n","meta":{}},{"id":"property-tmpdir","name":"tmpdir","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","comment":"\u003cp\u003eReturn the current temp directory of the app server agent\nUnder PASOE, this will be $CATALINA_BASE/temp\u003c/p\u003e\n","meta":{}},{"id":"property-sparkConf","name":"sparkConf","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","comment":"\u003cp\u003eReturn the Spark configuration directory\u003c/p\u003e\n","meta":{}},{"id":"property-catalinaBase","name":"catalinaBase","owner":"Spark.Core.Util.OSTools","tagname":"property","datatype":"CHARACTER","comment":"\u003cp\u003eReturn the $CATALINA_BASE OS environment variable if set\u003c/p\u003e\n","meta":{}},{"id":"method-getFullPathname","name":"getFullPathname","owner":"Spark.Core.Util.OSTools","tagname":"method","comment":"\u003cp\u003eGet the full pathname of a file or directory\nWill return with \u0026quot;/\u0026quot; as the directory separator\nDirectories are returned with a trailing \u0026quot;/\u0026quot;\u003c/p\u003e\n","parameters":[{"name":"pcFile","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{}},{"id":"method-osCopyDir","name":"osCopyDir","owner":"Spark.Core.Util.OSTools","tagname":"method","comment":"","parameters":[{"name":"pcFrom","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcTo","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-recurseDir","name":"recurseDir","owner":"Spark.Core.Util.OSTools","tagname":"method","comment":"","parameters":[{"name":"pcFrom","datatype":"CHARACTER","mode":"INPUT"},{"name":"plOmitDirs","datatype":"LOGICAL","mode":"INPUT"}],"returns":{"datatype":"JsonArray","comment":""},"meta":{}},{"id":"method-drillDir","name":"drillDir","owner":"Spark.Core.Util.OSTools","tagname":"method","comment":"","parameters":[{"name":"pcFrom","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{"private":true}},{"id":"method-processDir","name":"processDir","owner":"Spark.Core.Util.OSTools","tagname":"method","comment":"","parameters":[{"name":"pcFrom","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcTo","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{"private":true}},{"id":"method-osCopyFile","name":"osCopyFile","owner":"Spark.Core.Util.OSTools","tagname":"method","comment":"","parameters":[{"name":"pcFrom","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcTo","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-osCreateDirTree","name":"osCreateDirTree","owner":"Spark.Core.Util.OSTools","tagname":"method","comment":"","parameters":[{"name":"pcDir","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{}},{"id":"method-osErrorMsg","name":"osErrorMsg","owner":"Spark.Core.Util.OSTools","tagname":"method","comment":"","parameters":[{"name":"piOsError","datatype":"INTEGER","mode":"INPUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{}},{"id":"temptable-ttDirStruct","name":"ttDirStruct","owner":"Spark.Core.Util.OSTools","tagname":"temptable","definition":"DEFINE TEMP-TABLE ttDirStruct NO-UNDO \u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  FIELD ParentDir AS CHARACTER\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  FIELD FileName AS CHARACTER\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  FIELD FullPath AS CHARACTER\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  FIELD isDir AS LOGICAL\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  FIELD DestDir AS CHARACTER\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  INDEX idxPrimary PRIMARY ParentDir FileName\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;","comment":"","meta":{"private":true,"noundo":true}}],"meta":{}});