import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ic from '../../assets/category-info/1-IC半導體_PCB.json';
import eRetail from '../../assets/category-info/2-電子零件_IOT.json'
import network from '../../assets/category-info/3-通訊網路_5G.json'
import automobile from '../../assets/category-info/4-汽車_智慧交通.json'
import machine from '../../assets/category-info/5-電機機械_智慧製造.json'
import chainstore from '../../assets/category-info/6-流通連鎖_文創.json'
import biotechnology from '../../assets/category-info/7-生技_智慧醫療.json'
import newMaterial from '../../assets/category-info/8-先進材料_綠能.json'
import newService from '../../assets/category-info/9-創新服務_雲端.json'


export interface Investigator {
  quote: string;
  name: string;
  award: string;
  title: string;
  imagePath: string;
  link: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  simplifiedHeroImagePath: string;
  complexHeroImagePath: string;
  investigators: Investigator[];
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  isPopupShow = true

  categoryInfo: CategoryInfo = {
    id: "",
    name: "",
    description: "",
    simplifiedHeroImagePath: "",
    complexHeroImagePath: "",
    investigators: [],
  }
  categories: CategoryInfo[] = []

  ngOnInit(): void {
    const categoryName = this.activatedRoute.snapshot.paramMap.get('categoryName')
    this.categories = [ic, eRetail, network, automobile, machine, chainstore, biotechnology, newMaterial, newService]
    this.categoryInfo = this.categories.find(category => category.id === categoryName) || this.categoryInfo
    this.categoryInfo.simplifiedHeroImagePath = this.categoryInfo.simplifiedHeroImagePath.replace('.png', '')
    this.categoryInfo.complexHeroImagePath = this.categoryInfo.complexHeroImagePath.replace('.png', '')
    // @ts-ignore
    this.categoryInfo.description = this.categoryInfo.description.replaceAll("。", "。<br/>")
  }

  convertPath = (relavieLink: string) => this.location.prepareExternalUrl(relavieLink)

  togglePopup = () => {this.isPopupShow = !this.isPopupShow}

}
// ic
// e-retail
// network
// automobile
// machine
// chainstore
// biotechnology
// new-material
// new-service