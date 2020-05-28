import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id;
  advert;
  hasPhone = false;
  hasEmail = false;
  hasDescription = false;
  hasPrice = false;


  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getAdvert(this.id).subscribe((data) => {
    this.advert = data;
    if(this.advert.phone != null)
      this.hasPhone=true;
    if(this.advert.email != null){
      this.hasEmail=true;
      console.log(this.advert.email)}
    if(this.advert.description != null)
      this.hasDescription=true;
    if(this.advert.price != null)
      this.hasPrice=true;
    },
    error => {
      console.log(error);
      alert("Advert with this number does not exist");
      this.router.navigate(['/myadverts'])
        .then(() => {
          window.location.reload();
        });
    }
    );

  }

}
