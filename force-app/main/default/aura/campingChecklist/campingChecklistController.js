({
    handleItemCreate: function(component, event, helper) {
        var newItem = event.getParam("item");
        helper.createItem(component, newItem);
    },

    handleItemUpdate: function(component, event, helper) {
        var updatedItem = event.getParam("item");
        helper.updateItem(component, updatedItem);
    },

    doInit: function(component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    }
})
