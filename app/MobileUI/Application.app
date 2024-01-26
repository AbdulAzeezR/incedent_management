{
	"_Name": "MobileUI",
	"Version": "/MobileUI/Globals/Application/AppDefinition_Version.global",
	"MainPage": "/MobileUI/Pages/Products/Products_List.page",
	"OnLaunch": [
		"/MobileUI/Actions/Service/InitializeOnline.action"
	],
	"OnWillUpdate": "/MobileUI/Rules/Application/OnWillUpdate.js",
	"OnDidUpdate": "/MobileUI/Actions/Service/InitializeOnline.action",
	"Styles": "/MobileUI/Styles/Styles.less",
	"Localization": "/MobileUI/i18n/i18n.properties",
	"_SchemaVersion": "23.12"
}