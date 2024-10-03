function updateSelectedValue() {
    const selectedValue = document.getElementById('menu1').value;
    document.getElementById('selectedMenuValue').textContent = `${selectedValue || 'None'}`;
}

async function generateImages() {
    const rollNumber1 = document.getElementById('startRoll').value.trim();
    const rollNumber2 = document.getElementById('endRoll').value.trim();
    const startRoll = parseInt(rollNumber1.slice(-3));
    const endRoll = parseInt(rollNumber2.slice(-3));
    const container = document.getElementById('imageGallery');
    container.innerHTML = ''; 
    const imageCountDiv = document.getElementById('imageCount');
    imageCountDiv.textContent = ''; 
    if (!isNaN(startRoll) && !isNaN(endRoll) && startRoll <= endRoll) {
        for (let i = startRoll; i <= endRoll; i++) {
            const imgItem = document.createElement('div');
            imgItem.className = 'imageItem';
            const paddedRoll = String(i).padStart(3, '0');
            const imgUrl = `https://www.mruexams.com/SBCMSSTUDENT/Frm_StudentPhoto.aspx?StudentCode=${i + 14170}`;
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = `Displayed Image with Roll Number: ${rollNumber1.slice(0, -3)}${paddedRoll}`;
            img.title = `Roll Number: ${rollNumber1.slice(0, -3)}${paddedRoll}`;
            imgItem.appendChild(img);
            const rollNumberDiv = document.createElement('div');
            rollNumberDiv.className = 'rollNumber';
            rollNumberDiv.textContent = `${rollNumber1.slice(0, -3)}${paddedRoll}`;
            imgItem.appendChild(rollNumberDiv);
            container.appendChild(imgItem);
        }
        imageCountDiv.textContent = `Total Images Displayed: ${endRoll - startRoll + 1}`;
    } else {
        alert('Please enter valid roll numbers with correct last three digits.');
    }
}

function handleGenerateImages() {
    generateImages();
}

function checkName() {
    const input = document.getElementById("emmaField").value.trim().toLowerCase();
    const johnSection = document.getElementById("johnSection");
    const aliceMessage = document.getElementById("aliceMessage");
    const hide = document.getElementById("hide");
    const jamesDisplay = document.getElementById("jamesDisplay");
    if (!input) {
         alert("Name not found. Please try again.");
    } else {
        johnSection.classList.add("hidden");
        aliceMessage.classList.remove("hidden");
        jamesDisplay.textContent = input.charAt(0).toUpperCase() + input.slice(1);
        hide.classList.remove("hide");
    }
}
document.getElementById('displayButton').addEventListener('click', handleGenerateImages);
