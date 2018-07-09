Ext.define('StudentsListApp.view.StudentsList' ,{
    extend: 'Ext.tab.Panel',
    alias: 'widget.studentslist',
    title: 'Список студентов',
    id : 'panelMain',
    items:[{
        name: 'studentItem',
        alias: 'widget.studentsGrid',
        title: 'Студенты',
        xtype: 'studentsGrid',
        id : 'panelStudent',
    },{
        name: 'groupItem',
        alias: 'widget.groupsGrid',
        title: 'Группы',
        xtype: 'groupsGrid',
        id : 'panelGroup',
    },
    ],
    renderTo: Ext.getBody(),

    initComponent: function() {
       /*
        this.items[0].columns = [
            {header: 'Id', dataIndex: 'id', flex: 1, hidden: false, width:55,},
            {header: 'ФИО',  dataIndex: 'name',  flex: 1},
            {header: 'Возраст',  dataIndex: 'age',  flex: 1},
            {header: 'Группа', dataIndex: 'group', flex: 1},
            {header: 'Id группы', dataIndex: 'id_group', flex: 0, hidden: true},
        ];
        this.items[1].columns = [
            {header: 'Id', dataIndex: 'id', flex: 1, hidden: false, width:10 },
            {header: 'Группа',  dataIndex: 'name',  flex: 1, tpl:'<b>{name} </b>'},
        ];
        */


        this.callParent(arguments);
    }

});
