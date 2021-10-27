const API_KEY = "cax3zmXfulwzTxHLPPpnKnpqGV5QEEK3";

const API_HOST = "http://dataservice.accuweather.com/";

const AutoComplete = (param) =>
  `${API_HOST}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${param}`;

const DaysOfDailyForecasts = (key) =>
  `
  http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}
  `;

const CurrentWeather = (key) =>
  `${API_HOST}currentconditions/v1/${key}?apikey=${API_KEY}`;

const LocationByKey = (key) =>
  `${API_HOST}locations/v1/${key}?apikey=${API_KEY}`;

// Please comment the promise to fetch the online data!
export async function autoComplete(term) {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(autocompleteStaticData);
  //   }, 3000);
  // });
  const response = await fetch(AutoComplete(term));
  return response.json();
}
// Please comment the promise to fetch the online data!
export async function fiveDaysOfDaily(key) {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(tlvForecast);
  //   }, 3000);
  // });
  const response = await fetch(DaysOfDailyForecasts(key));
  return response.json();
}
// Please comment the promise to fetch the online data!
export async function currentWeather(key) {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(anotherTlv);
  //   }, 1800);
  // });
  const response = await fetch(CurrentWeather(key));
  return response.json();
}

// Please comment the promise to fetch the online data!
export async function locationByKey(key) {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(locationByKeyStatice);
  //   }, 1800);
  // });
  const response = await fetch(LocationByKey(key));
  return response.json();
}

//Static Data
export const autocompleteStaticData = [
  {
    Version: 1,
    Key: "328328",
    Type: "City",
    Rank: 10,
    LocalizedName: "London",
    Country: { ID: "GB", LocalizedName: "United Kingdom" },
    AdministrativeArea: { ID: "LND", LocalizedName: "London" },
  },
  {
    Version: 1,
    Key: "59411",
    Type: "City",
    Rank: 13,
    LocalizedName: "Loudi",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "HN", LocalizedName: "Hunan" },
  },
  {
    Version: 1,
    Key: "347625",
    Type: "City",
    Rank: 15,
    LocalizedName: "Los Angeles",
    Country: { ID: "US", LocalizedName: "United States" },
    AdministrativeArea: { ID: "CA", LocalizedName: "California" },
  },
  {
    Version: 1,
    Key: "319242",
    Type: "City",
    Rank: 20,
    LocalizedName: "Lome",
    Country: { ID: "TG", LocalizedName: "Togo" },
    AdministrativeArea: { ID: "M", LocalizedName: "Maritime" },
  },
  {
    Version: 1,
    Key: "57911",
    Type: "City",
    Rank: 23,
    LocalizedName: "Longyan",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "FJ", LocalizedName: "Fujian" },
  },
  {
    Version: 1,
    Key: "77666",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longgang District",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "GD", LocalizedName: "Guangdong" },
  },
  {
    Version: 1,
    Key: "2580116",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longhua District",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "GD", LocalizedName: "Guangdong" },
  },
  {
    Version: 1,
    Key: "2332564",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longnan",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "GS", LocalizedName: "Gansu" },
  },
  {
    Version: 1,
    Key: "2332955",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longhui County",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "HN", LocalizedName: "Hunan" },
  },
  {
    Version: 1,
    Key: "2333548",
    Type: "City",
    Rank: 25,
    LocalizedName: "Longyang District",
    Country: { ID: "CN", LocalizedName: "China" },
    AdministrativeArea: { ID: "YN", LocalizedName: "Yunnan" },
  },
];

export const telAvivCurrentCondition = [
  {
    LocalObservationDateTime: "2021-10-22T19:50:00+03:00",
    EpochTime: 1634921400,
    WeatherText: "Clear",
    WeatherIcon: 33,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 24.5,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 76,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  },
];

