Ext.define('JSONExtJS.view.books.mainPage.grid.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.booksGrid',

    init: function () {
        Ext.util.CSS.createStyleSheet('.x-grid-item{background-color: #ffffffab}');
        this.callParent();
    },

    renderHandler: function (value, record) {
        str = '';
        for( i = 0; i < value.length; i++){
            str += value[i].name + ' ' + value[i].lastName + '; ';
        }
        return str;
    }
});