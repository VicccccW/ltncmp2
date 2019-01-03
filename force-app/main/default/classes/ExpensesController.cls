public with sharing class ExpensesController {
    // STERN LECTURE ABOUT WHAT'S MISSING HERE COMING SOON
    @AuraEnabled
    // The static keyword. 
    // All @AuraEnabled controller methods must be static methods, 
    // and either public or global scope.
    public static List<Expense__c> getExpenses() {
        // Perform isAccessible() checking first, then 'return ...'
        // Using the with sharing keywords is one of the essential security measures 
        // you need to take when writing server-side controller code. 
        // However, it’s a measure that’s necessary, but not sufficient. 
        // Do you see the comments about performing isAccessible() and isUpdatable() checks? 
        // with sharing only takes you so far. 
        // In particular, you need to implement object- and field-level security 
        // (which you’ll frequently see abbreviated to FLS) yourself.
        return [SELECT Id, Name, Amount__c, Client__c, Date__c, 
                       Reimbursed__c, CreatedDate 
                FROM Expense__c];
    }

    /***
    // another version
    
    @AuraEnabled
    public static List<Expense__c> getExpenses() {
        
        // Check to make sure all fields are accessible to this user
        String[] fieldsToCheck = new String[] {
            'Id', 'Name', 'Amount__c', 'Client__c', 'Date__c', 
            'Reimbursed__c', 'CreatedDate'
        };
        
        Map<String,Schema.SObjectField> fieldDescribeTokens = 
            Schema.SObjectType.Expense__c.fields.getMap();
        
        for(String field : fieldsToCheck) {
            if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
            }
        }
        
        // OK, they're cool, let 'em through
        return [SELECT Id, Name, Amount__c, Client__c, Date__c, 
                       Reimbursed__c, CreatedDate 
                FROM Expense__c];
    }
    ***/

    @AuraEnabled
    public static Expense__c saveExpense(Expense__c expense) {
        // Perform isUpdatable() checking first, then
        upsert expense;
        return expense;
    }
}