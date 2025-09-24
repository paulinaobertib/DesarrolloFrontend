import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-primeng-display',
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

  items: any[] | undefined;

  filterItems(event: AutoCompleteCompleteEvent) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.items as any[]).length; i++) {
      let item = (this.items as any[])[i];
      if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredItems = filtered;
  }

  ngOnInit() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
  }

  sayHello() {
    alert('Hello from PrimeNG! 🎉');
  }
}
