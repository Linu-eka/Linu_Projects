/**
 * CountryData.js
 * This file contains code that processes the data of each individual country for the Tokyo 2020 Olympics.
 */


// import country data
let countryData = [
  {
    previousRank: '1',
    predictedRank: '1',
    country: 'United States of America',
    goldMedals: '39',
    silverMedals: '41',
    bronzeMedals: '33',
    totalMedals: '113'
  },
  {
    previousRank: '2',
    predictedRank: '2',
    country: "People's Republic of China",
    goldMedals: '38',
    silverMedals: '32',
    bronzeMedals: '18',
    totalMedals: '88'
  },
  {
    previousRank: '3',
    predictedRank: '3',
    country: 'Japan',
    goldMedals: '27',
    silverMedals: '14',
    bronzeMedals: '17',
    totalMedals: '58'
  },
  {
    previousRank: '6',
    predictedRank: '4',
    country: 'Australia',
    goldMedals: '17',
    silverMedals: '7',
    bronzeMedals: '22',
    totalMedals: '46'
  },
  {
    previousRank: '4',
    predictedRank: '5',
    country: 'Great Britain',
    goldMedals: '22',
    silverMedals: '21',
    bronzeMedals: '22',
    totalMedals: '65'
  },
  {
    previousRank: '5',
    predictedRank: '6',
    country: 'ROC',
    goldMedals: '20',
    silverMedals: '28',
    bronzeMedals: '23',
    totalMedals: '71'
  },
  {
    previousRank: '10',
    predictedRank: '7',
    country: 'Italy',
    goldMedals: '10',
    silverMedals: '10',
    bronzeMedals: '20',
    totalMedals: '40'
  },
  {
    previousRank: '9',
    predictedRank: '8',
    country: 'Germany',
    goldMedals: '10',
    silverMedals: '11',
    bronzeMedals: '16',
    totalMedals: '37'
  },
  {
    previousRank: '7',
    predictedRank: '9',
    country: 'Netherlands',
    goldMedals: '10',
    silverMedals: '12',
    bronzeMedals: '14',
    totalMedals: '36'
  },
  {
    previousRank: '11',
    predictedRank: '10',
    country: 'Canada',
    goldMedals: '7',
    silverMedals: '6',
    bronzeMedals: '11',
    totalMedals: '24'
  },
  {
    previousRank: '8',
    predictedRank: '11',
    country: 'France',
    goldMedals: '10',
    silverMedals: '12',
    bronzeMedals: '11',
    totalMedals: '33'
  },
  {
    previousRank: '16',
    predictedRank: '12',
    country: 'Republic of Korea',
    goldMedals: '6',
    silverMedals: '4',
    bronzeMedals: '10',
    totalMedals: '20'
  },
  {
    previousRank: '12',
    predictedRank: '13',
    country: 'Brazil',
    goldMedals: '7',
    silverMedals: '6',
    bronzeMedals: '8',
    totalMedals: '21'
  },
  {
    previousRank: '13',
    predictedRank: '14',
    country: 'New Zealand',
    goldMedals: '7',
    silverMedals: '6',
    bronzeMedals: '7',
    totalMedals: '20'
  },
  {
    previousRank: '14',
    predictedRank: '15',
    country: 'Cuba',
    goldMedals: '7',
    silverMedals: '3',
    bronzeMedals: '5',
    totalMedals: '15'
  },
  {
    previousRank: '15',
    predictedRank: '16',
    country: 'Hungary',
    goldMedals: '6',
    silverMedals: '7',
    bronzeMedals: '7',
    totalMedals: '20'
  },
  {
    previousRank: '21',
    predictedRank: '17',
    country: 'Jamaica',
    goldMedals: '4',
    silverMedals: '1',
    bronzeMedals: '4',
    totalMedals: '9'
  },
  {
    previousRank: '35',
    predictedRank: '18',
    country: 'Turkey',
    goldMedals: '2',
    silverMedals: '2',
    bronzeMedals: '9',
    totalMedals: '13'
  },
  {
    previousRank: '44',
    predictedRank: '19',
    country: 'Ukraine',
    goldMedals: '1',
    silverMedals: '6',
    bronzeMedals: '12',
    totalMedals: '19'
  },
  {
    previousRank: '28',
    predictedRank: '20',
    country: 'Serbia',
    goldMedals: '3',
    silverMedals: '1',
    bronzeMedals: '5',
    totalMedals: '9'
  },
  {
    previousRank: '83',
    predictedRank: '21',
    country: 'Kazakhstan',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '8',
    totalMedals: '8'
  },
  {
    previousRank: '18',
    predictedRank: '22',
    country: 'Czech Republic',
    goldMedals: '4',
    silverMedals: '4',
    bronzeMedals: '3',
    totalMedals: '11'
  },
  {
    previousRank: '29',
    predictedRank: '23',
    country: 'Belgium',
    goldMedals: '3',
    silverMedals: '1',
    bronzeMedals: '3',
    totalMedals: '7'
  },
  {
    previousRank: '17',
    predictedRank: '24',
    country: 'Poland',
    goldMedals: '4',
    silverMedals: '5',
    bronzeMedals: '5',
    totalMedals: '14'
  },
  {
    previousRank: '20',
    predictedRank: '25',
    country: 'Norway',
    goldMedals: '4',
    silverMedals: '2',
    bronzeMedals: '2',
    totalMedals: '8'
  },
  {
    previousRank: '53',
    predictedRank: '26',
    country: 'Austria',
    goldMedals: '1',
    silverMedals: '1',
    bronzeMedals: '5',
    totalMedals: '7'
  },
  {
    previousRank: '24',
    predictedRank: '27',
    country: 'Switzerland',
    goldMedals: '3',
    silverMedals: '4',
    bronzeMedals: '6',
    totalMedals: '13'
  },
  {
    previousRank: '22',
    predictedRank: '28',
    country: 'Spain',
    goldMedals: '3',
    silverMedals: '8',
    bronzeMedals: '6',
    totalMedals: '17'
  },
  {
    previousRank: '34',
    predictedRank: '29',
    country: 'Chinese Taipei',
    goldMedals: '2',
    silverMedals: '4',
    bronzeMedals: '6',
    totalMedals: '12'
  },
  {
    previousRank: '32',
    predictedRank: '30',
    country: 'Uzbekistan',
    goldMedals: '3',
    silverMedals: '0',
    bronzeMedals: '2',
    totalMedals: '5'
  },
  {
    previousRank: '19',
    predictedRank: '31',
    country: 'Kenya',
    goldMedals: '4',
    silverMedals: '4',
    bronzeMedals: '2',
    totalMedals: '10'
  },
  {
    previousRank: '27',
    predictedRank: '32',
    country: 'Islamic Republic of Iran',
    goldMedals: '3',
    silverMedals: '2',
    bronzeMedals: '2',
    totalMedals: '7'
  },
  {
    previousRank: '30',
    predictedRank: '33',
    country: 'Bulgaria',
    goldMedals: '3',
    silverMedals: '1',
    bronzeMedals: '2',
    totalMedals: '6'
  },
  {
    previousRank: '39',
    predictedRank: '34',
    country: 'Israel',
    goldMedals: '2',
    silverMedals: '0',
    bronzeMedals: '2',
    totalMedals: '4'
  },
  {
    previousRank: '25',
    predictedRank: '35',
    country: 'Denmark',
    goldMedals: '3',
    silverMedals: '4',
    bronzeMedals: '4',
    totalMedals: '11'
  },
  {
    previousRank: '55',
    predictedRank: '36',
    country: 'Indonesia',
    goldMedals: '1',
    silverMedals: '1',
    bronzeMedals: '3',
    totalMedals: '5'
  },
  {
    previousRank: '54',
    predictedRank: '37',
    country: 'Egypt',
    goldMedals: '1',
    silverMedals: '1',
    bronzeMedals: '4',
    totalMedals: '6'
  },
  {
    previousRank: '41',
    predictedRank: '38',
    country: 'Qatar',
    goldMedals: '2',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '3'
  },
  {
    previousRank: '48',
    predictedRank: '39',
    country: 'India',
    goldMedals: '1',
    silverMedals: '2',
    bronzeMedals: '4',
    totalMedals: '7'
  },
  {
    previousRank: '39',
    predictedRank: '40',
    country: 'Ireland',
    goldMedals: '2',
    silverMedals: '0',
    bronzeMedals: '2',
    totalMedals: '4'
  },
  {
    previousRank: '36',
    predictedRank: '41',
    country: 'Uganda',
    goldMedals: '2',
    silverMedals: '1',
    bronzeMedals: '1',
    totalMedals: '4'
  },
  {
    previousRank: '26',
    predictedRank: '42',
    country: 'Croatia',
    goldMedals: '3',
    silverMedals: '3',
    bronzeMedals: '2',
    totalMedals: '8'
  },
  {
    previousRank: '31',
    predictedRank: '43',
    country: 'Slovenia',
    goldMedals: '3',
    silverMedals: '1',
    bronzeMedals: '1',
    totalMedals: '5'
  },
  {
    previousRank: '59',
    predictedRank: '44',
    country: 'Estonia',
    goldMedals: '1',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '2'
  },
  {
    previousRank: '84',
    predictedRank: '45',
    country: 'Mexico',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '4',
    totalMedals: '4'
  },
  {
    previousRank: '63',
    predictedRank: '46',
    country: 'Bermuda',
    goldMedals: '1',
    silverMedals: '0',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '59',
    predictedRank: '47',
    country: 'Fiji',
    goldMedals: '1',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '2'
  },
  {
    previousRank: '49',
    predictedRank: '48',
    country: 'Hong Kong, China',
    goldMedals: '1',
    silverMedals: '2',
    bronzeMedals: '3',
    totalMedals: '6'
  },
  {
    previousRank: '59',
    predictedRank: '49',
    country: 'Thailand',
    goldMedals: '1',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '2'
  },
  {
    previousRank: '85',
    predictedRank: '50',
    country: 'Finland',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '2',
    totalMedals: '2'
  },
  {
    previousRank: '23',
    predictedRank: '51',
    country: 'Sweden',
    goldMedals: '3',
    silverMedals: '6',
    bronzeMedals: '0',
    totalMedals: '9'
  },
  {
    previousRank: '56',
    predictedRank: '52',
    country: 'Portugal',
    goldMedals: '1',
    silverMedals: '1',
    bronzeMedals: '2',
    totalMedals: '4'
  },
  {
    previousRank: '36',
    predictedRank: '53',
    country: 'Greece',
    goldMedals: '2',
    silverMedals: '1',
    bronzeMedals: '1',
    totalMedals: '4'
  },
  {
    previousRank: '86',
    predictedRank: '54',
    country: 'Grenada',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '1'
  },
  {
    previousRank: '59',
    predictedRank: '55',
    country: 'Latvia',
    goldMedals: '1',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '2'
  },
  {
    previousRank: '42',
    predictedRank: '56',
    country: 'Bahamas',
    goldMedals: '2',
    silverMedals: '0',
    bronzeMedals: '0',
    totalMedals: '2'
  },
  {
    previousRank: '86',
    predictedRank: '57',
    country: 'Syrian Arab Republic',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '1'
  },
  {
    previousRank: '71',
    predictedRank: '58',
    country: 'Mongolia',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '3',
    totalMedals: '4'
  },
  {
    previousRank: '56',
    predictedRank: '59',
    country: 'Ethiopia',
    goldMedals: '1',
    silverMedals: '1',
    bronzeMedals: '2',
    totalMedals: '4'
  },
  {
    previousRank: '42',
    predictedRank: '60',
    country: 'Kosovo',
    goldMedals: '2',
    silverMedals: '0',
    bronzeMedals: '0',
    totalMedals: '2'
  },
  {
    previousRank: '45',
    predictedRank: '61',
    country: 'Belarus',
    goldMedals: '1',
    silverMedals: '3',
    bronzeMedals: '3',
    totalMedals: '7'
  },
  {
    previousRank: '86',
    predictedRank: '62',
    country: 'Burkina Faso',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '1'
  },
  {
    previousRank: '63',
    predictedRank: '63',
    country: 'Morocco',
    goldMedals: '1',
    silverMedals: '0',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '33',
    predictedRank: '64',
    country: 'Georgia',
    goldMedals: '2',
    silverMedals: '5',
    bronzeMedals: '1',
    totalMedals: '8'
  },
  {
    previousRank: '63',
    predictedRank: '65',
    country: 'Puerto Rico',
    goldMedals: '1',
    silverMedals: '0',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '86',
    predictedRank: '66',
    country: 'Ghana',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '1'
  },
  {
    previousRank: '86',
    predictedRank: '67',
    country: 'Botswana',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '1'
  },
  {
    previousRank: '67',
    predictedRank: '68',
    country: 'Azerbaijan',
    goldMedals: '0',
    silverMedals: '3',
    bronzeMedals: '4',
    totalMedals: '7'
  },
  {
    previousRank: '50',
    predictedRank: '69',
    country: 'Slovakia',
    goldMedals: '1',
    silverMedals: '2',
    bronzeMedals: '1',
    totalMedals: '4'
  },
  {
    previousRank: '50',
    predictedRank: '70',
    country: 'Philippines',
    goldMedals: '1',
    silverMedals: '2',
    bronzeMedals: '1',
    totalMedals: '4'
  },
  {
    previousRank: '77',
    predictedRank: '71',
    country: 'North Macedonia',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '38',
    predictedRank: '72',
    country: 'Ecuador',
    goldMedals: '2',
    silverMedals: '1',
    bronzeMedals: '0',
    totalMedals: '3'
  },
  {
    previousRank: '86',
    predictedRank: '73',
    country: 'Republic of Moldova',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '1'
  },
  {
    previousRank: '77',
    predictedRank: '74',
    country: 'Namibia',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '46',
    predictedRank: '75',
    country: 'Romania',
    goldMedals: '1',
    silverMedals: '3',
    bronzeMedals: '0',
    totalMedals: '4'
  },
  {
    previousRank: '72',
    predictedRank: '76',
    country: 'San Marino',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '2',
    totalMedals: '3'
  },
  {
    previousRank: '72',
    predictedRank: '77',
    country: 'Argentina',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '2',
    totalMedals: '3'
  },
  {
    previousRank: '86',
    predictedRank: '78',
    country: 'Kuwait',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '1'
  },
  {
    previousRank: '52',
    predictedRank: '79',
    country: 'South Africa',
    goldMedals: '1',
    silverMedals: '2',
    bronzeMedals: '0',
    totalMedals: '3'
  },
  {
    previousRank: '58',
    predictedRank: '80',
    country: 'Tunisia',
    goldMedals: '1',
    silverMedals: '1',
    bronzeMedals: '0',
    totalMedals: '2'
  },
  {
    previousRank: '86',
    predictedRank: '81',
    country: 'Ivory Coast',
    goldMedals: '0',
    silverMedals: '0',
    bronzeMedals: '1',
    totalMedals: '1'
  },
  {
    previousRank: '74',
    predictedRank: '82',
    country: 'Nigeria',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '1',
    totalMedals: '2'
  },
  {
    previousRank: '69',
    predictedRank: '83',
    country: 'Armenia',
    goldMedals: '0',
    silverMedals: '2',
    bronzeMedals: '2',
    totalMedals: '4'
  },
  {
    previousRank: '70',
    predictedRank: '84',
    country: 'Kyrgyzstan',
    goldMedals: '0',
    silverMedals: '2',
    bronzeMedals: '1',
    totalMedals: '3'
  },
  {
    previousRank: '74',
    predictedRank: '85',
    country: 'Jordan',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '1',
    totalMedals: '2'
  },
  {
    previousRank: '77',
    predictedRank: '86',
    country: 'Lithuania',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '68',
    predictedRank: '87',
    country: 'Dominican Republic',
    goldMedals: '0',
    silverMedals: '3',
    bronzeMedals: '2',
    totalMedals: '5'
  },
  {
    previousRank: '74',
    predictedRank: '88',
    country: 'Malaysia',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '1',
    totalMedals: '2'
  },
  {
    previousRank: '77',
    predictedRank: '89',
    country: 'Saudi Arabia',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '46',
    predictedRank: '90',
    country: 'Venezuela',
    goldMedals: '1',
    silverMedals: '3',
    bronzeMedals: '0',
    totalMedals: '4'
  },
  {
    previousRank: '77',
    predictedRank: '91',
    country: 'Turkmenistan',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '77',
    predictedRank: '92',
    country: 'Bahrain',
    goldMedals: '0',
    silverMedals: '1',
    bronzeMedals: '0',
    totalMedals: '1'
  },
  {
    previousRank: '66',
    predictedRank: '93',
    country: 'Colombia',
    goldMedals: '0',
    silverMedals: '4',
    bronzeMedals: '1',
    totalMedals: '5'
  }
];

