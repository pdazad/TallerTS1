import { data } from './data.js';

var seriesTbody = document.getElementById('series');
var seasonsAvrT =  document.getElementById('seasons');
renderSeriesInTable(data);
seasonsAvrT.innerHTML = "".concat(getSeasonsAvr(data));
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bolder;\">".concat(s.id, "</td>\n <td style=\"color: #4895D9;\">").concat(s.name, "</td>\n<td>").concat(s.channel, "</td>\n  <td>").concat(s.season, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAvr(series) {
    var totalSeasons = 0;
    var nSeries = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.season;
        nSeries++;
    });
    return totalSeasons / nSeries;
}
