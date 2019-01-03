({
    createExpense: function(component, newExpense) {
        var createEvent = component.getEvent("createExpense");
        createEvent.setParams({ "expense": newExpense });
        createEvent.fire();
        component.set("v.newExpense", { 'sobjectType': 'Expense__c',
                                            'Name': ''});
    },

})
