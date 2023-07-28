const events = [
    { month: "ENERO", date: "5 DE ENERO DE 1792", title: "DÍA DEL PERIODISTA ECUATORIANO" },
    { month: "ENERO", date: "17 DE ENERO DE 1889", title: "MUERTE DE JUAN MONTALVO" },
    { month: "ENERO", date: "22 DE ENERO DE 1839", title: "CANTONIZACIÓN DE SANTA ELENA" },
    { month: "ENERO", date: "28 DE ENERO DE 1912", title: "INMOLACIÓN DEL GENERAL ELOY ALFARO DELGADO" },
    { month: "ENERO", date: "29 DE ENERO DE 1942", title: "FIRMA DEL PROTOCOLO DE RÍO DE JANEIRO" },
  
    { month: "FEBRERO", date: "12 DE FEBRERO DE 1542", title: "DESCUBRIMIENTO DEL RÍO AMAZONAS" },
    { month: "FEBRERO", date: "12 DE FEBRERO", title: "DÍA DEL ORIENTE ECUATORIANO" },
    { month: "FEBRERO", date: "18 DE FEBRERO DE 1935", title: "INICIACIÓN DEL SERVICIO MILITAR OBLIGATORIO EN EL ECUADOR" },
    { month: "FEBRERO", date: "21 DE FEBRERO", title: "DÍA DEL MÉDICO ECUATORIANO" },
    { month: "FEBRERO", date: "21 DE FEBRERO", title: "DÍA NACIONAL DE LAS LENGUAS NATIVAS" },
    { month: "FEBRERO", date: "21 DE FEBRERO", title: "DÍA DE LA LUCHA CONTRA EL CAMBIO CLIMÁTICO" },
    { month: "FEBRERO", date: "27 DE FEBRERO DE 1829", title: "BATALLA DE TARQUI" },
    { month: "FEBRERO", date: "27 DE FEBRERO DE 1948", title: "DÍA DEL CIVISMO" },
    { month: "FEBRERO", date: "27 DE FEBRERO", title: "DÍA DEL EJÉRCITO ECUATORIANO" },
    { month: "FEBRERO", date: "27 DE FEBRERO", title: "DÍA DE LA UNIDAD NACIONAL" },
  
    // Agregar más eventos para los demás meses...
  
    { month: "DICIEMBRE", date: "1 DE DICIEMBRE", title: "DÍA MUNDIAL DE LA LUCHA CONTRA EL SIDA" },
    { month: "DICIEMBRE", date: "3 DE DICIEMBRE", title: "DÍA DE LAS PERSONAS CON DISCAPACIDAD" },
    { month: "DICIEMBRE", date: "6 DE DICIEMBRE DE 1534", title: "FUNDACIÓN DE QUITO" },
    { month: "DICIEMBRE", date: "9 DE DICIEMBRE", title: "DÍA INTERNACIONAL CONTRA LA CORRUPCIÓN" },
    { month: "DICIEMBRE", date: "10 DE DICIEMBRE", title: "DÍA DE LOS DERECHOS HUMANOS" },
    { month: "DICIEMBRE", date: "22 DE DICIEMBRE DE 1937", title: "CANTONIZACIÓN DE SALINAS" }
  ];
  
  function createEventTable(events) {
    const eventTable = document.getElementById("eventTable");
  
    if (events.length === 0) {
      eventTable.innerHTML = "<p>No hay eventos para mostrar.</p>";
      return;
    }
  
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    headerRow.innerHTML = "<th>MES</th><th>FECHA CÍVICA</th><th>TEMA</th>";
  
    events.forEach((event) => {
      const row = table.insertRow();
      row.innerHTML = `<td>${event.month}</td><td>${event.date}</td><td>${event.title}</td>`;
    });
  
    eventTable.appendChild(table);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    createEventTable(events);
  });