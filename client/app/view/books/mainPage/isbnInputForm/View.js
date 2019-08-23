Ext.define('JSONExtJs.view.books.mainPage.isbnInputForm.View', {
    extend: 'Ext.form.Panel',
    xtype: 'bookForm',

    controller: 'bookForm',
    viewModel: 'bookForm',

    title: 'Найти книгу по ISBN',
    scrollable: true,

    defaultType: 'textfield',
    items: [{
        emptyText: 'ISBN книги',
        bind: '{isbn}',
        name: 'isbn'
    }],
    buttons: [{
        text: 'Exit',
        handler: 'onExitButtonPressed'
    }, {
        text: 'Submit',
        bind: {
          hidden: '{!isbn}'
        },
        handler: 'onSubmitButtonPressed'
    },]
})
;