import { SideMenuItem } from './side-menu-item';

export class SideMenuService {

    public items: SideMenuItem[] = [
        { title: 'Home', iconClass: 'ti-home' },
        { title: 'Other Menu Item', iconClass: 'ti-arrow-top-right' },
        { title: 'Further Menu Item', iconClass: 'ti-shopping-cart'},
        { title: 'Yet another one', iconClass: 'ti-close'}
    ];

}