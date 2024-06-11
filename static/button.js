window.onload = () => {
    const uploadFile1 = document.getElementById("upload-file");
    const uploadBtn1 = document.getElementById("upload-btn");
    const uploadText1 = document.getElementById("file-not-loaded");

    uploadBtn1.addEventListener("click", function () {
        uploadFile1.click();
    });

    uploadFile1.addEventListener("change", function() {
        if(uploadFile1.files.length > 0){
            let hasJson = false;
            let otherFiles = false;

            for (let i = 0; i < uploadFile1.files.length; i++) {
                const file = uploadFile1.files[i];
                const fileName = file.name.toLowerCase();
                const fileExtension = fileName.split('.').pop();
                
                if (file.type === 'application/json' || fileExtension === 'zip') {
                    hasJson = true;
                } else {
                    otherFiles = true;
                }
            }

            if (hasJson && !otherFiles) {
                uploadText1.innerText = "Files uploaded";
            } else if (hasJson && otherFiles) {
                uploadText1.innerText = "reading error";
            } else if (!hasJson && otherFiles) {
                uploadText1.innerText = "Reading eror";
            }
        } else {
            uploadText1.innerText = "Not file";
        }
    });

    const uploadFile2 = document.getElementById("upload-file_2");
    const uploadBtn2 = document.getElementById("upload-btn_2");
    const uploadText2 = document.getElementById("file-not-loaded_2");

    uploadBtn2.addEventListener("click", function () {
        uploadFile2.click();
    });

    uploadFile2.addEventListener("change", function() {
        if(uploadFile2.files.length > 0){
            let hasTfrec = true;
    
            for (let i = 0; i < uploadFile2.files.length; i++) {
                const file = uploadFile2.files[i];
                const fileName = file.name.toLowerCase();
                const fileExtension = fileName.split('.').pop();
                
                if (fileExtension !== 'tfrec' && fileExtension !== 'zip') {
                    hasTfrec = false;
                    break; // Выходим из цикла, если найден файл с неправильным расширением
                }
            }
    
            if (hasTfrec) {
                uploadText2.innerText = "Files uploaded";
            } else {
                uploadText2.innerText = "Reading error";
            }
        } else {
            uploadText2.innerText = "Reading error";
        }
    });
}

document.getElementById("save_btn").addEventListener("click", resetSecondButton);
function resetSecondButton() {
    downloadFile();
    const runBtn = document.getElementById('run-btn');
    const status = document.getElementById('status');

    // Сбрасываем текст и статус кнопки
    runBtn.innerHTML = '<i class="fas fa-play" style="font-size: 24px;"></i>';
    status.innerText = "";
    runBtn.disabled = false;
   
}


document.getElementById("save_btn_2").addEventListener("click", resetSecondButton);
function resetSecondButton() {
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