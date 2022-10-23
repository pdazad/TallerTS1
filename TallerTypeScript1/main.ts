import { Serie } from "./serie";
import { data } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"
const seasonsAvrT: HTMLElement = document.getElementById("seasons")!;

renderSeriesInTable(data);
seasonsAvrT.innerHTML = `${getSeasonsAvr(data)}`

function renderSeriesInTable(series: Serie[]): void {
    series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td>${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getSeasonsAvr(series: Serie[]): number {
  let totalSeasons: number = 0;
  let nSeries: number = 0;
  series.forEach((serie) => {
      totalSeasons = totalSeasons + serie.seasons;
      nSeries++;
  });
  return totalSeasons/nSeries;
}
