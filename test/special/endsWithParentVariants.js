import { document } from './document.js'
import * as utility from '../utility.js';

describe('ends with parent variants', function() {
  before(() => {
    const filename = utility.buildPath('fixtures', 'expect', 'endsWithParentVariants.txt'),
          testHTML = document.querySelectorAll('#ends-with-parent-variants .hljs');

    return utility.setupFile(filename, 'utf-8', this, testHTML);
  });

  it('should end on all variants', () => {
    const actual = this.blocks[0];

    actual.should.equal(this.expected);
  });

});
