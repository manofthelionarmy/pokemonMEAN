import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule,
        MatMenuModule, MatIconModule, MatSelectModule, MatSnackBarModule, MatTableModule,
        MatProgressSpinnerModule} from '@angular/material';
import { HeaderComponent } from './header/header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCreateComponent } from './pokemon/pokemon-create/pokemon-create.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { MovesetCreateComponent } from './pokemon/moveset-create/moveset-create.component';
import { MovesetListComponent } from './pokemon/moveset-list/moveset-list.component';
import { RoutingModule } from './routing/routing.module';
import { AttackCreateComponent } from './pokemon/attack-create/attack-create.component';
import { AttackListComponent } from './pokemon/attack-list/attack-list.component';
import { DashboardComponent } from './pokemon/display_dashboard/dashboard/dashboard.component';
import { StatsCreateComponent } from './pokemon/stats-create/stats-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    PokemonCreateComponent,
    PokemonListComponent,
    MovesetCreateComponent,
    MovesetListComponent,
    AttackCreateComponent,
    AttackListComponent,
    DashboardComponent,
    StatsCreateComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTableModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
