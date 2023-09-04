// ____________________________________ [ Dem so nguoi vo trang ca nhan ]____________________________________________________
function updateVisitCount(count) {
    document.getElementById('visitCount').textContent = count;
}
function getVisitCount() {
    const count = localStorage.getItem('visitCount');
    return count ? parseInt(count) : 0;
}

function increaseVisitCount() {
    const currentCount = getVisitCount();
    const newCount = currentCount + 1;
    localStorage.setItem('visitCount', newCount);
    updateVisitCount(newCount);
}

document.addEventListener('DOMContentLoaded', function() {
    const currentCount = getVisitCount();
    updateVisitCount(currentCount);
});

increaseVisitCount();


// __________________________________Message 

  function expandContainer() {
    var ulMess = document.querySelector('.ul-mess');
    if (ulMess.style.display === 'none') {
      ulMess.style.display = 'flex';
    } else {
      ulMess.style.display = 'none';
    }
  }

  document.addEventListener('click', function(event) {
    var ulMess = document.querySelector('.ul-mess');
    var messageIcon = document.querySelector('.message-icon');

    var isClickedInsideUlMess = ulMess.contains(event.target);
    var isClickedMessageIcon = messageIcon.contains(event.target);

    if (!isClickedInsideUlMess && !isClickedMessageIcon) {
      ulMess.style.display = 'none';
    }
  });


  
window.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || event.keyCode === 123) {
    //   alert('Không được phép truy cập mã nguồn trang web!');
      alert('Access to website source code is not allowed!');

      event.preventDefault();
    }
  });

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('>> Tokisaki Nino: "Say no to "Inspect" website!" :))');
});
  
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('>> Tokisaki Nino: "Say no to "Inspect" website!" :))');
});
