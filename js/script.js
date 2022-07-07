


const image_search = (data)=>{
    fetch(`https://api.unsplash.com/search/photos?query=${data}&client_id=CMZUIu2WFAuEs_YCRQVMZtX9YEVbnh-VU33ky1T2fFg&per_page=50`).then(function(response){
    return response.json();
}).then(function(response){
    console.log(response);


    let image1 =  response.results[0].urls.regular;
    let image2 =  response.results[1].urls.regular;
    let image3 =  response.results[2].urls.regular;
    let image4 =  response.results[3].urls.regular;
    let image5=  response.results[4].urls.regular;

    let image6 =  response.results[5].urls.regular;
    let image7 =  response.results[6].urls.regular;
    let image8 =  response.results[7].urls.regular;
    let image9 =  response.results[8].urls.regular;
    let image10=  response.results[9].urls.regular;

    let image11 =  response.results[10].urls.regular;
    let image12 =  response.results[11].urls.regular;
    let image13 =  response.results[12].urls.regular;
    let image14 =  response.results[13].urls.regular;
    let image15=  response.results[14].urls.regular;

    let image16 =  response.results[15].urls.regular;
    let image17 =  response.results[16].urls.regular;
    let image18 =  response.results[17].urls.regular;
    let image19 =  response.results[18].urls.regular;
    let image20=  response.results[19].urls.regular;

    let image21 =  response.results[20].urls.regular;
    let image22 =  response.results[21].urls.regular;
    let image23 =  response.results[22].urls.regular;
    let image24 =  response.results[23].urls.regular;
    let image25=  response.results[24].urls.regular;

    let image26 =  response.results[25].urls.regular;
    let image27 =  response.results[26].urls.regular;
    let image28 =  response.results[27].urls.regular;
    let image29 =  response.results[28].urls.regular;
    

    document.querySelector(".image1").setAttribute("src", image1);
    document.querySelector(".image2").setAttribute("src", image2);
    document.querySelector(".image3").setAttribute("src", image3);
    document.querySelector(".image4").setAttribute("src", image4);
    document.querySelector(".image5").setAttribute("src", image5);

    document.querySelector(".image6").setAttribute("src", image6);
    document.querySelector(".image7").setAttribute("src", image7);
    document.querySelector(".image8").setAttribute("src", image8);
    document.querySelector(".image9").setAttribute("src", image9);
    document.querySelector(".image10").setAttribute("src", image10);

    document.querySelector(".image11").setAttribute("src", image11);
    document.querySelector(".image12").setAttribute("src", image12);
    document.querySelector(".image13").setAttribute("src", image13);
    document.querySelector(".image14").setAttribute("src", image14);
    document.querySelector(".image15").setAttribute("src", image15);

    document.querySelector(".image16").setAttribute("src", image16);
    document.querySelector(".image17").setAttribute("src", image17);
    document.querySelector(".image18").setAttribute("src", image18);
    document.querySelector(".image19").setAttribute("src", image19);
    document.querySelector(".image20").setAttribute("src", image20);

    document.querySelector(".image21").setAttribute("src", image21);
    document.querySelector(".image22").setAttribute("src", image22);
    document.querySelector(".image23").setAttribute("src", image23);
    document.querySelector(".image24").setAttribute("src", image24);
    document.querySelector(".image25").setAttribute("src", image25);

    document.querySelector(".image26").setAttribute("src", image26);
    document.querySelector(".image27").setAttribute("src", image27);
    document.querySelector(".image28").setAttribute("src", image28);
    document.querySelector(".image29").setAttribute("src", image29);
    
});
}



let button = document.querySelector(".btn");

button.addEventListener('click',()=>{

    let get_data =document.querySelector(".input_text").value;

    image_search(get_data);
})