// TODO: need to add names for each column that can be reference for the table

let tableRef = document.getElementById("table-country");
let output = "<tbody>";
for (let i = 0; i < countryData.length; i++)
{
  output +=  `
    <tr>
      <td >${countryData[i].previousRank}</td>
      <td >${countryData[i].country}</td>
      <td >${countryData[i].goldMedals}</td>
      <td >${countryData[i].silverMedals}</td>
      <td >${countryData[i].bronzeMedals}</td>
      <td >${countryData[i].totalMedals}</td>
      <td >${countryData[i].predictedRank}</td>
    </tr>`
}
output += `</tbody>`;
tableRef.innerHTML += output;
$(document).ready(function() {
    $('#table-country').DataTable( {
        "pagingType": "full_numbers"
    } );
} );

// function removeTable() {
//   let tableRef = document.getElementById("table-country");
//   let output = `
//       <thead>
//         <tr>
//           <th class="mdl-data-table__cell--non-numeric" onclick="toggle2()">Previous rank</th>
//           <th class="mdl-data-table__cell--non-numeric" onclick="toggle3()">Country</th>
//           <th class="mdl-data-table__cell--non-numeric" onclick="toggle4()">Gold medals</th>
//           <th class="mdl-data-table__cell--non-numeric" onclick="toggle5()">Silver medals</th>
//           <th class="mdl-data-table__cell--non-numeric" onclick="toggle6()">Bronze medals</th>
//           <th class="mdl-data-table__cell--non-numeric" onclick="toggle7()">Total medals</th>
//           <th class="mdl-data-table__cell--non-numeric" onclick="toggle()">Predicted rank</th>
//         </tr>
//       </thead>`
//
//   tableRef.innerHTML = output;
// }



