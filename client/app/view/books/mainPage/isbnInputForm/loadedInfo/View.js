Ext.define('JSONExtJS.veiw.books.mainPage.isbnInputForm.loadedInfo.View', {
    extend: 'Ext.form.Panel',
    xtype: 'loadedInfo',


    controller: 'loadedInfo',
    viewModel: 'bookForm',

    bind: {
        title: 'Данные книги: {volumeInfo.title}',
    },

    defaultType: 'textfield',
    scrollable: true,
    defaults: {
        margin: 10,
        padding: 10,
        labelStyle: 'background-color: #ffffff50;',
        labelAlign: 'top'
    },

    items: [{
        fieldLabel: 'Автор',
        readOnly: true,
        bind: '{volumeInfo.authors}'
    }, {
        fieldLabel: 'Название книги',
        readOnly: true,
        bind: '{volumeInfo.title}'
    }, {
        fieldLabel: 'Количество страниц',
        readOnly: true,
        bind: '{volumeInfo.pageCount}'
    }, {
        xtype: 'button',
        text: 'Предпросмотр',
        bind: {
            hidden: '{!accessInfo.webReaderLink}'
        },
        handler: 'redirectToPreview'
    }, {
        xtype: 'button',
        text: 'Добавить в коллекцию',
        handler: 'onAddRequest'
    }],
});