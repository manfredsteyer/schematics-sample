import { <%= classify(name) %>Item } from './<%=dasherize(name)%>-item';

export class <%= classify(name) %>Service {

    public items: <%= classify(name) %>Item[] = [
        { title: 'Home', iconClass: 'ti-home' },
        { title: 'Other Menu Item', iconClass: 'ti-arrow-top-right' },
        { title: 'Further Menu Item', iconClass: 'ti-shopping-cart'},
        { title: 'Yet another one', iconClass: 'ti-close'}
    ];

}