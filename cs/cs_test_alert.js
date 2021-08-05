/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 */
define([], function () {
    function pageInit(context) {
        alert("Enter totals carefully");
    }

    function saveRecord(context) {
        return confirm("Is the balance correct?");
    }

    function fieldChanged(context) {
        alert("Check the field again");
        return true;
    }

    return {
        pageInit: pageInit,
        saveRecord: saveRecord,
        fieldChanged: fieldChanged,
    };
});
