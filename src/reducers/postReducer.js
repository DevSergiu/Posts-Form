import uuid from "uuid/v4";

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const tag = action.post.tags.split(" ");
      return [...state, {
        id: uuid(),
        title: action.post.title,
        body: action.post.body,
        tags: tag

      }]

    case 'REMOVE_POST':
      return state.filter(post => post.id !== action.id)
    default:
      return state;
  }
}
