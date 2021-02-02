import Route from '@ember/routing/route';
// import { format } from 'date-fns';

export default class ApplicationRoute extends Route {
  async model() {
    const { format } = await import('date-fns');
    return format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
  }
}
