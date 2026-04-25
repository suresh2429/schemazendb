import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { Location03FreeIcons } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,HugeiconsIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  locationIcon = Location03FreeIcons;

}
