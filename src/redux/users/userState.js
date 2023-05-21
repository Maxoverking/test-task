import { STATUS } from "../../constants/loadingStatus";
import { showCard } from "../../constants/showCard";

export const usersInitState = {
  users: [],
  status: STATUS.idle,
  filter: showCard.showAll,
  pages: 0,
};
