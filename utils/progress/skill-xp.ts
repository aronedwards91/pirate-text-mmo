/** Xp required starting from req. for lvl 2 */ 
export const XP_GRAPH: number[] = [];

for (var i = 1; i < 201; i++) {
  XP_GRAPH.push(Math.floor(((i * 1000) + ((i * (i * 0.15)) * 700))));
}

export function getCurrentLvl(xp: number) {
  const z = XP_GRAPH.findIndex((v) => v > xp);
  return XP_GRAPH[z - 1];
}
export function nextXPFromCurrentXP(xp: number) {
  return XP_GRAPH.find((v) => v > xp);
}
/** Xp required starting from req. for lvl 2 */ 
export function nextXPFromLvl(lvl: number) {
  return XP_GRAPH[lvl]
}
