// Copyright 2015, EMC, Inc.

module.exports = {
    friendlyName: 'IPMI Cataloger',
    injectableName: 'Task.Base.Ipmi.Catalog',
    runJob: 'Job.LocalIpmi.Catalog',
    requiredOptions: [
        'commands'
    ],
    requiredProperties: {
    },
    properties: {
        catalog: {}
    }
};
