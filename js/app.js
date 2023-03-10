const users = [
    {
        name: 'Oleksii',
        age: '32',
        region: 'Krahkiv'
    },
    {
        name: 'Sergii',
        age: '35',
        region: 'Kyiv'
    },
    {},
    {
        name: 'Nikita',
        age: '34',
        region: 'Vinitsya'
    },
]

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (isObjectEmpty(user) || 'name' in user === false) {
        continue;
    }

    console.log(`User: ${user.name} ${user.age} ${user.region}`);
}