public with sharing class CampingFormController {
    
    @AuraEnabled
    public static List<Camping_Item__c> getItems() {
        return [SELECT Id, Name, Price__c, Quantity__c, Packed__c 
                FROM Camping_Item__c
                ORDER BY CreatedDate DESC
                LIMIT 10 ];
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c item) {
        upsert item;
        return item;
    }

}
