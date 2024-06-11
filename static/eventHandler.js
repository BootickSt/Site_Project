document.getElementById("run-btn").addEventListener("click", async function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (редирект)

    const input = document.getElementById("upload-file");
    const files = input.files;
    
    const uploadFile = (file) => {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/upload", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        console.log("File uploaded successfully");
                        resolve();
                    } else {
                        reject("File upload failed");
                    }
                }
            };

            var formData = new FormData();
            formData.append("file", file);
            xhr.send(formData);
        });
    };

    try {
        for (let i = 0; i < files.length; i++) {
            await uploadFile(files[i]);
        }

        var xhr2 = new XMLHttpRequest();
        xhr2.open("POST", "/process", true);
        xhr2.onreadystatechange = function() {
            if (xhr2.readyState === XMLHttpRequest.DONE && xhr2.status === 200) {
                console.log("Files processed successfully");

                // Дополнительные действия после успешной обработки файлов, если необходимо
                document.getElementById('run-btn').innerHTML = '<i class="fas fa-check" style="font-size: 24px;"></i>';
                document.getElementById('status').innerText = "Download";
                document.getElementById('status').style.fontFamily = "Montserrat, sans-serif";
                document.getElementById('status').style.fontSize = "23px";
                document.getElementById('status').style.marginLeft = "5px";
                document.getElementById('run-btn').style.color = 'white';
            }
        };
        xhr2.send();

    } catch (error) {
        console.error(error);
    }
});
