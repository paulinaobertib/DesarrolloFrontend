import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeng-display',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    AutoCompleteModule,
    FormsModule,
  ],
  templateUrl: './primeng-display.html',
  styleUrl: './primeng-display.scss',
})
export class PrimengDisplay implements OnInit {
  selectedItem: any;
  filteredItems: any[] = [];
  items: any[] = [];

  filterItems(event: AutoCompleteCompleteEvent) {
    const filtered: any[] = [];
    const query = event.query?.toLowerCase() ?? '';

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item.label.toLowerCase().startsWith(query)) {
        filtered.push(item);
      }
    }

    this.filteredItems = filtered;
  }

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
  }

  sayHello() {
    alert('Hello from PrimeNG! dYZ%');
  }
}
