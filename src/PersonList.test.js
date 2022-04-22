import { shallow } from "enzyme";
import PersonList from "./PersonList";

describe("PersonList", () => {
  it("render a ul element", () => {
    const peronListWrapper = shallow(<PersonList />);
    const peopleListUls = peronListWrapper.find("ul");

    expect(peopleListUls).toHaveLength(1);
  });

  it("render no li elements when no people exist", () => {
    expect(shallow(<PersonList people={[]} />).find("li")).toHaveLength(0);
  });

  it("", () => {
    expect(
      shallow(
        <PersonList people={[{ firstName: "Alan", lastName: "Turing" }]} />
      ).find("li")
    ).toHaveLength(1);
  });
});
