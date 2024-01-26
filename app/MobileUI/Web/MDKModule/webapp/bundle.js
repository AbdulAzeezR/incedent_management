(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/MobileUI/i18n/i18n.properties":
/*!*********************************************************!*\
  !*** ./build.definitions/MobileUI/i18n/i18n.properties ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "Draft_DraftAdministrativeData=Draft_DraftAdministrativeData\nDraft_DraftUUID=Draft_DraftUUID\nDraft_CreationDateTime=Draft_CreationDateTime\nDraft_CreatedByUser=Draft_CreatedByUser\nDraft_DraftIsCreatedByMe=Draft_DraftIsCreatedByMe\nDraft_LastChangeDateTime=Draft_LastChangeDateTime\nDraft_LastChangedByUser=Draft_LastChangedByUser\nDraft_InProcessByUser=Draft_InProcessByUser\nDraft_DraftIsProcessedByMe=Draft_DraftIsProcessedByMe\n"

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Application/AppUpdateFailure.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Application/AppUpdateFailure.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/MobileUI/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Application/AppUpdateSuccess.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Application/AppUpdateSuccess.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/MobileUI/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/MobileUI/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Application/ClientIsMultiUserMode.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Application/ClientIsMultiUserMode.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Application/GetClientSupportVersions.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Application/GetClientSupportVersions.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Application/GetClientVersion.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Application/GetClientVersion.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Application/OnWillUpdate.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Application/OnWillUpdate.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/MobileUI/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Application/ResetAppSettingsAndLogout.js":
/*!***********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/MobileUI/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Logging/LogLevels.js":
/*!***************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Logging/LogLevels.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Logging/SetTraceCategories.js":
/*!************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Logging/SetTraceCategories.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Logging/SetUserLogLevel.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Logging/SetUserLogLevel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Logging/ToggleLogging.js":
/*!*******************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Logging/ToggleLogging.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Logging/TraceCategories.js":
/*!*********************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Logging/TraceCategories.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Logging/UserLogSetting.js":
/*!********************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Logging/UserLogSetting.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Products/NavToProducts_Edit.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Products/NavToProducts_Edit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavToEdit)
/* harmony export */ });
function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MobileUI/Services/service1.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/MobileUI/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Products'
                },
                'OnSuccess': '/MobileUI/Actions/Products/NavToProducts_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MobileUI/Actions/Products/NavToProducts_Edit.action');
    }
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Products/Products_Cancel.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Products/Products_Cancel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cancel)
/* harmony export */ });
function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MobileUI/Services/service1.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/MobileUI/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Products'
                },
                'OnSuccess': '/MobileUI/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MobileUI/Actions/CloseModalPage_Cancel.action');
    }
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Products/Products_CreateEntity.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Products/Products_CreateEntity.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEntity)
/* harmony export */ });
function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MobileUI/Services/service1.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/MobileUI/Actions/Products/Products_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MobileUI/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Products',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MobileUI/Actions/Products/Products_CreateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Products/Products_DeleteConfirmation.js":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Products/Products_DeleteConfirmation.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/MobileUI/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/MobileUI/Actions/Products/Products_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/MobileUI/Rules/Products/Products_UpdateEntity.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Rules/Products/Products_UpdateEntity.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateEntity)
/* harmony export */ });
function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MobileUI/Services/service1.service').isDraftEnabled('Products')) {
        return clientAPI.executeAction({
            'Name': '/MobileUI/Actions/Products/Products_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MobileUI/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Products'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MobileUI/Actions/Products/Products_UpdateEntity.action');
    }
}

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let mobileui_actions_application_appupdate_action = __webpack_require__(/*! ./MobileUI/Actions/Application/AppUpdate.action */ "./build.definitions/MobileUI/Actions/Application/AppUpdate.action")
let mobileui_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./MobileUI/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/MobileUI/Actions/Application/AppUpdateFailureMessage.action")
let mobileui_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./MobileUI/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/MobileUI/Actions/Application/AppUpdateProgressBanner.action")
let mobileui_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./MobileUI/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/MobileUI/Actions/Application/AppUpdateSuccessMessage.action")
let mobileui_actions_application_logout_action = __webpack_require__(/*! ./MobileUI/Actions/Application/Logout.action */ "./build.definitions/MobileUI/Actions/Application/Logout.action")
let mobileui_actions_application_navtoabout_action = __webpack_require__(/*! ./MobileUI/Actions/Application/NavToAbout.action */ "./build.definitions/MobileUI/Actions/Application/NavToAbout.action")
let mobileui_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./MobileUI/Actions/Application/NavToActivityLog.action */ "./build.definitions/MobileUI/Actions/Application/NavToActivityLog.action")
let mobileui_actions_application_navtosupport_action = __webpack_require__(/*! ./MobileUI/Actions/Application/NavToSupport.action */ "./build.definitions/MobileUI/Actions/Application/NavToSupport.action")
let mobileui_actions_application_onwillupdate_action = __webpack_require__(/*! ./MobileUI/Actions/Application/OnWillUpdate.action */ "./build.definitions/MobileUI/Actions/Application/OnWillUpdate.action")
let mobileui_actions_application_reset_action = __webpack_require__(/*! ./MobileUI/Actions/Application/Reset.action */ "./build.definitions/MobileUI/Actions/Application/Reset.action")
let mobileui_actions_application_resetmessage_action = __webpack_require__(/*! ./MobileUI/Actions/Application/ResetMessage.action */ "./build.definitions/MobileUI/Actions/Application/ResetMessage.action")
let mobileui_actions_application_usermenupopover_action = __webpack_require__(/*! ./MobileUI/Actions/Application/UserMenuPopover.action */ "./build.definitions/MobileUI/Actions/Application/UserMenuPopover.action")
let mobileui_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./MobileUI/Actions/CloseModalPage_Cancel.action */ "./build.definitions/MobileUI/Actions/CloseModalPage_Cancel.action")
let mobileui_actions_closemodalpage_complete_action = __webpack_require__(/*! ./MobileUI/Actions/CloseModalPage_Complete.action */ "./build.definitions/MobileUI/Actions/CloseModalPage_Complete.action")
let mobileui_actions_closepage_action = __webpack_require__(/*! ./MobileUI/Actions/ClosePage.action */ "./build.definitions/MobileUI/Actions/ClosePage.action")
let mobileui_actions_createentityfailuremessage_action = __webpack_require__(/*! ./MobileUI/Actions/CreateEntityFailureMessage.action */ "./build.definitions/MobileUI/Actions/CreateEntityFailureMessage.action")
let mobileui_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./MobileUI/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/MobileUI/Actions/CreateEntitySuccessMessage.action")
let mobileui_actions_deleteconfirmation_action = __webpack_require__(/*! ./MobileUI/Actions/DeleteConfirmation.action */ "./build.definitions/MobileUI/Actions/DeleteConfirmation.action")
let mobileui_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./MobileUI/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/MobileUI/Actions/DeleteEntityFailureMessage.action")
let mobileui_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./MobileUI/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/MobileUI/Actions/DeleteEntitySuccessMessage.action")
let mobileui_actions_draftdiscardentity_action = __webpack_require__(/*! ./MobileUI/Actions/DraftDiscardEntity.action */ "./build.definitions/MobileUI/Actions/DraftDiscardEntity.action")
let mobileui_actions_drafteditentity_action = __webpack_require__(/*! ./MobileUI/Actions/DraftEditEntity.action */ "./build.definitions/MobileUI/Actions/DraftEditEntity.action")
let mobileui_actions_draftsaveentity_action = __webpack_require__(/*! ./MobileUI/Actions/DraftSaveEntity.action */ "./build.definitions/MobileUI/Actions/DraftSaveEntity.action")
let mobileui_actions_genericbannermessage_action = __webpack_require__(/*! ./MobileUI/Actions/GenericBannerMessage.action */ "./build.definitions/MobileUI/Actions/GenericBannerMessage.action")
let mobileui_actions_genericmessagebox_action = __webpack_require__(/*! ./MobileUI/Actions/GenericMessageBox.action */ "./build.definitions/MobileUI/Actions/GenericMessageBox.action")
let mobileui_actions_genericnavigation_action = __webpack_require__(/*! ./MobileUI/Actions/GenericNavigation.action */ "./build.definitions/MobileUI/Actions/GenericNavigation.action")
let mobileui_actions_generictoastmessage_action = __webpack_require__(/*! ./MobileUI/Actions/GenericToastMessage.action */ "./build.definitions/MobileUI/Actions/GenericToastMessage.action")
let mobileui_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./MobileUI/Actions/Logging/LogUploadFailure.action */ "./build.definitions/MobileUI/Actions/Logging/LogUploadFailure.action")
let mobileui_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./MobileUI/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/MobileUI/Actions/Logging/LogUploadSuccessful.action")
let mobileui_actions_logging_uploadlog_action = __webpack_require__(/*! ./MobileUI/Actions/Logging/UploadLog.action */ "./build.definitions/MobileUI/Actions/Logging/UploadLog.action")
let mobileui_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./MobileUI/Actions/Logging/UploadLogProgress.action */ "./build.definitions/MobileUI/Actions/Logging/UploadLogProgress.action")
let mobileui_actions_products_navtoproducts_create_action = __webpack_require__(/*! ./MobileUI/Actions/Products/NavToProducts_Create.action */ "./build.definitions/MobileUI/Actions/Products/NavToProducts_Create.action")
let mobileui_actions_products_navtoproducts_detail_action = __webpack_require__(/*! ./MobileUI/Actions/Products/NavToProducts_Detail.action */ "./build.definitions/MobileUI/Actions/Products/NavToProducts_Detail.action")
let mobileui_actions_products_navtoproducts_edit_action = __webpack_require__(/*! ./MobileUI/Actions/Products/NavToProducts_Edit.action */ "./build.definitions/MobileUI/Actions/Products/NavToProducts_Edit.action")
let mobileui_actions_products_navtoproducts_list_action = __webpack_require__(/*! ./MobileUI/Actions/Products/NavToProducts_List.action */ "./build.definitions/MobileUI/Actions/Products/NavToProducts_List.action")
let mobileui_actions_products_products_createentity_action = __webpack_require__(/*! ./MobileUI/Actions/Products/Products_CreateEntity.action */ "./build.definitions/MobileUI/Actions/Products/Products_CreateEntity.action")
let mobileui_actions_products_products_deleteentity_action = __webpack_require__(/*! ./MobileUI/Actions/Products/Products_DeleteEntity.action */ "./build.definitions/MobileUI/Actions/Products/Products_DeleteEntity.action")
let mobileui_actions_products_products_updateentity_action = __webpack_require__(/*! ./MobileUI/Actions/Products/Products_UpdateEntity.action */ "./build.definitions/MobileUI/Actions/Products/Products_UpdateEntity.action")
let mobileui_actions_service_initializeonline_action = __webpack_require__(/*! ./MobileUI/Actions/Service/InitializeOnline.action */ "./build.definitions/MobileUI/Actions/Service/InitializeOnline.action")
let mobileui_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./MobileUI/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/MobileUI/Actions/Service/InitializeOnlineFailureMessage.action")
let mobileui_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./MobileUI/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/MobileUI/Actions/Service/InitializeOnlineSuccessMessage.action")
let mobileui_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./MobileUI/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/MobileUI/Actions/UpdateEntityFailureMessage.action")
let mobileui_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./MobileUI/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/MobileUI/Actions/UpdateEntitySuccessMessage.action")
let mobileui_globals_application_appdefinition_version_global = __webpack_require__(/*! ./MobileUI/Globals/Application/AppDefinition_Version.global */ "./build.definitions/MobileUI/Globals/Application/AppDefinition_Version.global")
let mobileui_globals_application_applicationname_global = __webpack_require__(/*! ./MobileUI/Globals/Application/ApplicationName.global */ "./build.definitions/MobileUI/Globals/Application/ApplicationName.global")
let mobileui_globals_application_supportemail_global = __webpack_require__(/*! ./MobileUI/Globals/Application/SupportEmail.global */ "./build.definitions/MobileUI/Globals/Application/SupportEmail.global")
let mobileui_globals_application_supportphone_global = __webpack_require__(/*! ./MobileUI/Globals/Application/SupportPhone.global */ "./build.definitions/MobileUI/Globals/Application/SupportPhone.global")
let mobileui_i18n_i18n_properties = __webpack_require__(/*! ./MobileUI/i18n/i18n.properties */ "./build.definitions/MobileUI/i18n/i18n.properties")
let mobileui_jsconfig_json = __webpack_require__(/*! ./MobileUI/jsconfig.json */ "./build.definitions/MobileUI/jsconfig.json")
let mobileui_pages_application_about_page = __webpack_require__(/*! ./MobileUI/Pages/Application/About.page */ "./build.definitions/MobileUI/Pages/Application/About.page")
let mobileui_pages_application_support_page = __webpack_require__(/*! ./MobileUI/Pages/Application/Support.page */ "./build.definitions/MobileUI/Pages/Application/Support.page")
let mobileui_pages_application_useractivitylog_page = __webpack_require__(/*! ./MobileUI/Pages/Application/UserActivityLog.page */ "./build.definitions/MobileUI/Pages/Application/UserActivityLog.page")
let mobileui_pages_products_products_create_page = __webpack_require__(/*! ./MobileUI/Pages/Products/Products_Create.page */ "./build.definitions/MobileUI/Pages/Products/Products_Create.page")
let mobileui_pages_products_products_detail_page = __webpack_require__(/*! ./MobileUI/Pages/Products/Products_Detail.page */ "./build.definitions/MobileUI/Pages/Products/Products_Detail.page")
let mobileui_pages_products_products_edit_page = __webpack_require__(/*! ./MobileUI/Pages/Products/Products_Edit.page */ "./build.definitions/MobileUI/Pages/Products/Products_Edit.page")
let mobileui_pages_products_products_list_page = __webpack_require__(/*! ./MobileUI/Pages/Products/Products_List.page */ "./build.definitions/MobileUI/Pages/Products/Products_List.page")
let mobileui_rules_application_appupdatefailure_js = __webpack_require__(/*! ./MobileUI/Rules/Application/AppUpdateFailure.js */ "./build.definitions/MobileUI/Rules/Application/AppUpdateFailure.js")
let mobileui_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./MobileUI/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/MobileUI/Rules/Application/AppUpdateSuccess.js")
let mobileui_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./MobileUI/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/MobileUI/Rules/Application/ClientIsMultiUserMode.js")
let mobileui_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./MobileUI/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/MobileUI/Rules/Application/GetClientSupportVersions.js")
let mobileui_rules_application_getclientversion_js = __webpack_require__(/*! ./MobileUI/Rules/Application/GetClientVersion.js */ "./build.definitions/MobileUI/Rules/Application/GetClientVersion.js")
let mobileui_rules_application_onwillupdate_js = __webpack_require__(/*! ./MobileUI/Rules/Application/OnWillUpdate.js */ "./build.definitions/MobileUI/Rules/Application/OnWillUpdate.js")
let mobileui_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./MobileUI/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/MobileUI/Rules/Application/ResetAppSettingsAndLogout.js")
let mobileui_rules_logging_loglevels_js = __webpack_require__(/*! ./MobileUI/Rules/Logging/LogLevels.js */ "./build.definitions/MobileUI/Rules/Logging/LogLevels.js")
let mobileui_rules_logging_settracecategories_js = __webpack_require__(/*! ./MobileUI/Rules/Logging/SetTraceCategories.js */ "./build.definitions/MobileUI/Rules/Logging/SetTraceCategories.js")
let mobileui_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./MobileUI/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/MobileUI/Rules/Logging/SetUserLogLevel.js")
let mobileui_rules_logging_togglelogging_js = __webpack_require__(/*! ./MobileUI/Rules/Logging/ToggleLogging.js */ "./build.definitions/MobileUI/Rules/Logging/ToggleLogging.js")
let mobileui_rules_logging_tracecategories_js = __webpack_require__(/*! ./MobileUI/Rules/Logging/TraceCategories.js */ "./build.definitions/MobileUI/Rules/Logging/TraceCategories.js")
let mobileui_rules_logging_userlogsetting_js = __webpack_require__(/*! ./MobileUI/Rules/Logging/UserLogSetting.js */ "./build.definitions/MobileUI/Rules/Logging/UserLogSetting.js")
let mobileui_rules_products_navtoproducts_edit_js = __webpack_require__(/*! ./MobileUI/Rules/Products/NavToProducts_Edit.js */ "./build.definitions/MobileUI/Rules/Products/NavToProducts_Edit.js")
let mobileui_rules_products_products_cancel_js = __webpack_require__(/*! ./MobileUI/Rules/Products/Products_Cancel.js */ "./build.definitions/MobileUI/Rules/Products/Products_Cancel.js")
let mobileui_rules_products_products_createentity_js = __webpack_require__(/*! ./MobileUI/Rules/Products/Products_CreateEntity.js */ "./build.definitions/MobileUI/Rules/Products/Products_CreateEntity.js")
let mobileui_rules_products_products_deleteconfirmation_js = __webpack_require__(/*! ./MobileUI/Rules/Products/Products_DeleteConfirmation.js */ "./build.definitions/MobileUI/Rules/Products/Products_DeleteConfirmation.js")
let mobileui_rules_products_products_updateentity_js = __webpack_require__(/*! ./MobileUI/Rules/Products/Products_UpdateEntity.js */ "./build.definitions/MobileUI/Rules/Products/Products_UpdateEntity.js")
let mobileui_services_service1_service = __webpack_require__(/*! ./MobileUI/Services/service1.service */ "./build.definitions/MobileUI/Services/service1.service")
let mobileui_styles_styles_css = __webpack_require__(/*! ./MobileUI/Styles/Styles.css */ "./build.definitions/MobileUI/Styles/Styles.css")
let mobileui_styles_styles_json = __webpack_require__(/*! ./MobileUI/Styles/Styles.json */ "./build.definitions/MobileUI/Styles/Styles.json")
let mobileui_styles_styles_less = __webpack_require__(/*! ./MobileUI/Styles/Styles.less */ "./build.definitions/MobileUI/Styles/Styles.less")
let mobileui_styles_styles_nss = __webpack_require__(/*! ./MobileUI/Styles/Styles.nss */ "./build.definitions/MobileUI/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	mobileui_actions_application_appupdate_action : mobileui_actions_application_appupdate_action,
	mobileui_actions_application_appupdatefailuremessage_action : mobileui_actions_application_appupdatefailuremessage_action,
	mobileui_actions_application_appupdateprogressbanner_action : mobileui_actions_application_appupdateprogressbanner_action,
	mobileui_actions_application_appupdatesuccessmessage_action : mobileui_actions_application_appupdatesuccessmessage_action,
	mobileui_actions_application_logout_action : mobileui_actions_application_logout_action,
	mobileui_actions_application_navtoabout_action : mobileui_actions_application_navtoabout_action,
	mobileui_actions_application_navtoactivitylog_action : mobileui_actions_application_navtoactivitylog_action,
	mobileui_actions_application_navtosupport_action : mobileui_actions_application_navtosupport_action,
	mobileui_actions_application_onwillupdate_action : mobileui_actions_application_onwillupdate_action,
	mobileui_actions_application_reset_action : mobileui_actions_application_reset_action,
	mobileui_actions_application_resetmessage_action : mobileui_actions_application_resetmessage_action,
	mobileui_actions_application_usermenupopover_action : mobileui_actions_application_usermenupopover_action,
	mobileui_actions_closemodalpage_cancel_action : mobileui_actions_closemodalpage_cancel_action,
	mobileui_actions_closemodalpage_complete_action : mobileui_actions_closemodalpage_complete_action,
	mobileui_actions_closepage_action : mobileui_actions_closepage_action,
	mobileui_actions_createentityfailuremessage_action : mobileui_actions_createentityfailuremessage_action,
	mobileui_actions_createentitysuccessmessage_action : mobileui_actions_createentitysuccessmessage_action,
	mobileui_actions_deleteconfirmation_action : mobileui_actions_deleteconfirmation_action,
	mobileui_actions_deleteentityfailuremessage_action : mobileui_actions_deleteentityfailuremessage_action,
	mobileui_actions_deleteentitysuccessmessage_action : mobileui_actions_deleteentitysuccessmessage_action,
	mobileui_actions_draftdiscardentity_action : mobileui_actions_draftdiscardentity_action,
	mobileui_actions_drafteditentity_action : mobileui_actions_drafteditentity_action,
	mobileui_actions_draftsaveentity_action : mobileui_actions_draftsaveentity_action,
	mobileui_actions_genericbannermessage_action : mobileui_actions_genericbannermessage_action,
	mobileui_actions_genericmessagebox_action : mobileui_actions_genericmessagebox_action,
	mobileui_actions_genericnavigation_action : mobileui_actions_genericnavigation_action,
	mobileui_actions_generictoastmessage_action : mobileui_actions_generictoastmessage_action,
	mobileui_actions_logging_loguploadfailure_action : mobileui_actions_logging_loguploadfailure_action,
	mobileui_actions_logging_loguploadsuccessful_action : mobileui_actions_logging_loguploadsuccessful_action,
	mobileui_actions_logging_uploadlog_action : mobileui_actions_logging_uploadlog_action,
	mobileui_actions_logging_uploadlogprogress_action : mobileui_actions_logging_uploadlogprogress_action,
	mobileui_actions_products_navtoproducts_create_action : mobileui_actions_products_navtoproducts_create_action,
	mobileui_actions_products_navtoproducts_detail_action : mobileui_actions_products_navtoproducts_detail_action,
	mobileui_actions_products_navtoproducts_edit_action : mobileui_actions_products_navtoproducts_edit_action,
	mobileui_actions_products_navtoproducts_list_action : mobileui_actions_products_navtoproducts_list_action,
	mobileui_actions_products_products_createentity_action : mobileui_actions_products_products_createentity_action,
	mobileui_actions_products_products_deleteentity_action : mobileui_actions_products_products_deleteentity_action,
	mobileui_actions_products_products_updateentity_action : mobileui_actions_products_products_updateentity_action,
	mobileui_actions_service_initializeonline_action : mobileui_actions_service_initializeonline_action,
	mobileui_actions_service_initializeonlinefailuremessage_action : mobileui_actions_service_initializeonlinefailuremessage_action,
	mobileui_actions_service_initializeonlinesuccessmessage_action : mobileui_actions_service_initializeonlinesuccessmessage_action,
	mobileui_actions_updateentityfailuremessage_action : mobileui_actions_updateentityfailuremessage_action,
	mobileui_actions_updateentitysuccessmessage_action : mobileui_actions_updateentitysuccessmessage_action,
	mobileui_globals_application_appdefinition_version_global : mobileui_globals_application_appdefinition_version_global,
	mobileui_globals_application_applicationname_global : mobileui_globals_application_applicationname_global,
	mobileui_globals_application_supportemail_global : mobileui_globals_application_supportemail_global,
	mobileui_globals_application_supportphone_global : mobileui_globals_application_supportphone_global,
	mobileui_i18n_i18n_properties : mobileui_i18n_i18n_properties,
	mobileui_jsconfig_json : mobileui_jsconfig_json,
	mobileui_pages_application_about_page : mobileui_pages_application_about_page,
	mobileui_pages_application_support_page : mobileui_pages_application_support_page,
	mobileui_pages_application_useractivitylog_page : mobileui_pages_application_useractivitylog_page,
	mobileui_pages_products_products_create_page : mobileui_pages_products_products_create_page,
	mobileui_pages_products_products_detail_page : mobileui_pages_products_products_detail_page,
	mobileui_pages_products_products_edit_page : mobileui_pages_products_products_edit_page,
	mobileui_pages_products_products_list_page : mobileui_pages_products_products_list_page,
	mobileui_rules_application_appupdatefailure_js : mobileui_rules_application_appupdatefailure_js,
	mobileui_rules_application_appupdatesuccess_js : mobileui_rules_application_appupdatesuccess_js,
	mobileui_rules_application_clientismultiusermode_js : mobileui_rules_application_clientismultiusermode_js,
	mobileui_rules_application_getclientsupportversions_js : mobileui_rules_application_getclientsupportversions_js,
	mobileui_rules_application_getclientversion_js : mobileui_rules_application_getclientversion_js,
	mobileui_rules_application_onwillupdate_js : mobileui_rules_application_onwillupdate_js,
	mobileui_rules_application_resetappsettingsandlogout_js : mobileui_rules_application_resetappsettingsandlogout_js,
	mobileui_rules_logging_loglevels_js : mobileui_rules_logging_loglevels_js,
	mobileui_rules_logging_settracecategories_js : mobileui_rules_logging_settracecategories_js,
	mobileui_rules_logging_setuserloglevel_js : mobileui_rules_logging_setuserloglevel_js,
	mobileui_rules_logging_togglelogging_js : mobileui_rules_logging_togglelogging_js,
	mobileui_rules_logging_tracecategories_js : mobileui_rules_logging_tracecategories_js,
	mobileui_rules_logging_userlogsetting_js : mobileui_rules_logging_userlogsetting_js,
	mobileui_rules_products_navtoproducts_edit_js : mobileui_rules_products_navtoproducts_edit_js,
	mobileui_rules_products_products_cancel_js : mobileui_rules_products_products_cancel_js,
	mobileui_rules_products_products_createentity_js : mobileui_rules_products_products_createentity_js,
	mobileui_rules_products_products_deleteconfirmation_js : mobileui_rules_products_products_deleteconfirmation_js,
	mobileui_rules_products_products_updateentity_js : mobileui_rules_products_products_updateentity_js,
	mobileui_services_service1_service : mobileui_services_service1_service,
	mobileui_styles_styles_css : mobileui_styles_styles_css,
	mobileui_styles_styles_json : mobileui_styles_styles_json,
	mobileui_styles_styles_less : mobileui_styles_styles_less,
	mobileui_styles_styles_nss : mobileui_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/MobileUI/Styles/Styles.css":
/*!******************************************************!*\
  !*** ./build.definitions/MobileUI/Styles/Styles.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/MobileUI/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MobileUI/Styles/Styles.less":
/*!*******************************************************!*\
  !*** ./build.definitions/MobileUI/Styles/Styles.less ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/MobileUI/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/MobileUI/Styles/Styles.nss":
/*!******************************************************!*\
  !*** ./build.definitions/MobileUI/Styles/Styles.nss ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/MobileUI/Pages/Application/About.page":
/*!*****************************************************************!*\
  !*** ./build.definitions/MobileUI/Pages/Application/About.page ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/MobileUI/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/MobileUI/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/MobileUI/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/MobileUI/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MobileUI/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/MobileUI/Pages/Application/Support.page":
/*!*******************************************************************!*\
  !*** ./build.definitions/MobileUI/Pages/Application/Support.page ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/MobileUI/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/MobileUI/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/MobileUI/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/MobileUI/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/MobileUI/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/MobileUI/Pages/Application/UserActivityLog.page":
/*!***************************************************************************!*\
  !*** ./build.definitions/MobileUI/Pages/Application/UserActivityLog.page ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/MobileUI/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/MobileUI/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/MobileUI/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/MobileUI/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/MobileUI/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/MobileUI/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/MobileUI/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/MobileUI/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/MobileUI/Pages/Products/Products_Create.page":
/*!************************************************************************!*\
  !*** ./build.definitions/MobileUI/Pages/Products/Products_Create.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/MobileUI/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/MobileUI/Rules/Products/Products_CreateEntity.js","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Products Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"ProductID","KeyboardType":"Number","_Name":"ProductID","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProductName","_Name":"ProductName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"UnitsInStock","KeyboardType":"Number","_Name":"UnitsInStock","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Category_CategoryID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{CategoryName}","ReturnValue":"{CategoryID}","Target":{"EntitySet":"Categories","Service":"/MobileUI/Services/service1.service"}},"_Name":"Category_CategoryID","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MobileUI/Pages/Products/Products_Detail.page":
/*!************************************************************************!*\
  !*** ./build.definitions/MobileUI/Pages/Products/Products_Detail.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Products Detail","DesignTimeTarget":{"Service":"/MobileUI/Services/service1.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/MobileUI/Rules/Products/NavToProducts_Edit.js","Position":"Right","SystemItem":"Edit"},{"OnPress":"/MobileUI/Rules/Products/Products_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProductName}","Subhead":"{ProductID}","BodyText":"","Footnote":"{Category_CategoryID}","Description":"{UnitsInStock}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"ProductID","Value":"{ProductID}"},{"KeyName":"ProductName","Value":"{ProductName}"},{"KeyName":"UnitsInStock","Value":"{UnitsInStock}"},{"KeyName":"Category_CategoryID","Value":"{Category_CategoryID}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Products_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MobileUI/Pages/Products/Products_Edit.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/MobileUI/Pages/Products/Products_Edit.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Products Detail","DesignTimeTarget":{"Service":"/MobileUI/Services/service1.service","EntitySet":"Products","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","Caption":"Cancel","OnPress":"/MobileUI/Rules/Products/Products_Cancel.js"},{"Position":"Right","SystemItem":"Save","OnPress":"/MobileUI/Rules/Products/Products_UpdateEntity.js"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"ProductID","_Name":"ProductID","Value":"{ProductID}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"ProductName","_Name":"ProductName","Value":"{ProductName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"UnitsInStock","_Name":"UnitsInStock","Value":"{UnitsInStock}","KeyboardType":"Number","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Category_CategoryID","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{CategoryName}","ReturnValue":"{CategoryID}","Target":{"EntitySet":"Categories","Service":"/MobileUI/Services/service1.service"}},"Value":"{Category_CategoryID}","_Name":"Category_CategoryID","_Type":"Control.Type.FormCell.ListPicker"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Products_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/MobileUI/Pages/Products/Products_List.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/MobileUI/Pages/Products/Products_List.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Products","ActionBar":{"Items":[{"OnPress":"/MobileUI/Actions/Products/NavToProducts_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{UnitsInStock}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/MobileUI/Actions/Products/NavToProducts_Detail.action","StatusImage":"","Title":"{ProductName}","Footnote":"{Category_CategoryID}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{ProductID}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Products","Service":"/MobileUI/Services/service1.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","ToolBar":{"Items":[{"_Name":"LogoutToolbarItem","_Type":"Control.Type.ToolbarItem","Caption":"Logout","OnPress":"/MobileUI/Actions/Logout.action"}]},"_Name":"Products_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"MobileUI","Version":"/MobileUI/Globals/Application/AppDefinition_Version.global","MainPage":"/MobileUI/Pages/Products/Products_List.page","OnLaunch":["/MobileUI/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/MobileUI/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/MobileUI/Actions/Service/InitializeOnline.action","Styles":"/MobileUI/Styles/Styles.less","Localization":"/MobileUI/i18n/i18n.properties","_SchemaVersion":"23.12","StyleSheets":{"Styles":{"css":"/MobileUI/Styles/Styles.css","ios":"/MobileUI/Styles/Styles.nss","android":"/MobileUI/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/AppUpdate.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/AppUpdate.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/MobileUI/Rules/Application/AppUpdateFailure.js","OnSuccess":"/MobileUI/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/AppUpdateFailureMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/AppUpdateFailureMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/AppUpdateProgressBanner.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/AppUpdateProgressBanner.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/MobileUI/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/AppUpdateSuccessMessage.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/AppUpdateSuccessMessage.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/Logout.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/Logout.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/NavToAbout.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/NavToAbout.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/MobileUI/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/NavToActivityLog.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/NavToActivityLog.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/MobileUI/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/NavToSupport.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/NavToSupport.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/MobileUI/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/OnWillUpdate.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/OnWillUpdate.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/Reset.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/Reset.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/ResetMessage.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/ResetMessage.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/MobileUI/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Application/UserMenuPopover.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Application/UserMenuPopover.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/MobileUI/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/MobileUI/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/MobileUI/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/MobileUI/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/MobileUI/Actions/Application/Logout.action","Title":"Logout","Visible":"/MobileUI/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/CloseModalPage_Cancel.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/CloseModalPage_Cancel.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/CloseModalPage_Complete.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/CloseModalPage_Complete.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/ClosePage.action":
/*!*************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/ClosePage.action ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/CreateEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/CreateEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/CreateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/CreateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/MobileUI/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/DeleteConfirmation.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/DeleteConfirmation.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/DeleteEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/DeleteEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/DeleteEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/DeleteEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/MobileUI/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/DraftDiscardEntity.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/DraftDiscardEntity.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Discard","Target":{"Service":"/MobileUI/Services/service1.service","EntitySet":"Products","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MobileUI/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Discarded"}},"OnFailure":"/MobileUI/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/DraftEditEntity.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/DraftEditEntity.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Edit","Target":{"Service":"/MobileUI/Services/service1.service","EntitySet":"Products","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MobileUI/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Edit"}},"OnFailure":"/MobileUI/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/DraftSaveEntity.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/DraftSaveEntity.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.DraftEnabled.Save","Target":{"Service":"/MobileUI/Services/service1.service","EntitySet":"Products","ReadLink":"{@odata.readLink}"},"ShowActivityIndicator":true,"ActionResult":{"_Name":"update"},"OnSuccess":{"Name":"/MobileUI/Actions/UpdateEntitySuccessMessage.action","Properties":{"Message":"Draft Saved"}},"OnFailure":"/MobileUI/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/GenericBannerMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/GenericBannerMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/GenericMessageBox.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/GenericMessageBox.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/GenericNavigation.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/GenericNavigation.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/MobileUI/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/GenericToastMessage.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/GenericToastMessage.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Logging/LogUploadFailure.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Logging/LogUploadFailure.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Logging/LogUploadSuccessful.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Logging/LogUploadSuccessful.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Logging/UploadLog.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Logging/UploadLog.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/MobileUI/Actions/Logging/LogUploadFailure.action","OnSuccess":"/MobileUI/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Logging/UploadLogProgress.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Logging/UploadLogProgress.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/MobileUI/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Products/NavToProducts_Create.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Products/NavToProducts_Create.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MobileUI/Pages/Products/Products_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Products/NavToProducts_Detail.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Products/NavToProducts_Detail.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MobileUI/Pages/Products/Products_Detail.page"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Products/NavToProducts_Edit.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Products/NavToProducts_Edit.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/MobileUI/Pages/Products/Products_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Products/NavToProducts_List.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Products/NavToProducts_List.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/MobileUI/Pages/Products/Products_List.page"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Products/Products_CreateEntity.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Products/Products_CreateEntity.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/MobileUI/Actions/CreateEntityFailureMessage.action","OnSuccess":"/MobileUI/Actions/CreateEntitySuccessMessage.action","Properties":{"ProductID":"#Control:ProductID/#Value","ProductName":"#Control:ProductName/#Value","UnitsInStock":"#Control:UnitsInStock/#Value","Category_CategoryID":"#Control:Category_CategoryID/#SelectedValue"},"Target":{"EntitySet":"Products","Service":"/MobileUI/Services/service1.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Products/Products_DeleteEntity.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Products/Products_DeleteEntity.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Products","Service":"/MobileUI/Services/service1.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/MobileUI/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/MobileUI/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Products/Products_UpdateEntity.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Products/Products_UpdateEntity.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Products","Service":"/MobileUI/Services/service1.service","ReadLink":"{@odata.readLink}"},"Properties":{"ProductID":"#Control:ProductID/#Value","ProductName":"#Control:ProductName/#Value","UnitsInStock":"#Control:UnitsInStock/#Value","Category_CategoryID":"#Control:Category_CategoryID/#SelectedValue"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/MobileUI/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/MobileUI/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Service/InitializeOnline.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Service/InitializeOnline.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/MobileUI/Services/service1.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/MobileUI/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/MobileUI/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Service/InitializeOnlineFailureMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/UpdateEntityFailureMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/UpdateEntityFailureMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Actions/UpdateEntitySuccessMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Actions/UpdateEntitySuccessMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/MobileUI/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/MobileUI/Globals/Application/AppDefinition_Version.global":
/*!*************************************************************************************!*\
  !*** ./build.definitions/MobileUI/Globals/Application/AppDefinition_Version.global ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MobileUI/Globals/Application/ApplicationName.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/MobileUI/Globals/Application/ApplicationName.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MobileUI/Globals/Application/SupportEmail.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Globals/Application/SupportEmail.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MobileUI/Globals/Application/SupportPhone.global":
/*!****************************************************************************!*\
  !*** ./build.definitions/MobileUI/Globals/Application/SupportPhone.global ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/MobileUI/Services/service1.service":
/*!**************************************************************!*\
  !*** ./build.definitions/MobileUI/Services/service1.service ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"../service/bookshop/","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/MobileUI/Styles/Styles.json":
/*!*******************************************************!*\
  !*** ./build.definitions/MobileUI/Styles/Styles.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/MobileUI/jsconfig.json":
/*!**************************************************!*\
  !*** ./build.definitions/MobileUI/jsconfig.json ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map