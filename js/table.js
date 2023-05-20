const table = document.getElementById("personalTable");

const data = [
    {id: "Coffee", Icon: "<i class='bi bi-cup-hot-fill'></i> ", Description: "Nothing like a fresh brew", Info:"Full black or with steamed milk", Image:"<img img-thumbnail height='20%' width='20%' src='https://www.telegraph.co.uk/content/dam/health-fitness/2023/02/03/TELEMMGLPICT000324110767_trans_NvBQzQNjv4BqHac3hFFKEexe9hfd3rJLuOil7a1KV2STY3xRqqFt_No.jpeg?imwidth=960 alt='coffee'> "},
    {id: "Biker", Icon: "<i class='bi bi-bicycle'></i>", Description: "Love flying through the woods", Info:"Workout", Image:"<img height='20%' width='20%' img-thumbnail src='https://i.pinimg.com/originals/52/4f/c3/524fc3a88b8a07cd55053ff8c503cd1c.jpg' alt='biker'>"},
    {id: "Teacher", Icon: "<i class='bi bi-pencil'></i>", Description: "Teaching kids contains highs and lows", Info:"Job", Image:"<img padding='3px' img-thumbnail height='20%' width='20%' src='https://static.boredpanda.com/blog/wp-content/uploads/2018/08/teacher-meme-1-5b85121f6bfbd__700.jpg' alt='teacher'> "},
    {id: "Camper", Icon: "<i class='bi bi-tree'></i>", Description: "Let med escape the everyday for a night under the stars", Info:"Meditation", Image:"<img padding='3px' img-thumbnail height='20%' width='20%' src='https://www.switchbacktravel.com/sites/default/files/Camping%20in%20Norway%20%28m%29.jpg' alt='camper'> "},
    {id: "Gamer", Icon: "<i class='bi bi-controller'></i>", Description: "Slaying dragons in the Lands Between is a great escape as well", Info:"Stress handling", Image:"<img padding='3px' img-thumbnail height='20%' width='20%' src='https://static1.srcdn.com/wordpress/wp-content/uploads/2022/03/Elden-Ring-Lands-Between-Name-Why-Lore-Explained-Open-World.jpg' alt='gamer'> "},
];

for (let i = 0; i < data.length; i++) {
    const newRow = table.insertRow();
    
    const idCell = newRow.insertCell();
    idCell.innerHTML = data[i].id;
    
    const IconCell = newRow.insertCell()
    IconCell.innerHTML = data[i].Icon

    const DescriptionCell = newRow.insertCell()
    DescriptionCell.innerHTML = data[i].Description

    const InfoCell = newRow.insertCell()
    InfoCell.innerHTML = data[i].Info

    const ImageCell = newRow.insertCell()
    ImageCell.innerHTML = data[i].Image

    $(ImageCell).find("img").click(function () {
        const imageURL = $(this).attr("src");
        window.open(imageURL, "_blank");
      });

      $("tr:odd").hover(
        function () {
          $(this).css("color", "green");
        },
        function () {
          $(this).css("color", "");
        }
      );
}