// // sorting function
// function swap(items, leftIndex, rightIndex) {
//   var temp = items[leftIndex];
//   items[leftIndex] = items[rightIndex];
//   items[rightIndex] = temp;
// }
//
// function partition(items, left, right, property) {
//   var pivot = items[Math.floor((right + left) / 2)][property], //middle element
//     i = left, //left pointer
//     j = right; //right pointer
//
//     // change the object property parameters to sort for different properties
//
//   while (i <= j) {
//     while (parseInt(items[i][property]) < parseInt(pivot)) {
//       i++;
//     }
//     while (parseInt(items[j][property]) > parseInt(pivot)) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j); //swapping two elements
//       i++;
//       j--;
//     }
//   }
//   return i;
// }
//
// // sort function that should be referenced, it is always ascending, so it must be reversed after if descending is needed
// function quickSortNum(items, left, right, property) {
//   var index;
//   if (items.length > 1) {
//     index = partition(items, left, right, property); //index returned from partition
//     if (left < index - 1) {
//       //more elements on the left side of the pivot
//       quickSortNum(items, left, index - 1, property);
//     }
//     if (index < right) {
//       //more elements on the right side of the pivot
//       quickSortNum(items, index, right, property);
//     }
//   }
//   return items;
// }
//
// function sortAlpha(items, property) {
//   var sorted = _.sortBy(items, property);
//   return sorted;
// }
//
// // function to reverse any array
// // for the descending sort, you would do reverseData(quickSort(data, 0, data.length - 1, "predictedRank")) and link that to a button
// // predicted rank as example
// function reverseData(array) {
//   var reversedArray;
//   reversedArray = array.reverse();
//   return reversedArray
// }
//
//
// // current toggle function to ensure predicted rank is reversed when clicked twice
// check = true;
// function toggle()
// {
//   if (check == false)
//   {
//     removeTable();quickSortNum(countryData, 0, countryData.length - 1, "predictedRank");updateTable();
//     check = true;
//     check2 = false;
//     check3 = false;
//     check4 = false;
//     check5 = false;
//     check6 = false;
//     check7 = false;
//   }
//   else
//   {
//     removeTable();reverseData(quickSortNum(countryData, 0, countryData.length - 1, "predictedRank"));updateTable();
//     check = false
//     check2 = false;
//     check3 = false;
//     check4 = false;
//     check5 = false;
//     check6 = false;
//     check7 = false;
//   }
// }
//
//
// // toggle function to sort previous rank
// check2 = false;
// function toggle2()
// {
//   if (check2 == false)
//   {
//     removeTable();quickSortNum(countryData, 0, countryData.length - 1, "previousRank");updateTable();
//     check2 = true;
//     check = false;
//     check3 = false;
//     check4 = false;
//     check5 = false;
//     check6 = false;
//     check7 = false;
//   }
//   else
//   {
//     removeTable();reverseData(quickSortNum(countryData, 0, countryData.length - 1, "previousRank"));updateTable();
//     check2 = false;
//     check = false;
//     check3 = false;
//     check4 = false;
//     check5 = false;
//     check6 = false;
//     check7 = false;
//   }
// }
//
// // toggle function to sort country
// check3 = false;
// function toggle3()
// {
//   if (check3 == false)
//   {
//     removeTable();sortAlphabetically();updateTable();
//     check3 = true;
//     check2 = false;
//     check = false;
//     check4 = false;
//     check5 = false;
//     check6 = false;
//     check7 = false;
//   }
//   else
//   {
//     removeTable();reverseAlphabetically();updateTable();
//     check3 = false;
//     check2 = false;
//     check = false;
//     check4 = false;
//     check5 = false;
//     check6 = false;
//     check7 = false;
//   }
// }
//
// // toggle function to sort gold medals
// check4 = false;
// function toggle4()
// {
//   if (check4 == true)
//   {
//     removeTable();quickSortNum(countryData, 0, countryData.length - 1, "goldMedals");updateTable();
//     check4 = false;
//     check2 = false;
//     check3 = false;
//     check = false;
//     check5 = false;
//     check6 = false;
//     check7 = false;
//   }
//   else
//   {
//     removeTable();reverseData(quickSortNum(countryData, 0, countryData.length - 1, "goldMedals"));updateTable();
//     check4 = true;
//     check2 = false;
//     check3 = false;
//     check = false;
//     check5 = false;
//     check6 = false;
//     check7 = false;
//   }
// }
//
// // toggle function to sort silver medals
// check5 = false;
// function toggle5()
// {
//   if (check5 == true)
//   {
//     removeTable();quickSortNum(countryData, 0, countryData.length - 1, "silverMedals");updateTable();
//     check5 = false;
//     check2 = false;
//     check3 = false;
//     check4 = false;
//     check = false;
//     check6 = false;
//     check7 = false;
//   }
//   else
//   {
//     removeTable();reverseData(quickSortNum(countryData, 0, countryData.length - 1, "silverMedals"));updateTable();
//     check5 = true;
//     check2 = false;
//     check3 = false;
//     check4 = false;
//     check = false;
//     check6 = false;
//     check7 = false;
//   }
// }
//
// // toggle function to sort bronze medals
// check6 = false;
// function toggle6()
// {
//   if (check6 == true)
//   {
//     removeTable();quickSortNum(countryData, 0, countryData.length - 1, "bronzeMedals");updateTable();
//     check6 = false;
//     check2 = false;
//     check3 = false;
//     check4 = false;
//     check5 = false;
//     check = false;
//     check7 = false;
//   }
//   else
//   {
//     removeTable();reverseData(quickSortNum(countryData, 0, countryData.length - 1, "bronzeMedals"));updateTable();
//     check6 = true;
//     check2 = false;
//     check3 = false;
//     check4 = false;
//     check5 = false;
//     check = false;
//     check7 = false;
//   }
// }
//
// // toggle function to sort total medals
// check7 = false;
// function toggle7()
// {
//   if (check7 == true)
//   {
//     removeTable();quickSortNum(countryData, 0, countryData.length - 1, "totalMedals");updateTable();
//     check7 = false;
//     check2 = false;
//     check3 = false;
//     check4 = false;
//     check5 = false;
//     check6 = false;
//     check = false;
//   }
//   else
//   {
//     removeTable();reverseData(quickSortNum(countryData, 0, countryData.length - 1, "totalMedals"));updateTable();
//     check7 = true;
//     check2 = false;
//     check3 = false;
//     check4 = false;
//     check5 = false;
//     check6 = false;
//     check = false;
//   }
// }

