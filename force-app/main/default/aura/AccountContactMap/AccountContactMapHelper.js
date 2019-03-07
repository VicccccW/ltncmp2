({
    // subscribe : function (component, event, helper) {
    //     // Get the empApi component.
    //     const empApi = component.find('empApi');
    //     // Get the channel from the attribute.
    //     const channel = '/event/Contact_Location_Updated__e';
    //     // Subscription option to get only new events.
    //     const replayId = -1;

    //     // Callback function to be passed in the subscribe call.
    //     // After an event is received, this callback prints the event
    //     // payload to the console. A helper method displays the message
    //     const callback = function (eventReceived) {
    //         console.log('Event Received : ' + JSON.stringify(eventReceived));
    //         console.log('data is ', JSON.stringify(eventReceived.data));
    //         console.log('payload is ', JSON.stringify(eventReceived.data.payload));
    //         console.log('ROI_Latitude__c is ', JSON.stringify(eventReceived.data.payload.ROI_Latitude__c));
    //         console.log('ROI_Longitude__c is ', JSON.stringify(eventReceived.data.payload.ROI_Longitude__c));
    //         helper.onReceiveNotification(component, eventReceived);
    //     };

    //     // Subscribe to the channel and save the returned subscription object.
    //     empApi.subscribe(channel, replayId, $A.getCallback(callback));
    // },

    // Client-side function that displays the platform event message
    // in the console app and displays a toast if not muted.
    // onReceiveNotification : function (component, eventReceived) {
    //     // Extract map data from platform event
    //     const mapMarkers = {
    //         location: {
    //             'Latitude': eventReceived.data.payload.ROI_Latitude__c,
    //             'Longitude': eventReceived.data.payload.ROI_Longitude__c
    //         },
    //         description: 'Account Latest Contact Location'
    //     }

    //     component.set('v.zoomLevel', 10);
    //     component.set('v.mapMarkers', mapMarkers);

        // Display notification in a toast
        //this.displayToast(component, 'info', 'Map Updated');
    //},

    // Displays the given toast message.
    // displayToast : function (component, type, message) {
    //     const toastEvent = $A.get('e.force:showToast');
    //     toastEvent.setParams({
    //     type: type,
    //     message: message
    //     });
    //     toastEvent.fire();
    // }
})