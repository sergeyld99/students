Ext.define('StudentsListApp.view.GroupsGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.groupsGrid',
    title : 'Группы',
    store: 'GroupStore',

    initComponent: function() {
        this.columns = [
            {header: 'Id', dataIndex: 'id', flex: 1, hidden: true, width:10 },
            {header: 'Группа',  dataIndex: 'name',  flex: 1, tpl:'<b>{name} </b>'},
        ];

        this.callParent(arguments);
     }

});
