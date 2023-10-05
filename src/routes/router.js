import { createBrowserRouter } from "react-router-dom";
import ChapterCover from "../components/ChapterCover";
import SubChapterCover from "../components/SubChapterCover";
import FriendPopupCover from "../components/FriendPopupCover";
import FriendNameCover from "../components/FriendNameCover";
import MatchingSampleCover from "../components/MatchingSampleCover";
import HoverIconsCover from "../components/HoverIconsCover";
import Overview from "../components/Overview";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Overview />,
    },
    {
        path: "/chapter-cover",
        element: <ChapterCover />,
      },
    {
        path: "/subChapter-cover",
        element: <SubChapterCover />,
    },
    {
        path: "/friend-popup-cover",
        element: <FriendPopupCover />,
    },
    {
        path: "/friend-name-cover",
        element: <FriendNameCover />,
    },
    {
        path: "/matching-sample-cover",
        element: <MatchingSampleCover />,
    },
    {
        path: "/hover-icons-cover",
        element: <HoverIconsCover />,
    },
]);

export default router