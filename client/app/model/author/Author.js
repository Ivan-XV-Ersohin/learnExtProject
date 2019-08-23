Ext.define('JSONExtJS.model.author.author', {
    extend: 'Ext.data.Model',

    fields:[
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'last_name', type: 'string'}
    ],
});