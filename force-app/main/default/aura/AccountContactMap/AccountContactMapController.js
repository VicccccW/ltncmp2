({
    doInit : function (component, event, helper) {

        var action = component.get("c.getAccount");
        var recordId = component.get("v.recordId");

        action.setParams({
            "recordId" : recordId
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log("state is " + state);
            console.log("data is " + JSON.stringify(response.getReturnValue()));
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                console.log("data is " + data);
                var mapMarkers = [
                    {
                        location: {
                            'Latitude': data.ROI_Location__Latitude__s,
                            'Longitude': data.ROI_Location__Longitude__s
                        },
                        title: data.Name,
                        description: 'Account Latest Contact Location'
                    }
                ];
                component.set('v.zoomLevel', 10);
                component.set('v.mapMarkers', mapMarkers);
            }
        });
        
        $A.enqueueAction(action);

        // const empApi = component.find('empApi');
        // const errorHandler = function (error) {
        //     console.error('EMP API error: ', JSON.stringify(error));
        // };
    //     const channel = '/event/Contact_Location_Updated__e';
    //     const replayId = -1;

    //     empApi.onError($A.getCallback(error => {
    //         console.error('EMP API error: ', error);
    //     }));
        // empApi.onError($A.getCallback(errorHandler));
        // helper.subscribe(component, event, helper);

    //     empApi.subscribe(channel, replayId, $A.getCallback(eventReceived  => {
    //         console.log('Received event ', JSON.stringify(eventReceived));
    //         console.log('data is ', JSON.stringify(eventReceived.data));
    //         console.log('payload is ', JSON.stringify(eventReceived.data.payload));
    //         console.log('ROI_Latitude__c is ', JSON.stringify(eventReceived.data.payload.ROI_Latitude__c));
    //         console.log('ROI_Longitude__c is ', JSON.stringify(eventReceived.data.payload.ROI_Longitude__c));
    //         var mapMarkers = [
    //             {
    //                 location: {
    //                     'Latitude': eventReceived.data.payload.ROI_Latitude__c,
    //                     'Longitude': eventReceived.data.payload.ROI_Longitude__c
    //                 },
    //                 description: 'Account Latest Contact Location'
    //             }
    //         ];
    //         cmp.set('v.zoomLevel', 10);
    //         cmp.set('v.mapMarkers', mapMarkers);
    //     }));
     }
})