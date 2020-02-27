Ext.data.JsonP.Spark_Core_Util_Sendmail({"files":[],"uses":["Progress.Lang.*"],"id":"class-Spark.Core.Util.Sendmail","tagname":"class","name":"Spark.Core.Util.Sendmail","extends":"","author":"Dustin Grau (dgrau@progress.com)\n","comment":"\u003ch3\u003eFile:\u003c/h3\u003e\n\u003cp\u003eSendmail.cls\u003c/p\u003e\n\u003ch3\u003ePurpose:\u003c/h3\u003e\n\u003cp\u003eCommon email-sending utility for Windows/Linux.\u003c/p\u003e\n\u003ch3\u003eCreated:\u003c/h3\u003e\n\u003cp\u003eMon Mar 31 17:42:59 EST 2014\u003c/p\u003e\n\u003ch3\u003eNotes:\u003c/h3\u003e\n\u003cp\u003eRequires either BLAT (Windows) or sendmail (Linux).\u003c/p\u003e\n","icon":"class","superclasses":["Spark.Core.Util.Sendmail"],"subclasses":[],"implements":[],"members":[{"id":"constructor-Sendmail1","name":"Sendmail","owner":"Spark.Core.Util.Sendmail","tagname":"constructor","comment":"","meta":{}},{"id":"property-IsDevMode","name":"IsDevMode","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"LOGICAL","comment":"","meta":{}},{"id":"property-BlatPath","name":"BlatPath","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-BlatLog","name":"BlatLog","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-SendmailPath","name":"SendmailPath","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-SMTPServer","name":"SMTPServer","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-AttachBinary","name":"AttachBinary","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-AttachText","name":"AttachText","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-EmailBody","name":"EmailBody","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-Recipient","name":"Recipient","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-SubjectLine","name":"SubjectLine","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-SendWithBCC","name":"SendWithBCC","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-SendWithCC","name":"SendWithCC","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-SendFrom","name":"SendFrom","owner":"Spark.Core.Util.Sendmail","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"method-createTempFile","name":"createTempFile","owner":"Spark.Core.Util.Sendmail","tagname":"method","comment":"","parameters":[{"name":"pcPrefix","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"comment":""},"meta":{"private":true}},{"id":"method-removeTempFile","name":"removeTempFile","owner":"Spark.Core.Util.Sendmail","tagname":"method","comment":"","returns":{"comment":""},"meta":{"private":true}},{"id":"method-SendEmail","name":"SendEmail","owner":"Spark.Core.Util.Sendmail","tagname":"method","comment":"","parameters":[{"name":"pcSubject","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcEmailBody","datatype":"CHARACTER","mode":"INPUT"},{"name":"pcToAddress","datatype":"CHARACTER","mode":"INPUT"}],"returns":{"datatype":"LOGICAL","comment":""},"meta":{}},{"id":"method-SendEmail-1","name":"SendEmail","owner":"Spark.Core.Util.Sendmail","tagname":"method","comment":"","returns":{"datatype":"LOGICAL","comment":""},"meta":{}}],"meta":{}});