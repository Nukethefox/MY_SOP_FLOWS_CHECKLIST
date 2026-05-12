function checkChecklist() {

    const requiredChecks = document.querySelectorAll('input.required');
    const nextSectionButton = document.getElementById("nextSectionButton");

    let allChecked = true;

    requiredChecks.forEach(function(cb){
        if(!cb.checked){
            allChecked = false;
        }
    });

    if(allChecked){
        nextSectionButton.style.display = "inline-block";
    } else {
        nextSectionButton.style.display = "none";
    }

}

document.querySelectorAll("input[type=checkbox]").forEach(function(cb){
    cb.addEventListener("change", checkChecklist);
});

function calculateTOD() {
    const currAlt = document.getElementById('currAlt').value;
    const tgtAlt = document.getElementById('tgtAlt').value;
    const currSpd = document.getElementById('currSpd').value;
    const tgtSpd = document.getElementById('tgtSpd').value;
    const windType = document.getElementById('windType').value;
    const windKts = document.getElementById('windKts').value;

    const baseDist = ((currAlt - tgtAlt) * 3) / 1000;
    const decelDist = (currSpd - tgtSpd) / 10;
    const windCorr = windKts / 10;
    
    let finalDist = baseDist + decelDist;
    
    if (windType === 'tail') {
        finalDist += windCorr;
    } else {
        finalDist -= windCorr;
    }

    document.getElementById('todResult').innerText = `Start descending at ${finalDist.toFixed(0)} NM from target waypoint`;
}