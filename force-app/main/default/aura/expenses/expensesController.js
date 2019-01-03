({
    handleUpdateExpense: function(component, event, helper) {
        var updatedExp = event.getParam("expense");
        helper.updateExpense(component, updatedExp);
    },
    
    handleCreateExpense: function(component, event, helper) {
        var newExpense = event.getParam("expense");
        helper.createExpense(component, newExpense);
    },

    /**
     * here’s the outline of what this code does:
     * 1. Create a remote method call.
     * 2. Set up what should happen when the remote method call returns.
     * 3. Queue up the remote method call.
     * c.xxxx in Controller Code context represents Server-side controller
     * step is 1 --> 3 --> 2
     * Load expenses from Salesforce
     */
    doInit: function(component, event, helper) {
        // Create the action
        // component.get("c.whatever") returns a reference to an action available in the controller. 
        // In this case, it returns a remote method call to our Apex controller. 
        // This is how you create a call to an @AuraEnabled method.
        var action = component.get("c.getExpenses");
        // Add callback behavior for when response is received
        // 'this' is the scope in which the callback will execute; 
        // here 'this' is the action handler function itself. 
        // Think of it as an address, or...maybe a number. 
        // The function is what gets called when the server response is returned. So:
        //              action.setCallback(scope, callbackFunction);
        // Callback functions, function(response), take a single parameter, response, 
        // which is an opaque object that provides the returned data, 
        // if any, and various details about the status of the request.
        // In this specific callback function, we do the following.
        // 1. Get the state of the response.
        // 2. If the state is SUCCESS, that is, our request completed as planned, then:
        // 3. Set the component’s expenses attribute to the value of the response data.
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.expenses", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        // The next line that actually runs is this one.
        // We saw $A briefly before.
        // It’s a framework global variable that provides a number of important functions and services. 
        // $A.enqueueAction(action) adds the server call 
        // that we’ve just configured to the Lightning Components framework request queue. 
        // It, along with other pending server requests, 
        // will be sent to the server in the next request cycle.
        // It queues up the server request.
        // As far as your controller action is concerned, that’s the end of it.
        // You’re not guaranteed when, or if, you’ll hear back.
        $A.enqueueAction(action);
    },
})
