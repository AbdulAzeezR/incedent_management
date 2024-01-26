export default function Cancel(clientAPI) {
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