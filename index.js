/**
 * Returns the previous index of a string at a given offset.
 * If the target is not a string or the offset is below the length of the target
 * it returns -1.
 *
 * If offset isn't a string it will be set to the length of the source string.
 *
 * @param str Source string
 * @param target Target string
 * @param offset Offset
 * @returns {number|*} The offset of the target string or -1 if the offset wasn't found.
 */
module.exports = (str, target, offset) => {

    // Immediatly return -1 if offset is below target length
    if (offset < target.length || typeof target !== 'string') {
        return -1;
    }

    // Set offset to the length of the source string if it isn't a number
    if (typeof offset !== 'number') {
        offset = str.length - 1;
    }

    // Reverse-search for target-string offset
    const targetLength = target.length - 1;
    for (let i = offset, toff = targetLength; i >= 0; i--) {

        if (str[i] === target[toff]) {
            toff--;

            // Check if target string got fully matched
            if (!~toff) {
                return i;
            }
        } else if (toff !== targetLength) {
            toff = targetLength;
            i++;
        }
    }

    return -1;
};
