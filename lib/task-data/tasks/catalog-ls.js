// Copyright 2017, EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Catalog ls',
    injectableName: 'Task.Catalog.ls',
    implementsTask: 'Task.Base.Linux.Catalog',
    options: {
        commands: [
            'sudo ls -l /var'
        ]
    },
    properties: {
        catalog: {
            type: 'ls'
        }
    }
};
