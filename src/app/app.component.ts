import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./schema-db/navbar/navbar.component";
import { FooterComponent } from "./schema-db/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'schemaDBUI';

  constructor(private router: Router) {}

  isContactPage(): boolean {
  return this.router.url.includes('/schema-db/contact');
}
}
