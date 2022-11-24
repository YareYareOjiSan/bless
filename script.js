function changeImage() {
    if (
      document.getElementById("image").src ===
      "https://i.postimg.cc/3JvchjJj/FL5men-WWUA0-MUTu.jpg"
    ) {

      document.getElementById("image").src =
      "https://i.postimg.cc/vTR5tnFM/gettyimages-465395994-594x594.jpg";
      document.getElementById("switch").innerHTML = "OFF";
      document.getElementById("main").classList.remove("nolight");
      document.getElementById("main").classList.add("letitbelight");

    } else if (
      document.getElementById("image").src ===
      "https://i.postimg.cc/vTR5tnFM/gettyimages-465395994-594x594.jpg"

    ) {
      document.getElementById("image").src =
      "https://i.postimg.cc/3JvchjJj/FL5men-WWUA0-MUTu.jpg";
      document.getElementById("switch").innerHTML = "ON";
      document.getElementById("main").classList.add("nolight");
      document.getElementById("main").classList.remove("letitbelight");
    }
  }
  

  document.getElementById("switch").addEventListener("click", changeImage);
  