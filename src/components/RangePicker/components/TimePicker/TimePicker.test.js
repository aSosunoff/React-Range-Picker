import React from "react";
import { mount } from "enzyme";

import TimePicker from "./TimePicker";

describe("TimePicker", () => {
  let component;

  const getByDataId = (dataId) => component.find(`[data-id="${dataId}"]`);
  const getProp = (prop) => component.prop(prop);
  const setProp = (prop, value) => component.setProps({ [prop]: value });

  beforeEach(() => {
    component = mount(<TimePicker />);

    /* props = {
      startDate: new Date(2020, 0, 1),
      endDate: new Date(2020, 1, 1),
      setTimeFromHandler: jest.fn(),
      setTimeToHandler: jest.fn(),
    }; */
  });

  it("should render", () => {
    expect(component).toHaveLength(1);
  });

  it("should contain two input type time", () => {
    expect(component.find('input[type="time"]')).toHaveLength(2);
  });

  it("should contain props", () => {
    const props = {
      startDate: new Date(2020, 0, 1),
      endDate: new Date(2020, 1, 1),
    };
    component = mount(<TimePicker {...props} />);
    expect(getProp("startDate")).toBe(props.startDate);
    expect(getProp("endDate")).toBe(props.endDate);
  });

  it("should set props", () => {
    const date = new Date();

    setProp("startDate", date);
    expect(getProp("startDate")).toBe(date);

    setProp("endDate", date);
    expect(getProp("endDate")).toBe(date);
  });

  it("should be toggle disabled prop startDate", () => {
    expect(getByDataId("time-picker-start").prop("disabled")).toBeTruthy();
    setProp("startDate", new Date());
    expect(getByDataId("time-picker-start").prop("disabled")).toBeFalsy();
  });

  it("should be toggle disabled prop endDate", () => {
    expect(getByDataId("time-picker-end").prop("disabled")).toBeTruthy();
    setProp("endDate", new Date());
    expect(getByDataId("time-picker-end").prop("disabled")).toBeFalsy();
  });

  it("should be set value startDate", () => {
    setProp("startDate", new Date(0, 0, 0, 10, 10, 10));
    expect(getByDataId("time-picker-start").prop("value")).toBe("10:10:10");
    setProp("startDate", new Date(0, 0, 0, 20, 10, 10));
    expect(getByDataId("time-picker-start").prop("value")).toBe("20:10:10");
  });

  it("should be set value endDate", () => {
    setProp("endDate", new Date(0, 0, 0, 10, 10, 10));
    expect(getByDataId("time-picker-end").prop("value")).toBe("10:10:10");
    setProp("endDate", new Date(0, 0, 0, 20, 10, 10));
    expect(getByDataId("time-picker-end").prop("value")).toBe("20:10:10");
  });

  it("should be call setTimeFromHandler", () => {
    const timeValue = [10, 10, 10];

    const callback = jest.fn();
    setProp("setTimeFromHandler", callback);

    getByDataId("time-picker-start").invoke("onChange")({
      target: { value: timeValue.join(":") },
    });

    expect(callback).toHaveBeenCalled();

    const [[h, m, s]] = callback.mock.calls;
    const [hV, mV, sV] = timeValue;

    expect(h).toBe(hV);
    expect(m).toBe(mV);
    expect(s).toBe(sV);
  });

  it("should be call setTimeToHandler", () => {
    const timeValue = [10, 10, 10];

    const callback = jest.fn();
    setProp("setTimeToHandler", callback);

    getByDataId("time-picker-end").invoke("onChange")({
      target: { value: timeValue.join(":") },
    });

    expect(callback).toHaveBeenCalled();

    const [[h, m, s]] = callback.mock.calls;
    const [hV, mV, sV] = timeValue;

    expect(h).toBe(hV);
    expect(m).toBe(mV);
    expect(s).toBe(sV);
  });
});