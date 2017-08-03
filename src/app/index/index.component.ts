import { Component, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
import { fadeIn } from '../animations/fade-in';

import 'rxjs/add/operator/map';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css'],
	animations: [
		fadeIn
	]
})
export class IndexComponent implements OnInit {
	banners:any = [];
	articles:any = [];


	swiperContainer:KSSwiperContainer;
	// 配置
	swipeOptions:any;
	constructor(
		private http:Http,) {
		// 获取banner
		let getBannerUrl = "http://marryyou.cc/php/banner.php";
		let params2 = new URLSearchParams();
		this.http.post(getBannerUrl,params2).map(res => res.json()).subscribe(
			data=>{ this.banners = data.result; },
			err=>{ console.log(err) }
		)
		// 对banner进行处理
		this.swipeOptions = {
			autoplay:3000,
			// 每页显示几张图片
			// slidesPerView: 4,
			// 是否循环
			loop: true,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
			// spaceBetween: 5
		};
		// 获取文章列表
		let getArticleUrl = "http://marryyou.cc/php/article.php";
		let params = new URLSearchParams();
		params.set('action','findAll');
		params.set('page','1');

		this.http.post(getArticleUrl,params).map(res => res.json()).subscribe(
			data =>{ this.articles = data.data; },
			err =>{ console.log(err) }
		)
	}
	ngOnInit() {
		
	}

}
