var btn = document.getElementById('btn');
var prompts = document.getElementById('prompt');
const home = 'Welcome to "Dungeon Crawler - The Game". <br>You have three character options available: Banished, Cultist and Escapee. <br>In order to see details on the characters, please enter "See: [Character Name] <br>Type "Select: [Character Name] to choose a character and start.';
prompts.innerHTML = home;
UserAction = "";
running = false;
first = true;
UserCharacter = "";
ChoiceAmount = 0;
pathGood = 0;
pathBad = 0;


function runCultist(){
    prompts.innerHTML = 'You wake up for the big day. After years of hard work and the tough living conditions of the dungeon. <brYour time for the ascension proccess has come. <br>You find yourself sitting on your bed with two options: <br>Check your drawer ["Drawer"] or Go outside ["Outside"].';
    btn.onclick = function() {
        UserAction = prompt("What would you like to do?");
        if (UserAction == "Drawer"){
            prompts.innerHTML = "You open the drawer and see a book.<br>Would you like to read it? ['Read'] or ['Leave']";
        }
        else if (UserAction == "Read"){
            prompts.innerHTML = "Reptilian Brain<br>Timeless and haunting Recurring night-<br> It appears that the poem has been ripped off.";
            pathBad += 1;
        }
        else if (UserAction == "Leave"){
            prompts.innerHTML = "You close the drawer<br>You can either open the drawer ['Drawer'] or go outside ['Outside']";
        }
        else if (UserAction == "Outside"){
            prompts.innerHTML = "You go outside and breath the fresh air.<br>You can see the posters congratulating you for your success and wishing you good luck with your ascension. ['Continue']";
            if (pathBad == 0){
                pathGood++;
            btn.onclick = function() {
                UserAction = prompt("What would you like to do?")
                if (UserAction == "Continue"){
                    prompts.innerHTML = "You continue on your path, hearing some slight cheering from the people in your village. You step on to your platform and await for it to start.<br>After the ceremoney and the very long prayer, you get dropped down into the maze, about to begin your journey.";
                    btn.onclick = function() {
                        UserAction = prompt("What would you like to do?");
                        prompts.innerHTML = "The cave is moldy and seemingly empty, with only a couple of rocks on the ground.<br>There's a very large echo and you can hear knocking from the left side.<br> Your choice is between the ['Left'] and the ['Right']";
                        if (UserAction == "Left"){
                            prompts.innerHTML = "You start heading to the left side. You're just about to reach another pocket before you notice a what appears to be a weirdly shaped ball with teeth and some tentacles popping out of it charging at you.<br>You have two options. ['Fight'] or ['Run']";
                            btn.onclick = function() {
                                UserAction = prompt("What would you like to do?");
                                if (UserAction == "Fight"){
                                    if ((getRandom(6) - pathBad + pathGood) > getRandom(7)){
                                        prompts.innerHTML = "You have chosen to attack!<br><br>And succeeded! You have gained good karma!";
                                        pathGood++;
                                    }
                                    else{
                                        prompts.innerHTML = "You have chosen to attack!<br><br>And failed! Better luck next time! [Reload the page in order to try again]";
                                    }
                                }
                                else{
                                    if ((getRandom(6) - pathBad + pathGood) > getRandom(7)){
                                        prompts.innerHTML  = "You Have chosen to run away!<br><br>And succeeded! You have gained good karma!";
                                        pathGood++;
                                    }
                                    else {
                                        prompts.innerHTML = "You have chosen to run away!<br><br>And failed! Better luck next time...<br>However, after some time. You wake up trapped in a jail cell.<br>With no hope left, you decend into madness as you stay there alone.";
                                        alert("Secret unlocked.");
                                    }
                                }
                            }
                        }
                        }
                    }
                }
            }
        }
    }
}

btn.onclick = function() {
    UserAction = prompt("What would you like to do?");
    if (UserAction == "Home"){
        prompts.innerHTML = home;
    }
    else if (UserAction == "See: Banished"){
        prompts.innerHTML = 'Banished TBD<br><br>Type "Home" to return to the home page.';
    }
    else if (UserAction == "See: Cultist"){
        prompts.innerHTML = "The cultist is a young, couragoues member of the kaath'ar. A group of cultists who pride themselves in their survival skills and connection to their gods. Will you manage to ascend to the heavens, and be one with your people or fall into madness and descend into the dungeon without coming back.<br><br>Type 'Home' to return to the home page.";
    }
    else if (UserAction == "See: Trapped"){
        prompts.innerHTML = 'Trapped TBD <br><br>Type "Home" to return to the home page.';
    }
    else if (UserAction == "Bagchat"){
        pathGood++;
    }
    else if (UserAction == "Select: Banished"){}
    else if (UserAction == "Select: Cultist"){runCultist()}
    else if (UserAction == "Select: Trapped"){}
}

