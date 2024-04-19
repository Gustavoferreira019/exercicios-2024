import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DevChuva';

  expandirResumo(): void {
    const resumo: HTMLElement | null = document.getElementById('resumo');
    const additionalText: HTMLElement | null = document.querySelector('.additional-text');
    const btnShowMore: HTMLElement | null = document.querySelector('.btn-show-more');
  
    if (additionalText && btnShowMore && resumo) {
      if (additionalText.style.display === 'none') {
        additionalText.style.display = 'inline';
        btnShowMore.textContent = 'ver menos';
        resumo.style.height = '480px';
      } else {
        additionalText.style.display = 'none';
        btnShowMore.textContent = 'ver mais';
        resumo.style.height = '220px';
      }
    }
  }

  criarTopico(): void {
    const btnCreateTopic: HTMLElement | null = document.querySelector('.btn-create-topic');
    const introTopic: HTMLElement | null = document.querySelector('.introducao-comentarios');
    const iconTopic: HTMLElement | null = document.querySelector('.icones-comentarios');
    const formCreateTopic: HTMLElement | null = document.querySelector('.form-create-topic');
    const comentTopic: HTMLElement | null = document.querySelector('.chamada-comentario');
    const userContainer: HTMLElement | null = document.querySelector('.user-container');
    const commentDone: HTMLElement | null = document.querySelector('.comment-done');
    const confirmDone: HTMLElement | null = document.querySelector('.confirm-done');
    
    if (btnCreateTopic && introTopic && iconTopic && formCreateTopic && comentTopic && userContainer && commentDone && confirmDone) {
      btnCreateTopic.style.display = 'none';
      introTopic.style.display = 'none';
      iconTopic.style.display = 'none';
      comentTopic.style.display = 'none';
      formCreateTopic.style.display = 'block';
      commentDone.style.display = 'none';
      confirmDone.style.display = 'none';
  
      userContainer.style.height = '1150px';
    }
  }

  confirmSend(): void{
    const commentDone: HTMLElement | null = document.querySelector('.comment-done');
    const confirmDone: HTMLElement | null = document.querySelector('.confirm-done');
    const introComment: HTMLElement | null = document.querySelector('.introducao-comentarios');
    const iconComment: HTMLElement | null = document.querySelector('.icones-comentarios');
    const callComment: HTMLElement | null = document.querySelector('.chamada-comentario');
    const formCreateT: HTMLElement | null = document.querySelector('.form-create-topic');

    if(commentDone && confirmDone && introComment && iconComment && callComment&&formCreateT){
      commentDone.style.display = 'flex';
      confirmDone.style.display = 'block';
      introComment.style.display = 'none';
      iconComment.style.display = 'none';
      callComment.style.display = 'none';
      formCreateT.style.display = 'none';
     }
  }

  expandAnswer(): void{
    const commentContainer: HTMLElement | null = document.querySelector('.comments-container');
    const userContainer: HTMLElement | null = document.querySelector('.user-container');
    const mainContainer: HTMLElement | null = document.querySelector('.main-container');
    const assuntoContainer: HTMLElement | null = document.querySelector('.form-create-topic');

    if (commentContainer && userContainer && mainContainer){
      commentContainer.style.display = 'block';
      userContainer.style.height = '1870px';
      mainContainer.style.height = '3000px';
    }

  }

}