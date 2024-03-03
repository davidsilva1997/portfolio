import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.translateService.setDefaultLang('pt');
  }
}
