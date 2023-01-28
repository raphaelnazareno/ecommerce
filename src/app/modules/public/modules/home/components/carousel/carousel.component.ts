import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  slides = [
    {
      "id": 0,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/10.png',
      "descricao": 'Áudio e Instrumentos',
      "caminho": '',
    },
    {
      "id": 1,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/11.png',
      "descricao": 'Beleza e Saúde',
      "caminho": '',
    },
    {
      "id": 2,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/12.png',
      "descricao": 'Bêbes',
      "caminho": '',
    },
    {
      "id": 3,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/13.png',
      "descricao": 'Brinquedos',
      "caminho": '',
    },
    {
      "id": 4,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/14.png',
      "descricao": 'Banho e cama',
      "caminho": '',
    },
    {
      "id": 5,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/15.png',
      "descricao": 'Ferramentas e Construção',
      "caminho": '',
    },
    {
      "id": 6,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/16.png',
      "descricao": 'Decoração',
      "caminho": '',
    },
    {
      "id": 7,
      "img": 'https:////www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/17.png',
      "descricao": 'Esporte e Lazer',
      "caminho": '',
    },
    {
      "id": 8,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/18.png',
      "descricao": 'Esporte e Lazer',
      "caminho": '',
    },
    {
      "id": 9,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/19.png',
      "descricao": 'Livros',
      "caminho": '',
    },
    {
      "id": 10,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/20.png',
      "descricao": 'Malas',
      "caminho": '',
    },
    {
      "id": 11,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/21.png',
      "descricao": 'Moda e Calçados',
      "caminho": '',
    },
    {
      "id": 12,
      "img": 'https://www.casasbahia-imagens.com.br/criacao/01-home/icones-depto/2023/01-jan/27/22.png',
      "descricao": 'Produtos de limpeza',
      "caminho": '',
    },
  ];

  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 4,
    arrows: true,
    infinite: true,
  };

  elemento(evento: any) {
    console.log(evento);
  }

  constructor() {}

  ngOnInit(): void {}


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
}
