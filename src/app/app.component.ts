import { Component } from '@angular/core';
import { AreaComponent } from './area/area.component'; // Ajustez le chemin si nécessaire
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [AreaComponent, FormsModule], // Utilisez uniquement des composants et modules standalone
})
export class AppComponent {
  title = 'project-service';
}
