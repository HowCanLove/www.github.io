import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, URLSearchParams } from '@angular/http';
import { fadeIn } from '../animations/fade-in';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  animations: [
		fadeIn
	]
})
export class ArticleListComponent implements OnInit {
	articles:any = [];
	page:number;
	total:number;
	type:any;
	constructor(
		private http:Http,
    	private route: ActivatedRoute,
    	private router: Router,
    	private titleService: Title) {
	}
	getPage(page:number,type:any){
		// 获取文章列表
		let getArticleUrl = "http://marryyou.cc/php/article.php";
		let params = new URLSearchParams();
		params.set('action','findAll');
		params.set('page',String(page));
		if(type && type != "undefined"){
			params.set('whereFind',type);
			this.titleService.setTitle(type+"列表");
		}
		this.http.post(getArticleUrl,params).map(res => res.json()).subscribe(
			data =>{ this.articles = data.data; this.total = data.count;},
			err =>{ console.log(err) }
		)
		this.page = page;
	}

	selectedId:any = "";
	ngOnInit() {
		let type;

		type = this.route.params
				.switchMap((params:Params) => {
					this.selectedId = "";
					this.selectedId += params['type'];
					this.getPage(1,this.selectedId);
					return this.selectedId;
				})
				.subscribe(map => {});

	}

}
