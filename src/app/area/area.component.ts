import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
import { ListService } from '../list.service';  // Import the service

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
  showItems: boolean = true; // Track visibility of the list

  constructor(private listService: ListService) {}  // Inject the service

  // Delegate to the service to add an item
  addItem(): void {
    this.listService.addItem(this.inputValue);
    this.inputValue = '';  // Clear the input
  }

  // Delegate to the service to remove an item
  suppress(): void {
    this.listService.removeItem();
  }

  // Get items from the service
  get items(): string[] {
    return this.listService.getItems();
  }

  // Delegate to the service to sort items alphabetically (A-Z)
  sortList(): void {
    this.listService.sortItems();
  }

  // Delegate to the service to sort items in reverse order (Z-A)
  reverseSortList(): void {
    this.listService.reverseSortItems();
  }

  // Delegate to the service to shuffle the list randomly
  shuffleList(): void {
    this.listService.shuffleItems();
  }

  // Toggle visibility of the items list
  toggleShowItems(): void {
    this.showItems = !this.showItems;
  }

  // Toggle between random and cycle color modes
  toggleRandomColoring(): void {
    this.random = !this.random;
    this.buttonLabel = this.random ? 'Cycle' : 'Random';
  }

  // Get color for each item
  getColor(index: number): string {
    if (this.random) {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    } else {
      return this.colors[index % this.colors.length];
    }
  }
}
