Ext.data.JsonP.OpenEdge_Net_HTTP_Filter_Payload_MultipartFormEntityWriter({"mixedInto":[],"parentMixins":[],"files":[],"alternateClassNames":[],"mixins":[],"requires":[],"uses":[],"aliases":{},"id":"class-OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter","tagname":"class","name":"OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter","extends":"MultipartEntityWriter","author":"pjudge","shortDoc":"","html":"\u003cdiv\u003e\u003cpre class\u003d\"hierarchy\"\u003e\u003ch4\u003eHierarchy\u003c/h4\u003e\u003cdiv class\u003d\"subclass first-child\"\u003e\u003ca href\u003d\"#!/api/OpenEdge.Net.HTTP.Filter.Payload.MultipartEntityWriter\" rel\u003d\"OpenEdge.Net.HTTP.Filter.Payload.MultipartEntityWriter\" class\u003d\"docClass\"\u003eMultipartEntityWriter\u003c/a\u003e\u003cdiv class\u003d\"subclass \"\u003e\u003cstrong\u003eOpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter\u003c/strong\u003e\u003c/div\u003e\u003c/div\u003e\u003ch4\u003eAuthor\u003c/h4\u003e\u003cdiv class\u003d\"dependency\"\u003epjudge\u003c/div\u003e\u003c/pre\u003e\u003cdiv class\u003d\"doc-contents\"\u003e\u003ch2\u003ePurpose\u003c/h2\u003e\n\u003cp\u003eCreates a MultipartEntity per http://tools.ietf.org/html/rfc2046 for multipart/form-data messages\u003c/p\u003e\n\u003ch2\u003eNotes\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eThis uses the WEB-CONTEXT object when possible, for performance reasons.\nThis writer will read/use any headers that are in the message parts. The\nOpenEdge.Net.HTTP.Filter.Payload.MultipartFormSimpleEntityWriter is the fastest parser and\ndoes NOT read any part headers.\nWrite() operations are destructive (they replace the existing\nEntity).\u003cbr /\u003e\nhttp://www.w3.org/Protocols/rfc1341/7_2_Multipart.html\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/div\u003e\u003cdiv class\u003d\"members\"\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-constructor\"\u003eConstructors\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003cdiv id\u003d\"constructor-MultipartFormEntityWriter1\" class\u003d\"member first-child not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter\"\u003eOpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter-constructor-MultipartFormEntityWriter1\" class\u003d\"name expandable\"\u003eMultipartFormEntityWriter\u003c/a\u003e()\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003e\u0026nbsp;\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u0026nbsp;\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-event\"\u003eEvents\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-property\"\u003eProperties\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class\u003d\"members-section\"\u003e\u003cdiv class\u003d\"definedBy\"\u003eDefined By\u003c/div\u003e\u003ch3 class\u003d\"members-title icon-method\"\u003eMethods\u003c/h3\u003e\u003cdiv class\u003d\"subsection\"\u003e\u003cdiv id\u003d\"method-Write\" class\u003d\"member first-child not-inherited\"\u003e\u003ca href\u003d\"#\" class\u003d\"side expandable\"\u003e\u003cspan\u003e\u0026nbsp;\u003c/span\u003e\u003c/a\u003e\u003cdiv class\u003d\"title\"\u003e\u003cdiv class\u003d\"meta\"\u003e\u003cspan class\u003d\"defined-in\" rel\u003d\"OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter\"\u003eOpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter\u003c/span\u003e\u003cbr/\u003e\u003c/div\u003e\u003ca href\u003d\"#!/api/OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter-method-Write\" class\u003d\"name expandable\"\u003eWrite\u003c/a\u003e(MEMPTR) : INT64\u003cspan class\u003d\"signature\"\u003e\u003c/span\u003e\u003c/div\u003e\u003cdiv class\u003d\"description\"\u003e\u003cdiv class\u003d\"short\"\u003eincludes any headers in the body.\n\u003c/div\u003e\u003cdiv class\u003d\"long\"\u003e\u003cp\u003eincludes any headers in the body.\u003c/p\u003e\n\u003c/br\u003e\u003ch3 class\u003d\"pa\"\u003eParameters\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003epData\u003c/span\u003e : MEMPTR\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003ch3 class\u003d\"pa\"\u003eReturns\u003c/h3\u003e\u003cul\u003e\u003cli\u003e\u003cspan class\u003d\"pre\"\u003eINT64\u003c/span\u003e\u003cdiv class\u003d\"sub-desc\"\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e","classIcon":"class","members":[{"id":"constructor-MultipartFormEntityWriter1","name":"MultipartFormEntityWriter","owner":"OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter","tagname":"constructor","signature":"MultipartFormEntityWriter()","returnComment":"","meta":{}},{"id":"method-Write","name":"Write","owner":"OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter","tagname":"method","signature":"Write(INPUT:memptr):INT64","returnComment":"","meta":{}}],"superclasses":["MultipartEntityWriter","OpenEdge.Net.HTTP.Filter.Payload.MultipartFormEntityWriter"],"subclasses":[],"meta":{}});