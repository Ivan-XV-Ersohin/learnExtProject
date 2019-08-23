Ext.define('JSONExtJS.view.startpage.View', {
    extend: 'Ext.Panel',
    xtype: 'startPage',
    title: 'Start Page',

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'middle',
    },

    controller: 'startPage',

    items: [{
        xtype: 'button',
        text: 'Start Using Application',
        handler: 'onStartPressed'
    }],
});