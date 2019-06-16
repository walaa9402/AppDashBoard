import { NgModule } from '@angular/core';
import { MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule } from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    // BrowserAnimationsModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    // BrowserAnimationsModule
  ],
  providers: [ MatDatepickerModule ],
})

export class MaterialModule {}

// import { NgModule } from '@angular/core';
// import {A11yModule} from '@angular/cdk/a11y';
// import {MatDatepickerModule} from '@angular/material/datepicker';

// import { 
//   MatButtonModule ,
//   MatToolbarModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatBadgeModule,
//   MatIconModule,
//   MatCardModule,
//   MatMenuModule,
//   // MatDatepickerModule,
//   MatNativeDateModule
  


// } from '@angular/material';



// const MaterialComponents=[
//   MatButtonModule,
//   MatToolbarModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatBadgeModule,
//   MatIconModule,
//   MatCardModule,
//   MatMenuModule,
  
//   MatDatepickerModule, 
//   MatNativeDateModule
// ]



// @NgModule({
//   declarations: [],
//   // imports: [MaterialComponents], 
//   exports: [
//     MatDatepickerModule
//     // MaterialComponents
//   ]

// })
// export class MaterialModule { }