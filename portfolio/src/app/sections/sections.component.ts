import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { MenubarComponent } from './menubar/menubar.component';
import { WhymeComponent } from './whyme/whyme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BackgroundComponent } from './background/background.component';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [
    HeroComponent,
    MenubarComponent,
    WhymeComponent,
    MyskillsComponent,
    MyprojectsComponent,
    ReferencesComponent,
    ContactComponent,
    FooterComponent,
    BackgroundComponent,
  ],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.scss',
})
export class SectionsComponent {}
