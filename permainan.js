console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
var color;
var ben;
var angka;

function random(){
		var warna = ["blue", "green", "yellow", "red"];
		var index = Math.floor(Math.random() * warna.length);

		var bg = "background:"+warna[index]+";"
		color = warna[index];
		document.querySelector("#randomcolor").style = bg;
}

function randombtk(){
            var bentuk = ["Segitiga", "Persegi", "Persegi Panjang", "Bulat"];
            var index = Math.floor(Math.random() * bentuk.length);

            var btk = bentuk[index];
            ben = bentuk[index];
            document.querySelector("#randombentuk").innerText = btk;
}

function randomangka(){
            var ang = ["Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
            var index = Math.floor(Math.random() * ang.length);

            var agk = ang[index];
            angka = ang[index];
            document.querySelector("#randomangka").innerText = agk;
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
   button.addEventListener('click', function(event){
 
       // mendapatkan objek elemen yang diklik
       const target = event.target;
       
 	    if(target.classList.contains('card1')) {
                  random();
                  return;
       	}
       	if(target.classList.contains('biru')){
       		if (color==='blue'){
       			document.querySelector("#true").innerText = "BENAR!"
       		} else{
       			document.querySelector("#true").innerText = "SALAH!"
       		}
       	}
       	if(target.classList.contains('merah')){
       		if (color==='red'){
       			document.querySelector("#true").innerText = "BENAR!"
       		} else{
       			document.querySelector("#true").innerText = "SALAH!"
       		}
       	}
       	if(target.classList.contains('kuning')){
       		if (color==='yellow'){
       			document.querySelector("#true").innerText = "BENAR!"
       		} else{
       			document.querySelector("#true").innerText = "SALAH!"
       		}
       	}
       	if(target.classList.contains('hijau')){
       		if (color==='green'){
       			document.querySelector("#true").innerText = "BENAR!"
       		} else{
       			document.querySelector("#true").innerText = "SALAH!"
       		}
       	}

            if(target.classList.contains('card2')) {
                  randombtk();
                  return;
            }

            if(target.classList.contains('segitiga')){
                  if (ben==='Segitiga'){
                        document.querySelector("#true1").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true1").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('persegi')){
                  if (ben==='Persegi'){
                        document.querySelector("#true1").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true1").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('persegipanjang')){
                  if (ben==='Persegi Panjang'){
                        document.querySelector("#true1").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true1").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('bulat')){
                  if (ben==='Bulat'){
                        document.querySelector("#true1").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true1").innerText = "SALAH!"
                  }
            }

             if(target.classList.contains('card3')) {
                  randomangka();
                  return;
            }

            if(target.classList.contains('one')){
                  if (angka==='Satu'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('two')){
                  if (angka==='Dua'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('three')){
                  if (angka==='Tiga'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('four')){
                  if (angka==='Empat'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('five')){
                  if (angka==='Lima'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('six')){
                  if (angka==='Enam'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('seven')){
                  if (angka==='Tujuh'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('eight')){
                  if (angka==='Delapan'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
            if(target.classList.contains('nine')){
                  if (angka==='Sembilan'){
                        document.querySelector("#true2").innerText = "BENAR!"
                  } else{
                        document.querySelector("#true2").innerText = "SALAH!"
                  }
            }
});
}