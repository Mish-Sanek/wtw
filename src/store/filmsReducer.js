const initialState = {
  films: [{
    name: "We need to talk about Kevin",
    posterImage: "https://8.react.pages.academy/static/film/poster/We_need_to_talk_about_Kevin.jpg",
    previewImage: "https://8.react.pages.academy/static/film/preview/we-need-to-talk-about-kevin.jpg",
    backgroundImage: "https://8.react.pages.academy/static/film/background/We_need_to_talk_about_Kevin.jpg",
    backgroundColor: "#E1DFDE",
    description: "Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.",
    rating: 3.8,
    scoresCount: 123240,
    director: "Lynne Ramsay",
    starring: [
        "Tilda Swinton",
        "John C. Reilly",
        "Ezra Miller"
    ],
    runTime: 112,
    genre: "Drama",
    released: 2011,
    id: 30,
    isFavorite: false,
    videoLink: "http://media.xiph.org/mango/tears_of_steel_1080p.webm",
    previewVideoLink: "https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4"
}],
  activeFilmId: 30
}

const FETCH_FILMS = 'FETCH_FILMS';
const CHANGE_FAVORITE = 'CHANGE_FAVORITE';
const CHANGE_ACTIVE_FILM = 'CHANGE_ACTIVE_FILM';

export const filmsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FILMS:
      return {...state, films: [...state.films, ...action.payload]};
    case CHANGE_FAVORITE:
      return {
        ...state,
        films: state.films.map(film => {
          if(film.id === action.payload) {
            return {
              ...film,
              isFavorite: !film.isFavorite
            }
          }
          return film
        })
      }
    case CHANGE_ACTIVE_FILM:
      return {...state, activeFilmId: action.payload}
    default:
      return state;
  }
};

export const filmsFetchAction = (payload) => ({type: FETCH_FILMS, payload});
export const changefilmsFavoriteFlagAction = (payload) => ({type: CHANGE_FAVORITE, payload});
export const activeFilmAction = (payload) => ({type: CHANGE_ACTIVE_FILM, payload});