//updateTable()

// smaller test to determine issues

// TEST DATA
// let countryDataTest = [
//   {
//     previousRank: '1',
//     predictedRank: '1',
//     country: 'United States of America',
//     goldMedals: '39',
//     silverMedals: '41',
//     bronzeMedals: '33',
//     totalMedals: '113'
//   },
//   {
//     previousRank: '2',
//     predictedRank: '2',
//     country: "People's Republic of China",
//     goldMedals: '38',
//     silverMedals: '32',
//     bronzeMedals: '18',
//     totalMedals: '88'
//   },
//   {
//     previousRank: '3',
//     predictedRank: '3',
//     country: 'Japan',
//     goldMedals: '27',
//     silverMedals: '14',
//     bronzeMedals: '17',
//     totalMedals: '58'
//   },
//   {
//     previousRank: '6',
//     predictedRank: '4',
//     country: 'Australia',
//     goldMedals: '17',
//     silverMedals: '7',
//     bronzeMedals: '22',
//     totalMedals: '46'
//   },
//   {
//     previousRank: '4',
//     predictedRank: '5',
//     country: 'Great Britain',
//     goldMedals: '22',
//     silverMedals: '21',
//     bronzeMedals: '22',
//     totalMedals: '65'
//   },
//   {
//     previousRank: '11',
//     predictedRank: '10',
//     country: 'Canada',
//     goldMedals: '7',
//     silverMedals: '6',
//     bronzeMedals: '11',
//     totalMedals: '24'
//   }
// ];

