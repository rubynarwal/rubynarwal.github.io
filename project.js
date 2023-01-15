let tech_stacks=[
    {
      "teck_name": "Java",
      "img_link":"https://drive.google.com/uc?export=view&id=10aHD66mjf5805u4IG0sHjmUBoHSSrtrZ"
    },
    {
      "teck_name": "SpringBoot",
      "img_link":"https://drive.google.com/uc?export=view&id=1c6meiP7Ay12p9HfWI6Dbpp1zb1XVUDn6"
    },
    {
      "teck_name": "JDBC",
      "img_link":"https://drive.google.com/uc?export=view&id=10aHD66mjf5805u4IG0sHjmUBoHSSrtrZ"
    },
    {
      "teck_name": "MySQL",
      "img_link":"./Images/mysql_logo.png"
    },
    {
      "teck_name": "Hibernate",
      "img_link":"https://cdn.freebiesupply.com/logos/large/2x/hibernate-logo-png-transparent.png"
    },
    {
      "teck_name": "JavaScript",
      "img_link":"https://drive.google.com/uc?export=view&id=1PAdZ31CeY83OFFT-MSACi9bOT6DUfFnY"
    },
    {
      "teck_name": "CSS",
      "img_link":"https://drive.google.com/uc?export=view&id=1csttg5pfFGGt7yE4A1YC2VxNpOPg43DG"
    },
    {
      "teck_name": "HTML",
      "img_link":"https://drive.google.com/uc?export=view&id=1OM8fgg4s361EblZU6k4i4DdUQ3sZxUDC"
    },
    {
      "teck_name": "GitHub",
      "img_link":"https://cdn-icons-png.flaticon.com/512/25/25231.png"
    },
    {
      "teck_name": "VS code",
      "img_link":"https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
    }    
  
  ]
  
  let techStackDiv = document.getElementById("tech");
  
  tech_stacks.forEach(tech=>{
  
  
    let comp = document.createElement("div");
  
    let img = document.createElement("img");
    img.src = tech.img_link;
    img.alt= tech.teck_name;
    let name = document.createElement("p");
    name.innerText=tech.teck_name;
  
    comp.append(img,name);
  
    techStackDiv.append(comp);  
  })
  
  let project_details = [
      
     {"project_name": "CrickBuzz clone",
      "details": "I have created this cricbuzz website.Cricbuzz is an Indian cricket news website owned by Times Internet. It features, news, articles and live coverage of cricket matches including videos, text commentary, player stats and team rankings..",
      "tech_stack":"HTML, CSS, JavaScript, github",
      "data_base": "local storage",
      "banner":"Images/Screenshot (113).png",
      "deployed": "https://helpful-tiramisu-215d0f.netlify.app/",
      "gitlink": "https://github.com/rubynarwal/cool-sidewalk-1617"},
  
      {"project_name": "Dice Clone",
       "details": "I have created the web throw dice application. Using the HTML, JavaScript, and CSS. Completed with in a day. ",
      "tech_stack":"HTML, CSS, JavaScript, github",
      "data_base": "local storage",
      "banner":"Images/Screenshot (121).png",
      "deployed": "https://friendly-chimera-6f5097.netlify.app/",
      "gitlink": "https://github.com/rubynarwal/Dice"},

      {"project_name": "Expedia Clone",
      "details": "Expedia is travel and search website and this is an attempt to clone the features..",
      "tech_stack":"HTML, CSS, JavaScript, github",
      "banner":"Images/download2.png",
      "data_base": "local storage",
      "deployed": "https://expedia-masai.netlify.app//",
      "gitlink": " https://github.com/Shishir-1995/Expedia"},
  
      {"project_name": "Zara clone",
       "details": "Zara specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes",
      "tech_stack":"HTML, CSS, JavaScript, github",
      "data_base": "local storage",
      "banner":"Images/download.png",
      "deployed": "https://poetic-beignet-6cbdb3.netlify.app/",
      "gitlink": "https://github.com/rishav015/public-bead-6343"},
      
  ];
  
  
  project_details.forEach(project=>{
  
      let Projects_Div = document.getElementById("projects_div");
  
      let Maindiv= document.createElement("div");
      Maindiv.className="main"
  
      let pictureDiv = document.createElement("div");
      pictureDiv.className="picture";
  
      let laptopDiv = document.createElement("div");
      let screenDiv = document.createElement("div");
      let img=document.createElement("img");
      img.src = project.banner;
      screenDiv.append(img);
      laptopDiv.append(screenDiv);
      let base = document.createElement("div");
      let lower_base =document.createElement("div");
  
      pictureDiv.append(laptopDiv,base,lower_base);
  
      let descriptionDiv =document.createElement("div");
      descriptionDiv.className ="project_description";
  
      let nameDiv=document.createElement("div");
      nameDiv.innerText=project.project_name;
      let projectDetails = document.createElement("div");
      projectDetails.innerHTML =`<p>${project.details}</p><p>Tech Stack : ${project.tech_stack}</p><p>Database : ${project.data_base}</p>`;
      let buttonsDiv = document.createElement("div");
      let deployedBtn = document.createElement("button");
      deployedBtn.innerText = "Live";
  
      deployedBtn.onclick=()=>{
          window.open(project.deployed, "_blank");
      }
  
      let gitBtn = document.createElement("button");
      gitBtn.innerText = "GitHub";
      gitBtn.onclick=()=>{
          window.open(project.gitlink, "_blank");
      }
  
      buttonsDiv.append(deployedBtn,gitBtn);
      descriptionDiv.append(nameDiv,projectDetails,buttonsDiv);
  
      Maindiv.append(pictureDiv,descriptionDiv);
      Projects_Div.append(Maindiv);
  });
  
  // Mobile view tabs.........
  
  
  let content=document.getElementById("content");
  let bars = document.querySelector("#bar");
  let cross = document.getElementById("cross");
  bars.onclick=()=>{
    content.style.display="flex";    
    cross.style.display="flex";
    bars.style.display="none";  
  }
  
  cross.onclick=()=>{
    closedFun();
  }
  
  let contentDiv = document.querySelectorAll("#content>a");
  contentDiv.forEach(ele=>{
      ele.onclick=()=>{
        closedFun();
    }
  });
  
  document.onscroll=()=>{
    closedFun();
  }
  
  let closedFun=()=>{
    content.style.display="none";
    bars.style.display="flex";
    cross.style.display="none";
  }