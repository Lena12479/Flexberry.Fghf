import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fghf',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fghf',
          title: 'Fghf'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
