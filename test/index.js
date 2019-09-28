const previousIndexOf = require('../');
const assert = require('assert');

describe('previous-index-of', () => {

    it('should find the index of baz', () => {
        const index = previousIndexOf('foo baz bam num sab bas baz', 'baz', 12);
        assert.strictEqual(index, 4);
    });

    it('should return -1 if the offset is below the target length', () => {
        const index = previousIndexOf('baz foo', 'baz', 1);
        assert.strictEqual(index, -1);
    });

    it('should return -1 if the string wasn\'t found', () => {
        const index = previousIndexOf('sbaf bahz haz bsfz', 'baz', 2);
        assert.strictEqual(index, -1);
    });

    it('should return -1 if the target isn\'t a string', () => {
        const index = previousIndexOf('sbaf bahz haz bsfz', null, 2);
        assert.strictEqual(index, -1);
    });

    it('should return -1 if the source string isn\'t a string', () => {
        const index = previousIndexOf(null, 'abc', 2);
        assert.strictEqual(index, -1);
    });

    it('should start at the beginning if the offset isn\'t a string', () => {
        const index = previousIndexOf('sbaf bam haz bam', 'bam', {});
        assert.strictEqual(index, 13);
    });

    it('should start at the biginning if no offset where specified', () => {
        const index = previousIndexOf('foo bam baz', 'baz');
        assert.strictEqual(index, 8);
    });

    it('should include the offset as possible target index', () => {
        const index = previousIndexOf('aacdefabcdef', 'a', 0);
        assert.strictEqual(index, 0);
    });
});
