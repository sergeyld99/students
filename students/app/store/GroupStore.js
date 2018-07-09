Ext.define('StudentsListApp.store.GroupStore', {
    extend: 'Ext.data.Store',
    model: 'StudentsListApp.model.Group',
    autoLoad: true,
    storeId: 'GroupStore',
    proxy: {
        type: 'ajax',
        url: 'app/data/group.php',
        reader: {
            type: 'json',
            root: 'groups',
            successProperty: 'success'
        }
    }
});
