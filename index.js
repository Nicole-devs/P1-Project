document.addEventListener("DOMContentLoaded",() =>{
    fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League")
    .then (response => response.json())
    .then (data => {
        data.teams.forEach(element => {
            const name=document.createElement("h4")
            name.textContent=element.strTeam
            document.querySelector("body").appendChild(name)
            name.addEventListener("click",()=>{
                let div = document.createElement("div")
                let alt = document.createElement("alt")
                alt.textContent = element.strAlternate
                div.appendChild(alt)
                document.querySelector("body").appendChild(alt)
                let short = document.createElement("short")
                short.textContent = element.strTeamShort
                div.appendChild(short)
                document.querySelector("body").appendChild(short)
                let p = document.createElement("p")
                p.textContent = element.strKeywords
                div.appendChild(p)
                document.querySelector("body").appendChild(p)
                let pitch = document.createElement("pitch")
                pitch.textContent = element.strStadium
                div.appendChild(pitch)
                document.querySelector("body").appendChild(pitch)
        
                

})
        })})
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

        
        image.src = pet.image
        votes.textContent = `Votes: ${team.votes}`
        voteBtn.textContent = 'like'

        
        display.appendChild(votes)
        display.appendChild(image)
        display.appendChild(voteBtn)
        

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

        fetch(`http://localhost:3000/squad/${value}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(squad)
            })
                .then(response => response.json())
                .then(data => {
                // Log the updated data for debugging purposes
                console.log(data);
                searchEngine(value)
                })
                .catch(error => {
                // Handle errors
                console.error(error);
                
                })
            
                .catch(error => {
                // Handle errors
                console.error(error);
            
            })
  