import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.fghf.caption'),
          title: i18n.t('forms.application.sitemap.fghf.title'),
          children: [{
            link: 'i-i-s-fghf-заказ-l',
            caption: i18n.t('forms.application.sitemap.fghf.i-i-s-fghf-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.fghf.i-i-s-fghf-заказ-l.title'),
            children: null
          }, {
            link: 'i-i-s-fghf-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.fghf.i-i-s-fghf-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.fghf.i-i-s-fghf-отпуск-материала-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-fghf-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.fghf.i-i-s-fghf-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.fghf.i-i-s-fghf-сотрудники-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})