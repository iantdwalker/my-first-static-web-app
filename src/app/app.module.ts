import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "@routing/app-routing.module";
import { HeadingComponent } from "@heading/heading.component";

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HeadingComponent]
})
export class AppModule {}
