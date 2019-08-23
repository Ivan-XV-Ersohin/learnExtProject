Ext.define('JSONExtJS.view.base.Controller', {
    extend: 'Ext.app.ViewController',

    toggleWidget: function (type) {
        view = this.getView();
        var activeWidget = view.child(type);
        if (!activeWidget) {
            activeWidget = this.createAndAddWidget(type, view);
        }
        view.setActiveItem(activeWidget)
    },

    createAndAddWidget: function (type, view) {
        var createdWidget = Ext.widget(type);
        view.add(createdWidget);
        return createdWidget;
    }

});