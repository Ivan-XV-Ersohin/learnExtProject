Ext.onReady(function () {
    Ext.define('TechZoo.model.Book', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'id', type: 'int'},
            {name: 'title', type: 'string'},
            {name: 'author', type: 'string'},
            {name: 'price', type: 'int'},
            {name: 'qty', type: 'int'}
        ]
    });

    Ext.define('TechZoo.store.Books', {
        extend: 'Ext.data.Store',
        storeId: 'bookStore',
        model: 'TechZoo.model.Book',
        fields: ['id', 'title', 'author', 'price', 'qty'],
        proxy: {
            type: 'ajax',
            url: '/SpringMVC-ExtJS-CRUD/api/book/loadBooks',
            reader: {
                type: 'json',
                root: 'books'
            }
        },
        autoLoad: true
    });

    Ext.define('TechZoo.view.BooksList', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.bookslist',
        title: 'Books List - (ExtJS SpringMVC example - @ Tousif Khan)',
        store: 'Books',
        initComponent: function () {
            this.tbar = [{
                text: 'Add Book',
                action: 'add',
                iconCls: 'book-add'
            }];
            this.columns = [
                {header: 'Title', dataIndex: 'title', flex: 1},
                {header: 'Author', dataIndex: 'author'},
                {header: 'Price', dataIndex: 'price', width: 60},
                {header: 'Quantity', dataIndex: 'qty', width: 80},
                {
                    header: 'Action', width: 50,
                    renderer: function (v, m, r) {
                        var id = Ext.id();
                        Ext.defer(function () {
                                Ext.widget('image', {
                                    renderTo: id,
                                    name: 'delete',
                                    src: 'resources/images/book_delete.png',
                                    listeners: {
                                        afterrender: function (me) {
                                            me.getEl().on('click', function () {
                                                var grid = Ext.ComponentQuery.query('bookslist')[0];
                                                if (grid) {
                                                    var sm = grid.getSelectionModel();
                                                    var rs = sm.getSelection();
                                                    if (!rs.length) {
                                                        Ext.Msg.alert('Info', 'No Book Selected');
                                                        return;
                                                    }
                                                    Ext.Msg.confirm('Remove Book', 'Are you sure you want to delete?', function (button) {
                                                        if (button == 'yes') {
                                                            var book = rs[0].getData();
                                                            Ext.Ajax.request({
                                                                url: '/SpringMVC-ExtJS-CRUD/api/book/delete',
                                                                method: 'POST',
                                                                jsonData: book,
                                                                success: function (response) {
                                                                    var grid = Ext.ComponentQuery.query('bookslist')[0];
                                                                    grid.getStore().load();
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }
                                });
                            },
                            50);
                        return Ext.String.format('<div id="{0}"></div>', id);
                    }
                }
            ];
            this.callParent(arguments);
        }
    });

    Ext.define('TechZoo.view.BooksForm', {
        extend: 'Ext.window.Window',
        alias: 'widget.booksform',
        title: 'Add Book',
        width: 350,
        layout: 'fit',
        resizable: false,
        closeAction: 'hide',
        modal: true,
        config: {
            recordIndex: 0,
            action: ''
        },
        items: [
            {
                xtype: 'form',
                layout: 'anchor',
                bodyStyle: {
                    background: 'none',
                    padding: '10px',
                    border: '0'
                },
                defaults: {
                    xtype: 'textfield',
                    anchor: '100%'
                },
                items: [
                    {
                        name: 'title',
                        fieldLabel: 'Book Title'
                    }, {
                        name: 'author',
                        fieldLabel: 'Author Name'
                    }, {
                        name: 'price',
                        fieldLabel: 'Price'
                    }, {
                        name: 'qty',
                        fieldLabel: 'Quantity'
                    }
                ]
            }
        ],
        buttons: [
            {
            text: 'OK',
            action: 'add'
        }, {
            text: 'Reset',
            handler: function () {
                this.up('window').down('form').getForm().reset();
            }
        }, {
            text: 'Cancel',
            handler: function () {
                this.up('window').close();
            }
        }]
    });

    Ext.define('TechZoo.controller.Books', {
        extend: 'Ext.app.Controller',
        stores: ['Books'],
        views: ['BooksList', 'BooksForm'],
        refs: [{
            ref: 'formWindow',
            xtype: 'booksform',
            selector: 'booksform',
            autoCreate: true
        }],
        init: function () {
            this.control({
                'bookslist > toolbar > button[action=add]': {
                    click: this.showAddForm
                },
                'bookslist': {
                    itemdblclick: this.onRowdblclick
                },
                'booksform button[action=add]': {
                    click: this.doAddBook
                }
            });
        },
        onRowdblclick: function (me, record, item, index) {
            var win = this.getFormWindow();
            win.setTitle('Edit Book');
            win.setAction('edit');
            win.setRecordIndex(index);
            win.down('form').getForm().setValues(record.getData());
            win.show();
        },
        showAddForm: function () {
            var win = this.getFormWindow();
            win.setTitle('Add Book');
            win.setAction('add');
            win.down('form').getForm().reset();
            win.show();
        },
        doAddBook: function () {
            var win = this.getFormWindow();
            var store = this.getBooksStore();
            var values = win.down('form').getValues();

            var action = win.getAction();
            //   var book = Ext.create('TechZoo.model.Book', values);
            var url = '';
            if (action == 'edit') {
                url = '/SpringMVC-ExtJS-CRUD/api/book/updateBook';
            }
            else {
                url = '/SpringMVC-ExtJS-CRUD/api/book/save';
            }
            Ext.Ajax.request({
                url: url,
                method: 'POST',
                jsonData: values,
                success: function (response) {
                    store.load();
                }
            });
            win.close();
        }
    });

    Ext.application({
            name: 'TechZoo',
            controllers: ['Books'],
            launch: function () {
                Ext.widget('bookslist', {
                    width: 500,
                    height: 300,
                    renderTo: 'output'
                });
            }
        }
    );
});
























Ext.define('BookApp.store.BookStore', {
    extend: 'Ext.data.Store',
    model: 'BookApp.model.Book',
    autoLoad: true,
    storeId: 'BookStore',
    proxy: {
        type: 'ajax',
        url: 'app/data/books.json',
        reader: {
            type: 'json',
            root: 'books',
            successProperty: 'success'
        }
    }
});


Ext.define('BookApp.view.BookList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.booklist',

    title: 'Библиотека',
    store: 'BookStore',

    initComponent: function() {
        this.columns = [{
            header: 'Название',
            dataIndex: 'name',
            flex: 1
        }, {
            header: 'Автор',
            dataIndex: 'author',
            flex: 1
        }, {
            header: 'Год',
            dataIndex: 'year',
            flex: 1
        }];

        this.callParent(arguments);
    }
});

Ext.define('BookApp.view.Book', {
    extend: 'Ext.window.Window',
    alias: 'widget.bookwindow',

    title: 'Книга',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Название'
            }, {
                xtype: 'textfield',
                name: 'author',
                fieldLabel: 'Автор'
            }, {
                xtype: 'numberfield',
                name: 'year',
                fieldLabel: 'Год',
                minValue: 1,
            }]
        }];
        this.dockedItems = [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                text: 'Создать',
                iconCls: 'new-icon',
                action: 'new'
            }, {
                text: 'Сохранить',
                iconCls: 'save-icon',
                action: 'save'
            }, {
                text: 'Удалить',
                iconCls: 'delete-icon',
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


Ext.define('BookApp.controller.Books', {
    extend: 'Ext.app.Controller',

    views: ['BookList', 'Book'],
    stores: ['BookStore'],
    models: ['Book'],
    init: function() {
        this.control({
            'viewport > booklist': {
                itemdblclick: this.editBook
            },
            'bookwindow button[action=new]': {
                click: this.createBook
            },
            'bookwindow button[action=save]': {
                click: this.updateBook
            },
            'bookwindow button[action=delete]': {
                click: this.deleteBook
            },
            'bookwindow button[action=clear]': {
                click: this.clearForm
            }
        });
    },
    // обновление
    updateBook: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
        values.id = id;
        Ext.Ajax.request({
            url: 'app/data/update.php',
            params: values,
            success: function(response) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    var store = Ext.widget('booklist').getStore();
                    store.load();
                    Ext.Msg.alert('Обновление', data.message);
                } else {
                    Ext.Msg.alert('Обновление', 'Не удалось обновить книгу в библиотеке');
                }
            }
        });
    },
    // создание
    createBook: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: 'app/data/create.php',
            params: values,
            success: function(response, options) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    Ext.Msg.alert('Создание', data.message);
                    var store = Ext.widget('booklist').getStore();
                    store.load();
                } else {
                    Ext.Msg.alert('Создание', 'Не удалось добавить книгу в библиотеку');
                }
            }
        });
    },
    // удаление
    deleteBook: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            id = form.getRecord().get('id');
        Ext.Ajax.request({
            url: 'app/data/delete.php',
            params: {
                id: id
            },
            success: function(response) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    Ext.Msg.alert('Удаление', data.message);
                    var store = Ext.widget('booklist').getStore();
                    var record = store.getById(id);
                    store.remove(record);
                    form.getForm.reset();
                } else {
                    Ext.Msg.alert('Удаление', 'Не удалось удалить книгу из библиотеки');
                }
            }
        });
    },
    clearForm: function(grid, record) {
        var view = Ext.widget('bookwindow');
        view.down('form').getForm().reset();
    },
    editBook: function(grid, record) {
        var view = Ext.widget('bookwindow');
        view.down('form').loadRecord(record);
    }
});


Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'BookApp',
    appFolder: 'app',
    controllers: ['Books'],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'booklist'
            }
        });
    }
});