({
    // original version 1 of creating expense record locally    
    /**
     *  createExpense: function(component, expense) {
            var theExpenses = component.get("v.expenses");
    
            // Copy the expense to a new object
            // THIS IS A DISGUSTING, TEMPORARY HACK
            var newExpense = JSON.parse(JSON.stringify(expense));
    
            theExpenses.push(newExpense);
            component.set("v.expenses", theExpenses);
        }
     */

    //new version 2
    /**
     * We’re going to read values from the form, 
     * create a new expense record locally, 
     * send that record off to be saved on the server, 
     * and then, when the server tells us it’s saved, 
     * update the user interface, using the record returned from the server.
     */       
    /**     
     *  createExpense: function(component, expense) {
            
            // We begin by creating the action, 
            // with component.get("c.saveExpense") getting the new Apex controller method.
            var action = component.get("c.saveExpense");

            // Next we attach a data payload to the action. 
            // We need to send the data for the new expense up to the server. 
            // You just use action.setParams() 
            // and provide a JSON-style object with parameter name-parameter value pairs. 
            // The one trick, and it’s important, 
            // is that your parameter name must match the parameter name used in your Apex method declaration.
            
            action.setParams({
                "expense": expense
            });

            action.setCallback(this, function(response){
                var state = response.getState();
                if (state === "SUCCESS") {
                    var theExpenses = component.get("v.expenses");
                    theExpenses.push(response.getReturnValue());
                    component.set("v.expenses", theExpenses);
                }
            });
            $A.enqueueAction(action);
        },

        updateExpense: function(component, expense) {
            var action = component.get("c.saveExpense");
            action.setParams({
                "expense": expense
            });
            action.setCallback(this, function(response){
                var state = response.getState();
                if (state === "SUCCESS") {
                    // do nothing!
                }
            });
            $A.enqueueAction(action);
        },
     */

    //new version 3
    //refactor the functions
    saveExpense: function(component, expense, callback) {
        var action = component.get("c.saveExpense");
        action.setParams({
            "expense": expense
        });
        if (callback) {
            action.setCallback(this, callback);
        }
        $A.enqueueAction(action);
    },

    createExpense: function(component, expense) {
        this.saveExpense(component, expense, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
            }
        });
    },
    
    updateExpense: function(component, expense) {
        this.saveExpense(component, expense);
    },


})
