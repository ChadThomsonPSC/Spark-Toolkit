Ext.data.JsonP.Spark_Core_Manager_IStateManager({"mixedInto":[],"parentMixins":[],"files":[],"alternateClassNames":[],"mixins":[],"requires":[],"uses":[],"aliases":{},"id":"class-Spark.Core.Manager.IStateManager","tagname":"class","name":"Spark.Core.Manager.IStateManager","extends":"IManager","author":"","shortDoc":"","html":"\u003cdiv\u003e\u003cpre class\u003d\"hierarchy\"\u003e\u003ch4\u003eHierarchy\u003c/h4\u003e\u003cdiv class\u003d\"subclass first-child\"\u003eIManager\u003cdiv class\u003d\"subclass \"\u003e\u003cstrong\u003eSpark.Core.Manager.IStateManager\u003c/strong\u003e\u003c/div\u003e\u003c/div\u003e\u003ch4\u003eImplementers\u003c/h4\u003e\u003cdiv class\u003d\"dependency\"\u003e\u003ca href\u003d\"#!/api/Spark.Core.Manager.StateManager\" rel\u003d\"Spark.Core.Manager.StateManager\" class\u003d\"docClass\"\u003eSpark.Core.Manager.StateManager\u003c/a\u003e\u003c/div\u003e\u003c/pre\u003e\u003cdiv class\u003d\"doc-contents\"\u003e\u003cp\u003eState Manager Interface\nResponsible for reading and writing the session context data to and from a persistent store (i.e. a database)\u003c/p\u003e\n\u003c/div\u003e\u003cdiv class\u003d\"members\"\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-constructor\"\u003eConstructors\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-event\"\u003eEvents\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-property\"\u003eProperties\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-method\"\u003eMethods\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003cdiv id\u003d\"method-readContextFromStore\" class\u003d\"member first-child not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Manager.IStateManager\"\u003eSpark.Core.Manager.IStateManager\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Manager.IStateManager-method-readContextFromStore\" class\u003d\"name expandable\"\u003ereadContextFromStore\u003c/a\u003e(CHARACTER, CHARACTER) : LONGCHAR\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcClassID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcSessionContextID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eLONGCHAR\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-readContextFromStoreAndLock\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Manager.IStateManager\"\u003eSpark.Core.Manager.IStateManager\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Manager.IStateManager-method-readContextFromStoreAndLock\" class\u003d\"name expandable\"\u003ereadContextFromStoreAndLock\u003c/a\u003e(CHARACTER, CHARACTER) : LONGCHAR\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcClassID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcSessionContextID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eLONGCHAR\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-writeContextToStore\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Manager.IStateManager\"\u003eSpark.Core.Manager.IStateManager\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Manager.IStateManager-method-writeContextToStore\" class\u003d\"name expandable\"\u003ewriteContextToStore\u003c/a\u003e(LONGCHAR, \u003ca href\u003d\"#!/api/Spark.Core.Manager.StateLifeCycleEnum\" rel\u003d\"Spark.Core.Manager.StateLifeCycleEnum\" class\u003d\"docClass\"\u003eStateLifeCycleEnum\u003c/a\u003e, CHARACTER, CHARACTER)\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcData\u003c/span\u003e : LONGCHAR\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epoLifeCycle\u003c/span\u003e : \u003ca href\u003d\"#!/api/Spark.Core.Manager.StateLifeCycleEnum\" rel\u003d\"Spark.Core.Manager.StateLifeCycleEnum\" class\u003d\"docClass\"\u003eStateLifeCycleEnum\u003c/a\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcClassID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcSessionContextID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-writeContextToStore-1\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Manager.IStateManager\"\u003eSpark.Core.Manager.IStateManager\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Manager.IStateManager-method-writeContextToStore-1\" class\u003d\"name expandable\"\u003ewriteContextToStore\u003c/a\u003e(LONGCHAR, DATETIME-TZ, CHARACTER, CHARACTER)\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcData\u003c/span\u003e : LONGCHAR\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eptExpire\u003c/span\u003e : DATETIME-TZ\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcClassID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcSessionContextID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-updateLastUsed\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Manager.IStateManager\"\u003eSpark.Core.Manager.IStateManager\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Manager.IStateManager-method-updateLastUsed\" class\u003d\"name expandable\"\u003eupdateLastUsed\u003c/a\u003e(CHARACTER, CHARACTER)\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcClassID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcSessionContextID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv id\u003d\"method-removeContextFromStore\" class\u003d\"member  not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"Spark.Core.Manager.IStateManager\"\u003eSpark.Core.Manager.IStateManager\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/Spark.Core.Manager.IStateManager-method-removeContextFromStore\" class\u003d\"name expandable\"\u003eremoveContextFromStore\u003c/a\u003e(CHARACTER, CHARACTER)\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcClassID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epcSessionContextID\u003c/span\u003e : CHARACTER\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e","classIcon":"interface","members":[{"id":"method-readContextFromStore","name":"readContextFromStore","owner":"Spark.Core.Manager.IStateManager","tagname":"method","signature":"readContextFromStore(INPUT:character,INPUT:character):LONGCHAR","returnComment":"","meta":{}},{"id":"method-readContextFromStoreAndLock","name":"readContextFromStoreAndLock","owner":"Spark.Core.Manager.IStateManager","tagname":"method","signature":"readContextFromStoreAndLock(INPUT:character,INPUT:character):LONGCHAR","returnComment":"","meta":{}},{"id":"method-writeContextToStore","name":"writeContextToStore","owner":"Spark.Core.Manager.IStateManager","tagname":"method","signature":"writeContextToStore(INPUT:longchar,INPUT:StateLifeCycleEnum,INPUT:character,INPUT:character)","returnComment":"","meta":{}},{"id":"method-writeContextToStore-1","name":"writeContextToStore","owner":"Spark.Core.Manager.IStateManager","tagname":"method","signature":"writeContextToStore(INPUT:longchar,INPUT:datetime-tz,INPUT:character,INPUT:character)","returnComment":"","meta":{}},{"id":"method-updateLastUsed","name":"updateLastUsed","owner":"Spark.Core.Manager.IStateManager","tagname":"method","signature":"updateLastUsed(INPUT:character,INPUT:character)","returnComment":"","meta":{}},{"id":"method-removeContextFromStore","name":"removeContextFromStore","owner":"Spark.Core.Manager.IStateManager","tagname":"method","signature":"removeContextFromStore(INPUT:character,INPUT:character)","returnComment":"","meta":{}}],"superclasses":["IManager","Spark.Core.Manager.IStateManager"],"subclasses":[],"meta":{}});