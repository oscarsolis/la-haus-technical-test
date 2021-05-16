import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '@root/app.component';
import { AppRoutingModule } from '@root/app-routing.module';
import { HeaderComponent } from '@components/header/header.component';
import { GroupComponent } from '@components/group/group.component';
import { RealEstatesComponent } from '@components/real-estates/real-estates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupComponent,
    RealEstatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
