export const worlds = [
  {
    id: 1,
    name: "Golden Paradise",
    unlockCost: 0,
    multiplier: 1,
    theme: "gold",
    cookieImage: "assets/cookies/world1.png"
  },
  {
    id: 2,
    name: "Rainbow Heaven",
    unlockCost: 250,
    requirements: {
    lifetimeCookies: 2000,
    totalBuildings: 15
    },
    multiplier: 1.25,
    theme: "rainbow",
    cookieImage: "assets/cookies/world2.png"
  },
  {
    id: 3,
    name: "Divine Realm",
    unlockCost: 5000,
    requirements: {
    lifetimeCookies: 100000,
    totalBuildings: 60
    },
    multiplier: 1.75,
    theme: "divine",
    cookieImage: "assets/cookies/world3.png"
  }
]
