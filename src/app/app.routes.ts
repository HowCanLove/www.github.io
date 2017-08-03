import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { IndexComponent } from './index/index.component';



export const appRoutes = [
	{
		path:'',
		redirectTo: 'index',
		pathMatch: 'full'
	},{
		path: 'index',
		component: IndexComponent,
		data:{title:"首页"}
	},{
		path: 'articleList',
		component: ArticleListComponent,
		data:{title:"文章列表"}
	},{
		path: 'articleList/:type',
		component: ArticleListComponent
	},{
		path: 'articleDetail/:id',
		component: ArticleDetailComponent,
	},{
		path: 'diary',
		component: DiaryListComponent,
		data:{title:"心情"}
	},{
		path: 'about',
		component: AboutMeComponent,
		data:{title:"关于我"}
	},{
		path:'**',//fallback router must in the last
		component: IndexComponent,
		data:{title:"404"}
	}
];

