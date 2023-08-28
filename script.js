let url = "https://gauravgitacc.github.io/postAppData/auctionData.json";

async function fetchData() {
  // let promise = fetch(url);
  // //console.log(promise)
  // promise.then((data1)=>{
  //    const response=data1.json();
  //     console.log(response);
  //     //return response;
  // })
  // // .then((data)=>{
  // //     console.log(data);
  // //     renderData(data);
  // // })

  let data1 = await fetch(url); //response 
  let response = data1.json();  // converting response --> JSON --> this give us --> promise object
  let data = await response; // git retriveing the object array from promise 
 // console.log(data); object array
  renderData(data);
}
fetchData();

function renderData(data) {
  let container = document.getElementsByClassName("container")[0];

  data.forEach((element) => {
    let card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
    <div class="top">
        <div class="left">
            <span class="${element.status.toLowerCase()}">${element.status}</span>
            <span class="casenumber">${element.caseNumber}</span>
        </div>
        <div class="right">
            ${element.date}
        </div>
    </div>
    <div class="bottom">
        <div class="fromloc">${element.fromLocation}</div>
        <div class="toloc">${element.toLocation}</div>
        <div class="price">${element.fare}</div>
    </div>`;

    container.appendChild(card);
  });
}
