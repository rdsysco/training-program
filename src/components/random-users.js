import DataComponent from './data-component';
import PeopleList from './people-list-stateless';

const RandomMeUsers = DataComponent(
    PeopleList,
    "https://randomuser.me/api/"
)

export default RandomMeUsers;
