({
    /** 
     *  createItem: function(component, item) {
        var theItems = component.get("v.items");
 
        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        var newItem = JSON.parse(JSON.stringify(item));
 
        theItems.push(newItem);
        component.set("v.items", theItems);
        component.set("v.newItem", { 'sobjectType': 'Camping_Item__c',
                                            'Name': ''});
    },
    */

    /** 
     *  createItem: function(component, item) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var theItems = component.get("v.items");
                theItems.push(response.getReturnValue());
                component.set("v.items", theItems);
                component.set("v.newItem", { 'sobjectType': 'Camping_Item__c',
                                            'Name': ''});
            }
        });
        $A.enqueueAction(action);
    },
    */

    createItem: function(component, newItem) {
        var createEvent = component.getEvent("itemCreateEve");
        createEvent.setParams({ "item": newItem });
        createEvent.fire();
        component.set("v.newItem", { 'sobjectType': 'Camping_Item__c',
                                            'Name': ''});
    },
})