export const anotherTlv = [
  {
    LocalObservationDateTime: "2021-10-22T23:20:00+03:00",
    EpochTime: 1634934000,
    WeatherText: "Clear",
    WeatherIcon: 33,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: { Value: 23.1, Unit: "C", UnitType: 17 },
      Imperial: { Value: 74.0, Unit: "F", UnitType: 18 },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  },
];

export const tlvForecast = {
  Headline: {
    EffectiveDate: "2021-10-24T08:00:00+03:00",
    EffectiveEpochDate: 1635051600,
    Severity: 4,
    Text: "Pleasant Sunday",
    Category: "mild",
    EndDate: null,
    EndEpochDate: null,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2021-10-23T07:00:00+03:00",
      EpochDate: 1634961600,
      Temperature: {
        Minimum: { Value: 67.0, Unit: "F", UnitType: 18 },
        Maximum: { Value: 79.0, Unit: "F", UnitType: 18 },
      },
      Day: { Icon: 2, IconPhrase: "Mostly sunny", HasPrecipitation: false },
      Night: { Icon: 33, IconPhrase: "Clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    },
    {
      Date: "2021-10-24T07:00:00+03:00",
      EpochDate: 1635048000,
      Temperature: {
        Minimum: { Value: 69.0, Unit: "F", UnitType: 18 },
        Maximum: { Value: 78.0, Unit: "F", UnitType: 18 },
      },
      Day: { Icon: 2, IconPhrase: "Mostly sunny", HasPrecipitation: false },
      Night: { Icon: 33, IconPhrase: "Clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    },
    {
      Date: "2021-10-25T07:00:00+03:00",
      EpochDate: 1635134400,
      Temperature: {
        Minimum: { Value: 70.0, Unit: "F", UnitType: 18 },
        Maximum: { Value: 77.0, Unit: "F", UnitType: 18 },
      },
      Day: { Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false },
      Night: { Icon: 34, IconPhrase: "Mostly clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    },
    {
      Date: "2021-10-26T07:00:00+03:00",
      EpochDate: 1635220800,
      Temperature: {
        Minimum: { Value: 70.0, Unit: "F", UnitType: 18 },
        Maximum: { Value: 78.0, Unit: "F", UnitType: 18 },
      },
      Day: { Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false },
      Night: { Icon: 33, IconPhrase: "Clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    },
    {
      Date: "2021-10-27T07:00:00+03:00",
      EpochDate: 1635307200,
      Temperature: {
        Minimum: { Value: 72.0, Unit: "F", UnitType: 18 },
        Maximum: { Value: 79.0, Unit: "F", UnitType: 18 },
      },
      Day: { Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false },
      Night: { Icon: 33, IconPhrase: "Clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    },
  ],
};

export const locationByKeyStatice = {
  Version: 1,
  Key: "215854",
  Type: "City",
  Rank: 31,
  LocalizedName: "Tel Aviv",
  EnglishName: "Tel Aviv",
  PrimaryPostalCode: "",
  Region: {
    ID: "MEA",
    LocalizedName: "Middle East",
    EnglishName: "Middle East",
  },
  Country: { ID: "IL", LocalizedName: "Israel", EnglishName: "Israel" },
  AdministrativeArea: {
    ID: "TA",
    LocalizedName: "Tel Aviv",
    EnglishName: "Tel Aviv",
    Level: 1,
    LocalizedType: "District",
    EnglishType: "District",
    CountryID: "IL",
  },
  TimeZone: {
    Code: "IDT",
    Name: "Asia/Jerusalem",
    GmtOffset: 3.0,
    IsDaylightSaving: true,
    NextOffsetChange: "2021-10-30T23:00:00Z",
  },
  GeoPosition: {
    Latitude: 32.045,
    Longitude: 34.77,
    Elevation: {
      Metric: { Value: 34.0, Unit: "m", UnitType: 5 },
      Imperial: { Value: 111.0, Unit: "ft", UnitType: 0 },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "ForecastConfidence",
  ],
};
