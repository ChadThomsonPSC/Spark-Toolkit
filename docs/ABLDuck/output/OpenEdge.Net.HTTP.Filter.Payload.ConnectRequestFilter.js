Ext.data.JsonP.OpenEdge_Net_HTTP_Filter_Payload_ConnectRequestFilter({"mixedInto":[],"parentMixins":[],"files":[],"alternateClassNames":[],"mixins":[],"requires":[],"uses":[],"aliases":{},"id":"class-OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter","tagname":"class","name":"OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter","extends":"MessageWriter","author":"pjudge","shortDoc":"","html":"\u003cdiv\u003e\u003cpre class\u003d\"hierarchy\"\u003e\u003ch4\u003eHierarchy\u003c/h4\u003e\u003cdiv class\u003d\"subclass first-child\"\u003e\u003ca href\u003d\"#!/api/OpenEdge.Net.HTTP.Filter.Payload.MessageWriter\" rel\u003d\"OpenEdge.Net.HTTP.Filter.Payload.MessageWriter\" class\u003d\"docClass\"\u003eMessageWriter\u003c/a\u003e\u003cdiv class\u003d\"subclass \"\u003e\u003cstrong\u003eOpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter\u003c/strong\u003e\u003c/div\u003e\u003c/div\u003e\u003ch4\u003eAuthor\u003c/h4\u003e\u003cdiv class\u003d\"dependency\"\u003epjudge\u003c/div\u003e\u003c/pre\u003e\u003cdiv class\u003d\"doc-contents\"\u003e\u003ch2\u003ePurpose\u003c/h2\u003e\n\u003cp\u003eWrites data for a CONNECT request into another data structure,\nas passed into the Write() methods.\u003c/p\u003e\n\u003ch2\u003eNotes\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eFrom https://tools.ietf.org/html/rfc7231#section-4.3.6\nA client sending a CONNECT request MUST send the authority form of\nrequest-target (Section 5.3 of [RFC7230]); i.e., the request-target\nconsists of only the host name and port number of the tunnel\ndestination, separated by a colon.  For example,\nCONNECT server.example.com:80 HTTP/1.1\nHost: server.example.com:80\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/div\u003e\u003cdiv class\u003d\"members\"\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-constructor\"\u003eConstructors\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003cdiv id\u003d\"constructor-ConnectRequestFilter1\" class\u003d\"member first-child not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter\"\u003eOpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter-constructor-ConnectRequestFilter1\" class\u003d\"name expandable\"\u003eConnectRequestFilter\u003c/a\u003e()\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-event\"\u003eEvents\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-property\"\u003eProperties\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-method\"\u003eMethods\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003cdiv id\u003d\"method-Write\" class\u003d\"member first-child not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter\"\u003eOpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter-method-Write\" class\u003d\"name expandable\"\u003eWrite\u003c/a\u003e(Object) : INT64\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epData\u003c/span\u003e : Object\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eINT64\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e","classIcon":"class","members":[{"id":"constructor-ConnectRequestFilter1","name":"ConnectRequestFilter","owner":"OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter","tagname":"constructor","signature":"ConnectRequestFilter()","returnComment":"","meta":{}},{"id":"method-Write","name":"Write","owner":"OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter","tagname":"method","signature":"Write(INPUT:Object):INT64","returnComment":"","meta":{}}],"superclasses":["MessageWriter","OpenEdge.Net.HTTP.Filter.Payload.ConnectRequestFilter"],"subclasses":[],"meta":{}});