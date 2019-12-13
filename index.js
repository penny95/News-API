const Request= require("request");

console.log("Please select The News Source:\n");
console.log("1. The New York Times\n2. CNN\n3. USA Today\n4. NBC News");

process.stdin.once('data', (newsSource)=>{

    var newsSource = Number(newsSource);

    function newsApi () {

    if(newsSource === 1){
      Request.get(`https://newsapi.org/v2/top-headlines?sources=the-new-york-times&pageSize=10&apiKey=fb616287f7c9405aa291c7e364dbde17`, (error,response,body)=>{
      if(error){
        console.log(error)
      }
      console.log(JSON.parse(body));
    })
  }
    else if(newsSource === 2){
      Request.get(`https://newsapi.org/v2/top-headlines?sources=cnn&pageSize=10&apiKey=fb616287f7c9405aa291c7e364dbde17`, (error,response,body)=>{
        if(error){
          console.log(error)
        }
      console.log(JSON.parse(body));
    })
  }
    else if(newsSource === 3){
      Request.get(`https://newsapi.org/v2/top-headlines?sources=usa-today&pageSize=10&apiKey=fb616287f7c9405aa291c7e364dbde17`, (error,response,body)=>{
        if(error){
          console.log(error)
        }
      console.log(JSON.parse(body));
    })
  }
    else if(newsSource === 4){
      Request.get(`https://newsapi.org/v2/top-headlines?sources=nbc-news&pageSize=10&apiKey=fb616287f7c9405aa291c7e364dbde17`, (error,response,body)=>{
        if(error){
          console.log(error)
        }
      console.log(JSON.parse(body));
      })
    }
    else{
      console.log('Invalid input')
    }
  
    }
    console.log(newsApi());
    })
