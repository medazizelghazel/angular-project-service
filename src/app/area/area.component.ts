import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
import { ListService } from '../list.service';  // Importation du service

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AreaComponent {
  inputValue: string = ''; 
  title: string = 'Bienvenue dans le composant Area !'; 
  description: string = 'Ceci est une zone d\'échantillon où vous pouvez afficher du contenu.';
  
  colors: string[] = ['blue', 'green', 'red'];  
  buttonLabel: string = 'Random'; 
  random: boolean = false; 
  showItems: boolean = true; // Suivre la visibilité de la liste
  feedbackMessage: string = ''; // Message de retour

  constructor(private listService: ListService) {}  // Injection du service

  // Ajouter un élément via le service
  addItem(): void {
    if (this.listService.addItem(this.inputValue)) {
      this.feedbackMessage = 'Élément ajouté avec succès!';
    } else {
      this.feedbackMessage = 'Veuillez entrer un élément valide.';
    }
  }

  // Supprimer le dernier élément via le service
  suppress(): void {
    this.listService.removeItem();
    this.feedbackMessage = 'Dernier élément supprimé.';
  }

  // Obtenir les éléments du service
  get items(): string[] {
    return this.listService.getItems();
  }

  // Trier la liste (A-Z)
  sortList(): void {
    this.listService.sortItems();
  }

  // Trier la liste en ordre inverse (Z-A)
  reverseSortList(): void {
    this.listService.reverseSortItems();
  }

  // Mélanger la liste
  shuffleList(): void {
    this.listService.shuffleItems();
  }

  // Basculer la visibilité des éléments
  toggleShowItems(): void {
    this.showItems = !this.showItems;
  }

  // Basculer entre les modes de couleurs aléatoires et cycliques
  toggleRandomColoring(): void {
    this.random = !this.random;
    this.buttonLabel = this.random ? 'Cycle' : 'Random';
  }

  // Obtenir la couleur pour chaque élément
  getColor(index: number): string {
    if (this.random) {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    } else {
      return this.colors[index % this.colors.length];
    }
  }
}
