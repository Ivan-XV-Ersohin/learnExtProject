Ext.define('JSONExtJS.view.books.mainPage.Controller', {
    extend: 'JSONExtJS.view.base.Controller',
    alias: 'controller.mainPageBook',

    routes: {
        'bookForm': 'onHashChanged',
        'booksGrid': 'onHashChanged',
        'bookInfo': 'onHashChanged'
    },

    onCreateButtonPressed: function () {
        this.redirectTo('bookForm');
    },

    makeVisibleToolbarManage: function (makeVisible) {
        var toolbar = this.getView().lookupReference('appManage');
        if (toolbar) {
            if (makeVisible) {
                toolbar.show()
            } else {
                toolbar.hide()
            }
        }
    },


    onHashChanged: function () {
        this.makeVisibleToolbarManage(false);
        switch (window.location.hash) {
            case '#booksGrid':
                this.toggleWidget('booksGrid');
                this.getView().child('booksGrid').show();
                this.makeVisibleToolbarManage(true);
                break;
            case '#bookForm':
                this.toggleWidget('bookForm');
                if (!this.getView().hasListeners.closeForm) {
                    var me = this;
                    this.getView().child('bookForm').on({
                        closeForm: function () {
                            me.redirectTo('bookGrid')
                        },
                        JSONInfoAboutBookLoaded: function () {
                            me.redirectTo('bookInfo')
                        }
                    });
                }
                break;
        }
    }

});
