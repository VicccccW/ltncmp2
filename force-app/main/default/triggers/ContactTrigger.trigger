trigger ContactTrigger on Contact (after insert, after update) {
    if(Trigger.isAfter) {
        PlatformEvent.publishContactLocationUpdated(Trigger.new);
    }
}