export default function UpdateEntity(clientAPI) {
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