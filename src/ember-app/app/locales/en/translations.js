import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFghfЗаказLForm from './forms/i-i-s-fghf-заказ-l';
import IISFghfОтпускМатериалаLForm from './forms/i-i-s-fghf-отпуск-материала-l';
import IISFghfСотрудникиLForm from './forms/i-i-s-fghf-сотрудники-l';
import IISFghfЗаказEForm from './forms/i-i-s-fghf-заказ-e';
import IISFghfОтпускМатериалаEForm from './forms/i-i-s-fghf-отпуск-материала-e';
import IISFghfСотрудникиEForm from './forms/i-i-s-fghf-сотрудники-e';
import IISFghfЗаказModel from './models/i-i-s-fghf-заказ';
import IISFghfОтпускМатериалаModel from './models/i-i-s-fghf-отпуск-материала';
import IISFghfСотрудникиModel from './models/i-i-s-fghf-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fghf-заказ': IISFghfЗаказModel,
    'i-i-s-fghf-отпуск-материала': IISFghfОтпускМатериалаModel,
    'i-i-s-fghf-сотрудники': IISFghfСотрудникиModel
  },

  'application-name': 'Fghf',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Fghf',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fghf',
          title: 'Fghf'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        fghf: {
          caption: 'Fghf',
          title: 'Fghf',
          'i-i-s-fghf-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-fghf-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          },
          'i-i-s-fghf-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-fghf-заказ-l': IISFghfЗаказLForm,
    'i-i-s-fghf-отпуск-материала-l': IISFghfОтпускМатериалаLForm,
    'i-i-s-fghf-сотрудники-l': IISFghfСотрудникиLForm,
    'i-i-s-fghf-заказ-e': IISFghfЗаказEForm,
    'i-i-s-fghf-отпуск-материала-e': IISFghfОтпускМатериалаEForm,
    'i-i-s-fghf-сотрудники-e': IISFghfСотрудникиEForm
  },

});

export default translations;
