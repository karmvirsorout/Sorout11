const players = [
  { name: "LeBron James", team: "LAL", position: "SF", points: 52.3, credits: 12.5 },
  { name: "Anthony Davis", team: "LAL", position: "PF", points: 48.2, credits: 11.8 },
  { name: "Kevin Durant", team: "PHX", position: "PF", points: 49.8, credits: 12.0 },
  { name: "Stephen Curry", team: "GSW", position: "PG", points: 50.1, credits: 11.5 },
  { name: "Devin Booker", team: "PHX", position: "SG", points: 45.6, credits: 11.3 },
  { name: "Nikola Jokic", team: "DEN", position: "C", points: 55.2, credits: 13.0 }
];

const matches = [
  { teams: "LAL vs PHX", date: "2025-07-13", time: "8:00 PM", venue: "Staples Center" },
  { teams: "GSW vs DEN", date: "2025-07-14", time: "6:30 PM", venue: "Chase Center" }
];

const picks = {
  captain: "Nikola Jokic",
  viceCaptain: "Stephen Curry"
};

function showSection(id) {
  document.querySelectorAll('.content-section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  const lineup = document.getElementById("lineup");
  lineup.innerHTML = "<h2>Confirmed Lineup</h2>" +
    players.map(p => \`
      <div class='player-card'>\${p.name} - \${p.team} - \${p.position} - \${p.points} pts - \${p.credits} cr</div>
    \`).join("");

  const matchSec = document.getElementById("matches");
  matchSec.innerHTML = "<h2>Upcoming Matches</h2>" +
    matches.map(m => \`<div class='player-card'>\${m.teams} | \${m.date} | \${m.time} | \${m.venue}</div>\`).join("");

  const picksSec = document.getElementById("picks");
  picksSec.innerHTML = "<h2>Captain / Vice-Captain</h2>" +
    \`<div class='player-card'>Captain: \${picks.captain}</div><div class='player-card'>Vice-Captain: \${picks.viceCaptain}</div>\`;

  const teamsSec = document.getElementById("teams");
  const team1 = players.slice(0, 3).map(p => p.name).join(", ");
  const team2 = players.slice(3).map(p => p.name).join(", ");
  teamsSec.innerHTML = "<h2>Auto Generated Teams</h2>" +
    \`<div class='player-card'>Team 1: \${team1}</div><div class='player-card'>Team 2: \${team2}</div>\`;
});
