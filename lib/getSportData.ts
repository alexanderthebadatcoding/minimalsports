// lib/getSportData.ts
export function getSportData(slug: string) {
  let apiUrl = "";
  let title = "";

  if (slug === "nba") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard";
    title = "NBA 🏀"; // Custom title
  } else if (slug === "ncaam") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard";
    title = "College Mens 🏀"; // Custom title
  } else if (slug === "ncaaw") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard";
    title = "College Womens 🏀"; // Custom title
  } else if (slug === "wnba") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard";
    title = "WNBA 🏀"; // Custom title
  } else if (slug === "nfl") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";
    title = "NFL 🏈"; // Custom title
  } else if (slug === "cfb") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard";
    title = "College Football 🏈"; // Custom title
  } else if (slug === "nhl") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard";
    title = "NHL 🏒"; // Custom title
  } else if (slug === "mlb") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard";
    title = "MLB ⚾️"; // Custom title
  } else if (slug === "ncaab") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/baseball/college-baseball/scoreboard";
    title = "College Baseball ⚾️"; // Custom title
  } else if (slug === "mls") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard";
    title = "MLS ⚽️"; // Custom title
  } else if (slug === "nwsl") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard";
    title = "NWSL ⚽️"; // Custom title
  } else if (slug === "bundesliga") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard";
    title = "Bundesliga ⚽️"; // Custom title
  } else if (slug === "epl") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard";
    title = "English Premier League ⚽️";
  } else if (slug === "fifa") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly/scoreboard";
    title = "FIFA Friendlies ⚽️";
  } else if (slug === "fifaw") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly.w/scoreboard";
    title = "FIFA Women's Friendlies ⚽️";
  } else if (slug === "uefa") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard";
    title = "UEFA Champions League ⚽️";
  } else if (slug === "uefaeu") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa/scoreboard";
    title = "UEFA Europa League ⚽️";
  } else if (slug === "uefaNations") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.nations/scoreboard";
    title = "UEFA Nations League ⚽️";
  } else if (slug === "concacaf") {
    apiUrl =
      "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.nations.league/scoreboard";
    title = "Concacaf Nations League ⚽️";
  }
  return { apiUrl, title };
}
