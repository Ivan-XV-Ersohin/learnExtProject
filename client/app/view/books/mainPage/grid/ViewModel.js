Ext.define('JSONExtJS.view.mainPage.book.grid.BookGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.booksGrid',

    stores: {
        books: {
            sorters: 'id',
            model: 'JSONExtJS.model.book.Book',
            autoLoad: true,
            autoSync: true
        }
    },

});