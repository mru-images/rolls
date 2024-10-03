function updateSelectedValue() {
    const selectedValue = document.getElementById('menu1').value;
    document.getElementById('selectedMenuValue').textContent = `${selectedValue || 'None'}`;
    switch (selectedValue) {
        case "CSE":
            document.getElementById('rollNumberzz').textContent = `Rollnumbers : 2311CS010001 To 2311CS010720`;
            break;
        case "CSE (AIML)":
            document.getElementById('rollNumberzz').textContent = `Rollnumbers : 2311CS020001 To 2311CS020719`;
            break;
        case "IOT":
            document.getElementById('rollNumberzz').textContent = `Rollnumbers : 2311CS050001 To 2311CS050109`;
            break;
        case "IT":
            document.getElementById('rollNumberzz').textContent = `Rollnumbers : 2311IT010001 To 2311IT010240`;
            break;
        case "CSE (DS)":
            document.getElementById('rollNumberzz').textContent = `Rollnumbers : 2311CS030001 To 2311CS030600`;
            break;
        case "CSE (CS)":
            document.getElementById('rollNumberzz').textContent = `Rollnumbers : 2311CS040001 To 2311CS040180`;
            break;
        default:
            document.getElementById('rollNumberzz').textContent = `Rollnumbers : `;
    }
}

async function generateImages() {
    const rollNumber1 = document.getElementById('startRoll').value.trim();
    const rollNumber2 = document.getElementById('endRoll').value.trim();
    const branch = document.getElementById('menu1').value;
    const startRoll = parseInt(rollNumber1.slice(-3));
    const endRoll = parseInt(rollNumber2.slice(-3));
    const container = document.getElementById('imageGallery');
    container.innerHTML = '';
    const imageCountDiv = document.getElementById('imageCount');
    imageCountDiv.textContent = '';
    let imgUrl = ""; // Declare with let for proper scoping

    if (!isNaN(startRoll) && !isNaN(endRoll) && startRoll <= endRoll) {
        for (let i = startRoll; i <= endRoll; i++) {
            const imgItem = document.createElement('div');
            imgItem.className = 'imageItem';
            const paddedRoll = String(i).padStart(3, '0');

            switch (branch) {
                case "CSE":
                    imgUrl = `https://www.mruexams.com/SBCMSSTUDENT/Frm_StudentPhoto.aspx?StudentCode=${i + 14890}`;
                    break;
                case "CSE (AIML)":
                    imgUrl = `https://www.mruexams.com/SBCMSSTUDENT/Frm_StudentPhoto.aspx?StudentCode=${i + 14170}`;
                    break;
                case "IOT":
                    imgUrl = `https://www.mruexams.com/SBCMSSTUDENT/Frm_StudentPhoto.aspx?StudentCode=${i + 16647}`;
                    break;
                case "IT":
                    imgUrl = `https://www.mruexams.com/SBCMSSTUDENT/Frm_StudentPhoto.aspx?StudentCode=${i + 16756}`;
                    break;
                case "CSE (DS)":
                    imgUrl = `https://www.mruexams.com/SBCMSSTUDENT/Frm_StudentPhoto.aspx?StudentCode=${i + 16042}`;
                    break;
                case "CSE (CS)":
                    imgUrl = `https://www.mruexams.com/SBCMSSTUDENT/Frm_StudentPhoto.aspx?StudentCode=${i + 15610}`;
                    break;
            }

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

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('displayButton').addEventListener('click', handleGenerateImages);
});
