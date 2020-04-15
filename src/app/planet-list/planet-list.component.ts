import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PlanetService} from "../service/planet.service";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
	planets: []
	editable: Boolean
  constructor(private router: Router, private planetService: PlanetService) { }

  ngOnInit(): void {
  	this.planetService.getAll().subscribe( 
  		res => { 
  			this.planets = res.body.result.planets; 
  			this.editable = res.body.result.editable; 
  		},
	    err => { this.router.navigate(['login']); }
	  );
  }

  goToEdit = function(planet) {
  	if (!this.editable) {
  		return;
    }

    this.router.navigate([`planets/${planet.id}`]);
	}

}
