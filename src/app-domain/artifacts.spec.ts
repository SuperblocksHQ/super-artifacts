import { expect } from 'chai';
import { Artifacts } from './artifacts';

describe('Artifacts tests:', () => {
    describe('Create new artifacts object', () => {
        it('when artifacts is empty, it should throw', () => {
            expect(
                () => Artifacts.createNew('121212121', undefined)
            ).to.throw();
        });
    });
});
