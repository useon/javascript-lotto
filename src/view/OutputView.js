const OutputView = {
  printPurchaseCount(purchaseCount) {
    console.log(`${purchaseCount}개를 구매했습니다.`);
  },

  printLottoTickets(tickets) {
    tickets.forEach((ticket) => {
      console.log(`[${ticket.join(', ')}]`);
    });
  },

  printWinningStats(winningStats) {
    console.log('\n당첨 통계');
    console.log('--------------------');
    console.log(`3개 일치 (5,000원) - ${winningStats[5]}개`);
    console.log(`4개 일치 (50,000원) - ${winningStats[4]}개`);
    console.log(`5개 일치 (1,500,000원) - ${winningStats[3]}개`);
    console.log(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningStats[2]}개`);
    console.log(`6개 일치 (2,000,000,000원) - ${winningStats[1]}개`);
  },

  printRateOfReturn(rateOfReturn) {
    console.log(`총 수익률은 ${rateOfReturn}%입니다.`);
  },
};

export default OutputView;
