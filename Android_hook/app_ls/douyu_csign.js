//com.douyu.lib.http.JniMakeUrl


function get_csign(){
    Java.perform(function() {
	var targetClass='com.douyu.lib.http.JniMakeUrl';
	var methodName=decodeURIComponent('native%5fgetVideoAuth');
	var gclass = Java.use(targetClass);
	gclass[methodName].overload('android.content.Context','int','long','java.lang.String',decodeURIComponent('%5bLjava.lang.String;'),decodeURIComponent('%5bLjava.lang.String;'),decodeURIComponent('%5bLjava.lang.String;'),decodeURIComponent('%5bLjava.lang.String;')).implementation = function(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
		console.log('\nGDA[Hook native_getVideoAuth(android.content.Context,int,long,java.lang.String,%5bLjava.lang.String;,%5bLjava.lang.String;,%5bLjava.lang.String;,%5bLjava.lang.String;)]'+'\n\targ0 = '+arg0+'\n\targ1 = '+arg1+'\n\targ2 = '+arg2+'\n\targ3 = '+arg3+'\n\targ4 = '+arg4+'\n\targ5 = '+arg5+'\n\targ6 = '+arg6+'\n\targ7 = '+arg7);
		var i=this[methodName](arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7);
		console.log('\treturn '+i);
		return i;
	}
})
}
setImmediate(get_csign)