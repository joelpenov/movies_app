import React from "react";
import propTypes from "prop-types";
import configStore from "../../redux/storeConfig/getStore";
import { Provider } from "react-redux";
import TestComponent from "./TestComponent";

const store = configStore();

const AppComponent = () => {
  return (
    <Provider store={store}>
      <TestComponent />
    </Provider>
  );
};

AppComponent.propTypes = {
  name: propTypes.string
};

export default AppComponent;
