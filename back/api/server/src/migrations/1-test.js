'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Genes", deps: []
 * createTable "Species", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "test",
    "created": "2019-09-17T14:56:09.160Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Genes",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Species",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
