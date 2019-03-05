public with sharing class AccountContactMapController {
    
    @AuraEnabled
    public static Account getAccount (Id recordId) {
        return [SELECT Id
                        ,Name
                        ,ROI_City__c
                        ,ROI_Location__Latitude__s
                        ,ROI_Location__Longitude__s
                FROM Account WHERE Id =: recordId
                LIMIT 1];
    }
}