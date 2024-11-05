import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Ce service est disponible dans toute l'application
})
export class ListService {
  private items: string[] = [];  // Tableau pour stocker les éléments

  // Ajouter un élément au tableau
  addItem(item: string): boolean {
    if (item.trim()) {
      this.items.push(item.trim());
      return true; // Indique que l'ajout a réussi
    }
    return false; // Indique que l'ajout a échoué
  }

  // Supprimer le dernier élément du tableau
  removeItem(): void {
    if (this.items.length > 0) {
      this.items.pop(); // Supprime le dernier élément
    }
  }

  // Obtenir la liste actuelle des éléments
  getItems(): string[] {
    return this.items; // Retourne le tableau d'éléments
  }

  // Trier les éléments par ordre alphabétique (A-Z)
  sortItems(): void {
    this.items.sort((a, b) => a.localeCompare(b)); // Trie le tableau
  }

  // Trier les éléments par ordre inverse (Z-A)
  reverseSortItems(): void {
    this.items.sort((a, b) => b.localeCompare(a)); // Trie le tableau en ordre inverse
  }

  // Mélanger les éléments aléatoirement
  shuffleItems(): void {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.items[i], this.items[j]] = [this.items[j], this.items[i]]; // Échange les éléments
    }
  }
}
