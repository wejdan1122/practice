let team1Score = 0;
let team2Score = 0;

function reveal(element) {
  const cover = element.querySelector('.cover');
  const content = element.querySelector('.content');

  if (cover.style.display !== 'none') {
    // فتح السؤال
    cover.style.display = 'none';
    content.style.display = 'block';
    cover.classList.add('opened'); // سجل أنه تم فتحه
  } else {
    // غلق السؤال
    cover.style.display = 'flex';
    content.style.display = 'none';

    if (cover.classList.contains('opened')) {
      cover.classList.add('closed'); // سجل أنه أُغلق بعد فتحه
    }

    checkWinner(); // تحقق بعد الغلق
  }
}

function addPoint(team) {
  if (team === 1) {
    team1Score++;
    document.getElementById('team1').textContent = `فريق أزرق: ${team1Score}`;
  } else {
    team2Score++;
    document.getElementById('team2').textContent = `فريق أحمر: ${team2Score}`;
  }
}

function checkWinner() {
  const covers = document.querySelectorAll('.cover');
  let allOpenedAndClosed = true;

  covers.forEach(cover => {
    if (!cover.classList.contains('opened') || !cover.classList.contains('closed')) {
      allOpenedAndClosed = false;
    }
  });

  if (allOpenedAndClosed) {
    // كل المربعات تم فتحها وأغلقت مرة واحدة على الأقل
    let winnerText = "";
    if (team1Score > team2Score) {
      winnerText = "🎉 الفريق الأزرق فاز!";
    } else if (team2Score > team1Score) {
      winnerText = "🎉 الفريق الأحمر فاز!";
    } else {
      winnerText = "🤝 تعادل!";
    }
    document.getElementById('winner').textContent = winnerText;
  }
}
