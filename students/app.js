Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'StudentsListApp',
    appFolder: 'app',
    controllers: ['StudentsListApp.controller.Students'],
     
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'studentslist',
                //xtype: 'studentsGrid',
                //StudentsList_back.js
                //html: '<h2>Студенты</h2>',
            }
        });
    }
});
