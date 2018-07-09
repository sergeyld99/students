Ext.define('StudentsListApp.view.Student', {
    extend: 'Ext.window.Window',
    alias: 'widget.studentwindow',

    title: 'Студент',
    layout: 'fit',
    autoShow: true,
    width: 400,
    height: 260,

    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [{
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: 'ФИО'
                    },{
                        xtype: 'numberfield',
                        name : 'age',
                        fieldLabel: 'Возраст',
                        minvalue: 16,
                        maxvalue: 35,
                    },{
                        xtype: 'combobox',
                        name : 'id_group',
                        store: 'GroupStore',
                        displayField: 'name',
                        valueField: 'id',
                        fieldLabel: 'Группа',
                }]
            }];
        this.dockedItems=[{
            xtype:'toolbar',
            docked: 'top',
            items: [{
                text:'Создать',
                iconCls:'new-icon',
                action: 'new'
            },{
                text:'Сохранить',
                iconCls:'save-icon',
                action: 'saveStudent'
            },{
                text:'Удалить',
                iconCls:'delete-icon',
                action: 'delete'
            }]
        }];
        this.buttons = [{
                text: 'Очистить',
                scope: this,
                action: 'clear'
        }];

        this.callParent(arguments);
    }
});
