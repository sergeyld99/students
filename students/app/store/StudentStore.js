Ext.define('StudentsListApp.store.StudentStore', {
    extend: 'Ext.data.Store',
    model: 'StudentsListApp.model.Student',
    autoLoad: true,
    storeId: 'StudentStore',
    proxy: {
        type: 'ajax',
        url: 'app/data/student.php',
        reader: {
            type: 'json',
            root: 'students',
            successProperty: 'success'
        }
    }
});
