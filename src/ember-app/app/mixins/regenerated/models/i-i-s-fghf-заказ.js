import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  материал: DS.attr('string'),
  номерЗаказа: DS.attr('number')
});

export let ValidationRules = {
  материал: {
    descriptionKey: 'models.i-i-s-fghf-заказ.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-fghf-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-fghf-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    материал: attr('Материал', { index: 1 })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-fghf-заказ', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    материал: attr('Материал', { index: 1 })
  });
};
