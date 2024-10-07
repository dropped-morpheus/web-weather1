const f2 = require('./f2');
const locations = require('../locations.json');
test('F2 test for Budapest 2024-09-02T12:00:00', async () => {
    const r = await f2(locations.Budapest.latitude,locations.Budapest.longitude,"2024-09-02",12);
    expect(r).toEqual(31);
});
test('F2 test for Szeged 2024-01-01T00:00:00', async () => {
    const r = await f2(locations.Szeged.latitude, locations.Szeged.longitude, "2024-01-01", 0);
    expect(r).toEqual(5.2);
});
test('F2 test for Zamárdi 2024-06-06T18:00:00', async () => {
    const r = await f2(locations.Zamárdi.latitude, locations.Zamárdi.longitude, "2024-06-06", 18);
    expect(r).toEqual(23.7);
});