import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const getListingTimeAgo = (listingDate: string) => {
    return dayjs(listingDate).fromNow();
};
