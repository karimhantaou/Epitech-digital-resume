function closeAllPanels(){
    const panels = ["about", "skills", "projects", "contact"];

    for (const panel of panels){
        let panelElement = document.getElementById(panel);
        panelElement.style.height = "100%";
        panelElement.style.backgroundColor = "black";
        panelElement.style.color = "white";
    }
}

function openMenu(menu){

    let panel = document.getElementById(menu);
    const closed = panel.style.height == "100%" || panel.style.height == "" 

    closeAllPanels()

    if(closed){
        panel.style.height = "5%";
        panel.style.backgroundColor = "white";
        panel.style.color = "black";
        panel.style.borderBottom = "1px solid black";
        console.log(panel.style.height)
    }
}
