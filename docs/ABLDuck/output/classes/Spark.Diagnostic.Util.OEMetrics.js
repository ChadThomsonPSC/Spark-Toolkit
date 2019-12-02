Ext.data.JsonP.Spark_Diagnostic_Util_OEMetrics({"files":[],"uses":["Progress.Lang.*","Progress.Json.ObjectModel.*","OpenEdge.Core.Assert","OpenEdge.Logging.*","OpenEdge.Net.HTTP.HttpClient","OpenEdge.Net.HTTP.IHttpRequest","OpenEdge.Net.HTTP.IHttpResponse","OpenEdge.Net.HTTP.RequestBuilder","Spark.Diagnostic.Util.RemoteMetrics"],"id":"class-Spark.Diagnostic.Util.OEMetrics","tagname":"class","name":"Spark.Diagnostic.Util.OEMetrics","extends":"Spark.Diagnostic.Util.Logger","author":"","comment":"\u003cp\u003eChanges, Dated 5/15/19\u003c/p\u003e\n\u003cp\u003eThe latest output scheme will gather all individual metrics into a single\nJSON object. If a remote collector is enabled this data can be sent to the\nremote server as a single packet of data. If no remote collector is enabled,\nor the remote server does not respond, or the process fails with an error,\nthen the data will be written out to its respective folders on disk per the\nformer scheme. The data can then be processed via manual processes on the\nsame collector instance.\u003c/p\u003e\n","icon":"class","superclasses":["Spark.Diagnostic.Util.OSPath","Spark.Diagnostic.Util.Logger","Spark.Diagnostic.Util.OEMetrics"],"subclasses":[],"implements":[],"members":[{"id":"constructor-OEMetrics1","name":"OEMetrics","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"constructor","comment":"","meta":{}},{"id":"destructor-OEMetrics","name":"OEMetrics","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"destructor","comment":"","meta":{}},{"id":"property-Instance","name":"Instance","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"Spark.Diagnostic.Util.OEMetrics","comment":"","meta":{}},{"id":"property-OutputTime","name":"OutputTime","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"DATETIME","comment":"","meta":{"private":true}},{"id":"property-ApplicationName","name":"ApplicationName","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"private":true}},{"id":"property-RequestCount","name":"RequestCount","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"INTEGER","comment":"","meta":{"private":true}},{"id":"property-RequestStart","name":"RequestStart","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"DATETIME-TZ","comment":"","meta":{"private":true}},{"id":"property-MetricsOutput","name":"MetricsOutput","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"JsonObject","comment":"","meta":{"private":true}},{"id":"property-CollectorMetricsURI","name":"CollectorMetricsURI","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"private":true}},{"id":"property-CollectorProfileURI","name":"CollectorProfileURI","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"private":true}},{"id":"property-CollectorLogsURI","name":"CollectorLogsURI","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"private":true}},{"id":"property-oMetricsLogger","name":"oMetricsLogger","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"ILogWriter","comment":"","meta":{"private":true}},{"id":"property-oConfig","name":"oConfig","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"Spark.Diagnostic.Util.OEMetricsConfig","comment":"","meta":{"private":true}},{"id":"property-oRemoteMetrics","name":"oRemoteMetrics","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"property","datatype":"Spark.Diagnostic.Util.RemoteMetrics","comment":"","meta":{"private":true}},{"id":"method-GetRequestPath","name":"GetRequestPath","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{"private":true}},{"id":"method-GetSessionPath","name":"GetSessionPath","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{"private":true}},{"id":"method-GetObjectsPath","name":"GetObjectsPath","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"},{"name":"piSessionID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"datatype":"CHARACTER","comment":""},"meta":{"private":true}},{"id":"method-InMatchList","name":"InMatchList","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"pcCompare","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcMatches","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{"private":true}},{"id":"method-GetRequestInfo","name":"GetRequestInfo","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"datatype":"OERequestInfo","comment":""},"meta":{"private":true}},{"id":"method-GetProcedureName","name":"GetProcedureName","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"datatype":"CHARACTER","comment":""},"meta":{"private":true}},{"id":"method-GetAgentID","name":"GetAgentID","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"datatype":"INTEGER","comment":""},"meta":{"private":true}},{"id":"method-GetSessionID","name":"GetSessionID","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"datatype":"INTEGER","comment":""},"meta":{"private":true}},{"id":"method-ResetOutput","name":"ResetOutput","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"comment":""},"meta":{"private":true}},{"id":"method-SendToCollector","name":"SendToCollector","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"pcType","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcData","datatype":"JsonObject","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{"private":true}},{"id":"method-WriteSessionReports","name":"WriteSessionReports","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"},{"name":"piSessionID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"comment":""},"meta":{"private":true}},{"id":"method-StartProfiler","name":"StartProfiler","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"pcTrackBy","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-StartProfiler-1","name":"StartProfiler","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"pcTrackBy","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcFilter","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-WriteProfiler","name":"WriteProfiler","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"pcTrackBy","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-WriteProfiler-1","name":"WriteProfiler","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"pcTrackBy","datatype":"CHARACTER","mode":"INPUT"},{"name":"piExecThreshold","datatype":"INTEGER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-ProcessAccessLogs","name":"ProcessAccessLogs","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"comment":""},"meta":{}},{"id":"method-StartTrackingObjects","name":"StartTrackingObjects","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-StartTrackingObjects-1","name":"StartTrackingObjects","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"},{"name":"pcProcedure","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-StopTrackingObjects","name":"StopTrackingObjects","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-StopTrackingObjects-1","name":"StopTrackingObjects","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-GetABLObjects","name":"GetABLObjects","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-TrackAllAgents","name":"TrackAllAgents","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"pcAppName","datatype":"CHARACTER","mode":"INPUT"},{"name":"plEnable","datatype":"LOGICAL","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-GetAllABLObjectsReport","name":"GetAllABLObjectsReport","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"pcAppName","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-GetSessionABLObjects","name":"GetSessionABLObjects","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-GetSessionABLObjects-1","name":"GetSessionABLObjects","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"},{"name":"piSessionID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-GetRequestMetrics","name":"GetRequestMetrics","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-GetSessionMetrics","name":"GetSessionMetrics","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"method-PrepareSessionReports","name":"PrepareSessionReports","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","returns":{"comment":""},"meta":{}},{"id":"method-PrepareSessionReports-1","name":"PrepareSessionReports","owner":"Spark.Diagnostic.Util.OEMetrics","tagname":"method","comment":"","parameters":[{"name":"piAgentID","datatype":"INTEGER","mode":"INPUT"},{"name":"piSessionID","datatype":"INTEGER","mode":"INPUT"}],"returns":{"comment":""},"meta":{}},{"id":"property-Spark_Diagnostic_Util_Logger_oLogger","name":"oLogger","owner":"Spark.Diagnostic.Util.Logger","tagname":"property","datatype":"ILogWriter","comment":"","meta":{"protected":true}},{"id":"property-Spark_Diagnostic_Util_OSPath_CatalinaBase","name":"CatalinaBase","owner":"Spark.Diagnostic.Util.OSPath","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"protected":true}},{"id":"property-Spark_Diagnostic_Util_OSPath_TemporaryDir","name":"TemporaryDir","owner":"Spark.Diagnostic.Util.OSPath","tagname":"property","datatype":"CHARACTER","comment":"","meta":{"protected":true}}],"meta":{"final":true}});