{
    const prefix = 'prototype_';
    let prototypes = [
        'creep',
        'room',
        'source'
    ];
    for (var thing in prototypes) require(prefix + prototypes);
}