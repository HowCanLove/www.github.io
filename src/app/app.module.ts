import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { KSSwiperModule } from "angular2-swiper";
import { Ng2PaginationModule } from "ng2-pagination";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { IndexComponent } from './index/index.component';

import { appRoutes } from './app.routes';
import { LabelComponent } from './label/label.component';
import { MusicComponent } from './music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    AboutMeComponent,
    DiaryListComponent,
    IndexComponent,
    LabelComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    KSSwiperModule,
    BrowserAnimationsModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
