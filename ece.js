const link=document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href","http://www.boztraining.com");
link.textContent="boz training"; 


const pdegeri=document.querySelector("p");
console.log(pdegeri.getAttribute("class"));
pdegeri.setAttribute("class","error");
pdegeri.setAttribute("style","color:blue");
