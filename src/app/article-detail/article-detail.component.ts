import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, URLSearchParams } from '@angular/http';
import { fadeIn } from '../animations/fade-in';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
  animations: [
		fadeIn
	]
})
export class ArticleDetailComponent implements OnInit {

  	constructor(
		private http:Http,
    	private route: ActivatedRoute,
    	private router: Router) {
	}

  	selectedId:any = "";
	ngOnInit() {
		let type;

		type = this.route.params
				.switchMap((params:Params) => {
					this.selectedId = "";
					this.selectedId += params['id'];
					return this.selectedId;
				})
				.subscribe(map => {});
	}

}
