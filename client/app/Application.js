/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('JSONExtJS.Application', {
    extend: 'Ext.app.Application',

    name: 'JSONExtJS',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
    ],

    launch: function () {
        Ext.util.CSS.createStyleSheet('.x-panel-body-default{background: none}');
    },

    onAppUpdate: function () {

    }
});

