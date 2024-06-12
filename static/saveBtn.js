
document.getElementById("save_btn").addEventListener("click", resetSecondButton);
function resetSecondButton() {
    downloadFile();
    const runBtn = document.getElementById('run-btn');
    const status = document.getElementById('status');
    runBtn.innerHTML = '<i class="fas fa-play" style="font-size: 24px;"></i>';
    status.innerText = "";
    runBtn.disabled = false; 
}
document.getElementById("save_btn_2").addEventListener("click", resetSecondButton2);
function resetSecondButton2() {
    downloadFile();
    const runBtn = document.getElementById('run-btn_2');
    const status = document.getElementById('status_2');

    // Сбрасываем текст и статус кнопки
    runBtn.innerHTML = '<i class="fas fa-play" style="font-size: 24px;"></i>';
    status.innerText = "";
    runBtn.disabled = false;
   
}

function downloadFile() {
    window.location.href = '/download/data.zip'; // GET запрос на сервер для скачивания файла
}