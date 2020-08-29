import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_vi from "./translations/vi/common.json";
import common_en from "./translations/en/common.json";
import common_ja from "./translations/ja/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "vi", // language to use

  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    vi: {
      common: common_vi,
    },
    ja: {
      common: common_ja,
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root"),
);
serviceWorker.unregister();
