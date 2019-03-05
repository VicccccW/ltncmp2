({
    doInit : function (cmp, event, helper) {

        var action = cmp.get("c.getAccount");
        action.setParams({
            "recordId" : cmp.get("v.recordId")
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
                ]
                cmp.set('v.zoomLevel', 10);
                cmp.set('v.mapMarkers', mapMarkers);
            }

        });
        
        $A.enqueueAction(action);
    }
})