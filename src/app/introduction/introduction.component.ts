import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private location:Location,
  ) { }

  categories = [
    {
      name: '印刷電路板',
      description: '台灣電子產業發展至今已將近四十年歷史, 從1970年間政府全力主導半導體技術引進, 以及早期推動PC組裝和周邊零組件標準化,衍生出完電子產業生態鏈, 在產業高度聚效應推動,已在全球電子產業站穩關鍵 性地位,並累積堅強OEM/ODM研與製實力。 台電子產業在全球CT的供應鏈體系中,表現極為亮眼,',
      heroImagePath: '/assets/category-icons/IC半導體_主視覺.png',
      investigators: [
        {
          quote:'Just ask questions',
          name:'楊立昌',
          award:'第31屆青年創業楷模得獎人',
          title:'聚積科技(股)公司董事長',
          imagePath:'/assets/logos/1.IC半導體_PCB/1.png',
          link:'www.corn/dog/porn.tw'
        },{
          quote:'Just ask questions',
          name:'余維斌',
          award:'第31屆青年創業楷模得獎人',
          title:'宜特科技(股)公司/董事長',
          imagePath:'/assets/logos/1.IC半導體_PCB/2.png',
          link:'www.corn/dog/porn.tw'
        },{
          quote:'Just ask questions',
          name:'曾榮孟',
          award:'第21屆青年創業楷模得獎人',
          title:'希華晶體科技(股)公司/總經理',
          imagePath:'/assets/logos/1.IC半導體_PCB/3.png',
          link:'www.corn/dog/porn.tw'
        },{
          quote:'Just ask questions',
          name:'吳元超',
          award:'第36屆青年創業楷模得獎人',
          title:'興普科技(股)公司/董事長',
          imagePath:'/assets/logos/1.IC半導體_PCB/4.png',
          link:'www.corn/dog/porn.tw'
        },{
          quote:'Just ask questions',
          name:'簡榮坤',
          award:'第36屆青年創業楷模得獎人',
          title:'邑昇實業(股)公司/董事長',
          imagePath:'/assets/logos/1.IC半導體_PCB/5.png',
          link:'www.corn/dog/porn.tw'
        },
      ]
    }
  ]

  categoryMap = new Map()

  convertPath = (relavieLink:string) =>  this.location.prepareExternalUrl(relavieLink)

  ngOnInit(): void {    
  }

}
