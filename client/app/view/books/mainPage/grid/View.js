Ext.define('JSONExtJS.view.books.mainPage.grid.View', {
    extend: 'Ext.grid.Panel',
    xtype: 'booksGrid',

    viewModel:'booksGrid',
    controller: 'booksGrid',

    bind: {
        store: '{books}',
    },
    columns: [
        {
            text: 'id',
            dataIndex: 'id',
            sortable: false,
            flex: 1
        }, {
            text: 'name',
            dataIndex: 'name',
            sortable: false,
            flex: 3
        }, {
            text: 'author',
            dataIndex: 'authors',
            sortable: false,
            flex: 3,
            renderer: 'renderHandler'
        }]
});