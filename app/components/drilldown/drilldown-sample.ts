import type { DrilldownItem } from "./drilldown";

export const drilldownItems: DrilldownItem[] = [
  // 🌎 North America
  {
    id: "north-america",
    displayName: "North America",
    children: [
      {
        id: "united-states",
        displayName: "United States",
        children: [
          { id: "new-york", displayName: "New York" },
          { id: "los-angeles", displayName: "Los Angeles" },
          { id: "chicago", displayName: "Chicago" },
        ],
      },
      {
        id: "canada",
        displayName: "Canada",
        children: [
          { id: "toronto", displayName: "Toronto" },
          { id: "vancouver", displayName: "Vancouver" },
          { id: "montreal", displayName: "Montreal" },
        ],
      },
      {
        id: "mexico",
        displayName: "Mexico",
        children: [
          { id: "mexico-city", displayName: "Mexico City" },
          { id: "guadalajara", displayName: "Guadalajara" },
          { id: "monterrey", displayName: "Monterrey" },
        ],
      },
    ],
  },

  // 🌏 Asia
  {
    id: "asia",
    displayName: "Asia",
    children: [
      {
        id: "china",
        displayName: "China",
        children: [
          { id: "beijing", displayName: "Beijing" },
          { id: "shanghai", displayName: "Shanghai" },
          { id: "shenzhen", displayName: "Shenzhen" },
        ],
      },
      {
        id: "japan",
        displayName: "Japan",
        children: [
          { id: "tokyo", displayName: "Tokyo" },
          { id: "osaka", displayName: "Osaka" },
          { id: "kyoto", displayName: "Kyoto" },
        ],
      },
      {
        id: "south-korea",
        displayName: "South Korea",
        children: [
          { id: "seoul", displayName: "Seoul" },
          { id: "busan", displayName: "Busan" },
          { id: "incheon", displayName: "Incheon" },
        ],
      },
      {
        id: "taiwan",
        displayName: "Taiwan",
        children: [
          { id: "taipei", displayName: "Taipei" },
          { id: "kaohsiung", displayName: "Kaohsiung" },
          { id: "taichung", displayName: "Taichung" },
        ],
      },
      {
        id: "india",
        displayName: "India",
        children: [
          { id: "mumbai", displayName: "Mumbai" },
          { id: "delhi", displayName: "Delhi" },
          { id: "bangalore", displayName: "Bangalore" },
        ],
      },
      {
        id: "singapore",
        displayName: "Singapore",
        children: [
          { id: "marina-bay", displayName: "Marina Bay" },
          { id: "orchard", displayName: "Orchard" },
          { id: "sentosa", displayName: "Sentosa" },
        ],
      },
    ],
  },

  // 🌍 Europe
  {
    id: "europe",
    displayName: "Europe",
    children: [
      {
        id: "united-kingdom",
        displayName: "United Kingdom",
        children: [
          { id: "london", displayName: "London" },
          { id: "manchester", displayName: "Manchester" },
          { id: "edinburgh", displayName: "Edinburgh" },
        ],
      },
      {
        id: "france",
        displayName: "France",
        children: [
          { id: "paris", displayName: "Paris" },
          { id: "lyon", displayName: "Lyon" },
          { id: "marseille", displayName: "Marseille" },
        ],
      },
      {
        id: "germany",
        displayName: "Germany",
        children: [
          { id: "berlin", displayName: "Berlin" },
          { id: "munich", displayName: "Munich" },
          { id: "hamburg", displayName: "Hamburg" },
        ],
      },
      {
        id: "italy",
        displayName: "Italy",
        children: [
          { id: "rome", displayName: "Rome" },
          { id: "milan", displayName: "Milan" },
          { id: "florence", displayName: "Florence" },
        ],
      },
      {
        id: "spain",
        displayName: "Spain",
        children: [
          { id: "madrid", displayName: "Madrid" },
          { id: "barcelona", displayName: "Barcelona" },
          { id: "valencia", displayName: "Valencia" },
        ],
      },
      {
        id: "netherlands",
        displayName: "Netherlands",
        children: [
          { id: "amsterdam", displayName: "Amsterdam" },
          { id: "rotterdam", displayName: "Rotterdam" },
          { id: "the-hague", displayName: "The Hague" },
        ],
      },
    ],
  },

  // 🌍 Africa
  {
    id: "africa",
    displayName: "Africa",
    children: [
      {
        id: "nigeria",
        displayName: "Nigeria",
        children: [
          { id: "lagos", displayName: "Lagos" },
          { id: "abuja", displayName: "Abuja" },
          { id: "kano", displayName: "Kano" },
        ],
      },
      {
        id: "egypt",
        displayName: "Egypt",
        children: [
          { id: "cairo", displayName: "Cairo" },
          { id: "alexandria", displayName: "Alexandria" },
          { id: "giza", displayName: "Giza" },
        ],
      },
      {
        id: "south-africa",
        displayName: "South Africa",
        children: [
          { id: "johannesburg", displayName: "Johannesburg" },
          { id: "cape-town", displayName: "Cape Town" },
          { id: "durban", displayName: "Durban" },
        ],
      },
      {
        id: "kenya",
        displayName: "Kenya",
        children: [
          { id: "nairobi", displayName: "Nairobi" },
          { id: "mombasa", displayName: "Mombasa" },
          { id: "kisumu", displayName: "Kisumu" },
        ],
      },
      {
        id: "morocco",
        displayName: "Morocco",
        children: [
          { id: "casablanca", displayName: "Casablanca" },
          { id: "marrakesh", displayName: "Marrakesh" },
          { id: "rabat", displayName: "Rabat" },
        ],
      },
    ],
  },

  // 🌏 Oceania
  {
    id: "oceania",
    displayName: "Oceania",
    children: [
      {
        id: "australia",
        displayName: "Australia",
        children: [
          { id: "sydney", displayName: "Sydney" },
          { id: "melbourne", displayName: "Melbourne" },
          { id: "brisbane", displayName: "Brisbane" },
        ],
      },
      {
        id: "new-zealand",
        displayName: "New Zealand",
        children: [
          { id: "auckland", displayName: "Auckland" },
          { id: "wellington", displayName: "Wellington" },
          { id: "christchurch", displayName: "Christchurch" },
        ],
      },
      {
        id: "fiji",
        displayName: "Fiji",
        children: [
          { id: "suva", displayName: "Suva" },
          { id: "nadi", displayName: "Nadi" },
          { id: "lautoka", displayName: "Lautoka" },
        ],
      },
    ],
  },

  // ❄️ Antarctica
  {
    id: "antarctica",
    displayName: "Antarctica",
  },
];
