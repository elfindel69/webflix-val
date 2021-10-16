import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series/series.service';
import {Series} from "../../models/series.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-series',
  templateUrl: './single-series.component.html',
  styleUrls: ['./single-series.component.css']
})
export class SingleSeriesComponent implements OnInit {
    item:Series|undefined;
    constructor(private seriesService:SeriesService,private route:ActivatedRoute,private router:Router) { }

    ngOnInit(): void {
      const id = Number.parseInt(this.route.snapshot.params.id);
      this.seriesService.getSeriesItemByID(id).then((item:Series)=>this.item = item);
    }


}
