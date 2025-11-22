import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cp1Component } from './cp1/cp1.component';
import { CppresentationComponent } from './cppresentation/cppresentation.component';
import { CpPipeComponent } from './cp-pipe/cp-pipe.component';
import { CapitalizePipe } from './capitalize.pipe';
import { CpDirectiveComponent } from './cp-directive/cp-directive.component';
import { HighlightDirective } from './highlight-directive.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactifformComponent } from './reactifform/reactifform.component';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponentComponent } from './template-form-component/template-form-component.component';
@NgModule({
  declarations: [
    AppComponent,
    Cp1Component,
    CppresentationComponent,
    CpPipeComponent,
    CapitalizePipe,
    CpDirectiveComponent,
    HighlightDirective,
    ReactifformComponent,
    TemplateFormComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
