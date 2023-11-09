import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Chat = {
  __typename?: 'Chat';
  _count: ChatCount;
  dialogs?: Maybe<Array<Dialog>>;
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
  visitors?: Maybe<Array<Visitor>>;
  website: Website;
  websiteId: Scalars['String']['output'];
};

export type ChatCount = {
  __typename?: 'ChatCount';
  dialogs: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
  visitors: Scalars['Int']['output'];
};

export type ChatCreateInput = {
  url: Scalars['String']['input'];
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
  visitorIds?: InputMaybe<Array<Scalars['String']['input']>>;
  websiteId: Scalars['String']['input'];
};

export type ChatListRelationFilter = {
  every?: InputMaybe<ChatWhereInput>;
  none?: InputMaybe<ChatWhereInput>;
  some?: InputMaybe<ChatWhereInput>;
};

/** Chat Type */
export type ChatModel = {
  __typename?: 'ChatModel';
  id: Scalars['Float']['output'];
  url: Scalars['String']['output'];
  users?: Maybe<Array<UserModel>>;
  websiteId: Scalars['String']['output'];
};

export type ChatRelationFilter = {
  is?: InputMaybe<ChatWhereInput>;
  isNot?: InputMaybe<ChatWhereInput>;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  dialogs?: InputMaybe<DialogListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  url?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
  visitors?: InputMaybe<VisitorListRelationFilter>;
  website?: InputMaybe<WebsiteRelationFilter>;
  websiteId?: InputMaybe<StringFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Dialog = {
  __typename?: 'Dialog';
  _count: DialogCount;
  chat: Chat;
  chatId: Scalars['Int']['output'];
  finished: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  messages?: Maybe<Array<Message>>;
  users?: Maybe<Array<User>>;
  visitor: Visitor;
  visitorId: Scalars['String']['output'];
};

export type DialogCount = {
  __typename?: 'DialogCount';
  messages: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};

export type DialogCountOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  finished?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  visitorId?: InputMaybe<SortOrder>;
};

export type DialogListRelationFilter = {
  every?: InputMaybe<DialogWhereInput>;
  none?: InputMaybe<DialogWhereInput>;
  some?: InputMaybe<DialogWhereInput>;
};

/** Dialog */
export type DialogModel = {
  __typename?: 'DialogModel';
  chat: ChatModel;
  finished: Scalars['Boolean']['output'];
  id: Scalars['Float']['output'];
  messages: Array<MessageModel>;
  users?: Maybe<Array<UserModel>>;
  visitor: VisitorModel;
};


/** Dialog */
export type DialogModelMessagesArgs = {
  cursor?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<MessageCountOrderByAggregateInput>;
};

export type DialogRelationFilter = {
  is?: InputMaybe<DialogWhereInput>;
  isNot?: InputMaybe<DialogWhereInput>;
};

export type DialogWhereInput = {
  AND?: InputMaybe<Array<DialogWhereInput>>;
  NOT?: InputMaybe<Array<DialogWhereInput>>;
  OR?: InputMaybe<Array<DialogWhereInput>>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<IntFilter>;
  finished?: InputMaybe<BoolFilter>;
  id?: InputMaybe<IntFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  users?: InputMaybe<UserListRelationFilter>;
  visitor?: InputMaybe<VisitorRelationFilter>;
  visitorId?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime']['output'];
  dialog: Dialog;
  dialogId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
  visitor?: Maybe<Visitor>;
  visitorId?: Maybe<Scalars['String']['output']>;
};

export type MessageCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  dialogId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  visitorId?: InputMaybe<SortOrder>;
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

