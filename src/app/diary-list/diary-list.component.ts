import { ChangeDetectionStrategy,Component, OnInit, Input } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http'; 
import { fadeIn } from '../animations/fade-in';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.component.html',
  styleUrls: ['./diary-list.component.css'],
  animations: [
  	fadeIn
  ]
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiaryListComponent implements OnInit {
	diarys;
    page: number = 1;
    total: number;
  constructor(
  	private http:Http) {
  	
  }

  getPage(page: number) {
  	let url = "http://marryyou.cc/php/newstalk.php";
  	let Params = new URLSearchParams();
  	Params.set('action','findPage');
  	Params.set('page',String(page));

  	this.http.post(url,Params).map(res => res.json()).subscribe(
  		data => { this.diarys = data.data; this.total = data.count;},
  		err => { console.log(err) }
  	)
    this.page = page;
    scrollTo(0,0);
  }

  ngOnInit() {
  	this.getPage(this.page);
  }

}
