Ext.define('JSONExtJS.model.book.Book', {
    extend: 'Ext.data.Model',

    hasMany: {
        type: 'JSONExtJS.model.author.authors',
        name: 'authors'
    },

    proxy: {
        type: 'rest',
        url: window.location.origin + window.location.pathname + 'api/books'
    },
});