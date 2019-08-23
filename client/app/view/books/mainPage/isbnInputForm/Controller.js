Ext.define('JSONExtJS.view.books.mainPage.isbnInputForm.Controller', {
    extend: 'JSONExtJS.view.base.Controller',

    alias: 'controller.bookForm',

    onExitButtonPressed: function () {
        this.getView().fireEvent('closeForm')
    },

    onSubmitButtonPressed: function () {
        var form = this.getView();
        form.getViewModel().get('loadedBook').load({
            scope: this,
            callback: function (records, operation, success) {
                var data = form.getViewModel().get().loadedBook.data.items[0].data;
                form.getViewModel().setData(data);
                form.add({
                    xtype: 'loadedInfo'
                });
                form.fireEvent('JSONInfoAboutBookLoaded');
            }
        });
    },

});