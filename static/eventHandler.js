document.getElementById("run-btn").addEventListener("click", async function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (редирект)

    const input = document.getElementById("upload-file");
    const files = input.files;

    // Disable the button and show the loader
    const runBtn = document.getElementById('run-btn');
    const status = document.getElementById('status');
    const loader = document.getElementById('loader');
    
    runBtn.disabled = true;
    runBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size: 24px;"></i>';
    status.style.fontFamily = "Montserrat, sans-serif";
    status.style.fontSize = "23px";
    status.style.marginLeft = "5px";

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
            if (xhr2.readyState === XMLHttpRequest.DONE) {
                if (xhr2.status === 200) {
                    console.log("Files processed successfully");
                    runBtn.innerHTML = '<i class="fas fa-check" style="font-size: 24px;"></i>';
                    status.innerText = "Download";
                    runBtn.style.color = 'white';
                    runBtn.disabled = false;
                } else {
                    console.error("Error processing files");
                    runBtn.innerHTML = '<i class="fas fa-play" style="font-size: 24px;"></i>';
                    status.innerText = "Error";
                }
                loader.style.display = 'none';
                runBtn.disabled = false;
            }
        };
        xhr2.send();

    } catch (error) {
        console.error(error);
        runBtn.innerHTML = '<i class="fas fa-play" style="font-size: 24px;"></i>';
        status.innerText = "Error";
        loader.style.display = 'none';
        runBtn.disabled = false;
    } ;
});
