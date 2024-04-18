let arr = []
    let row;

    function fetching() {
        fetch("https://restcountries.com/v3.1/all")
            .then(Response => Response.json())
            .then(data => {
                let countryTable = document.getElementById("countryTable")
                data.sort((a, b) => {
                    if (a.name.common > b.name.common) { return 1 }
                    else if (b.name.common > a.name.common) {
                        return -1
                    } else {
                        return 0
                    }
                }).forEach(country => {
                    row = `<tr id="rowss">
           <td id="cols">${country.name.common}</td>
          <td id="cols">${country.capital ? country.capital[0] : 'N/A'}</td>
          <td id="cols">${country.region}</td>
          <td id="cols"><img width="50" src="${country.coatOfArms.png}" alt= ""/></td>
        `
                    countryTable.innerHTML += row
                    console.log(row);

                });
            })
    }
    fetching()