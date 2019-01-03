({
    doInit: function(component, event, helper) {
        //get the item packed status
        var packed = component.get("v.item.Packed__c");
        //get the toggle input component instance
        //https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/js_cb_find_by_id.htm
        var packedCmps = component.find('packed');
        var unpackCmp = component.find('unpack');
        if(packed) {
            for(var i = 0; i< packedCmps.length; i++) {
                packedCmps[i].set("v.disabled", true);
            }
                unpackCmp.set("v.disabled", false);
            
        } else {
            for(var i = 0; i< packedCmps.length; i++) {
                packedCmps[i].set("v.disabled", false);
            }
                unpackCmp.set("v.disabled", true); 
        }
    },

    /**   
     *  packItem: function(component, event, helper) {
        component.set("v.item.Packed__c",true);
        var packedCmps = component.find('packed');
        for(var i = 0; i< packedCmps.length; i++) {
            console.log("packedCmp is " + packedCmps[i].get("v.disabled"));
            packedCmps[i].set("v.disabled", true);
        } 
    },
    */ 

    packItem: function(component, event, helper) {

        component.set("v.item.Packed__c",true);
        var packedCmps = component.find('packed');
        var unpackCmp = component.find('unpack');
        for(var i = 0; i < packedCmps.length; i++) {
            //console.log("packedCmp is " + packedCmps[i].get("v.disabled"));
            packedCmps[i].set("v.disabled", true);
        } 
        unpackCmp.set("v.disabled", false);
        var item = component.get("v.item");
        var itemUpdateEve = component.getEvent("itemUpdateEve");
        itemUpdateEve.setParams({ "item": item });
        itemUpdateEve.fire();
    },
        
    unpackItem: function(component, event, helper) {

        component.set("v.item.Packed__c",false);
        var packedCmps = component.find('packed');
        var unpackCmp = component.find('unpack');
        for(var i = 0; i < packedCmps.length; i++) {
            packedCmps[i].set("v.disabled", false);
        } 
        unpackCmp.set("v.disabled", true);
        var item = component.get("v.item");
        var itemUpdateEve = component.getEvent("itemUpdateEve");
        itemUpdateEve.setParams({ "item": item });
        itemUpdateEve.fire();
    }

})