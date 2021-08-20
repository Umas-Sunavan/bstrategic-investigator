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
    private location: Location,
  ) { }

  categoryMap = new Map()

  convertPath = (relavieLink: string) => this.location.prepareExternalUrl(relavieLink)

  ngOnInit(): void {
    // const people3 = document.querySelector(".people3")
    // const allPeople = document.querySelectorAll(".people")
    // const ship = document.querySelector(".ship")
    // if (people3 !== null) {
    //   people3.addEventListener('mouseover',(event)=>{
    //     allPeople.forEach( eachPeople => {
    //       console.log(eachPeople);
    //       // @ts-ignore
    //       eachPeople.style.opacity="0.4"
    //       // @ts-ignore
    //       ship.style.opacity="0.4"
    //       // @ts-ignore
    //       people3.style.opacity="1"
    //     })
    //   })
    //   people3.addEventListener('mouseleave',(event)=>{
    //     allPeople.forEach( eachPeople => {
    //       console.log(eachPeople);
    //       // @ts-ignore
    //       eachPeople.style.opacity="1"
    //       // @ts-ignore
    //       ship.style.opacity="1"
    //     })
    //   })
    // }
    
    const cards = document.querySelectorAll("[class^=link_]")
    const sailors = document.querySelectorAll("[class^=sailor_]")
    const ship = document.querySelectorAll(".ship")
    if(cards !== null) {
      cards.forEach( card => {
        card.addEventListener('mouseover', () => {
          this.transparentAll(cards)
          this.transparentAll(sailors)
          this.transparentAll(ship)
          this.solid(card)
          const SailorOfCard = this.findSailorOfCard(sailors, card)
          if(SailorOfCard) {
            this.solid(SailorOfCard)
          }          
          console.log(SailorOfCard);
          
        })
        card.addEventListener('mouseleave', () => {
          this.solidAll(cards)
          this.solidAll(sailors)
          this.solidAll(ship)
        })
      })
    }

  }

  transparent = (element:Element) => {
    // @ts-ignore
    element.style.opacity="0.4"
  }

  transparentAll = (elements:NodeListOf<Element>) => {
    elements.forEach( element => this.transparent(element))
  }

  solid = (element:Element) => {
  // @ts-ignore
    element.style.opacity="1"
  }

  solidAll = (elements:NodeListOf<Element>) => {
    elements.forEach( element => this.solid(element))
  }

  findSailorOfCard = (sailors:NodeListOf<Element>, card:Element) => {
    const cardName = card.getAttribute('class')?.replace('link_','') || ''
    let sailorOfCard
    sailors.forEach(eachSailor => {
      const mappedSailor = eachSailor.getAttribute('class')?.includes(cardName)
      if(mappedSailor) {
        sailorOfCard = eachSailor
      }
    })
    return sailorOfCard
  }

}
