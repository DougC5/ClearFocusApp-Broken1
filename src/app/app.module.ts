import { AppRoutingModule } from './app.routing.modules';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from './nav/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { GoalsComponent } from './lists/goals/goals.component';
import { ProjectsComponent } from './lists/projects/projects.component';
import { PurposeComponent } from './lists/purpose/purpose.component';
import { ReferenceComponent } from './lists/reference/reference.component';
import { TodoComponent } from './lists/todo/todo.component';
import { VisionComponent } from './lists/vision/vision.component';
import { MonthComponent } from './calendar/month/month.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { TodoListsComponent } from './lists/todo/todo-lists/todo-lists.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { TwoWeekComponent } from './calendar/two-week/two-week.component';
import { QtrComponent } from './calendar/qtr/qtr.component';
import { SmallBarComponent } from './nav/small-bar/small-bar.component';
import { EditPaneComponent } from './nav/edit-pane/edit-pane.component';



@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    ProjectsComponent,
    PurposeComponent,
    ReferenceComponent,
    TodoComponent,
    VisionComponent,
    MonthComponent,
    NavbarComponent,
    HeaderComponent,
    TodoListsComponent,
    TwoWeekComponent,
    QtrComponent,
    SmallBarComponent,
    EditPaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
