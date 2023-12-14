import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fghf-отпуск-материала', 'Unit | Model | i-i-s-fghf-отпуск-материала', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fghf-заказ',
    'model:i-i-s-fghf-отпуск-материала',
    'model:i-i-s-fghf-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
