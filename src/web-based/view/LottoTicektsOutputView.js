class LottoTicketsOutputView {
  lottoTicketsSectionView = document.querySelector('.section-lotto-ticket');
  lottoTicketsView = document.querySelector('.ul-lotto-tickets');
  lottoNumbersInputSectionView = document.querySelector('.section-submit-lotto-numbers');
  lottoCountView = document.querySelector('.text-lotto-count');

  displayLottoTicketsSection(lottoTickets) {
    this.lottoTicketsSectionView.classList.remove('invisible');
    this.lottoCountView.textContent = `총 ${lottoTickets.length}개를 구매하셨습니다.`;
    lottoTickets.forEach((ticket) => {
      const li = document.createElement('li');
      li.className = 'li-lotto-ticket';

      const ticketEmojiElement = document.createElement('span');
      ticketEmojiElement.className = 'text-ticket-emoji';
      ticketEmojiElement.textContent = '🎟️';

      const ticketNumbersElement = document.createElement('span');
      ticketNumbersElement.className = 'text-ticket-numbers';
      ticketNumbersElement.textContent = ticket.join(', ');

      li.appendChild(ticketEmojiElement);
      li.appendChild(ticketNumbersElement);

      this.lottoTicketsView.appendChild(li);
    });
  }

  resetToInitialState() {
    this.lottoTicketsSectionView.classList.add('invisible');
    this.lottoTicketsView.textContent = '';
  }
}

export default new LottoTicketsOutputView();
