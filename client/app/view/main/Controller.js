Ext.define('JSONExtJS.view.main.Controller', {
    extend: 'JSONExtJS.view.base.Controller',
    alias: 'controller.main',

    routes: {
        'books': 'onDeeper',
        '': 'onStartPage',
    },
    onStartPage: function(){},

    onUnmatchedRoute: function () {
        this.redirectTo('books')
    },

    onRedirectFromWelcomePage: function () {
        this.redirectTo('books');
    },

    onDeeper: function () {
        this.getView().child('startPage').destroy();
        switch (window.location.hash) {
            case '#books':
                this.toggleWidget('mainPageBook');
                this.redirectTo('booksGrid');
                break;
        }
    }
});