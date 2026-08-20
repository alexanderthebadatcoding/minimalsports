// lib/getSportData.ts
export const SPORTS_CONFIG: Record<string, { apiUrl: string; title: string }> =
  {
    // Basketball
    nba: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard",
      title: "NBA",
    },
    ncaam: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard",
      title: "College Mens 🏀",
    },
    nit: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?groups=98",
      title: "NIT 🏀",
    },
    ncaaw: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard",
      title: "College Womens 🏀",
    },
    wnba: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard",
      title: "WNBA",
    },
    fiba: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/basketball/fiba/scoreboard",
      title: "FIBA 🏀",
    },
    nbaSummer: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/basketball/nba-summer/scoreboard",
      title: "NBA Summer League",
    },
    // Football
    nfl: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard",
      title: "NFL",
    },
    cfb: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard",
      title: "College Football",
    },
    // Hockey
    nhl: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard",
      title: "NHL",
    },
    OlympicHockey: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/hockey/olympics-mens-ice-hockey/scoreboard",
      title: "Mens Ice Hockey",
    },
    OlympicHockeyW: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/hockey/olympics-womens-ice-hockey/scoreboard",
      title: "Womens Ice Hockey",
    },
    // Baseball
    mlb: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard",
      title: "MLB",
    },
    ncaab: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/baseball/college-baseball/scoreboard",
      title: "College Baseball",
    },
    // Soccer - USA
    mls: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.1/scoreboard",
      title: "MLS",
    },
    open: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.open/scoreboard",
      title: "USA Open Cup ⚽️",
    },
    nwsl: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.nwsl/scoreboard",
      title: "NWSL",
    },
    ncaaSoccer: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.ncaa.m.1/scoreboard",
      title: "NCAA Mens ⚽️",
    },
    ncaaWSoccer: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/usa.ncaa.w.1/scoreboard",
      title: "NCAA Womens ⚽️",
    },
    // Soccer - International Clubs
    club: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/club.friendly/scoreboard",
      title: "Club Friendly",
    },
    bundesliga: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard",
      title: "Bundesliga",
    },
    b2: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.2/scoreboard",
      title: "2. Bundesliga",
    },
    germanCup: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.dfb_pokal/scoreboard",
      title: "German Cup",
    },
    epl: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard",
      title: "Premier League",
    },
    laliga: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard",
      title: "La Liga",
    },
    italyCup: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.coppa_italia/scoreboard",
      title: "Italy Cup",
    },
    // Soccer - International
    fifa: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly/scoreboard",
      title: "FIFA Friendlies",
    },
    fifaw: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly.w/scoreboard",
      title: "FIFA Women's Friendlies",
    },
    cwc: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.cwc/scoreboard",
      title: "FIFA Club World Cup",
    },
    worldcup: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard",
      title: "FIFA World Cup",
    },
    fifaconQ: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.concacaf/scoreboard",
      title: "FIFA World Cup Qualifying - Concacaf",
    },
    worldq: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.uefa/scoreboard",
      title: "World Cup Qualifying - UEFA",
    },
    worldAFC: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.afc/scoreboard",
      title: "World Cup Qualifying - AFC",
    },
    sheBelieves: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.shebelieves/scoreboard",
      title: "She Believes Cup ⚽️",
    },
    weuro: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.weuro/scoreboard",
      title: "Womens European Championship",
    },
    caf: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/caf.nations/scoreboard",
      title: "Africa Cup of Nations",
    },
    // Soccer - UEFA
    uefa: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard",
      title: "UEFA Champions League",
    },
    uefaeu: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa/scoreboard",
      title: "UEFA Europa League",
    },
    EUQual: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa_qual/scoreboard",
      title: "Europa League Qualifying",
    },
    uefaNations: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.nations/scoreboard",
      title: "UEFA Nations League",
    },
    // Soccer - CONCACAF
    concacaf: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.nations.league/scoreboard",
      title: "Concacaf Nations League",
    },
    concacafCup: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.champions/scoreboard",
      title: "Concacaf Champions Cup",
    },
    concacafLeagues: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.leagues.cup/scoreboard",
      title: "Concacaf Leagues Cup",
    },
    concacafGold: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.gold/scoreboard",
      title: "Concacaf Gold Cup",
    },
    // Volleyball
    volleyball: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/volleyball/womens-college-volleyball/scoreboard",
      title: "NCAA Womens 🏐",
    },
    UEFAChampQual: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions_qual/scoreboard",
      title: "Champions League Qualifying",
    },
    copaAmerica: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.copa_america/scoreboard",
      title: "Copa America",
    },
    EUFACONQ: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa.conf_qual/scoreboard",
      title: "Europa Conference League Qualifying",
    },
    EUFACON: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa.conf/scoreboard",
      title: "Europa Conference League",
    },
    copaLibertadores: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/copa_libertadores/scoreboard",
      title: "Copa Libertadores",
    },
    copaSudamericana: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/copa_sudamericana/scoreboard",
      title: "Copa Sudamericana",
    },
    copaAmericaW: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.copa_america.w/scoreboard",
      title: "Copa America Womens",
    },
    copaAmericaU20: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.copa_america.u20/scoreboard",
      title: "Copa America U20",
    },
    italySerieA: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard",
      title: "Serie A",
    },
    franceCup: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.coupe_de_france/scoreboard",
      title: "Coupe de France",
    },
    franceLigue1: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/scoreboard",
      title: "Ligue 1",
    },
    spainCup: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/esp.copa_del_rey/scoreboard",
      title: "Copa del Rey",
    },
    portugalPrimeira: {
      apiUrl:
        "https://site.api.espn.com/apis/site/v2/sports/soccer/por.1/scoreboard",
      title: "Primeira Liga",
    },
  };

export function getSportData(slug: string) {
  const config = SPORTS_CONFIG[slug];
  return config || { apiUrl: "", title: "" };
}
