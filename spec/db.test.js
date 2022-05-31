const DB = require('../application/modules/DB/DB');

let db = new DB;

afterAll(() => {
    db.destructor();
});

describe('test DB', () => {
    test('get user', async () => {
        const user = await db.getUser('Katya', '1111');
        expect(user).not.toBeNull();
    });

    test('2', () => {
        expect(1 + 2).toBe(3);
    });
});