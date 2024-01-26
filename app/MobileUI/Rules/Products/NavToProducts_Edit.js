export default function NavToEdit(clientAPI) {
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