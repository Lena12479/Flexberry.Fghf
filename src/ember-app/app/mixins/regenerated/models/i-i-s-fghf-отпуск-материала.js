import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПроводки: DS.attr('string'),
  заказ: DS.belongsTo('i-i-s-fghf-заказ', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-fghf-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПроводки: {
    descriptionKey: 'models.i-i-s-fghf-отпуск-материала.validations.датаПроводки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-fghf-отпуск-материала.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-fghf-отпуск-материала.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтпускМатериалаE', 'i-i-s-fghf-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-fghf-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    заказ: belongsTo('i-i-s-fghf-заказ', 'Заказ', {
      материал: attr('Материал', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'материал' })
  });

  modelClass.defineProjection('ОтпускМатериалаL', 'i-i-s-fghf-отпуск-материала', {
    датаПроводки: attr('Дата проводки', { index: 0 }),
    сотрудники: belongsTo('i-i-s-fghf-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    заказ: belongsTo('i-i-s-fghf-заказ', 'Материал', {
      материал: attr('Материал', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
