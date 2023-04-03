import assert from 'assert';
import { add, server } from '../src/server';

describe('Addition Test', () => {
    describe('Addition', () => {
        it('should return 4 when adding 2 and 2', () => {
            assert.equal(2 + 2, add(2, 2));
            server.close();
        });
    });
});