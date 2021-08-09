import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private location:Location) { }

  ngOnInit(): void {
  }

  convertPath = (relavieLink:string) =>  this.location.prepareExternalUrl(relavieLink)

}
