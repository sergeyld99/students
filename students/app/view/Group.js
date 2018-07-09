Ext.define('StudentsListApp.view.Group', {
    extend: 'Ext.window.Window',
    alias: 'widget.groupwindow',

    title: 'Группа',
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
                        fieldLabel: 'Группа'
                    },]
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
                action: 'saveGroup'
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
