Ext.define('JSONExtJS.view.main.Main', {
    extend: 'Ext.tab.Panel',

    controller: 'main',
    requires: [
        'JSONExtJS.view.*'
    ],

    style:
        'background-image: url("BOOKS.gif");\n ' +
        'background-repeat: no-repeat;\n' +
        'background-position: right top;\n' +
        'background-size: cover;',

    fullscreen: true,
    xtype: 'app-main',

    layout: 'card',
    items: [{
        xtype: 'startPage',
        listeners: {
            redirectFromWelcomePage: 'onRedirectFromWelcomePage',
        }
    }, {
        xtype: 'mainPageBook',
        hidden: true
    }],

});