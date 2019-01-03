({
    /** 
     * createItem: function(component, item) {

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
            }
        });
        $A.enqueueAction(action);
    },
    */


    saveItem: function(component, item, callback) {
        var action = component.get("c.saveItem");
        action.setParams({
            "item": item
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    },
    createItem: function(component, item) {
        this.saveItem(component, item, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
    },
    updateItem: function(component, item) {
        this.saveItem(component, item);
    },
})
