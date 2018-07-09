Ext.define('StudentsListApp.controller.Students', {
    extend: 'Ext.app.Controller',

    views: ['StudentsList','StudentsGrid','GroupsGrid', 'Student', 'Group'],
    stores: ['StudentStore', 'GroupStore'],
    models: ['Student', 'Group'],
    init: function() {

        this.control({

            'studentsGrid': {
                itemdblclick: this.editStudent
            },
            'groupsGrid': {
                itemdblclick: this.editGroup
            },
            'studentwindow button[action=new]': {
                click: this.createStudent
            },
            'groupwindow button[action=new]': {
                click: this.createGroup
            },
            'studentwindow button[action=saveStudent]': {
                click: this.updateStudent
            },
            'groupwindow button[action=saveGroup]': {
                click: this.updateGroup
            },
            'studentwindow button[action=delete]': {
                click: this.deleteStudent
            },
            'groupwindow button[action=delete]': {
                click: this.deleteGroup
            },
            'studentwindow button[action=clear]': {
                click: this.clearForm
            },
        });
    },
    // обновление студенты
    updateStudent: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
            values.id=id;
            Ext.Msg.alert('Обновление студенты',id);
        Ext.Ajax.request({
            url: 'app/data/updateStudent.php',
            params: values,
            success: function(response){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    var store = Ext.widget('studentsGrid').getStore();
                    store.load();
                    Ext.Msg.alert('Обновление',data.message);
                }
                else{
                    Ext.Msg.alert('Обновление','Не удалось обновить студента ' + data.message);
                }
            }
        });

    },
    // обновление группы
    updateGroup: function(button) {
       var win    = button.up('window'),
           form   = win.down('form'),
           values = form.getValues(),
           id = form.getRecord().get('id');
           values.id=id;
           Ext.Ajax.request({
               url: 'app/data/updateGroup.php',
               params: values,
               success: function(response){
                   var data=Ext.decode(response.responseText);
                   if(data.success){
                       var store = Ext.widget('groupsGrid').getStore();
                       store.load();
                       Ext.Msg.alert('Обновление',data.message);
                   }
                   else{
                       Ext.Msg.alert('Обновление','Не удалось обновить группу '+ data.message);
                   }
               }
           });
    },
    // создание
    createStudent: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: 'app/data/createStudent.php',
            params: values,
            success: function(response, options){
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Создание',data.message);
                    var store = Ext.widget('studentsGrid').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Создание','Не удалось добавить студента' + data.message);
                }
            }
        });
    },
    createGroup: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: 'app/data/createGroup.php',
            params: values,
            success: function(response, options){
                Ext.Msg.alert('Создание','eeeeeee');
                var data=Ext.decode(response.responseText);
                if(data.success){
                    Ext.Msg.alert('Создание',data.message);
                    var store = Ext.widget('groupsGrid').getStore();
                    store.load();
                }
                else{
                    Ext.Msg.alert('Создание','Не удалось добавить группу' + data.message);
                }
            }
        });
    },
    // удаление
    deleteStudent: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            id = form.getRecord().get('id');
        var yn = false;
        Ext.MessageBox.show({
                  title:'Запрос на продолжение',
                  msg: 'Удалить студента?',
                  icon: Ext.Msg.QUESTION,
                  buttons: Ext.Msg.YESNO,
                  fn: function(btn) {
                           yn = (btn == "yes");
                           if (!yn) return;
                           Ext.Ajax.request({
                               url: 'app/data/deleteStudent.php',
                               params: {id:id},
                               success: function(response){
                                   var data=Ext.decode(response.responseText);
                                   if(data.success){
                                       Ext.Msg.alert('Удаление',data.message);
                                       var store = Ext.widget('studentsGrid').getStore();
                                       store.load();
                                   }
                                   else{
                                       Ext.Msg.alert('Удаление','Не удалось удалить студента ' + data.message);
                                   }
                               }
                           });
                  }
        })
    },
    deleteGroup: function(button) {
      var yn = false;
      Ext.MessageBox.show({
                title:'Запрос на продолжение',
                msg: 'Удалить группу?',
                icon: Ext.Msg.QUESTION,
                buttons: Ext.Msg.YESNO,
                fn: function(btn) {
                         yn = (btn == "yes");
                         if (!yn) return;
                           var win    = button.up('window'),
                               form   = win.down('form'),
                               id = form.getRecord().get('id');
                           Ext.Ajax.request({
                               url: 'app/data/deleteGroup.php',
                               params: {id:id},
                               success: function(response){
                                   var data=Ext.decode(response.responseText);
                                   if(data.success){
                                       Ext.Msg.alert('Удаление',data.message);
                                       var store = Ext.widget('groupsGrid').getStore();
                                       store.load();
                                   }
                                   else{
                                       Ext.Msg.alert('Удаление','Не удалось удалить группу ' + data.message);
                                   }
                               }
                           });
                }
      })
    },
    clearForm: function(grid, record) {
        var view = Ext.widget('studentwindow');
        view.down('form').getForm().reset();
    },
    editStudent: function(grid, record) {
        var view = Ext.widget('studentwindow');
        view.down('form').loadRecord(record);
    },
    editGroup: function(grid, record) {
      var view = Ext.widget('groupwindow');
      view.down('form').loadRecord(record);
    }
});
