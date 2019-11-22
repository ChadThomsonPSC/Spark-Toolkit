Ext.data.JsonP.Spark_Core_Security_TOTP({"files":[],"uses":["Progress.Lang.*"],"id":"class-Spark.Core.Security.TOTP","tagname":"class","name":"Spark.Core.Security.TOTP","extends":"","author":"Dustin Grau (dugrau@progress.com)\n","comment":"\u003ch3\u003eFile:\u003c/h3\u003e\n\u003cp\u003eSports.Spark.Core.Security.TOTP\u003c/p\u003e\n\u003ch3\u003ePurpose:\u003c/h3\u003e\n\u003cp\u003eGenerate a TOTP code for two-factor authentication\u003c/p\u003e\n\u003ch3\u003eDescription:\u003c/h3\u003e\n\u003cp\u003eImplementation according to Google Authenticator\u003c/p\u003e\n\u003ch3\u003eCreated:\u003c/h3\u003e\n\u003cp\u003eFri Oct 13 11:09:53 EST 2017\u003c/p\u003e\n\u003ch3\u003eNotes:\u003c/h3\u003e\n\u003cp\u003eTime-based One-Time-Password (TOTP): https://tools.ietf.org/html/rfc6238\nShared Secret + Moving Factor (Time)\u003c/p\u003e\n\u003ch3\u003ehttps:\u003c/h3\u003e\n\u003cp\u003e//en.wikipedia.org/wiki/Time-based_One-time_Password_Algorithm\u003c/p\u003e\n","icon":"class","superclasses":["Spark.Core.Security.TOTP"],"subclasses":[],"implements":[],"members":[{"id":"constructor-TOTP1","name":"TOTP","owner":"Spark.Core.Security.TOTP","tagname":"constructor","comment":"","parameters":[{"name":"pcClientSecret","datatype":"CHARACTER","mode":"INPUT"},{"name":"piTokenStep","datatype":"INTEGER","mode":"INPUT"},{"name":"piTokenLength","datatype":"INTEGER","mode":"INPUT"}],"meta":{}},{"id":"constructor-TOTP2","name":"TOTP","owner":"Spark.Core.Security.TOTP","tagname":"constructor","comment":"","parameters":[{"name":"pcClientSecret","datatype":"CHARACTER","mode":"INPUT"},{"name":"piTokenLength","datatype":"INTEGER","mode":"INPUT"}],"meta":{}},{"id":"constructor-TOTP3","name":"TOTP","owner":"Spark.Core.Security.TOTP","tagname":"constructor","comment":"","parameters":[{"name":"pcClientSecret","datatype":"CHARACTER","mode":"INPUT"}],"meta":{}},{"id":"destructor-TOTP","name":"TOTP","owner":"Spark.Core.Security.TOTP","tagname":"destructor","comment":"","meta":{}},{"id":"property-Token","name":"Token","owner":"Spark.Core.Security.TOTP","tagname":"property","datatype":"CHARACTER","comment":"","meta":{}},{"id":"property-UnixEpoch","name":"UnixEpoch","owner":"Spark.Core.Security.TOTP","tagname":"property","datatype":"INT64","comment":"","meta":{}},{"id":"property-EpochCounter","name":"EpochCounter","owner":"Spark.Core.Security.TOTP","tagname":"property","datatype":"INT64","comment":"","meta":{}},{"id":"method-newToken","name":"newToken","owner":"Spark.Core.Security.TOTP","tagname":"method","comment":"","parameters":[{"name":"pcClientSecret","datatype":"CHARACTER","mode":"INPUT"},{"name":"piTokenStep","datatype":"INTEGER","mode":"INPUT"},{"name":"piTokenLength","datatype":"INTEGER","mode":"INPUT"}],"returns":{"comment":""},"meta":{"private":true}}],"meta":{"final":true}});