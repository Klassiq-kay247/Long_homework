const containerIcon= document.getElementById("_toggle")
  const containerItemsNav=document.getElementById("_list")
  const nav_bar = document.querySelector(".nav_bar ")

  nav_bar.style.left='0' // poner este estilos  para que el contenedor se vaya a la izquierda y no se vea el contenido 


  containerIcon.onclick = () =>{
    containerItemsNav.classList.toggle("open")
    containerIcon.classList.toggle("close")

    if(containerIcon.classList.length==2){
      containerIcon.childNodes[1].src='https://cdn-icons-png.flaticon.com/512/1828/1828778.png'
      
      nav_bar.removeAttribute('style') // cuando se quiere ver el contenido (centrado) se quita el estilo para poder hacerlo


    }
    else{
      containerIcon.childNodes[1].src='./images/icon-hamburger.svg'
      nav_bar.style.left='0' // poner este estilos  para que el contenedor se vaya a la izquierda y no se vea el contenido 


    }
  }