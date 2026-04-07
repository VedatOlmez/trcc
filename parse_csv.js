import fs from 'fs';

const csvPath = 'c:\\Users\\vedat\\Desktop\\Dogi\\TRCC BANDIRMA KM  - Km sayacı.csv';
const content = fs.readFileSync(csvPath, 'utf8');
const lines = content.split('\n');

const membersLeft = ['Dexter', 'Godfather', 'SPARROW', 'CALIAN', 'Prospect 4'];
const membersRight = ['Bandit', 'Metei', 'Bazar', 'Pocar', 'Edison', 'Zoltar', 'Amerikalı'];

const trips = [];

const parseDate = (str) => {
  const match = str.match(/(\d{2})\.(\d{2})\.(\d{2,4})/);
  if (match) {
    let [_, d, m, y] = match;
    if (y.length === 2) y = '20' + y;
    return `${y}-${m}-${d}`;
  }
  return '2026-03-22'; // Default
};

lines.slice(1).forEach(line => {
  const cols = line.split(',');
  if (!cols[0]) return;

  // Left side
  const tripNameLeft = cols[0].trim();
  const dateLeft = parseDate(tripNameLeft);
  membersLeft.forEach((m, i) => {
    const km = cols[i+1]?.trim();
    if (km && km !== '-' && !isNaN(km)) {
      trips.push({ member: m, from: tripNameLeft, km: parseInt(km), date: dateLeft });
    }
  });

  // Right side
  const tripNameRight = cols[11]?.trim();
  if (tripNameRight) {
    const dateRight = parseDate(tripNameRight);
    membersRight.forEach((m, i) => {
      const km = cols[i+12]?.trim();
      if (km && km !== '-' && !isNaN(km)) {
        trips.push({ member: m, from: tripNameRight, km: parseInt(km), date: dateRight });
      }
    });
  }
});

fs.writeFileSync('c:\\Users\\vedat\\Desktop\\Dogi\\trips_extracted.json', JSON.stringify(trips, null, 2));
console.log(`Extracted ${trips.length} trips.`);
