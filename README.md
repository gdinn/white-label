# Aplicações white-label: Uma abordagem sem *ngIf
Esse é o repositório correspondente a apresentação ocorrida no Meetup AngularSP acontecido no dia 24/09/2020. [Para acessar a apresentação clique nesse link](https://speakerdeck.com/gdinn/aplicacoes-white-label-sem-ngif).


## Antes de iniciar
Para rodar o projeto no seu computador será necessário ter o NodeJS e a CLI do Angular instalados.  
[Para informações c/ relação a instalação da CLI Angular clique nesse link ](https://cli.angular.io/).  
[Para informações c/ relação a instalação do NodeJS clique nesse link ](https://nodejs.org/en/).  

## Instalação das dependências do Node.
````shell
npm install
````

## Iniciando a aplicação Front-End
Rode `ng serve` para iniciar a aplicação web com a label padrão. Para especificar uma label passe o nome dela com a flag `--configuration`. Por exemplo:  
````shell
ng serve --configuration=mercado-luiz
````
E, alternativamente, para o mercado-pedro:
````shell
ng serve --configuration=mercado-pedro
````

## Iniciando a aplicação Back-End
````shell
npm run server
````
  
Para mais detalhes com relação ao funcionamento, [acesse o link dos slides](https://speakerdeck.com/gdinn/aplicacoes-white-label-sem-ngif). Nele falo com mais detalhes sobre como a aplicação foi construída.