import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // This makes the service available application-wide
})
export class ListService {
  private items: string[] = [];

  // Add item to the list
  addItem(item: string): void {
    if (item.trim()) {
      this.items.push(item.trim());
    }
  }

  // Remove the last item
  removeItem(): void {
    if (this.items.length > 0) {
      this.items.pop();
    }
  }

  // Get the current list of items
  getItems(): string[] {
    return this.items;
  }

  // Sort items alphabetically (A-Z)
  sortItems(): void {
    this.items.sort((a, b) => a.localeCompare(b));
  }

  // Sort items in reverse order (Z-A)
  reverseSortItems(): void {
    this.items.sort((a, b) => b.localeCompare(a));
  }

  // Shuffle items randomly
  shuffleItems(): void {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }
  }
}
