
const btnDisplay =() => {
    const btnStyleDisplay = document.getElementById("sendBtn");
    btnStyleDisplay.style.opacity = "1";
}
const sendMessageToWhatsApp = () => {
    let url='https://wa.me/'
    const txtDisplayParagraph = document.getElementById("txtDisplay");
    window.open(url + '{telephoneNumber}?text='+ encodeURIComponent(txtDisplayParagraph.innerText))
    window.close()
}

const whatToDoNext = () => {
    const txtDisplayParagraph = document.getElementById("txtDisplay");

    const thingsToDo =["Draw a character using Two references", "Make a little script to atuomate a simple task","Do a little sculpture in blender", "Create a Geometry node to generate a 3D model or a landscape or  texture","Learn at leats 10 words in japanese or 4 pharases","Share something useful in social media","Clean your room or at leats help to clean something", "Talk with Dani","Make a small game ","Go for a small walk🚶🏾‍♂️","🕛Get the fuck out of the computer (at least for 30 minutes)🕛"]

    txtDisplayParagraph.innerText = thingsToDo[Math.floor(Math.random() * thingsToDo.length)];

    txtDisplayParagraph.style.fontSize="30px"
    txtDisplayParagraph.style.fontFamily="Helvetica"
    
    btnDisplay();
}

