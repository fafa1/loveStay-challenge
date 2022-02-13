
const initialState = {
  name: '',
  bio: '',
  login: '',
  followers: 0,
  company: '',
  email: '',
  location: '',
  avatar_url: '',
  public_repos: 0,
  repos_url: ''
};

export const InformationUser = (state = initialState, action) => {
  switch (action.type) {
    case 'INFORMATION_USER':
      return action.payload;
    default:
      return state;
  }
}
