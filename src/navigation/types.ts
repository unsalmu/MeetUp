export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  Profile: { userId: string };
  PhoneBook: undefined;
  Notification: undefined;
  Chat: { chatId: string; userName: string };
  Followers: undefined;
  Timeline: undefined;
  Comments: { postId: string };
  Settings: undefined;
};