/** Message */
export type MessageModel = {
  __typename?: 'MessageModel';
  createdAt: Scalars['DateTime']['output'];
  dialog: DialogModel;
  id: Scalars['Float']['output'];
  /** Позднее будет обязательным */
  sender?: Maybe<UserOrVisitor>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessageSendToDialog = {
  dialogId: Scalars['Float']['input'];
  text: Scalars['String']['input'];
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dialog?: InputMaybe<DialogRelationFilter>;
  dialogId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  visitor?: InputMaybe<VisitorNullableRelationFilter>;
  visitorId?: InputMaybe<StringNullableFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  chatCreate: ChatModel;
  dialogCreate: DialogModel;
  /** @deprecated use userLogin */
  login: UserModel;
  messageSendToDialog: MessageModel;
  passwordRecoverySendToEmail: Scalars['Boolean']['output'];
  userAddToChat: ChatModel;
  userDelete: Scalars['Boolean']['output'];
  userLogin: UserModel;
  userPasswordChange: Scalars['Boolean']['output'];
  userRegister: UserModel;
  websiteCreate: WebsiteModel;
};


export type MutationChatCreateArgs = {
  input: ChatCreateInput;
};


export type MutationDialogCreateArgs = {
  chatId: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  input: UserLoginInput;
};


export type MutationMessageSendToDialogArgs = {
  input: MessageSendToDialog;
};


export type MutationPasswordRecoverySendToEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationUserAddToChatArgs = {
  chatId: Scalars['Float']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUserDeleteArgs = {
  id: Scalars['String']['input'];
};


export type MutationUserLoginArgs = {
  input: UserLoginInput;
};


export type MutationUserPasswordChangeArgs = {
  passowordChangeInput: UserCreatePasswordInput;
};


export type MutationUserRegisterArgs = {
  input: UserRegistrationInput;
};


export type MutationWebsiteCreateArgs = {
  input: WebsiteCreateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type PasswordRecovery = {
  __typename?: 'PasswordRecovery';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type PasswordRecoveryCountOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** PasswordRecovery */
export type PasswordRecoveryModel = {
  __typename?: 'PasswordRecoveryModel';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PasswordRecoveryNullableRelationFilter = {
  is?: InputMaybe<PasswordRecoveryWhereInput>;
  isNot?: InputMaybe<PasswordRecoveryWhereInput>;
};

export type PasswordRecoveryWhereInput = {
  AND?: InputMaybe<Array<PasswordRecoveryWhereInput>>;
  NOT?: InputMaybe<Array<PasswordRecoveryWhereInput>>;
  OR?: InputMaybe<Array<PasswordRecoveryWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableRelationFilter>;
};

export type Query = {
  __typename?: 'Query';
  chat: ChatModel;
  chats: Array<ChatModel>;
  dialog: DialogModel;
  /** Используется visitor'ом для получения текущего диалога на странице по ChatId */
  dialogCurrent: DialogModel;
  dialogs: Array<DialogModel>;
  messagesFind: Array<MessageModel>;
  passwordRecoveryFind: Array<PasswordRecoveryModel>;
  user: UserModel;
  userCurrent: UserModel;
  users: Array<UserModel>;
  visitor: VisitorModel;
  visitorCurrent: VisitorCurrentModel;
  visitors: Array<VisitorModel>;
  websiteFindAll: Array<WebsiteModel>;
};


export type QueryChatArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDialogArgs = {
  id: Scalars['Float']['input'];
};


export type QueryDialogCurrentArgs = {
  chatId: Scalars['Float']['input'];
};


export type QueryDialogsArgs = {
  cursor?: InputMaybe<Scalars['Float']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<DialogCountOrderByAggregateInput>;
  where?: InputMaybe<DialogWhereInput>;
};


export type QueryMessagesFindArgs = {
  cursor?: InputMaybe<Scalars['Float']['input']>;
  dialogId: Scalars['Float']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<MessageCountOrderByAggregateInput>;
};


export type QueryPasswordRecoveryFindArgs = {
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<PasswordRecoveryCountOrderByAggregateInput>;
  where?: InputMaybe<PasswordRecoveryWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<UserCountOrderByAggregateInput>;
};


export type QueryVisitorArgs = {
  id: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Используется в панели менеджером для подписки на все диалоги */
  messageNew: MessageModel;
  /** Используется в аппке посетителем для подписки на конкретный диалог */
  messageNewByDialog: MessageModel;
};


export type SubscriptionMessageNewByDialogArgs = {
  dialogId: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  chats?: Maybe<Array<Chat>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dialogs?: Maybe<Array<Dialog>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  messages?: Maybe<Array<Message>>;
  password: Scalars['String']['output'];
  passwordRecovery?: Maybe<PasswordRecovery>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  websites?: Maybe<Array<Website>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  chats: Scalars['Int']['output'];
  dialogs: Scalars['Int']['output'];
  messages: Scalars['Int']['output'];
  websites: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreatePasswordInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** User */
export type UserModel = {
  __typename?: 'UserModel';
  chats?: Maybe<Array<ChatModel>>;
  dialogs?: Maybe<Array<DialogModel>>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrVisitor = UserModel | VisitorModel;

export type UserRegistrationInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  chats?: InputMaybe<ChatListRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  dialogs?: InputMaybe<DialogListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  passwordRecovery?: InputMaybe<PasswordRecoveryNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  username?: InputMaybe<StringNullableFilter>;
  websites?: InputMaybe<WebsiteListRelationFilter>;
};

export type Visitor = {
  __typename?: 'Visitor';
  _count: VisitorCount;
  chats?: Maybe<Array<Chat>>;
  dialogs?: Maybe<Array<Dialog>>;
  id: Scalars['ID']['output'];
  messages?: Maybe<Array<Message>>;
};

export type VisitorCount = {
  __typename?: 'VisitorCount';
  chats: Scalars['Int']['output'];
  dialogs: Scalars['Int']['output'];
  messages: Scalars['Int']['output'];
};

/** User */
export type VisitorCurrentModel = {
  __typename?: 'VisitorCurrentModel';
  dialogCurrent: DialogModel;
  id: Scalars['String']['output'];
};


/** User */
export type VisitorCurrentModelDialogCurrentArgs = {
  chatId: Scalars['Float']['input'];
};

export type VisitorListRelationFilter = {
  every?: InputMaybe<VisitorWhereInput>;
  none?: InputMaybe<VisitorWhereInput>;
  some?: InputMaybe<VisitorWhereInput>;
};

/** Visitor */
export type VisitorModel = {
  __typename?: 'VisitorModel';
  chats?: Maybe<Array<ChatModel>>;
  dialogs?: Maybe<Array<DialogModel>>;
  id: Scalars['String']['output'];
  messages?: Maybe<Array<MessageModel>>;
};

export type VisitorNullableRelationFilter = {
  is?: InputMaybe<VisitorWhereInput>;
  isNot?: InputMaybe<VisitorWhereInput>;
};

export type VisitorRelationFilter = {
  is?: InputMaybe<VisitorWhereInput>;
  isNot?: InputMaybe<VisitorWhereInput>;
};

export type VisitorWhereInput = {
  AND?: InputMaybe<Array<VisitorWhereInput>>;
  NOT?: InputMaybe<Array<VisitorWhereInput>>;
  OR?: InputMaybe<Array<VisitorWhereInput>>;
  chats?: InputMaybe<ChatListRelationFilter>;
  dialogs?: InputMaybe<DialogListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
};

export type Website = {
  __typename?: 'Website';
  _count: WebsiteCount;
  chats?: Maybe<Array<Chat>>;
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type WebsiteCount = {
  __typename?: 'WebsiteCount';
  chats: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};

export type WebsiteCreateInput = {
  chatIds?: InputMaybe<Array<Scalars['Float']['input']>>;
  url: Scalars['String']['input'];
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type WebsiteListRelationFilter = {
  every?: InputMaybe<WebsiteWhereInput>;
  none?: InputMaybe<WebsiteWhereInput>;
  some?: InputMaybe<WebsiteWhereInput>;
};

/** Website */
export type WebsiteModel = {
  __typename?: 'WebsiteModel';
  id: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type WebsiteRelationFilter = {
  is?: InputMaybe<WebsiteWhereInput>;
  isNot?: InputMaybe<WebsiteWhereInput>;
};

export type WebsiteWhereInput = {
  AND?: InputMaybe<Array<WebsiteWhereInput>>;
  NOT?: InputMaybe<Array<WebsiteWhereInput>>;
  OR?: InputMaybe<Array<WebsiteWhereInput>>;
  chats?: InputMaybe<ChatListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', userCurrent: { __typename?: 'UserModel', id: string, username?: string | null, email: string } };

export type LoginMutationVariables = Exact<{
  input: UserLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserModel', id: string, username?: string | null, email: string } };

export type PasswordChangeMutationVariables = Exact<{
  passowordChangeInput: UserCreatePasswordInput;
}>;


export type PasswordChangeMutation = { __typename?: 'Mutation', userPasswordChange: boolean };

export type PasswordRecoverySendToEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type PasswordRecoverySendToEmailMutation = { __typename?: 'Mutation', passwordRecoverySendToEmail: boolean };

export type RegistrationMutationVariables = Exact<{
  input: UserRegistrationInput;
}>;


export type RegistrationMutation = { __typename?: 'Mutation', userRegister: { __typename?: 'UserModel', id: string, email: string } };

export type DialogPartsFragment = { __typename?: 'DialogModel', id: number, visitor: { __typename?: 'VisitorModel', id: string }, messages: Array<{ __typename?: 'MessageModel', id: number, text: string, createdAt: any, sender?: { __typename: 'UserModel', id: string, username?: string | null } | { __typename: 'VisitorModel', id: string } | null }> };

export type DialogQueryVariables = Exact<{
  id: Scalars['Float']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<MessageCountOrderByAggregateInput>;
}>;


export type DialogQuery = { __typename?: 'Query', dialog: { __typename?: 'DialogModel', id: number, visitor: { __typename?: 'VisitorModel', id: string }, messages: Array<{ __typename?: 'MessageModel', id: number, text: string, createdAt: any, sender?: { __typename: 'UserModel', id: string, username?: string | null } | { __typename: 'VisitorModel', id: string } | null }> } };

export type DialogsQueryVariables = Exact<{
  orderBy?: InputMaybe<MessageCountOrderByAggregateInput>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  whereNewDialogs?: InputMaybe<DialogWhereInput>;
  cursor?: InputMaybe<Scalars['Float']['input']>;
  whereActiveDialogs?: InputMaybe<DialogWhereInput>;
  whereArchiveDialogs?: InputMaybe<DialogWhereInput>;
}>;


export type DialogsQuery = { __typename?: 'Query', newDialogs: Array<{ __typename?: 'DialogModel', id: number, visitor: { __typename?: 'VisitorModel', id: string }, messages: Array<{ __typename?: 'MessageModel', id: number, text: string, createdAt: any, sender?: { __typename: 'UserModel', id: string, username?: string | null } | { __typename: 'VisitorModel', id: string } | null }> }>, activeDialogs: Array<{ __typename?: 'DialogModel', id: number, visitor: { __typename?: 'VisitorModel', id: string }, messages: Array<{ __typename?: 'MessageModel', id: number, text: string, createdAt: any, sender?: { __typename: 'UserModel', id: string, username?: string | null } | { __typename: 'VisitorModel', id: string } | null }> }>, archiveDialogs: Array<{ __typename?: 'DialogModel', id: number, visitor: { __typename?: 'VisitorModel', id: string }, messages: Array<{ __typename?: 'MessageModel', id: number, text: string, createdAt: any, sender?: { __typename: 'UserModel', id: string, username?: string | null } | { __typename: 'VisitorModel', id: string } | null }> }> };

export type MessageSendToDialogMutationVariables = Exact<{
  input: MessageSendToDialog;
}>;


export type MessageSendToDialogMutation = { __typename?: 'Mutation', messageSendToDialog: { __typename?: 'MessageModel', id: number, createdAt: any, text: string } };

export type MessagesPartsFragment = { __typename?: 'MessageModel', id: number, text: string, createdAt: any, sender?: { __typename: 'UserModel', id: string, username?: string | null } | { __typename: 'VisitorModel', id: string } | null };

export type MessageAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageAddedSubscription = { __typename?: 'Subscription', messageNew: { __typename?: 'MessageModel', id: number, text: string, createdAt: any, dialog: { __typename?: 'DialogModel', id: number, visitor: { __typename?: 'VisitorModel', id: string } }, sender?: { __typename: 'UserModel', id: string, username?: string | null } | { __typename: 'VisitorModel', id: string } | null } };

export type MessagesFindQueryVariables = Exact<{
  dialogId: Scalars['Float']['input'];
  limit?: InputMaybe<Scalars['Float']['input']>;
  cursor?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<MessageCountOrderByAggregateInput>;
}>;


export type MessagesFindQuery = { __typename?: 'Query', messagesFind: Array<{ __typename?: 'MessageModel', id: number, text: string, createdAt: any, sender?: { __typename: 'UserModel', id: string, username?: string | null } | { __typename: 'VisitorModel', id: string } | null }> };

export const MessagesPartsFragmentDoc = gql`
    fragment MessagesParts on MessageModel {
  id
  text
  createdAt
  sender {
    ... on UserModel {
      __typename
      id
      username
    }
    ... on VisitorModel {
      __typename
      id
    }
  }
}
    `;
export const DialogPartsFragmentDoc = gql`
    fragment DialogParts on DialogModel {
  id
  visitor {
    id
  }
  messages(orderBy: $orderBy, limit: $limit) {
    ...MessagesParts
  }
}
    ${MessagesPartsFragmentDoc}`;
export const CurrentUserDocument = gql`
    query CurrentUser {
  userCurrent {
    id
    username
    email
  }
}
    `;

export function useCurrentUserQuery(options: Omit<Urql.UseQueryArgs<never, CurrentUserQueryVariables>, 'query'>) {
  return Urql.useQuery<CurrentUserQuery, CurrentUserQueryVariables>({ query: CurrentUserDocument, ...options });
};
export const LoginDocument = gql`
    mutation Login($input: UserLoginInput!) {
  userLogin(input: $input) {
    id
    username
    email
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const PasswordChangeDocument = gql`
    mutation PasswordChange($passowordChangeInput: UserCreatePasswordInput!) {
  userPasswordChange(passowordChangeInput: $passowordChangeInput)
}
    `;

export function usePasswordChangeMutation() {
  return Urql.useMutation<PasswordChangeMutation, PasswordChangeMutationVariables>(PasswordChangeDocument);
};
export const PasswordRecoverySendToEmailDocument = gql`
    mutation PasswordRecoverySendToEmail($email: String!) {
  passwordRecoverySendToEmail(email: $email)
}
    `;

export function usePasswordRecoverySendToEmailMutation() {
  return Urql.useMutation<PasswordRecoverySendToEmailMutation, PasswordRecoverySendToEmailMutationVariables>(PasswordRecoverySendToEmailDocument);
};
export const RegistrationDocument = gql`
    mutation Registration($input: UserRegistrationInput!) {
  userRegister(input: $input) {
    id
    email
  }
}
    `;

export function useRegistrationMutation() {
  return Urql.useMutation<RegistrationMutation, RegistrationMutationVariables>(RegistrationDocument);
};
export const DialogDocument = gql`
    query Dialog($id: Float!, $limit: Float, $orderBy: MessageCountOrderByAggregateInput) {
  dialog(id: $id) {
    ...DialogParts
  }
}
    ${DialogPartsFragmentDoc}`;

export function useDialogQuery(options: Omit<Urql.UseQueryArgs<never, DialogQueryVariables>, 'query'>) {
  return Urql.useQuery<DialogQuery, DialogQueryVariables>({ query: DialogDocument, ...options });
};
export const DialogsDocument = gql`
    query Dialogs($orderBy: MessageCountOrderByAggregateInput, $limit: Float, $whereNewDialogs: DialogWhereInput, $cursor: Float, $whereActiveDialogs: DialogWhereInput, $whereArchiveDialogs: DialogWhereInput) {
  newDialogs: dialogs(cursor: $cursor, where: $whereNewDialogs) {
    ...DialogParts
  }
  activeDialogs: dialogs(cursor: $cursor, where: $whereActiveDialogs) {
    ...DialogParts
  }
  archiveDialogs: dialogs(cursor: $cursor, where: $whereArchiveDialogs) {
    ...DialogParts
  }
}
    ${DialogPartsFragmentDoc}`;

export function useDialogsQuery(options: Omit<Urql.UseQueryArgs<never, DialogsQueryVariables>, 'query'>) {
  return Urql.useQuery<DialogsQuery, DialogsQueryVariables>({ query: DialogsDocument, ...options });
};
export const MessageSendToDialogDocument = gql`
    mutation MessageSendToDialog($input: MessageSendToDialog!) {
  messageSendToDialog(input: $input) {
    id
    createdAt
    text
  }
}
    `;

export function useMessageSendToDialogMutation() {
  return Urql.useMutation<MessageSendToDialogMutation, MessageSendToDialogMutationVariables>(MessageSendToDialogDocument);
};
export const MessageAddedDocument = gql`
    subscription MessageAdded {
  messageNew {
    ...MessagesParts
    dialog {
      id
      visitor {
        id
      }
    }
  }
}
    ${MessagesPartsFragmentDoc}`;

export function useMessageAddedSubscription<R = MessageAddedSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, MessageAddedSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<MessageAddedSubscription, R>) {
  return Urql.useSubscription<MessageAddedSubscription, R, MessageAddedSubscriptionVariables>({ query: MessageAddedDocument, ...options }, handler);
};
export const MessagesFindDocument = gql`
    query MessagesFind($dialogId: Float!, $limit: Float, $cursor: Float, $orderBy: MessageCountOrderByAggregateInput) {
  messagesFind(
    dialogId: $dialogId
    limit: $limit
    cursor: $cursor
    orderBy: $orderBy
  ) {
    ...MessagesParts
  }
}
    ${MessagesPartsFragmentDoc}`;

export function useMessagesFindQuery(options: Omit<Urql.UseQueryArgs<never, MessagesFindQueryVariables>, 'query'>) {
  return Urql.useQuery<MessagesFindQuery, MessagesFindQueryVariables>({ query: MessagesFindDocument, ...options });
};