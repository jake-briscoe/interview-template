// this user
const user = {
  id: 1,
  firstName: "John",
  lastName: "Smith",
};

// the circles this user belongs to
const circles = [
  {
    id: 1,
    name: "Friends",
    members: [
      {
        userId: 1,
        name: "John S",
      },
      {
        userId: 2,
        name: "Alice A",
      },
      {
        userId: 3,
        name: "Bob B",
      },
    ],
  },
  {
    id: 2,
    name: "Family",
    members: [
      {
        userId: 1,
        name: "John S",
      },
      {
        userId: 4,
        name: "Charlie C",
      },
      {
        userId: 5,
        name: "Denise D",
      },
    ],
  },
  {
    id: 3,
    name: "Work",
    members: [
      {
        userId: 1,
        name: "John S",
      },
      {
        userId: 6,
        name: "Edward E",
      },
      {
        userId: 7,
        name: "Fran F",
      },
    ],
  },
];

// a list of leaderboards corresponding to the above circles
// cirlceId -> the circle the leaderboard is for
// interval -> 'TODAY' | 'WEEK' the time period the leaderboard is for
// ranks -> a list of userIds and their scores/steps
const leaderboards = [
  {
    id: 1,
    circleId: 1,
    interval: "TODAY",
    ranks: [
      {
        userId: 1,
        score: 4500,
      },
      {
        userId: 2,
        score: 7200,
      },
      {
        userId: 3,
        score: 5900,
      },
    ],
  },
  {
    id: 2,
    circleId: 1,
    interval: "WEEK",
    ranks: [
      {
        userId: 1,
        score: 32000,
      },
      {
        userId: 2,
        score: 50400,
      },
      {
        userId: 3,
        score: 41300,
      },
    ],
  },
  {
    id: 3,
    circleId: 2,
    interval: "TODAY",
    ranks: [
      {
        userId: 1,
        score: 6900,
      },
      {
        userId: 4,
        score: 3800,
      },
      {
        userId: 5,
        score: 5200,
      },
    ],
  },
  {
    id: 4,
    circleId: 2,
    interval: "WEEK",
    ranks: [
      {
        userId: 1,
        score: 48300,
      },
      {
        userId: 4,
        score: 26600,
      },
      {
        userId: 5,
        score: 36400,
      },
    ],
  },
  {
    id: 5,
    circleId: 3,
    interval: "TODAY",
    ranks: [
      {
        userId: 1,
        score: 8000,
      },
      {
        userId: 6,
        score: 6200,
      },
      {
        userId: 7,
        score: 4600,
      },
    ],
  },
  {
    id: 6,
    circleId: 3,
    interval: "WEEK",
    ranks: [
      {
        userId: 1,
        score: 56000,
      },
      {
        userId: 6,
        score: 43400,
      },
      {
        userId: 7,
        score: 32200,
      },
    ],
  },
];

export const getData = async () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({
        user,
        circles,
        leaderboards,
      });
    }, 500)
  );
};
