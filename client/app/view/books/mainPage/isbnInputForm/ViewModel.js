Ext.define('JSONExtJS.view.books.mainPage.isbnInputForm.ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.bookForm',

    data: {
        isbn: null
    },
    stores: {
        loadedBook: {
            proxy:{
                type: 'ajax',
                url: 'https://www.googleapis.com/books/v1/volumes',
                extraParams: {
                    q: '{isbn}'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            autoLoad: false,
            autoSync: false
        },

    }
});