const MissionCommander = require("./../app/missionCommander");

describe("Unit Tests for Mission Commande Class", () => {
  test("1) Creatre a mission commander object", () => {
    const myMissionCommander = new MissionCommander("Woopa");
    expect(myMissionCommander.name).toBe("Woopa");
  });
});
