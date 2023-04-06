document.addEventListener("DOMContentLoaded",() =>{
    fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League")
    .then (response => response.json())
    .then (data => {
        let container = document.createElement('div')
        container.setAttribute('id','teams')
        document.querySelector("body").appendChild(container)
        data.teams.forEach(element => {
            const name=document.createElement("h2")
            
            name.textContent=element.strTeam
            container.appendChild(name)
            name.addEventListener("click",()=>{
                while(container.hasChildNodes() ==  true){
                    container.removeChild(container.firstChild);
                }
                let div = document.createElement("div")
                let p = document.createElement("p")
                p.textContent = element.strAlternate
                div.appendChild(p)
                document.querySelector("body").appendChild(p)
                let alt = document.createElement("h3")
                alt.textContent = element.strKeywords
                div.appendChild(alt)
                document.querySelector("body").appendChild(alt)
                let short = document.createElement("h4")
                short.textContent = element.strTeamShort
                div.appendChild(short)
                document.querySelector("body").appendChild(short)
                let pitch = document.createElement("h5")
                pitch.textContent = element.strStadium
                div.appendChild(pitch)
                document.querySelector("body").appendChild(pitch)
            })
        }


        )})
    })

    let searchEngine = (value)=>{
        fetch('http://localhost:3000/squad')
        .then((resource)=>resource.json())
        .then((data)=>{
            let storage;
            storage = data
            console.log(storage)
    
            let team;
            for (let i of storage){
                if (i.id == value){
                    pet = i
                }
            }
            console.log(team);
        })}
        

        let name = document.createElement('h4')
        let image = document.createElement('img')
        let votes = document.createElement('likes')
        let voteBtn = document.createElement('button')

        
        // // image.src = team.image
        // votes.textContent = `Votes: ${team.votes}`
        // voteBtn.textContent = 'like'

        
        // display.appendChild(votes)
        // display.appendChild(image)
        // display.appendChild(voteBtn)
        

        voteBtn.addEventListener('click', () =>{
            let count = pet.votes+1
            fetch('http://localhost:3000/squad')
            .then(response => response.json())
            .then(data => {
            // Find the character with id; and increment its votes by 1
            let squad;
            for (let i of data){
                if (i.id == value){
                    squad = i
                }
            }

            console.log(squad)
            squad.votes += 1;
            console.log(squad)
            }
        )})






        
let form = document.getElementById('forms')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let input = document.getElementById('formInput')
    
    console.log(input.value);
        
    let team = document.getElementById('teams')
    team.remove()

    let body = document.getElementById('body')
        
        
        let main = document.createElement('div')
        main.style = 'display: flex;height: 550px; width: 100%; background: none;'

        let left = document.createElement('div')
        let right = document.createElement('div')

        left.style = 'display: block; margin-top: 2%; margin-left: 2%; width: 20%; height: 90%; background: none;'
        right.style = 'display: flex; margin-top: 2%; margin-left: 5%; width: 85%; height: 30%; background: none;'

        body.appendChild(main)
        main.appendChild(left)
        main.appendChild(right)

        let left1 = document.createElement('div')
        let left2 = document.createElement('div')

        left1.style = 'color: white; margin-bottom: 4%; width: 100%; height:56%; border: 1px solid white;background: none; border-radius:15px;'
        left2.style = 'color: white; width: 100%; height:40%; border: 1px solid white;background: none; border-radius:15px;'

        left.appendChild(left1)
        left.appendChild(left2)

        let right1 = document.createElement('div')
        let right2 = document.createElement('div')
        let right3 = document.createElement('div')

        right1.style = 'color: white; margin-right: 2%; width: 30%; height:100%; border: 1px solid white;background: none; border-radius:9px;'
        right2.style = 'color: white; margin-right: 2%; width: 38%; height:100%; border: 1px solid white;background: none; border-radius:9px;'
        right3.style = 'color: white; width: 30%; height:100%; border: 1px solid white;background: none; border-radius:9px;'

        right.appendChild(right1)
        right.appendChild(right2)
        right.appendChild(right3)

    
        let teamNames = ['arsenal', 'chelsea', 'manchester', 'city', 'tottenham']
        if(input.value.toLowerCase() == teamNames[0]){
            body.style = 'background:url("https://www.bms.co.in/wp-content/uploads/2014/12/Arsenal-Football-Club2.jpg");background-size: cover; background-repeat: no-repeat;  display: block;'
            
            left1.textContent = 'NAME:ARSENAL (ARS)'
            left2.textContent = 'ALTERNATIVES:ARSENAL FOOTBALL CLUB, AFC,ARSENAL FC'
    
            right1.textContent = 'NICKNAME:Gunners/ Gooners'
            right2.textContent = 'STADIUM:Emirates Stadium(London, England)'
            right3.textContent = 'MANAGER:Mikel Arteta'
        }
        if(input.value.toLowerCase() == teamNames[1]){
            body.style = 'background:url("https://c4.wallpaperflare.com/wallpaper/838/610/492/chelsea-fc-chelsea-football-club-logo-wallpaper-preview.jpg");background-size: cover; background-repeat: no-repeat;  display: block;'
            
            left1.textContent = 'NAME: Chelsea FC(CHE)'
            left2.textContent = 'ALTERNATIVES:Chelsea'   
    
            right1.textContent = 'NICKNAME: The Blues, The Pensioners'
            right2.textContent = 'STADIUM:Stamford Bridge (London, England)'
            right3.textContent = 'MANAGER: Graham Potter'
        }
        if(input.value.toLowerCase() == teamNames[2]){
            body.style = 'background:url("https://www.wallpaperflare.com/static/985/259/800/manchester-united-soccer-clubs-premier-league-typography-wallpaper.jpg");background-size: cover; background-repeat: no-repeat;  display: block;'
            
            left1.textContent = 'NAME:MANCHESTER UNITED (MNU)'
            left2.textContent = 'ALTERNATIVES:Man United/ Man U / United'
    
            right1.textContent = 'NICKNAME:The Red Devils'
            right2.textContent = 'STADIUM:Old Trafford (Manchester, UK)'
            right3.textContent = 'MANAGER:Erik Ten Hag'
        }
        if(input.value.toLowerCase() == teamNames[3]){
            body.style = 'background:url("https://e1.pxfuel.com/desktop-wallpaper/124/665/desktop-wallpaper-manchester-city-fc-manchester-city-2017.jpg'
            
            left1.textContent = 'NAME:MANCHESTER CITY(MNC)'
            left2.textContent = 'ALTERNATIVES:MAN CITY'
    
            right1.textContent = 'NICKNAME:The Citizens, City, The Sky Blues'
            right2.textContent = 'STADIUM:Etihad Stadium (Manchester, UK)'
            right3.textContent = 'MANAGER:Pep Guardiola'
        }
        if(input.value.toLowerCase() == teamNames[4]){
            body.style = 'background:url("https://mcdn.wallpapersafari.com/medium/42/88/KcrQAD.jpg");background-size: cover; background-repeat: no-repeat;  display: block;'
            
            left1.textContent = 'NAME: Tottenham Hotspur(TOT)'
            left2.textContent = 'ALTERNATIVES:Tottenham'
    
            right1.textContent = 'NICKNAME:Spurs'
            right2.textContent = 'STADIUM:Tottenham Hotspur Stadium(London, UK)'
            right3.textContent = 'MANAGER:Cristian Stellini'
        }
    

    form.reset()
})