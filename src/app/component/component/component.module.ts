import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentjobsComponent } from './recentjobs/recentjobs.component';
import { JobspotlightComponent } from './jobspotlight/jobspotlight.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { RecentpostsComponent } from './recentposts/recentposts.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      RecentjobsComponent,
      JobspotlightComponent,
      MainmenuComponent,
      TestimonialsComponent,
      RecentpostsComponent,
      FooterComponent,
      HeaderComponent
  ],
    providers: [],
    exports: [
        RecentjobsComponent,
        JobspotlightComponent,
        MainmenuComponent,
        TestimonialsComponent,
        RecentpostsComponent,
        FooterComponent,
        HeaderComponent
    ]
})
export class ComponentModule { }
