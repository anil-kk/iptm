import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { AboutUsComponent } from './about-us/about-us.component';
import { StaffComponent } from './staff/staff.component';
import { EventsComponent } from './events/events.component';
import { ProjectsComponent } from './projects/projects.component';
import { GivingComponent } from './giving/giving.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const appRoutes: Routes = [
{ path: '', component: HomeComponent },
{
    path: '',
    // runGuardsAndResolvers: 'always',
    // canActivate: [AuthGuard],
    children: [
            { path: 'about-us', component: AboutUsComponent },
            { path: 'staff', component: StaffComponent },
            { path: 'events', component: EventsComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'giving', component: GivingComponent },
            { path: 'contact-us', component: ContactUsComponent },
            { path: '**', redirectTo: 'home' }
    ]
},

{ path: '**', redirectTo: '', pathMatch: 'full'}
];
