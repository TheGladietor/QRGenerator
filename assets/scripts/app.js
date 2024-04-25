
document.addEventListener("DOMContentLoaded", function() {
    let imgBox = document.getElementById("imgBox");
    let qrText = document.getElementById("qrText");

    document.getElementById("generate").addEventListener("click", generateQR);

    function generateQR() {
        // Select the image element inside imgBox
        let qrImage = imgBox.querySelector("img");

        // Check if qrImage exists before setting its src attribute
        if (qrText.value.length > 0) {
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
            imgBox.classList.add("show-img");
            
        } else {
            qrText.classList.add( "error" );
            setTimeout(()=>{
                qrText.classList.remove("error");
            },1000);
        }
    }
});
