import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fghf-заказ-l');
  this.route('i-i-s-fghf-заказ-e',
  { path: 'i-i-s-fghf-заказ-e/:id' });
  this.route('i-i-s-fghf-заказ-e.new',
  { path: 'i-i-s-fghf-заказ-e/new' });
  this.route('i-i-s-fghf-отпуск-материала-l');
  this.route('i-i-s-fghf-отпуск-материала-e',
  { path: 'i-i-s-fghf-отпуск-материала-e/:id' });
  this.route('i-i-s-fghf-отпуск-материала-e.new',
  { path: 'i-i-s-fghf-отпуск-материала-e/new' });
  this.route('i-i-s-fghf-сотрудники-l');
  this.route('i-i-s-fghf-сотрудники-e',
  { path: 'i-i-s-fghf-сотрудники-e/:id' });
  this.route('i-i-s-fghf-сотрудники-e.new',
  { path: 'i-i-s-fghf-сотрудники-e/new' });
});

export default Router;
