import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series.model';
import {ActivatedRoute, Router} from "@angular/router";
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-edit-series',
  templateUrl: './edit-series.component.html',
  styleUrls: ['./edit-series.component.css']
})
export class EditSeriesComponent implements OnInit {
    item: Series | undefined
  constructor(private route: ActivatedRoute, private seriesService: SeriesService,
              private router:Router) { }

    ngOnInit(): void {
        const id = Number.parseInt(this.route.snapshot.params.id);
        this.seriesService.getSeriesItemByID(id).then((item) => {this.item = item});
    }

    onSubmitEditOffer(item: Series):void {
        this.seriesService.update(item).then(()=>this.router.navigateByUrl("series"))
    }

}
