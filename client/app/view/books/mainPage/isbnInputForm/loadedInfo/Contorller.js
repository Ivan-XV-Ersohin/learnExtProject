Ext.define('JSONExtJS.view.books.mainPage.isbnInputForm.loadedInfo.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.loadedInfo',

    redirectToPreview: function () {
        document.location.href = this.getView().getViewModel()
            .get('accessInfo').webReaderLink;
    },

    onAddRequest: function () {
        var parentForm = this.getView().up();
        var model = Ext.create({
            xclass: 'JSONExtJS.model.book.Book',
            fields: [
                {name: 'isbn', type: 'int'},
                'book_name',
                'authors'
            ]
        });
        var isbn = parentForm.getViewModel().get().volumeInfo.industryIdentifiers[0].identifter,
            title = parentForm.getViewModel().get().volumeInfo.title,
            authors = parentForm.getViewModel().get().volumeInfo.authors;
        model.set({
            isbn: isbn,
            book_name: title,
            authors: authors
        });
        model.save({
            callback: function (record, operation, success) {
                console.log('saving succeed: ' + success);
            }
        })

    }
});