import { Component, OnInit } from '@angular/core';
<% if (menuService) { %>
import { <%= classify(name) %>Item } from './<%=dasherize(name)%>-item';
import { <%= classify(name) %>Service } from './<%=dasherize(name)%>.service';
<% } %>

@Component({
    selector: '<%=dasherize(name)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    <% if (menuService) { %>
        providers: [<%= classify(name) %>Service]
    <% } %>
})
export class <%= classify(name) %>Component {

<% if (menuService) { %>
    items: <%= classify(name) %>Item[];

    constructor(service: <%= classify(name) %>Service) {
        this.items = service.items;
    }
<% } %>

}
