import { showCard } from "../../constants/showCard";
import { STATUS } from "../../constants/statusConstant";

export const usersInitState = {
  users: [],
  filter: showCard.showAll,
  homePage: true,
  status: STATUS.idle,
  tweets: false,
  pages: 0,
};
