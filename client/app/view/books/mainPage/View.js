Ext.define('JSONExtJS.view.mainPage.View', {
    extend: 'Ext.Panel',
    xtype: 'mainPageBook',

    controller: 'mainPageBook',

    title: 'mainPanel',

    scrollable: true,
    hideScrollbar: false,

    bbar: [{
        xtype: 'toolbar',
        reference: 'appManage',
        items: [{
            xtype: 'button',
            text: 'Добавить книгу по ISBN',  //TODO функциональность НЕ реализована
            handler: 'onCreateButtonPressed'
        }]
    }],
    layout: 'card',

    items: [{
        xtype: 'booksGrid'
    }]
});