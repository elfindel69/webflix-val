import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Series } from 'src/app/models/series.model';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.css']
})
export class AddSeriesComponent implements OnInit {

  constructor(private seriesService:SeriesService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmitAddOffer(item: Series):void {
        this.seriesService.save(item).then(()=>{this.router.navigateByUrl("series")})
    }

}
