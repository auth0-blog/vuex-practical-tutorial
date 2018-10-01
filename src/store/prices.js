const now = Date.now();
const twoSeconds = 2000;

const prices = [
  {
    amount: 7322.89,
    timestamp: now
  },
  {
    amount: 6322.02,
    timestamp: now - twoSeconds,
  },
  {
    amount: 5222.64,
    timestamp: now - (twoSeconds * 2),
  },
  {
    amount: 5242.61,
    timestamp: now - (twoSeconds * 3),
  }
];

export default prices;
