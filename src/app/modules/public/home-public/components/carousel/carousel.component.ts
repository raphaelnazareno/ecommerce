import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  
  slides = [
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/10.png', ok:"Áudio e instrumentos"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/02.png', ok:"Celulares"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/03.png', ok:"Smart Tv's" },
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/04.png', ok:"Eletrodomésticos"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/05.png', ok:"Móveis" },
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/06.png', ok:"Informática e acessórios"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/07.png', ok:"Wearables" },
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/09.png', ok:"Eletroportáteis"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/26.png', ok:"Utilidade domésticas"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/10.png', ok:"Áudio e instrumentos"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/02.png', ok:"Celulares"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/03.png', ok:"Smart Tv's"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/04.png', ok:"Eletrodomésticos"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/05.png', ok:"Móveis"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/06.png', ok:"Informática e acessórios"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/07.png', ok:"Wearables" },
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/09.png', ok:"Eletroportáteis"},
    { img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/26.png', ok:"Utilidade domésticas"},
  ];
  



  slideConfig = { slidesToShow: 9, slidesToScroll: 9, arrows: true };

  addSlide() {
    this.slides.push({ img: 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/10.png', ok:"Áudio e instrumentos" });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor() {}

  ngOnInit(): void {}
}
