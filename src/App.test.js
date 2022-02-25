import App from "./App";
import { shallow } from "enzyme";
import PersonList from "./PersonList";
describe("App", () => {
  let appWrapper;
  beforeAll(() => {
    appWrapper = shallow(<App />);
  });

  it("render without crashing", () => {});

  it("render a person list  ", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList).toHaveLength(1);
  });

  it("has state", () => {
    const appState = appWrapper.state();
    expect(appState).not.toBeNull();
  });

  it("has a people property on state", () => {
    const appState = appWrapper.state();
    expect(appState.people).toBeDefined();
  });

  it("passes prople property state to personList as props", () => {
    const personList = appWrapper.find(PersonList);
    expect(personList.props().people).toEqual(appWrapper.state().people);
  });
});