// current ONLY works for predicted rank
// var sortedArray = quickSortNum(countryData, 0, countryData.length - 1, "predictedRank");
// console.log(sortedArray);
// console.log(reverseData(sortedArray))
//
// for(let i = 0; i < countryData.length; i++) {
//   // prints out the countries predicted rank, if working should be sorted in ascending order
//   console.log(sortedArray[i].predictedRank)
// }
//
//
// var sortedArray2 = quickSortNum(countryData, 0, countryData.length - 1, "goldMedals");
//
// for(let i = 0; i < countryData.length; i++) {
//   // prints out the countries predicted rank, if working should be sorted in ascending order
//   console.log(sortedArray2[i].goldMedals)
// }
/*
var sortedArray3 = sortAlpha(countryData, "country");
for(let i = 0; i < countryData.length; i++) {
  // prints out the countries predicted rank, if working should be sorted in ascending order
  console.log(sortedArray3[i].country)
}

countryData.sort(function (x, y) {
  let a = x.country.toUpperCase(),
      b = y.country.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});

console.table(countryData);
*/

// function compareNameAlpha(a, b) {
//   if (a.country < b.country){
//     return -1;
//   }
//   if (a.country > b.country){
//     return 1;
//   }
//   return 0;
// }
//
// //countryData.sort(compareNameAlpha);
// function sortAlphabetically()
// {
//   countryData.sort(function(a, b) {
//     let x = a.country.toLowerCase();
//     let y = b.country.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0
//   });
// }
//
// function reverseAlphabetically()
// {
//   countryData.sort(function(a, b) {
//     let x = a.country.toLowerCase();
//     let y = b.country.toLowerCase();
//     if (x > y) {return -1;}
//     if (x < y) {return 1;}
//     return 0
//   });
// }
//
//
// console.table(countryData);
