/*
var filters = {
        ftype: 'filters',
        encode: false,
        local: true
};
*/
Ext.define('StudentsListApp.view.StudentsGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.studentsGrid',
    title : 'Студенты',
    store: 'StudentStore',
    /*features: filters],*/
    plugins: 'gridfilters',

    initComponent: function() {
        this.columns = [
          {header: 'Id', dataIndex: 'id', flex: 1, hidden: true, width:55,},
          {header: 'ФИО',  dataIndex: 'name',  flex: 1,
           filter: { 
                 type: 'string', 
                 itemDefaults: { } 
                },
          },
          {header: 'Возраст',  dataIndex: 'age',  flex: 1},
          {header: 'Группа', dataIndex: 'group', flex: 1, filterable: true, 
           filter: { 
                 type: 'list', 
                 /*store: 'GroupStore',*/
                },
          },
          {header: 'Id группы', dataIndex: 'id_group', flex: 0, hidden: true},
        ];

        this.callParent(arguments);
     }

});
