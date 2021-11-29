const view = {};
let temp;

function navBar() {
    const home = document.getElementById("home");

    home.addEventListener("click", () => {
        view.setActiveScreen('homeScreen');
    })

    const gallery = document.getElementById("gallery");

    home.addEventListener("click", () => {
        view.setActiveScreen('galleryScreen');
    })

}



view.setActiveScreen = (screenName) => {

    
    switch (screenName) {
        case "homeScreen":
            document.getElementById("app").innerHTML = components.homeScreen;
            document
                   .getElementById("gallery")
                   .addEventListener("click", () => {
                view.setActiveScreen("galleryScreen");
            });

            document
                   .getElementById("schedule")
                   .addEventListener("click", () => {
                view.setActiveScreen("scheduleScreen");
            });
            
            
        break;


        case "scheduleScreen":
            document.getElementById("app").innerHTML = components.scheduleScreen;
            document
                   .getElementById("home")
                   .addEventListener("click", () => {
                view.setActiveScreen("homeScreen");
            });


            document
                   .getElementById("gallery")
                   .addEventListener("click", () => {
                view.setActiveScreen("galleryScreen");
            });

        break;

            

    
       
        case "galleryScreen":
            console.log("đã vào màn hình gallery Screen");
            document.getElementById("app").innerHTML = components.galleryScreen;


            document
            .getElementById("home")
            .addEventListener("click", () => {
                view.setActiveScreen("homeScreen");
            });

            document
                   .getElementById("schedule")
                   .addEventListener("click", () => {
                view.setActiveScreen("scheduleScreen");
            });
        
            break;
   }
};