Ext.define('JSONExtJS.view.welcomePage.InitialViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.startPage',

    width: window.screen.width,
    height: window.screen.height,

    onStartPressed: function () {
        this.getView().fireEvent('redirectFromWelcomePage');
    },
})