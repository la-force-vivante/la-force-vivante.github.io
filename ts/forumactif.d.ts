// Globals that Forumactif defines on every page.
// Type `_userdata` in the browser console on your forum to see the real values,
// and add any fields you need here.

declare const _userdata: {
  /** 1 if the visitor is logged in, 0 otherwise */
  session_logged_in: number;
  /** Member ID, -1 when logged out */
  user_id: number;
  username: string;
  /** 0 = member or guest, 2 = moderator; check the admin value on your forum */
  user_level: number;
  user_lang: string;
  user_posts: number;
  user_nb_privmsg: number;
  point_reputation: number;
  /** HTML <img> tag */
  avatar: string;
};
