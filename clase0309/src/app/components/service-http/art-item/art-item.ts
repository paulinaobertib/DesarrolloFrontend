import { Component, input } from '@angular/core';
import { Artwork } from '../../../models/artwork.model';
import { DefaultValuePipe } from '../../../pipes/default-value.pipe';

@Component({
  selector: 'app-art-item',
  standalone: true,
  imports: [DefaultValuePipe],
  templateUrl: './art-item.html',
  styleUrl: './art-item.scss',
})
export class ArtItem {

  inputValue = input<Artwork>();
}
