import { SET_LANG } from '../actionTypes';

let lang = JSON.parse(localStorage.getItem('lang'));
const initialState = {
  lang: lang ? lang : {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LANG: {
      const { lang } = action.payload;
      localStorage.setItem('lang', JSON.stringify(lang));
      return {
        ...state,
        lang,
      };
    }
    default:
      return state;
  }
}
