import { NgModule } from '@angular/core';
import {
  CardComponent,
  CardContentDirective,
  CardHeaderComponent,
  CardImageDirective,
  CardSubtitleDirective,
  CardTitleDirective
} from './ind-card.component';



@NgModule({
  declarations: [
    CardComponent,
    CardContentDirective,
    CardHeaderComponent,
    CardImageDirective,
    CardSubtitleDirective,
    CardTitleDirective
  ],
  imports: [
  ],
  exports: [
    CardComponent,
    CardContentDirective,
    CardHeaderComponent,
    CardImageDirective,
    CardSubtitleDirective,
    CardTitleDirective
  ]
})
export class IndCardModule { }
