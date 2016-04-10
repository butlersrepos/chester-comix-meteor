App.info({
	name: 'Chester-Testing',
	description: 'Testing android inapp purchases',
	version: '0.0.1'
});

App.icons({
	'android_ldpi': 'resources/icons/icon-36-ldpi.png',
	'android_mdpi': 'resources/icons/icon-48-mdpi.png',
	'android_hdpi': 'resources/icons/icon-72-hdpi.png',
	'android_xhdpi': 'resources/icons/icon-96-xhdpi.png'
});

App.configurePlugin('cc.fovea.cordova.purchase', {
	BILLING_KEY : "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArSXSUmR3SzQA8PldOGsyn/+MHOGCqN/jyFjYgPttjT0Gg/bvxyCFerFEXw6QbqGfTh7B9mT05EjGQ6TUbOqPWeU3h7F06HutqI2vHARnwDxLlKT7cB2whzSuBjDoZPZlwI3g1AF5JfJAPEm52un8Xi8AvEtwZa5Nvz81x0WUzDVPB5RGx+NL5YNn1sEllaff09rTsqBUg1z/Nye73HBF3CeeL8KVs6mxqEu37E5itcsDSPdX1G0yFnZg/yxa7nwiAFeJEEQGXjPEcvZlwklGj1wQ9I+RDQUAlizEjU6xhQt6BktBF45zBahMNBCTjk1oDileQVVslmm8gbrvbmt8QQIDAQAB"
});