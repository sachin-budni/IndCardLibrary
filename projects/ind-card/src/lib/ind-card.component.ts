// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'ind-ind-card',
//   template: `
//     <p>
//       ind-card works!
//     </p>
//   `,
//   styles: [
//   ]
// })
// export class IndCardComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { ChangeDetectionStrategy, Component, Directive, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ind-card',
  template: `
    <ng-content></ng-content>
  `,
  styles: [`
    .ind-card {
      display: block;
      position: relative;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
      font-size: 16px;
      background: #fff;
      color: rgba(0,0,0,.87);
      font-family: Roboto,Helvetica Neue,sans-serif;
    }
    .ind-card-image {
      width: calc(100% + 32px);
      margin: 0 -16px 16px -16px;
    }
    .ind-card-content {
      display: block;
      margin-bottom: 16px;
      font-size: 14px;
    }
  `],
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'ind-card' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'ind-card-header',
  template: `
  <div class="ind-card-header-text">
    <ng-content
        select="ind-card-title, ind-card-subtitle,
        [ind-card-title], [ind-card-subtitle],
        [indCardTitle], [indCardSubtitle]"></ng-content>
  </div>
  <ng-content></ng-content>
  `,
  styles: [`
    .ind-card-header {
      display: flex;
      flex-direction: row;
    }
    .ind-card-header .ind-card-title {
      margin-bottom: 12px;
      font-size: 20px;
    }
    .mat-card-subtitle, .mat-card-content {
      display: block;
      margin-bottom: 16px;
    }
    .ind-card-header-text {
      margin: 0 16px;
    }
    .ind-card-subtitle {
      color: rgba(0,0,0,.54);
      font-size: 14px;
    }
    .ind-card-title {
      display: block;
      margin-bottom: 8px;
      font-size: 24px;
      font-weight: 500;
    }
    .ind-card-content {
      display: block;
      margin-bottom: 16px;
      font-size: 14px;
    }
  `],
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'ind-card-header' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Directive({
  selector: 'ind-card-title, [ind-card-title], [indCardTitle]',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'ind-card-title' }
})
export class CardTitleDirective {  }


@Directive({
  selector: 'ind-card-subtitle, [ind-card-subtitle], [indCardSubtitle]',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'mat-card-subtitle' }
})
export class CardSubtitleDirective {}

@Directive({
  selector: '[ind-card-image], [indCardImage]',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'ind-card-image' }
})
export class CardImageDirective {}

@Directive({
  selector: 'ind-card-content, [ind-card-content], [indCardContent]',
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'ind-card-content' }
})
export class CardContentDirective {}
