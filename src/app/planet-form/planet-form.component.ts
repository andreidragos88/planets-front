import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlanetService} from "../service/planet.service";
import {Planet} from "../model/planet.model";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.scss']
})
export class PlanetFormComponent implements OnInit {
	editForm: FormGroup;
	planet: Planet;
	planetId: 0;

	constructor( private route: ActivatedRoute, private formBuilder: FormBuilder, 
		private planetService: PlanetService,
		private router: Router) { }

  ngOnInit(): void {
  	this.editForm = this.formBuilder.group({
  		status:[""],
  		description:[""]
  	})

  	this.route.params.subscribe(params => {
		  this.planetId = params['id'];
		});
  	
  	if (this.planetId === null) {
  		this.router.navigate(['planets']);
  	} 
		
		this.planetService.getById(this.planetId).subscribe(
			res => {
  		  this.planet = res.body.result;
  		  this.editForm = this.formBuilder.group({
		  		status:[res.body.result.status],
		  		description:[res.body.result.description]
		  	})
	  	}, 
  		err => { this.router.navigate(['planets']); }
  	);
  }

  onSubmit() {
  	const editPayload = {
  		id: this.planetId,	
      status: this.editForm.controls.status.value,
      description: this.editForm.controls.description.value
    }
  	
  	this.planetService.update(editPayload).subscribe(
  		res => { 
  			this.router.navigate(['planets']); 
  		},
  		err => { alert('Not saved'); }
  	)
  }

}
