import { Component, DoCheck } from '@angular/core';
import { ListService } from './wiki.service'
@Component({
	selector:'home',
	template:`<h1>ADD USER</h1>
	<br>
	<div class="row">
	<h3 *ngFor='let li of list' style="color:green">{{li.name}},</h3>
	</div>
	
	<input type="text" [(ngModel)]="name" name="name"><br>
	<small style="color:red" *ngIf="!len">Length is greater than 3</small><br>
	<button type="button" (click)="Add()">ADD USER</button>
	`,
})
export class HomeComponent implements DoCheck
{
	len: boolean=true;
	public name: string="";
	list: any[] = [];
	constructor(private log: ListService)
	{
		
	}
	ngDoCheck()
	{
		if(this.name.length>3)
		{
			this.len = false;
		}
		else 
		{
			this.len = true;
		}
	}
	Add()
	{
		this.list.push({ name: this.name });
		this.log.AddList(this.name);
		
	}
}