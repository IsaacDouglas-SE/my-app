import React from "react";
import './home.css';

export class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      firstState: []

    }

  }

async UpdatePlayer() {
  var Playername=document.getElementById("playername").value;
  var Position=document.getElementById("position").value;
  var Rating=document.getElementById("rating").value;
  var Price=document.getElementById("price").value;
  var League=document.getElementById("league").value;
  var Club=document.getElementById("club").value;
  var Nationality=document.getElementById("nationality").value;
  var Quality=document.getElementById("quality").value;

  var playerlist1 = {
    playername: Playername,
    position: Position,
    rating:Rating,
    price:Price,
    league:League,
    club:Club,
    nationality:Nationality,
    quality:Quality
  };
  console.log(playerlist1)
await fetch(`/UpdatePlayer/${Playername}`,{
method:'PUT',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify(playerlist1)
})
}
async CreatePlayer() {
  			var Playername=document.getElementById("playername").value;
  			var Position=document.getElementById("position").value;
        var Rating=document.getElementById("rating").value;
        var Price=document.getElementById("price").value;
        var League=document.getElementById("league").value;
        var Club=document.getElementById("club").value;
        var Nationality=document.getElementById("nationality").value;
        var Quality=document.getElementById("quality").value;

        var playerlist = {
          playername: Playername,
          position: Position,
          rating:Rating,
          price:Price,
          league:League,
          club:Club,
          nationality:Nationality,
          quality:Quality
        };
        console.log(playerlist)
    await fetch('/CreatePlayer',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerlist)
    })
  }

async DeletePlayer() {
  var Playername=document.getElementById("playername").value;

  await fetch(`/deleteByPlayername/${Playername}`,{
  method:'DELETE',

})
}

async myFunc() {

  fetch("/ShowAll")
  .then(response => response.json())
  .then(data => this.setState({
    firstState :data}))
  .then(data => console.log(this.state.firstState))

}
 myFunc2() {
  // this.state.firstState[0].map(firstState => console.log(firstState.playername) );
  console.log(this.state.firstState[0].playername);

}
render() {



  let playerlist = this.state.firstState;
    return (
      <div>
      <div id="section1">
       <a href="#section2">-</a>
       </div>
        <h1 className="Banner">iFIFA 20 Ultimate Team Squad Builder</h1>
        <div>
          <button class="button" onClick={() => this.myFunc()}>Click To Load Players</button>

        <p>-</p>
        </div>

        <table className="table">
          <tr>
                <th>Playername</th>
                <th>Position</th>
                <th>Rating</th>
                <th>Price</th>
                <th>League</th>
                <th>Club</th>
                <th>Nationality</th>
                <th>Quality</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

</table>

            {playerlist
              .map(player => (
                <table className="tableimport">
                <tr>
                <td>{player.playername}</td>
                <td>{player.position}</td>
                <td>{player.rating}</td>
                <td class="currency">{player.price}</td>
                <td>{player.league}</td>
                <td>{player.club}</td>
                <td>{player.nationality}</td>
                <td>{player.quality}</td>
                  </tr>
                </table>
              ))
            }


<div class="grid-container">
  <div></div>
  <div class="dropdown">
  <button class="dropbtn">ST</button>
  <div class="dropdown-content">
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div>
  <div><div class="dropdown">
  <button class="dropbtn">ST</button>
  <div class="dropdown-content">
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
  <div></div>
  <div><div class="dropdown">
  <button class="dropbtn">LM</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CM</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CM</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">RM</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">LB</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CB</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">CB</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
  <div><div class="dropdown">
  <button class="dropbtn">RB</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>
</div>
<div className="GK"><div class="dropdown">
  <button class="dropbtn">GK</button>
  <div class="dropdown-content">
  <label for="player"></label>
     <select id="player" name="player">
     {playerlist
       .map(player => (
       <option value="GK1">{player.playername}</option>
     ))}
     </select>
  </div>
</div></div>

<div>-</div>
<span className="space">add or remove player details below</span>
<div>-</div>
<div className="formcss">
  <form onSubmit ="return checkValues()">
  	Playername:<input className="input" type="text" placeholder="Enter name here.." id="playername" name="playername"/>
    <p>-</p>
  	Position:<input type="text" id="position" name="position"/>
    <p>-</p>
  	League:<input type="text" id="league" name="league"/>
    <p>-</p>
  	Club:<input type="text" id="club" name="club"/>
    <p>-</p>
  	Nationality:<input type="text" id="nationality" name="nationality"/>
    <p>-</p>
  	Quality:<input type="text" id="quality" name="quality"/>
    <p>-</p>
  	Rating:<input type="text" id="rating" name="rating"/>
    <p>-</p>
  	Price:<input type="text" id="price" name="price"/>
</form>
  </div>
    <button class="button" onClick={() => this.CreatePlayer()}>Create player</button>  <button className="buttons"onClick={() => this.UpdatePlayer()}>Update player</button>  <button className="button2" onClick={() => this.DeletePlayer()}>Delete player</button>


    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <p>-</p>
    <h2>Presentation</h2>
    <ol className="presentation">
      <li>   -</li>
      <li>   -</li>
  <li>  Wireframe: Draw.io </li>
  <li> kanban board Trello  </li>
  <li>   Version Control: GiT</li>
  <li>   Database: MySQL</li>
  <li> Springboot backend </li>
  <li>   Javascript, Html, css, </li>
  <li>   React frontend </li>
  <li>   Node JS, Java</li>
  <li>   W3Schools, Youtube</li>
  <li>Cloud Server: Google Cloud Platform</li>
  <li>Integration Tests: Selenium </li>
  <li>   CI Server: Jenkins</li>
    </ol>
    <div class="main" id="section2">
      <p>-</p>

  <button class="example_c">  <a href = "https://trello.com/b/XxWK3r2P/online-bookstore" >Trello 1</a></button>  <button class="example_c">  <a href = "https://trello.com/b/JC491Dn9/fifaapp">Trello 2</a></button>   <button class="example_c">  <a href = "https://balsamiq.cloud/sugokqs/plm1dl3/r2278" >Wireframe</a></button> <button class="example_c">  <a href = "https://github.com/IsaacDouglas-SE">GiT</a></button>
  <p>-</p>
  <button className="button1"> <a href="#section1">* Reveal Application *</a></button>
  </div>
  <p>-</p>

          </div>

       );
   }
}
