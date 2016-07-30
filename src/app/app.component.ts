import {Component} from "@angular/core";
import {DataTable} from "./datatable.directive";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DataTable]
})
export class AppComponent {
  title = 'app works!';
}
