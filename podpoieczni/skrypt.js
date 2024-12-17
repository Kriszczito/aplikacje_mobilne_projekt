document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("aktywnosc-select");
    const tabelaBody = document.querySelector("#tabela-podopiecznych tbody");
  
    // Pobieramy unikalne aktywności z bazy wiedzy
    const aktywnosci = [...new Set(podopieczni.map(p => p.aktywnosc))];
  
    // Wypełniamy listę rozwijaną aktywnościami
    aktywnosci.forEach(aktywnosc => {
      const option = document.createElement("option");
      option.value = aktywnosc;
      option.textContent = aktywnosc;
      selectElement.appendChild(option);
    });
  
    // Funkcja do wyświetlania danych w tabeli
    function wyswietlDane(filtrAktywnosc) {
      // Czyścimy tabelę
      tabelaBody.innerHTML = "";
  
      // Filtrujemy podopiecznych na podstawie wybranej aktywności
      const filtrowaniPodopieczni = podopieczni.filter(p => p.aktywnosc === filtrAktywnosc);
  
      // Dodajemy filtrowane dane do tabeli
      filtrowaniPodopieczni.forEach(podopieczny => {
        const row = document.createElement("tr");
  
        const imieCell = document.createElement("td");
        imieCell.textContent = podopieczny.imie;
  
        const nazwiskoCell = document.createElement("td");
        nazwiskoCell.textContent = podopieczny.nazwisko;
  
        const aktywnoscCell = document.createElement("td");
        aktywnoscCell.textContent = podopieczny.aktywnosc;
  
        row.appendChild(imieCell);
        row.appendChild(nazwiskoCell);
        row.appendChild(aktywnoscCell);
  
        tabelaBody.appendChild(row);
      });
    }
  
    // Nasłuchujemy zmiany w liście rozwijanej
    selectElement.addEventListener("change", () => {
      const wybranaAktywnosc = selectElement.value;
      if (wybranaAktywnosc) {
        wyswietlDane(wybranaAktywnosc);
      } else {
        tabelaBody.innerHTML = ""; // Czyścimy tabelę, jeśli nie wybrano aktywności
      }
    });
  });
  