export default function CreateEntity(clientAPI) {
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