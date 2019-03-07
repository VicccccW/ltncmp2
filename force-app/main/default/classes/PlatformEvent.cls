public class PlatformEvent {

    public static void publishContactLocationUpdated(List<Contact> contacts) {
        List<Contact_Location_Updated__e> notifications = new List<Contact_Location_Updated__e>();

        for(Contact con : contacts) {
            notifications.add(
                new Contact_Location_Updated__e(
                    Account_Id__c = (String)con.AccountId,
                    Contact_Id__c = (String)con.Id,
                    ROI_City__c = con.ROI_City__c,
                    ROI_Latitude__c = con.ROI_Location__Latitude__s,
                    ROI_Longitude__c = con.ROI_Location__Longitude__s
                ));
        }

        List<Database.SaveResult> results = EventBus.publish(notifications);

        for (Database.SaveResult result : results) {
            if (!result.isSuccess()) {
                for (Database.Error error : result.getErrors()) {
                    System.debug('Error returned: ' +
                        error.getStatusCode() +' - '+
                        error.getMessage());
                }
            } else {
                System.debug('Successfully published event.');
            }
        }
    }

}
