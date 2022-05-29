import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCourse = {
  __typename?: 'AggregateCourse';
  _avg?: Maybe<CourseAvgAggregate>;
  _count?: Maybe<CourseCountAggregate>;
  _max?: Maybe<CourseMaxAggregate>;
  _min?: Maybe<CourseMinAggregate>;
  _sum?: Maybe<CourseSumAggregate>;
};

export type AggregateCourseOnUser = {
  __typename?: 'AggregateCourseOnUser';
  _avg?: Maybe<CourseOnUserAvgAggregate>;
  _count?: Maybe<CourseOnUserCountAggregate>;
  _max?: Maybe<CourseOnUserMaxAggregate>;
  _min?: Maybe<CourseOnUserMinAggregate>;
  _sum?: Maybe<CourseOnUserSumAggregate>;
};

export type AggregateFlashCard = {
  __typename?: 'AggregateFlashCard';
  _avg?: Maybe<FlashCardAvgAggregate>;
  _count?: Maybe<FlashCardCountAggregate>;
  _max?: Maybe<FlashCardMaxAggregate>;
  _min?: Maybe<FlashCardMinAggregate>;
  _sum?: Maybe<FlashCardSumAggregate>;
};

export type AggregateFlashCardStack = {
  __typename?: 'AggregateFlashCardStack';
  _avg?: Maybe<FlashCardStackAvgAggregate>;
  _count?: Maybe<FlashCardStackCountAggregate>;
  _max?: Maybe<FlashCardStackMaxAggregate>;
  _min?: Maybe<FlashCardStackMinAggregate>;
  _sum?: Maybe<FlashCardStackSumAggregate>;
};

export type AggregateFlow = {
  __typename?: 'AggregateFlow';
  _avg?: Maybe<FlowAvgAggregate>;
  _count?: Maybe<FlowCountAggregate>;
  _max?: Maybe<FlowMaxAggregate>;
  _min?: Maybe<FlowMinAggregate>;
  _sum?: Maybe<FlowSumAggregate>;
};

export type AggregateFlowTag = {
  __typename?: 'AggregateFlowTag';
  _avg?: Maybe<FlowTagAvgAggregate>;
  _count?: Maybe<FlowTagCountAggregate>;
  _max?: Maybe<FlowTagMaxAggregate>;
  _min?: Maybe<FlowTagMinAggregate>;
  _sum?: Maybe<FlowTagSumAggregate>;
};

export type AggregateFlowTagOnFlow = {
  __typename?: 'AggregateFlowTagOnFlow';
  _avg?: Maybe<FlowTagOnFlowAvgAggregate>;
  _count?: Maybe<FlowTagOnFlowCountAggregate>;
  _max?: Maybe<FlowTagOnFlowMaxAggregate>;
  _min?: Maybe<FlowTagOnFlowMinAggregate>;
  _sum?: Maybe<FlowTagOnFlowSumAggregate>;
};

export type AggregateProfessor = {
  __typename?: 'AggregateProfessor';
  _avg?: Maybe<ProfessorAvgAggregate>;
  _count?: Maybe<ProfessorCountAggregate>;
  _max?: Maybe<ProfessorMaxAggregate>;
  _min?: Maybe<ProfessorMinAggregate>;
  _sum?: Maybe<ProfessorSumAggregate>;
};

export type AggregateSchool = {
  __typename?: 'AggregateSchool';
  _avg?: Maybe<SchoolAvgAggregate>;
  _count?: Maybe<SchoolCountAggregate>;
  _max?: Maybe<SchoolMaxAggregate>;
  _min?: Maybe<SchoolMinAggregate>;
  _sum?: Maybe<SchoolSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Course = {
  __typename?: 'Course';
  Code?: Maybe<Scalars['String']>;
  CourseID: Scalars['Int'];
  CreatedTime: Scalars['DateTime'];
  FK_Professors: Array<Professor>;
  FK_School?: Maybe<School>;
  FK_SchoolID?: Maybe<Scalars['Int']>;
  FK_Users: Array<CourseOnUser>;
  IsOfficial: Scalars['Boolean'];
  Term?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  _count?: Maybe<CourseCount>;
};


export type CourseFk_ProfessorsArgs = {
  cursor?: InputMaybe<ProfessorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfessorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProfessorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfessorWhereInput>;
};


export type CourseFk_UsersArgs = {
  cursor?: InputMaybe<CourseOnUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseOnUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOnUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseOnUserWhereInput>;
};

export type CourseAvgAggregate = {
  __typename?: 'CourseAvgAggregate';
  CourseID?: Maybe<Scalars['Float']>;
  FK_SchoolID?: Maybe<Scalars['Float']>;
};

export type CourseAvgOrderByAggregateInput = {
  CourseID?: InputMaybe<SortOrder>;
  FK_SchoolID?: InputMaybe<SortOrder>;
};

export type CourseCount = {
  __typename?: 'CourseCount';
  FK_Professors: Scalars['Int'];
  FK_Users: Scalars['Int'];
};

export type CourseCountAggregate = {
  __typename?: 'CourseCountAggregate';
  Code: Scalars['Int'];
  CourseID: Scalars['Int'];
  CreatedTime: Scalars['Int'];
  FK_SchoolID: Scalars['Int'];
  IsOfficial: Scalars['Int'];
  Term: Scalars['Int'];
  Title: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CourseCountOrderByAggregateInput = {
  Code?: InputMaybe<SortOrder>;
  CourseID?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_SchoolID?: InputMaybe<SortOrder>;
  IsOfficial?: InputMaybe<SortOrder>;
  Term?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
};

export type CourseCreateInput = {
  Code?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Professors?: InputMaybe<ProfessorCreateNestedManyWithoutFk_CourseInput>;
  FK_School?: InputMaybe<SchoolCreateNestedOneWithoutFk_CourseInput>;
  FK_Users?: InputMaybe<CourseOnUserCreateNestedManyWithoutFk_CourseInput>;
  IsOfficial?: InputMaybe<Scalars['Boolean']>;
  Term?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type CourseCreateManyFk_SchoolInput = {
  Code?: InputMaybe<Scalars['String']>;
  CourseID?: InputMaybe<Scalars['Int']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  IsOfficial?: InputMaybe<Scalars['Boolean']>;
  Term?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type CourseCreateManyFk_SchoolInputEnvelope = {
  data: Array<CourseCreateManyFk_SchoolInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CourseCreateManyInput = {
  Code?: InputMaybe<Scalars['String']>;
  CourseID?: InputMaybe<Scalars['Int']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_SchoolID?: InputMaybe<Scalars['Int']>;
  IsOfficial?: InputMaybe<Scalars['Boolean']>;
  Term?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type CourseCreateNestedManyWithoutFk_SchoolInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutFk_SchoolInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutFk_SchoolInput>>;
  createMany?: InputMaybe<CourseCreateManyFk_SchoolInputEnvelope>;
};

export type CourseCreateNestedOneWithoutFk_ProfessorsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutFk_ProfessorsInput>;
  create?: InputMaybe<CourseCreateWithoutFk_ProfessorsInput>;
};

export type CourseCreateNestedOneWithoutFk_UsersInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutFk_UsersInput>;
  create?: InputMaybe<CourseCreateWithoutFk_UsersInput>;
};

export type CourseCreateOrConnectWithoutFk_ProfessorsInput = {
  create: CourseCreateWithoutFk_ProfessorsInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutFk_SchoolInput = {
  create: CourseCreateWithoutFk_SchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutFk_UsersInput = {
  create: CourseCreateWithoutFk_UsersInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateWithoutFk_ProfessorsInput = {
  Code?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_School?: InputMaybe<SchoolCreateNestedOneWithoutFk_CourseInput>;
  FK_Users?: InputMaybe<CourseOnUserCreateNestedManyWithoutFk_CourseInput>;
  IsOfficial?: InputMaybe<Scalars['Boolean']>;
  Term?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type CourseCreateWithoutFk_SchoolInput = {
  Code?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Professors?: InputMaybe<ProfessorCreateNestedManyWithoutFk_CourseInput>;
  FK_Users?: InputMaybe<CourseOnUserCreateNestedManyWithoutFk_CourseInput>;
  IsOfficial?: InputMaybe<Scalars['Boolean']>;
  Term?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type CourseCreateWithoutFk_UsersInput = {
  Code?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Professors?: InputMaybe<ProfessorCreateNestedManyWithoutFk_CourseInput>;
  FK_School?: InputMaybe<SchoolCreateNestedOneWithoutFk_CourseInput>;
  IsOfficial?: InputMaybe<Scalars['Boolean']>;
  Term?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type CourseGroupBy = {
  __typename?: 'CourseGroupBy';
  Code?: Maybe<Scalars['String']>;
  CourseID: Scalars['Int'];
  CreatedTime: Scalars['DateTime'];
  FK_SchoolID?: Maybe<Scalars['Int']>;
  IsOfficial: Scalars['Boolean'];
  Term?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  _avg?: Maybe<CourseAvgAggregate>;
  _count?: Maybe<CourseCountAggregate>;
  _max?: Maybe<CourseMaxAggregate>;
  _min?: Maybe<CourseMinAggregate>;
  _sum?: Maybe<CourseSumAggregate>;
};

export type CourseListRelationFilter = {
  every?: InputMaybe<CourseWhereInput>;
  none?: InputMaybe<CourseWhereInput>;
  some?: InputMaybe<CourseWhereInput>;
};

export type CourseMaxAggregate = {
  __typename?: 'CourseMaxAggregate';
  Code?: Maybe<Scalars['String']>;
  CourseID?: Maybe<Scalars['Int']>;
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_SchoolID?: Maybe<Scalars['Int']>;
  IsOfficial?: Maybe<Scalars['Boolean']>;
  Term?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
};

export type CourseMaxOrderByAggregateInput = {
  Code?: InputMaybe<SortOrder>;
  CourseID?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_SchoolID?: InputMaybe<SortOrder>;
  IsOfficial?: InputMaybe<SortOrder>;
  Term?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
};

export type CourseMinAggregate = {
  __typename?: 'CourseMinAggregate';
  Code?: Maybe<Scalars['String']>;
  CourseID?: Maybe<Scalars['Int']>;
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_SchoolID?: Maybe<Scalars['Int']>;
  IsOfficial?: Maybe<Scalars['Boolean']>;
  Term?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
};

export type CourseMinOrderByAggregateInput = {
  Code?: InputMaybe<SortOrder>;
  CourseID?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_SchoolID?: InputMaybe<SortOrder>;
  IsOfficial?: InputMaybe<SortOrder>;
  Term?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
};

export type CourseOnUser = {
  __typename?: 'CourseOnUser';
  CourseOnUserID: Scalars['Int'];
  FK_Course?: Maybe<Course>;
  FK_CourseID?: Maybe<Scalars['Int']>;
  FK_User?: Maybe<User>;
  FK_UserID?: Maybe<Scalars['Int']>;
  HOLDER?: Maybe<Scalars['String']>;
};

export type CourseOnUserAvgAggregate = {
  __typename?: 'CourseOnUserAvgAggregate';
  CourseOnUserID?: Maybe<Scalars['Float']>;
  FK_CourseID?: Maybe<Scalars['Float']>;
  FK_UserID?: Maybe<Scalars['Float']>;
};

export type CourseOnUserAvgOrderByAggregateInput = {
  CourseOnUserID?: InputMaybe<SortOrder>;
  FK_CourseID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
};

export type CourseOnUserCountAggregate = {
  __typename?: 'CourseOnUserCountAggregate';
  CourseOnUserID: Scalars['Int'];
  FK_CourseID: Scalars['Int'];
  FK_UserID: Scalars['Int'];
  HOLDER: Scalars['Int'];
  _all: Scalars['Int'];
};

export type CourseOnUserCountOrderByAggregateInput = {
  CourseOnUserID?: InputMaybe<SortOrder>;
  FK_CourseID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
};

export type CourseOnUserCreateInput = {
  FK_Course?: InputMaybe<CourseCreateNestedOneWithoutFk_UsersInput>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_CoursesInput>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type CourseOnUserCreateManyFk_CourseInput = {
  CourseOnUserID?: InputMaybe<Scalars['Int']>;
  FK_UserID?: InputMaybe<Scalars['Int']>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type CourseOnUserCreateManyFk_CourseInputEnvelope = {
  data: Array<CourseOnUserCreateManyFk_CourseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CourseOnUserCreateManyFk_UserInput = {
  CourseOnUserID?: InputMaybe<Scalars['Int']>;
  FK_CourseID?: InputMaybe<Scalars['Int']>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type CourseOnUserCreateManyFk_UserInputEnvelope = {
  data: Array<CourseOnUserCreateManyFk_UserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CourseOnUserCreateManyInput = {
  CourseOnUserID?: InputMaybe<Scalars['Int']>;
  FK_CourseID?: InputMaybe<Scalars['Int']>;
  FK_UserID?: InputMaybe<Scalars['Int']>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type CourseOnUserCreateNestedManyWithoutFk_CourseInput = {
  connect?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseOnUserCreateOrConnectWithoutFk_CourseInput>>;
  create?: InputMaybe<Array<CourseOnUserCreateWithoutFk_CourseInput>>;
  createMany?: InputMaybe<CourseOnUserCreateManyFk_CourseInputEnvelope>;
};

export type CourseOnUserCreateNestedManyWithoutFk_UserInput = {
  connect?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseOnUserCreateOrConnectWithoutFk_UserInput>>;
  create?: InputMaybe<Array<CourseOnUserCreateWithoutFk_UserInput>>;
  createMany?: InputMaybe<CourseOnUserCreateManyFk_UserInputEnvelope>;
};

export type CourseOnUserCreateOrConnectWithoutFk_CourseInput = {
  create: CourseOnUserCreateWithoutFk_CourseInput;
  where: CourseOnUserWhereUniqueInput;
};

export type CourseOnUserCreateOrConnectWithoutFk_UserInput = {
  create: CourseOnUserCreateWithoutFk_UserInput;
  where: CourseOnUserWhereUniqueInput;
};

export type CourseOnUserCreateWithoutFk_CourseInput = {
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_CoursesInput>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type CourseOnUserCreateWithoutFk_UserInput = {
  FK_Course?: InputMaybe<CourseCreateNestedOneWithoutFk_UsersInput>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type CourseOnUserGroupBy = {
  __typename?: 'CourseOnUserGroupBy';
  CourseOnUserID: Scalars['Int'];
  FK_CourseID?: Maybe<Scalars['Int']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  HOLDER?: Maybe<Scalars['String']>;
  _avg?: Maybe<CourseOnUserAvgAggregate>;
  _count?: Maybe<CourseOnUserCountAggregate>;
  _max?: Maybe<CourseOnUserMaxAggregate>;
  _min?: Maybe<CourseOnUserMinAggregate>;
  _sum?: Maybe<CourseOnUserSumAggregate>;
};

export type CourseOnUserListRelationFilter = {
  every?: InputMaybe<CourseOnUserWhereInput>;
  none?: InputMaybe<CourseOnUserWhereInput>;
  some?: InputMaybe<CourseOnUserWhereInput>;
};

export type CourseOnUserMaxAggregate = {
  __typename?: 'CourseOnUserMaxAggregate';
  CourseOnUserID?: Maybe<Scalars['Int']>;
  FK_CourseID?: Maybe<Scalars['Int']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  HOLDER?: Maybe<Scalars['String']>;
};

export type CourseOnUserMaxOrderByAggregateInput = {
  CourseOnUserID?: InputMaybe<SortOrder>;
  FK_CourseID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
};

export type CourseOnUserMinAggregate = {
  __typename?: 'CourseOnUserMinAggregate';
  CourseOnUserID?: Maybe<Scalars['Int']>;
  FK_CourseID?: Maybe<Scalars['Int']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  HOLDER?: Maybe<Scalars['String']>;
};

export type CourseOnUserMinOrderByAggregateInput = {
  CourseOnUserID?: InputMaybe<SortOrder>;
  FK_CourseID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
};

export type CourseOnUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CourseOnUserOrderByWithAggregationInput = {
  CourseOnUserID?: InputMaybe<SortOrder>;
  FK_CourseID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<CourseOnUserAvgOrderByAggregateInput>;
  _count?: InputMaybe<CourseOnUserCountOrderByAggregateInput>;
  _max?: InputMaybe<CourseOnUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<CourseOnUserMinOrderByAggregateInput>;
  _sum?: InputMaybe<CourseOnUserSumOrderByAggregateInput>;
};

export type CourseOnUserOrderByWithRelationInput = {
  CourseOnUserID?: InputMaybe<SortOrder>;
  FK_Course?: InputMaybe<CourseOrderByWithRelationInput>;
  FK_CourseID?: InputMaybe<SortOrder>;
  FK_User?: InputMaybe<UserOrderByWithRelationInput>;
  FK_UserID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
};

export enum CourseOnUserScalarFieldEnum {
  CourseOnUserId = 'CourseOnUserID',
  FkCourseId = 'FK_CourseID',
  FkUserId = 'FK_UserID',
  Holder = 'HOLDER'
}

export type CourseOnUserScalarWhereInput = {
  AND?: InputMaybe<Array<CourseOnUserScalarWhereInput>>;
  CourseOnUserID?: InputMaybe<IntFilter>;
  FK_CourseID?: InputMaybe<IntNullableFilter>;
  FK_UserID?: InputMaybe<IntNullableFilter>;
  HOLDER?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<CourseOnUserScalarWhereInput>>;
  OR?: InputMaybe<Array<CourseOnUserScalarWhereInput>>;
};

export type CourseOnUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CourseOnUserScalarWhereWithAggregatesInput>>;
  CourseOnUserID?: InputMaybe<IntWithAggregatesFilter>;
  FK_CourseID?: InputMaybe<IntNullableWithAggregatesFilter>;
  FK_UserID?: InputMaybe<IntNullableWithAggregatesFilter>;
  HOLDER?: InputMaybe<StringNullableWithAggregatesFilter>;
  NOT?: InputMaybe<Array<CourseOnUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CourseOnUserScalarWhereWithAggregatesInput>>;
};

export type CourseOnUserSumAggregate = {
  __typename?: 'CourseOnUserSumAggregate';
  CourseOnUserID?: Maybe<Scalars['Int']>;
  FK_CourseID?: Maybe<Scalars['Int']>;
  FK_UserID?: Maybe<Scalars['Int']>;
};

export type CourseOnUserSumOrderByAggregateInput = {
  CourseOnUserID?: InputMaybe<SortOrder>;
  FK_CourseID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
};

export type CourseOnUserUpdateInput = {
  FK_Course?: InputMaybe<CourseUpdateOneWithoutFk_UsersInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_CoursesInput>;
  HOLDER?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseOnUserUpdateManyMutationInput = {
  HOLDER?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseOnUserUpdateManyWithWhereWithoutFk_CourseInput = {
  data: CourseOnUserUpdateManyMutationInput;
  where: CourseOnUserScalarWhereInput;
};

export type CourseOnUserUpdateManyWithWhereWithoutFk_UserInput = {
  data: CourseOnUserUpdateManyMutationInput;
  where: CourseOnUserScalarWhereInput;
};

export type CourseOnUserUpdateManyWithoutFk_CourseInput = {
  connect?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseOnUserCreateOrConnectWithoutFk_CourseInput>>;
  create?: InputMaybe<Array<CourseOnUserCreateWithoutFk_CourseInput>>;
  createMany?: InputMaybe<CourseOnUserCreateManyFk_CourseInputEnvelope>;
  delete?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseOnUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseOnUserUpdateWithWhereUniqueWithoutFk_CourseInput>>;
  updateMany?: InputMaybe<Array<CourseOnUserUpdateManyWithWhereWithoutFk_CourseInput>>;
  upsert?: InputMaybe<Array<CourseOnUserUpsertWithWhereUniqueWithoutFk_CourseInput>>;
};

export type CourseOnUserUpdateManyWithoutFk_UserInput = {
  connect?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseOnUserCreateOrConnectWithoutFk_UserInput>>;
  create?: InputMaybe<Array<CourseOnUserCreateWithoutFk_UserInput>>;
  createMany?: InputMaybe<CourseOnUserCreateManyFk_UserInputEnvelope>;
  delete?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseOnUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseOnUserWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseOnUserUpdateWithWhereUniqueWithoutFk_UserInput>>;
  updateMany?: InputMaybe<Array<CourseOnUserUpdateManyWithWhereWithoutFk_UserInput>>;
  upsert?: InputMaybe<Array<CourseOnUserUpsertWithWhereUniqueWithoutFk_UserInput>>;
};

export type CourseOnUserUpdateWithWhereUniqueWithoutFk_CourseInput = {
  data: CourseOnUserUpdateWithoutFk_CourseInput;
  where: CourseOnUserWhereUniqueInput;
};

export type CourseOnUserUpdateWithWhereUniqueWithoutFk_UserInput = {
  data: CourseOnUserUpdateWithoutFk_UserInput;
  where: CourseOnUserWhereUniqueInput;
};

export type CourseOnUserUpdateWithoutFk_CourseInput = {
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_CoursesInput>;
  HOLDER?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseOnUserUpdateWithoutFk_UserInput = {
  FK_Course?: InputMaybe<CourseUpdateOneWithoutFk_UsersInput>;
  HOLDER?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseOnUserUpsertWithWhereUniqueWithoutFk_CourseInput = {
  create: CourseOnUserCreateWithoutFk_CourseInput;
  update: CourseOnUserUpdateWithoutFk_CourseInput;
  where: CourseOnUserWhereUniqueInput;
};

export type CourseOnUserUpsertWithWhereUniqueWithoutFk_UserInput = {
  create: CourseOnUserCreateWithoutFk_UserInput;
  update: CourseOnUserUpdateWithoutFk_UserInput;
  where: CourseOnUserWhereUniqueInput;
};

export type CourseOnUserWhereInput = {
  AND?: InputMaybe<Array<CourseOnUserWhereInput>>;
  CourseOnUserID?: InputMaybe<IntFilter>;
  FK_Course?: InputMaybe<CourseRelationFilter>;
  FK_CourseID?: InputMaybe<IntNullableFilter>;
  FK_User?: InputMaybe<UserRelationFilter>;
  FK_UserID?: InputMaybe<IntNullableFilter>;
  HOLDER?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<CourseOnUserWhereInput>>;
  OR?: InputMaybe<Array<CourseOnUserWhereInput>>;
};

export type CourseOnUserWhereUniqueInput = {
  CourseOnUserID?: InputMaybe<Scalars['Int']>;
};

export type CourseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CourseOrderByWithAggregationInput = {
  Code?: InputMaybe<SortOrder>;
  CourseID?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_SchoolID?: InputMaybe<SortOrder>;
  IsOfficial?: InputMaybe<SortOrder>;
  Term?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<CourseAvgOrderByAggregateInput>;
  _count?: InputMaybe<CourseCountOrderByAggregateInput>;
  _max?: InputMaybe<CourseMaxOrderByAggregateInput>;
  _min?: InputMaybe<CourseMinOrderByAggregateInput>;
  _sum?: InputMaybe<CourseSumOrderByAggregateInput>;
};

export type CourseOrderByWithRelationInput = {
  Code?: InputMaybe<SortOrder>;
  CourseID?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_Professors?: InputMaybe<ProfessorOrderByRelationAggregateInput>;
  FK_School?: InputMaybe<SchoolOrderByWithRelationInput>;
  FK_SchoolID?: InputMaybe<SortOrder>;
  FK_Users?: InputMaybe<CourseOnUserOrderByRelationAggregateInput>;
  IsOfficial?: InputMaybe<SortOrder>;
  Term?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
};

export type CourseRelationFilter = {
  is?: InputMaybe<CourseWhereInput>;
  isNot?: InputMaybe<CourseWhereInput>;
};

export enum CourseScalarFieldEnum {
  Code = 'Code',
  CourseId = 'CourseID',
  CreatedTime = 'CreatedTime',
  FkSchoolId = 'FK_SchoolID',
  IsOfficial = 'IsOfficial',
  Term = 'Term',
  Title = 'Title'
}

export type CourseScalarWhereInput = {
  AND?: InputMaybe<Array<CourseScalarWhereInput>>;
  Code?: InputMaybe<StringNullableFilter>;
  CourseID?: InputMaybe<IntFilter>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_SchoolID?: InputMaybe<IntNullableFilter>;
  IsOfficial?: InputMaybe<BoolFilter>;
  NOT?: InputMaybe<Array<CourseScalarWhereInput>>;
  OR?: InputMaybe<Array<CourseScalarWhereInput>>;
  Term?: InputMaybe<StringNullableFilter>;
  Title?: InputMaybe<StringNullableFilter>;
};

export type CourseScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  Code?: InputMaybe<StringNullableWithAggregatesFilter>;
  CourseID?: InputMaybe<IntWithAggregatesFilter>;
  CreatedTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  FK_SchoolID?: InputMaybe<IntNullableWithAggregatesFilter>;
  IsOfficial?: InputMaybe<BoolWithAggregatesFilter>;
  NOT?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  Term?: InputMaybe<StringNullableWithAggregatesFilter>;
  Title?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CourseSumAggregate = {
  __typename?: 'CourseSumAggregate';
  CourseID?: Maybe<Scalars['Int']>;
  FK_SchoolID?: Maybe<Scalars['Int']>;
};

export type CourseSumOrderByAggregateInput = {
  CourseID?: InputMaybe<SortOrder>;
  FK_SchoolID?: InputMaybe<SortOrder>;
};

export type CourseUpdateInput = {
  Code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Professors?: InputMaybe<ProfessorUpdateManyWithoutFk_CourseInput>;
  FK_School?: InputMaybe<SchoolUpdateOneWithoutFk_CourseInput>;
  FK_Users?: InputMaybe<CourseOnUserUpdateManyWithoutFk_CourseInput>;
  IsOfficial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  Term?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseUpdateManyMutationInput = {
  Code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  IsOfficial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  Term?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseUpdateManyWithWhereWithoutFk_SchoolInput = {
  data: CourseUpdateManyMutationInput;
  where: CourseScalarWhereInput;
};

export type CourseUpdateManyWithoutFk_SchoolInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutFk_SchoolInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutFk_SchoolInput>>;
  createMany?: InputMaybe<CourseCreateManyFk_SchoolInputEnvelope>;
  delete?: InputMaybe<Array<CourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseUpdateWithWhereUniqueWithoutFk_SchoolInput>>;
  updateMany?: InputMaybe<Array<CourseUpdateManyWithWhereWithoutFk_SchoolInput>>;
  upsert?: InputMaybe<Array<CourseUpsertWithWhereUniqueWithoutFk_SchoolInput>>;
};

export type CourseUpdateOneWithoutFk_ProfessorsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutFk_ProfessorsInput>;
  create?: InputMaybe<CourseCreateWithoutFk_ProfessorsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CourseUpdateWithoutFk_ProfessorsInput>;
  upsert?: InputMaybe<CourseUpsertWithoutFk_ProfessorsInput>;
};

export type CourseUpdateOneWithoutFk_UsersInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutFk_UsersInput>;
  create?: InputMaybe<CourseCreateWithoutFk_UsersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CourseUpdateWithoutFk_UsersInput>;
  upsert?: InputMaybe<CourseUpsertWithoutFk_UsersInput>;
};

export type CourseUpdateWithWhereUniqueWithoutFk_SchoolInput = {
  data: CourseUpdateWithoutFk_SchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateWithoutFk_ProfessorsInput = {
  Code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_School?: InputMaybe<SchoolUpdateOneWithoutFk_CourseInput>;
  FK_Users?: InputMaybe<CourseOnUserUpdateManyWithoutFk_CourseInput>;
  IsOfficial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  Term?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutFk_SchoolInput = {
  Code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Professors?: InputMaybe<ProfessorUpdateManyWithoutFk_CourseInput>;
  FK_Users?: InputMaybe<CourseOnUserUpdateManyWithoutFk_CourseInput>;
  IsOfficial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  Term?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutFk_UsersInput = {
  Code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Professors?: InputMaybe<ProfessorUpdateManyWithoutFk_CourseInput>;
  FK_School?: InputMaybe<SchoolUpdateOneWithoutFk_CourseInput>;
  IsOfficial?: InputMaybe<BoolFieldUpdateOperationsInput>;
  Term?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CourseUpsertWithWhereUniqueWithoutFk_SchoolInput = {
  create: CourseCreateWithoutFk_SchoolInput;
  update: CourseUpdateWithoutFk_SchoolInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpsertWithoutFk_ProfessorsInput = {
  create: CourseCreateWithoutFk_ProfessorsInput;
  update: CourseUpdateWithoutFk_ProfessorsInput;
};

export type CourseUpsertWithoutFk_UsersInput = {
  create: CourseCreateWithoutFk_UsersInput;
  update: CourseUpdateWithoutFk_UsersInput;
};

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  Code?: InputMaybe<StringNullableFilter>;
  CourseID?: InputMaybe<IntFilter>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_Professors?: InputMaybe<ProfessorListRelationFilter>;
  FK_School?: InputMaybe<SchoolRelationFilter>;
  FK_SchoolID?: InputMaybe<IntNullableFilter>;
  FK_Users?: InputMaybe<CourseOnUserListRelationFilter>;
  IsOfficial?: InputMaybe<BoolFilter>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  Term?: InputMaybe<StringNullableFilter>;
  Title?: InputMaybe<StringNullableFilter>;
};

export type CourseWhereUniqueInput = {
  CourseID?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumVisibilityNullableFilter = {
  equals?: InputMaybe<Visibility>;
  in?: InputMaybe<Array<Visibility>>;
  not?: InputMaybe<NestedEnumVisibilityNullableFilter>;
  notIn?: InputMaybe<Array<Visibility>>;
};

export type EnumVisibilityNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumVisibilityNullableFilter>;
  _min?: InputMaybe<NestedEnumVisibilityNullableFilter>;
  equals?: InputMaybe<Visibility>;
  in?: InputMaybe<Array<Visibility>>;
  not?: InputMaybe<NestedEnumVisibilityNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Visibility>>;
};

export type FlashCard = {
  __typename?: 'FlashCard';
  Back?: Maybe<Scalars['String']>;
  CreatedTime: Scalars['DateTime'];
  FK_FlashCardStack?: Maybe<FlashCardStack>;
  FK_FlashCardStackID?: Maybe<Scalars['Int']>;
  FlashCardID: Scalars['Int'];
  Front?: Maybe<Scalars['String']>;
  Position: Scalars['Int'];
};

export type FlashCardAvgAggregate = {
  __typename?: 'FlashCardAvgAggregate';
  FK_FlashCardStackID?: Maybe<Scalars['Float']>;
  FlashCardID?: Maybe<Scalars['Float']>;
  Position?: Maybe<Scalars['Float']>;
};

export type FlashCardAvgOrderByAggregateInput = {
  FK_FlashCardStackID?: InputMaybe<SortOrder>;
  FlashCardID?: InputMaybe<SortOrder>;
  Position?: InputMaybe<SortOrder>;
};

export type FlashCardCountAggregate = {
  __typename?: 'FlashCardCountAggregate';
  Back: Scalars['Int'];
  CreatedTime: Scalars['Int'];
  FK_FlashCardStackID: Scalars['Int'];
  FlashCardID: Scalars['Int'];
  Front: Scalars['Int'];
  Position: Scalars['Int'];
  _all: Scalars['Int'];
};

export type FlashCardCountOrderByAggregateInput = {
  Back?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlashCardStackID?: InputMaybe<SortOrder>;
  FlashCardID?: InputMaybe<SortOrder>;
  Front?: InputMaybe<SortOrder>;
  Position?: InputMaybe<SortOrder>;
};

export type FlashCardCreateInput = {
  Back?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_FlashCardStack?: InputMaybe<FlashCardStackCreateNestedOneWithoutFk_FlashcardsInput>;
  Front?: InputMaybe<Scalars['String']>;
  Position: Scalars['Int'];
};

export type FlashCardCreateManyFk_FlashCardStackInput = {
  Back?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FlashCardID?: InputMaybe<Scalars['Int']>;
  Front?: InputMaybe<Scalars['String']>;
  Position: Scalars['Int'];
};

export type FlashCardCreateManyFk_FlashCardStackInputEnvelope = {
  data: Array<FlashCardCreateManyFk_FlashCardStackInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlashCardCreateManyInput = {
  Back?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_FlashCardStackID?: InputMaybe<Scalars['Int']>;
  FlashCardID?: InputMaybe<Scalars['Int']>;
  Front?: InputMaybe<Scalars['String']>;
  Position: Scalars['Int'];
};

export type FlashCardCreateNestedManyWithoutFk_FlashCardStackInput = {
  connect?: InputMaybe<Array<FlashCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlashCardCreateOrConnectWithoutFk_FlashCardStackInput>>;
  create?: InputMaybe<Array<FlashCardCreateWithoutFk_FlashCardStackInput>>;
  createMany?: InputMaybe<FlashCardCreateManyFk_FlashCardStackInputEnvelope>;
};

export type FlashCardCreateOrConnectWithoutFk_FlashCardStackInput = {
  create: FlashCardCreateWithoutFk_FlashCardStackInput;
  where: FlashCardWhereUniqueInput;
};

export type FlashCardCreateWithoutFk_FlashCardStackInput = {
  Back?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  Front?: InputMaybe<Scalars['String']>;
  Position: Scalars['Int'];
};

export type FlashCardGroupBy = {
  __typename?: 'FlashCardGroupBy';
  Back?: Maybe<Scalars['String']>;
  CreatedTime: Scalars['DateTime'];
  FK_FlashCardStackID?: Maybe<Scalars['Int']>;
  FlashCardID: Scalars['Int'];
  Front?: Maybe<Scalars['String']>;
  Position: Scalars['Int'];
  _avg?: Maybe<FlashCardAvgAggregate>;
  _count?: Maybe<FlashCardCountAggregate>;
  _max?: Maybe<FlashCardMaxAggregate>;
  _min?: Maybe<FlashCardMinAggregate>;
  _sum?: Maybe<FlashCardSumAggregate>;
};

export type FlashCardListRelationFilter = {
  every?: InputMaybe<FlashCardWhereInput>;
  none?: InputMaybe<FlashCardWhereInput>;
  some?: InputMaybe<FlashCardWhereInput>;
};

export type FlashCardMaxAggregate = {
  __typename?: 'FlashCardMaxAggregate';
  Back?: Maybe<Scalars['String']>;
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_FlashCardStackID?: Maybe<Scalars['Int']>;
  FlashCardID?: Maybe<Scalars['Int']>;
  Front?: Maybe<Scalars['String']>;
  Position?: Maybe<Scalars['Int']>;
};

export type FlashCardMaxOrderByAggregateInput = {
  Back?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlashCardStackID?: InputMaybe<SortOrder>;
  FlashCardID?: InputMaybe<SortOrder>;
  Front?: InputMaybe<SortOrder>;
  Position?: InputMaybe<SortOrder>;
};

export type FlashCardMinAggregate = {
  __typename?: 'FlashCardMinAggregate';
  Back?: Maybe<Scalars['String']>;
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_FlashCardStackID?: Maybe<Scalars['Int']>;
  FlashCardID?: Maybe<Scalars['Int']>;
  Front?: Maybe<Scalars['String']>;
  Position?: Maybe<Scalars['Int']>;
};

export type FlashCardMinOrderByAggregateInput = {
  Back?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlashCardStackID?: InputMaybe<SortOrder>;
  FlashCardID?: InputMaybe<SortOrder>;
  Front?: InputMaybe<SortOrder>;
  Position?: InputMaybe<SortOrder>;
};

export type FlashCardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlashCardOrderByWithAggregationInput = {
  Back?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlashCardStackID?: InputMaybe<SortOrder>;
  FlashCardID?: InputMaybe<SortOrder>;
  Front?: InputMaybe<SortOrder>;
  Position?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<FlashCardAvgOrderByAggregateInput>;
  _count?: InputMaybe<FlashCardCountOrderByAggregateInput>;
  _max?: InputMaybe<FlashCardMaxOrderByAggregateInput>;
  _min?: InputMaybe<FlashCardMinOrderByAggregateInput>;
  _sum?: InputMaybe<FlashCardSumOrderByAggregateInput>;
};

export type FlashCardOrderByWithRelationInput = {
  Back?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlashCardStack?: InputMaybe<FlashCardStackOrderByWithRelationInput>;
  FK_FlashCardStackID?: InputMaybe<SortOrder>;
  FlashCardID?: InputMaybe<SortOrder>;
  Front?: InputMaybe<SortOrder>;
  Position?: InputMaybe<SortOrder>;
};

export enum FlashCardScalarFieldEnum {
  Back = 'Back',
  CreatedTime = 'CreatedTime',
  FkFlashCardStackId = 'FK_FlashCardStackID',
  FlashCardId = 'FlashCardID',
  Front = 'Front',
  Position = 'Position'
}

export type FlashCardScalarWhereInput = {
  AND?: InputMaybe<Array<FlashCardScalarWhereInput>>;
  Back?: InputMaybe<StringNullableFilter>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_FlashCardStackID?: InputMaybe<IntNullableFilter>;
  FlashCardID?: InputMaybe<IntFilter>;
  Front?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<FlashCardScalarWhereInput>>;
  OR?: InputMaybe<Array<FlashCardScalarWhereInput>>;
  Position?: InputMaybe<IntFilter>;
};

export type FlashCardScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FlashCardScalarWhereWithAggregatesInput>>;
  Back?: InputMaybe<StringNullableWithAggregatesFilter>;
  CreatedTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  FK_FlashCardStackID?: InputMaybe<IntNullableWithAggregatesFilter>;
  FlashCardID?: InputMaybe<IntWithAggregatesFilter>;
  Front?: InputMaybe<StringNullableWithAggregatesFilter>;
  NOT?: InputMaybe<Array<FlashCardScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FlashCardScalarWhereWithAggregatesInput>>;
  Position?: InputMaybe<IntWithAggregatesFilter>;
};

export type FlashCardStack = {
  __typename?: 'FlashCardStack';
  CreatedTime: Scalars['DateTime'];
  FK_Flashcards: Array<FlashCard>;
  FK_Flow?: Maybe<Flow>;
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_User?: Maybe<User>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlashCardStackID: Scalars['Int'];
  Title?: Maybe<Scalars['String']>;
  _count?: Maybe<FlashCardStackCount>;
};


export type FlashCardStackFk_FlashcardsArgs = {
  cursor?: InputMaybe<FlashCardWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlashCardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlashCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardWhereInput>;
};

export type FlashCardStackAvgAggregate = {
  __typename?: 'FlashCardStackAvgAggregate';
  FK_FlowID?: Maybe<Scalars['Float']>;
  FK_UserID?: Maybe<Scalars['Float']>;
  FlashCardStackID?: Maybe<Scalars['Float']>;
};

export type FlashCardStackAvgOrderByAggregateInput = {
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlashCardStackID?: InputMaybe<SortOrder>;
};

export type FlashCardStackCount = {
  __typename?: 'FlashCardStackCount';
  FK_Flashcards: Scalars['Int'];
};

export type FlashCardStackCountAggregate = {
  __typename?: 'FlashCardStackCountAggregate';
  CreatedTime: Scalars['Int'];
  FK_FlowID: Scalars['Int'];
  FK_UserID: Scalars['Int'];
  FlashCardStackID: Scalars['Int'];
  Title: Scalars['Int'];
  _all: Scalars['Int'];
};

export type FlashCardStackCountOrderByAggregateInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlashCardStackID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
};

export type FlashCardStackCreateInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Flashcards?: InputMaybe<FlashCardCreateNestedManyWithoutFk_FlashCardStackInput>;
  FK_Flow?: InputMaybe<FlowCreateNestedOneWithoutFk_FlashCardStacksInput>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_FlashCardStacksInput>;
  Title?: InputMaybe<Scalars['String']>;
};

export type FlashCardStackCreateManyFk_FlowInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_UserID?: InputMaybe<Scalars['Int']>;
  FlashCardStackID?: InputMaybe<Scalars['Int']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type FlashCardStackCreateManyFk_FlowInputEnvelope = {
  data: Array<FlashCardStackCreateManyFk_FlowInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlashCardStackCreateManyFk_UserInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_FlowID?: InputMaybe<Scalars['Int']>;
  FlashCardStackID?: InputMaybe<Scalars['Int']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type FlashCardStackCreateManyFk_UserInputEnvelope = {
  data: Array<FlashCardStackCreateManyFk_UserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlashCardStackCreateManyInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_FlowID?: InputMaybe<Scalars['Int']>;
  FK_UserID?: InputMaybe<Scalars['Int']>;
  FlashCardStackID?: InputMaybe<Scalars['Int']>;
  Title?: InputMaybe<Scalars['String']>;
};

export type FlashCardStackCreateNestedManyWithoutFk_FlowInput = {
  connect?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlashCardStackCreateOrConnectWithoutFk_FlowInput>>;
  create?: InputMaybe<Array<FlashCardStackCreateWithoutFk_FlowInput>>;
  createMany?: InputMaybe<FlashCardStackCreateManyFk_FlowInputEnvelope>;
};

export type FlashCardStackCreateNestedManyWithoutFk_UserInput = {
  connect?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlashCardStackCreateOrConnectWithoutFk_UserInput>>;
  create?: InputMaybe<Array<FlashCardStackCreateWithoutFk_UserInput>>;
  createMany?: InputMaybe<FlashCardStackCreateManyFk_UserInputEnvelope>;
};

export type FlashCardStackCreateNestedOneWithoutFk_FlashcardsInput = {
  connect?: InputMaybe<FlashCardStackWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlashCardStackCreateOrConnectWithoutFk_FlashcardsInput>;
  create?: InputMaybe<FlashCardStackCreateWithoutFk_FlashcardsInput>;
};

export type FlashCardStackCreateOrConnectWithoutFk_FlashcardsInput = {
  create: FlashCardStackCreateWithoutFk_FlashcardsInput;
  where: FlashCardStackWhereUniqueInput;
};

export type FlashCardStackCreateOrConnectWithoutFk_FlowInput = {
  create: FlashCardStackCreateWithoutFk_FlowInput;
  where: FlashCardStackWhereUniqueInput;
};

export type FlashCardStackCreateOrConnectWithoutFk_UserInput = {
  create: FlashCardStackCreateWithoutFk_UserInput;
  where: FlashCardStackWhereUniqueInput;
};

export type FlashCardStackCreateWithoutFk_FlashcardsInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Flow?: InputMaybe<FlowCreateNestedOneWithoutFk_FlashCardStacksInput>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_FlashCardStacksInput>;
  Title?: InputMaybe<Scalars['String']>;
};

export type FlashCardStackCreateWithoutFk_FlowInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Flashcards?: InputMaybe<FlashCardCreateNestedManyWithoutFk_FlashCardStackInput>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_FlashCardStacksInput>;
  Title?: InputMaybe<Scalars['String']>;
};

export type FlashCardStackCreateWithoutFk_UserInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Flashcards?: InputMaybe<FlashCardCreateNestedManyWithoutFk_FlashCardStackInput>;
  FK_Flow?: InputMaybe<FlowCreateNestedOneWithoutFk_FlashCardStacksInput>;
  Title?: InputMaybe<Scalars['String']>;
};

export type FlashCardStackGroupBy = {
  __typename?: 'FlashCardStackGroupBy';
  CreatedTime: Scalars['DateTime'];
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlashCardStackID: Scalars['Int'];
  Title?: Maybe<Scalars['String']>;
  _avg?: Maybe<FlashCardStackAvgAggregate>;
  _count?: Maybe<FlashCardStackCountAggregate>;
  _max?: Maybe<FlashCardStackMaxAggregate>;
  _min?: Maybe<FlashCardStackMinAggregate>;
  _sum?: Maybe<FlashCardStackSumAggregate>;
};

export type FlashCardStackListRelationFilter = {
  every?: InputMaybe<FlashCardStackWhereInput>;
  none?: InputMaybe<FlashCardStackWhereInput>;
  some?: InputMaybe<FlashCardStackWhereInput>;
};

export type FlashCardStackMaxAggregate = {
  __typename?: 'FlashCardStackMaxAggregate';
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlashCardStackID?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
};

export type FlashCardStackMaxOrderByAggregateInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlashCardStackID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
};

export type FlashCardStackMinAggregate = {
  __typename?: 'FlashCardStackMinAggregate';
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlashCardStackID?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
};

export type FlashCardStackMinOrderByAggregateInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlashCardStackID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
};

export type FlashCardStackOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlashCardStackOrderByWithAggregationInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlashCardStackID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<FlashCardStackAvgOrderByAggregateInput>;
  _count?: InputMaybe<FlashCardStackCountOrderByAggregateInput>;
  _max?: InputMaybe<FlashCardStackMaxOrderByAggregateInput>;
  _min?: InputMaybe<FlashCardStackMinOrderByAggregateInput>;
  _sum?: InputMaybe<FlashCardStackSumOrderByAggregateInput>;
};

export type FlashCardStackOrderByWithRelationInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_Flashcards?: InputMaybe<FlashCardOrderByRelationAggregateInput>;
  FK_Flow?: InputMaybe<FlowOrderByWithRelationInput>;
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_User?: InputMaybe<UserOrderByWithRelationInput>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlashCardStackID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
};

export type FlashCardStackRelationFilter = {
  is?: InputMaybe<FlashCardStackWhereInput>;
  isNot?: InputMaybe<FlashCardStackWhereInput>;
};

export enum FlashCardStackScalarFieldEnum {
  CreatedTime = 'CreatedTime',
  FkFlowId = 'FK_FlowID',
  FkUserId = 'FK_UserID',
  FlashCardStackId = 'FlashCardStackID',
  Title = 'Title'
}

export type FlashCardStackScalarWhereInput = {
  AND?: InputMaybe<Array<FlashCardStackScalarWhereInput>>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_FlowID?: InputMaybe<IntNullableFilter>;
  FK_UserID?: InputMaybe<IntNullableFilter>;
  FlashCardStackID?: InputMaybe<IntFilter>;
  NOT?: InputMaybe<Array<FlashCardStackScalarWhereInput>>;
  OR?: InputMaybe<Array<FlashCardStackScalarWhereInput>>;
  Title?: InputMaybe<StringNullableFilter>;
};

export type FlashCardStackScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FlashCardStackScalarWhereWithAggregatesInput>>;
  CreatedTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  FK_FlowID?: InputMaybe<IntNullableWithAggregatesFilter>;
  FK_UserID?: InputMaybe<IntNullableWithAggregatesFilter>;
  FlashCardStackID?: InputMaybe<IntWithAggregatesFilter>;
  NOT?: InputMaybe<Array<FlashCardStackScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FlashCardStackScalarWhereWithAggregatesInput>>;
  Title?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type FlashCardStackSumAggregate = {
  __typename?: 'FlashCardStackSumAggregate';
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlashCardStackID?: Maybe<Scalars['Int']>;
};

export type FlashCardStackSumOrderByAggregateInput = {
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlashCardStackID?: InputMaybe<SortOrder>;
};

export type FlashCardStackUpdateInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Flashcards?: InputMaybe<FlashCardUpdateManyWithoutFk_FlashCardStackInput>;
  FK_Flow?: InputMaybe<FlowUpdateOneWithoutFk_FlashCardStacksInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_FlashCardStacksInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlashCardStackUpdateManyMutationInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlashCardStackUpdateManyWithWhereWithoutFk_FlowInput = {
  data: FlashCardStackUpdateManyMutationInput;
  where: FlashCardStackScalarWhereInput;
};

export type FlashCardStackUpdateManyWithWhereWithoutFk_UserInput = {
  data: FlashCardStackUpdateManyMutationInput;
  where: FlashCardStackScalarWhereInput;
};

export type FlashCardStackUpdateManyWithoutFk_FlowInput = {
  connect?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlashCardStackCreateOrConnectWithoutFk_FlowInput>>;
  create?: InputMaybe<Array<FlashCardStackCreateWithoutFk_FlowInput>>;
  createMany?: InputMaybe<FlashCardStackCreateManyFk_FlowInputEnvelope>;
  delete?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlashCardStackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  set?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  update?: InputMaybe<Array<FlashCardStackUpdateWithWhereUniqueWithoutFk_FlowInput>>;
  updateMany?: InputMaybe<Array<FlashCardStackUpdateManyWithWhereWithoutFk_FlowInput>>;
  upsert?: InputMaybe<Array<FlashCardStackUpsertWithWhereUniqueWithoutFk_FlowInput>>;
};

export type FlashCardStackUpdateManyWithoutFk_UserInput = {
  connect?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlashCardStackCreateOrConnectWithoutFk_UserInput>>;
  create?: InputMaybe<Array<FlashCardStackCreateWithoutFk_UserInput>>;
  createMany?: InputMaybe<FlashCardStackCreateManyFk_UserInputEnvelope>;
  delete?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlashCardStackScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  set?: InputMaybe<Array<FlashCardStackWhereUniqueInput>>;
  update?: InputMaybe<Array<FlashCardStackUpdateWithWhereUniqueWithoutFk_UserInput>>;
  updateMany?: InputMaybe<Array<FlashCardStackUpdateManyWithWhereWithoutFk_UserInput>>;
  upsert?: InputMaybe<Array<FlashCardStackUpsertWithWhereUniqueWithoutFk_UserInput>>;
};

export type FlashCardStackUpdateOneWithoutFk_FlashcardsInput = {
  connect?: InputMaybe<FlashCardStackWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlashCardStackCreateOrConnectWithoutFk_FlashcardsInput>;
  create?: InputMaybe<FlashCardStackCreateWithoutFk_FlashcardsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FlashCardStackUpdateWithoutFk_FlashcardsInput>;
  upsert?: InputMaybe<FlashCardStackUpsertWithoutFk_FlashcardsInput>;
};

export type FlashCardStackUpdateWithWhereUniqueWithoutFk_FlowInput = {
  data: FlashCardStackUpdateWithoutFk_FlowInput;
  where: FlashCardStackWhereUniqueInput;
};

export type FlashCardStackUpdateWithWhereUniqueWithoutFk_UserInput = {
  data: FlashCardStackUpdateWithoutFk_UserInput;
  where: FlashCardStackWhereUniqueInput;
};

export type FlashCardStackUpdateWithoutFk_FlashcardsInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Flow?: InputMaybe<FlowUpdateOneWithoutFk_FlashCardStacksInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_FlashCardStacksInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlashCardStackUpdateWithoutFk_FlowInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Flashcards?: InputMaybe<FlashCardUpdateManyWithoutFk_FlashCardStackInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_FlashCardStacksInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlashCardStackUpdateWithoutFk_UserInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Flashcards?: InputMaybe<FlashCardUpdateManyWithoutFk_FlashCardStackInput>;
  FK_Flow?: InputMaybe<FlowUpdateOneWithoutFk_FlashCardStacksInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlashCardStackUpsertWithWhereUniqueWithoutFk_FlowInput = {
  create: FlashCardStackCreateWithoutFk_FlowInput;
  update: FlashCardStackUpdateWithoutFk_FlowInput;
  where: FlashCardStackWhereUniqueInput;
};

export type FlashCardStackUpsertWithWhereUniqueWithoutFk_UserInput = {
  create: FlashCardStackCreateWithoutFk_UserInput;
  update: FlashCardStackUpdateWithoutFk_UserInput;
  where: FlashCardStackWhereUniqueInput;
};

export type FlashCardStackUpsertWithoutFk_FlashcardsInput = {
  create: FlashCardStackCreateWithoutFk_FlashcardsInput;
  update: FlashCardStackUpdateWithoutFk_FlashcardsInput;
};

export type FlashCardStackWhereInput = {
  AND?: InputMaybe<Array<FlashCardStackWhereInput>>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_Flashcards?: InputMaybe<FlashCardListRelationFilter>;
  FK_Flow?: InputMaybe<FlowRelationFilter>;
  FK_FlowID?: InputMaybe<IntNullableFilter>;
  FK_User?: InputMaybe<UserRelationFilter>;
  FK_UserID?: InputMaybe<IntNullableFilter>;
  FlashCardStackID?: InputMaybe<IntFilter>;
  NOT?: InputMaybe<Array<FlashCardStackWhereInput>>;
  OR?: InputMaybe<Array<FlashCardStackWhereInput>>;
  Title?: InputMaybe<StringNullableFilter>;
};

export type FlashCardStackWhereUniqueInput = {
  FlashCardStackID?: InputMaybe<Scalars['Int']>;
};

export type FlashCardSumAggregate = {
  __typename?: 'FlashCardSumAggregate';
  FK_FlashCardStackID?: Maybe<Scalars['Int']>;
  FlashCardID?: Maybe<Scalars['Int']>;
  Position?: Maybe<Scalars['Int']>;
};

export type FlashCardSumOrderByAggregateInput = {
  FK_FlashCardStackID?: InputMaybe<SortOrder>;
  FlashCardID?: InputMaybe<SortOrder>;
  Position?: InputMaybe<SortOrder>;
};

export type FlashCardUpdateInput = {
  Back?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_FlashCardStack?: InputMaybe<FlashCardStackUpdateOneWithoutFk_FlashcardsInput>;
  Front?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Position?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FlashCardUpdateManyMutationInput = {
  Back?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  Front?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Position?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FlashCardUpdateManyWithWhereWithoutFk_FlashCardStackInput = {
  data: FlashCardUpdateManyMutationInput;
  where: FlashCardScalarWhereInput;
};

export type FlashCardUpdateManyWithoutFk_FlashCardStackInput = {
  connect?: InputMaybe<Array<FlashCardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlashCardCreateOrConnectWithoutFk_FlashCardStackInput>>;
  create?: InputMaybe<Array<FlashCardCreateWithoutFk_FlashCardStackInput>>;
  createMany?: InputMaybe<FlashCardCreateManyFk_FlashCardStackInputEnvelope>;
  delete?: InputMaybe<Array<FlashCardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlashCardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlashCardWhereUniqueInput>>;
  set?: InputMaybe<Array<FlashCardWhereUniqueInput>>;
  update?: InputMaybe<Array<FlashCardUpdateWithWhereUniqueWithoutFk_FlashCardStackInput>>;
  updateMany?: InputMaybe<Array<FlashCardUpdateManyWithWhereWithoutFk_FlashCardStackInput>>;
  upsert?: InputMaybe<Array<FlashCardUpsertWithWhereUniqueWithoutFk_FlashCardStackInput>>;
};

export type FlashCardUpdateWithWhereUniqueWithoutFk_FlashCardStackInput = {
  data: FlashCardUpdateWithoutFk_FlashCardStackInput;
  where: FlashCardWhereUniqueInput;
};

export type FlashCardUpdateWithoutFk_FlashCardStackInput = {
  Back?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  Front?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Position?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type FlashCardUpsertWithWhereUniqueWithoutFk_FlashCardStackInput = {
  create: FlashCardCreateWithoutFk_FlashCardStackInput;
  update: FlashCardUpdateWithoutFk_FlashCardStackInput;
  where: FlashCardWhereUniqueInput;
};

export type FlashCardWhereInput = {
  AND?: InputMaybe<Array<FlashCardWhereInput>>;
  Back?: InputMaybe<StringNullableFilter>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_FlashCardStack?: InputMaybe<FlashCardStackRelationFilter>;
  FK_FlashCardStackID?: InputMaybe<IntNullableFilter>;
  FlashCardID?: InputMaybe<IntFilter>;
  Front?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<FlashCardWhereInput>>;
  OR?: InputMaybe<Array<FlashCardWhereInput>>;
  Position?: InputMaybe<IntFilter>;
};

export type FlashCardWhereUniqueInput = {
  FlashCardID?: InputMaybe<Scalars['Int']>;
};

export type Flow = {
  __typename?: 'Flow';
  Body?: Maybe<Scalars['String']>;
  CreatedTime: Scalars['DateTime'];
  FK_FlashCardStacks: Array<FlashCardStack>;
  FK_Tags: Array<FlowTagOnFlow>;
  FK_User?: Maybe<User>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowID: Scalars['Int'];
  Title?: Maybe<Scalars['String']>;
  Visibility?: Maybe<Visibility>;
  _count?: Maybe<FlowCount>;
};


export type FlowFk_FlashCardStacksArgs = {
  cursor?: InputMaybe<FlashCardStackWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlashCardStackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlashCardStackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardStackWhereInput>;
};


export type FlowFk_TagsArgs = {
  cursor?: InputMaybe<FlowTagOnFlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowTagOnFlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowTagOnFlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagOnFlowWhereInput>;
};

export type FlowAvgAggregate = {
  __typename?: 'FlowAvgAggregate';
  FK_UserID?: Maybe<Scalars['Float']>;
  FlowID?: Maybe<Scalars['Float']>;
};

export type FlowAvgOrderByAggregateInput = {
  FK_UserID?: InputMaybe<SortOrder>;
  FlowID?: InputMaybe<SortOrder>;
};

export type FlowCount = {
  __typename?: 'FlowCount';
  FK_FlashCardStacks: Scalars['Int'];
  FK_Tags: Scalars['Int'];
};

export type FlowCountAggregate = {
  __typename?: 'FlowCountAggregate';
  Body: Scalars['Int'];
  CreatedTime: Scalars['Int'];
  FK_UserID: Scalars['Int'];
  FlowID: Scalars['Int'];
  Title: Scalars['Int'];
  Visibility: Scalars['Int'];
  _all: Scalars['Int'];
};

export type FlowCountOrderByAggregateInput = {
  Body?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
  Visibility?: InputMaybe<SortOrder>;
};

export type FlowCreateInput = {
  Body?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackCreateNestedManyWithoutFk_FlowInput>;
  FK_Tags?: InputMaybe<FlowTagOnFlowCreateNestedManyWithoutFk_FlowInput>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_FlowsInput>;
  Title?: InputMaybe<Scalars['String']>;
  Visibility?: InputMaybe<Visibility>;
};

export type FlowCreateManyFk_UserInput = {
  Body?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FlowID?: InputMaybe<Scalars['Int']>;
  Title?: InputMaybe<Scalars['String']>;
  Visibility?: InputMaybe<Visibility>;
};

export type FlowCreateManyFk_UserInputEnvelope = {
  data: Array<FlowCreateManyFk_UserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlowCreateManyInput = {
  Body?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_UserID?: InputMaybe<Scalars['Int']>;
  FlowID?: InputMaybe<Scalars['Int']>;
  Title?: InputMaybe<Scalars['String']>;
  Visibility?: InputMaybe<Visibility>;
};

export type FlowCreateNestedManyWithoutFk_UserInput = {
  connect?: InputMaybe<Array<FlowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowCreateOrConnectWithoutFk_UserInput>>;
  create?: InputMaybe<Array<FlowCreateWithoutFk_UserInput>>;
  createMany?: InputMaybe<FlowCreateManyFk_UserInputEnvelope>;
};

export type FlowCreateNestedOneWithoutFk_FlashCardStacksInput = {
  connect?: InputMaybe<FlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowCreateOrConnectWithoutFk_FlashCardStacksInput>;
  create?: InputMaybe<FlowCreateWithoutFk_FlashCardStacksInput>;
};

export type FlowCreateNestedOneWithoutFk_TagsInput = {
  connect?: InputMaybe<FlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowCreateOrConnectWithoutFk_TagsInput>;
  create?: InputMaybe<FlowCreateWithoutFk_TagsInput>;
};

export type FlowCreateOrConnectWithoutFk_FlashCardStacksInput = {
  create: FlowCreateWithoutFk_FlashCardStacksInput;
  where: FlowWhereUniqueInput;
};

export type FlowCreateOrConnectWithoutFk_TagsInput = {
  create: FlowCreateWithoutFk_TagsInput;
  where: FlowWhereUniqueInput;
};

export type FlowCreateOrConnectWithoutFk_UserInput = {
  create: FlowCreateWithoutFk_UserInput;
  where: FlowWhereUniqueInput;
};

export type FlowCreateWithoutFk_FlashCardStacksInput = {
  Body?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Tags?: InputMaybe<FlowTagOnFlowCreateNestedManyWithoutFk_FlowInput>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_FlowsInput>;
  Title?: InputMaybe<Scalars['String']>;
  Visibility?: InputMaybe<Visibility>;
};

export type FlowCreateWithoutFk_TagsInput = {
  Body?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackCreateNestedManyWithoutFk_FlowInput>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_FlowsInput>;
  Title?: InputMaybe<Scalars['String']>;
  Visibility?: InputMaybe<Visibility>;
};

export type FlowCreateWithoutFk_UserInput = {
  Body?: InputMaybe<Scalars['String']>;
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackCreateNestedManyWithoutFk_FlowInput>;
  FK_Tags?: InputMaybe<FlowTagOnFlowCreateNestedManyWithoutFk_FlowInput>;
  Title?: InputMaybe<Scalars['String']>;
  Visibility?: InputMaybe<Visibility>;
};

export type FlowGroupBy = {
  __typename?: 'FlowGroupBy';
  Body?: Maybe<Scalars['String']>;
  CreatedTime: Scalars['DateTime'];
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowID: Scalars['Int'];
  Title?: Maybe<Scalars['String']>;
  Visibility?: Maybe<Visibility>;
  _avg?: Maybe<FlowAvgAggregate>;
  _count?: Maybe<FlowCountAggregate>;
  _max?: Maybe<FlowMaxAggregate>;
  _min?: Maybe<FlowMinAggregate>;
  _sum?: Maybe<FlowSumAggregate>;
};

export type FlowListRelationFilter = {
  every?: InputMaybe<FlowWhereInput>;
  none?: InputMaybe<FlowWhereInput>;
  some?: InputMaybe<FlowWhereInput>;
};

export type FlowMaxAggregate = {
  __typename?: 'FlowMaxAggregate';
  Body?: Maybe<Scalars['String']>;
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowID?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
  Visibility?: Maybe<Visibility>;
};

export type FlowMaxOrderByAggregateInput = {
  Body?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
  Visibility?: InputMaybe<SortOrder>;
};

export type FlowMinAggregate = {
  __typename?: 'FlowMinAggregate';
  Body?: Maybe<Scalars['String']>;
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowID?: Maybe<Scalars['Int']>;
  Title?: Maybe<Scalars['String']>;
  Visibility?: Maybe<Visibility>;
};

export type FlowMinOrderByAggregateInput = {
  Body?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
  Visibility?: InputMaybe<SortOrder>;
};

export type FlowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlowOrderByWithAggregationInput = {
  Body?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
  Visibility?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<FlowAvgOrderByAggregateInput>;
  _count?: InputMaybe<FlowCountOrderByAggregateInput>;
  _max?: InputMaybe<FlowMaxOrderByAggregateInput>;
  _min?: InputMaybe<FlowMinOrderByAggregateInput>;
  _sum?: InputMaybe<FlowSumOrderByAggregateInput>;
};

export type FlowOrderByWithRelationInput = {
  Body?: InputMaybe<SortOrder>;
  CreatedTime?: InputMaybe<SortOrder>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackOrderByRelationAggregateInput>;
  FK_Tags?: InputMaybe<FlowTagOnFlowOrderByRelationAggregateInput>;
  FK_User?: InputMaybe<UserOrderByWithRelationInput>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowID?: InputMaybe<SortOrder>;
  Title?: InputMaybe<SortOrder>;
  Visibility?: InputMaybe<SortOrder>;
};

export type FlowRelationFilter = {
  is?: InputMaybe<FlowWhereInput>;
  isNot?: InputMaybe<FlowWhereInput>;
};

export enum FlowScalarFieldEnum {
  Body = 'Body',
  CreatedTime = 'CreatedTime',
  FkUserId = 'FK_UserID',
  FlowId = 'FlowID',
  Title = 'Title',
  Visibility = 'Visibility'
}

export type FlowScalarWhereInput = {
  AND?: InputMaybe<Array<FlowScalarWhereInput>>;
  Body?: InputMaybe<StringNullableFilter>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_UserID?: InputMaybe<IntNullableFilter>;
  FlowID?: InputMaybe<IntFilter>;
  NOT?: InputMaybe<Array<FlowScalarWhereInput>>;
  OR?: InputMaybe<Array<FlowScalarWhereInput>>;
  Title?: InputMaybe<StringNullableFilter>;
  Visibility?: InputMaybe<EnumVisibilityNullableFilter>;
};

export type FlowScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FlowScalarWhereWithAggregatesInput>>;
  Body?: InputMaybe<StringNullableWithAggregatesFilter>;
  CreatedTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  FK_UserID?: InputMaybe<IntNullableWithAggregatesFilter>;
  FlowID?: InputMaybe<IntWithAggregatesFilter>;
  NOT?: InputMaybe<Array<FlowScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FlowScalarWhereWithAggregatesInput>>;
  Title?: InputMaybe<StringNullableWithAggregatesFilter>;
  Visibility?: InputMaybe<EnumVisibilityNullableWithAggregatesFilter>;
};

export type FlowSumAggregate = {
  __typename?: 'FlowSumAggregate';
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowID?: Maybe<Scalars['Int']>;
};

export type FlowSumOrderByAggregateInput = {
  FK_UserID?: InputMaybe<SortOrder>;
  FlowID?: InputMaybe<SortOrder>;
};

export type FlowTag = {
  __typename?: 'FlowTag';
  CreatedTime: Scalars['DateTime'];
  FK_Flows: Array<FlowTagOnFlow>;
  FK_User?: Maybe<User>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowTagID: Scalars['Int'];
  Name: Scalars['String'];
  Public: Scalars['Boolean'];
  _count?: Maybe<FlowTagCount>;
};


export type FlowTagFk_FlowsArgs = {
  cursor?: InputMaybe<FlowTagOnFlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowTagOnFlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowTagOnFlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagOnFlowWhereInput>;
};

export type FlowTagAvgAggregate = {
  __typename?: 'FlowTagAvgAggregate';
  FK_UserID?: Maybe<Scalars['Float']>;
  FlowTagID?: Maybe<Scalars['Float']>;
};

export type FlowTagAvgOrderByAggregateInput = {
  FK_UserID?: InputMaybe<SortOrder>;
  FlowTagID?: InputMaybe<SortOrder>;
};

export type FlowTagCount = {
  __typename?: 'FlowTagCount';
  FK_Flows: Scalars['Int'];
};

export type FlowTagCountAggregate = {
  __typename?: 'FlowTagCountAggregate';
  CreatedTime: Scalars['Int'];
  FK_UserID: Scalars['Int'];
  FlowTagID: Scalars['Int'];
  Name: Scalars['Int'];
  Public: Scalars['Int'];
  _all: Scalars['Int'];
};

export type FlowTagCountOrderByAggregateInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowTagID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  Public?: InputMaybe<SortOrder>;
};

export type FlowTagCreateInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Flows?: InputMaybe<FlowTagOnFlowCreateNestedManyWithoutFk_FlowTagInput>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_FlowTagsInput>;
  Name: Scalars['String'];
  Public?: InputMaybe<Scalars['Boolean']>;
};

export type FlowTagCreateManyFk_UserInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FlowTagID?: InputMaybe<Scalars['Int']>;
  Name: Scalars['String'];
  Public?: InputMaybe<Scalars['Boolean']>;
};

export type FlowTagCreateManyFk_UserInputEnvelope = {
  data: Array<FlowTagCreateManyFk_UserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlowTagCreateManyInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_UserID?: InputMaybe<Scalars['Int']>;
  FlowTagID?: InputMaybe<Scalars['Int']>;
  Name: Scalars['String'];
  Public?: InputMaybe<Scalars['Boolean']>;
};

export type FlowTagCreateNestedManyWithoutFk_UserInput = {
  connect?: InputMaybe<Array<FlowTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowTagCreateOrConnectWithoutFk_UserInput>>;
  create?: InputMaybe<Array<FlowTagCreateWithoutFk_UserInput>>;
  createMany?: InputMaybe<FlowTagCreateManyFk_UserInputEnvelope>;
};

export type FlowTagCreateNestedOneWithoutFk_FlowsInput = {
  connect?: InputMaybe<FlowTagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowTagCreateOrConnectWithoutFk_FlowsInput>;
  create?: InputMaybe<FlowTagCreateWithoutFk_FlowsInput>;
};

export type FlowTagCreateOrConnectWithoutFk_FlowsInput = {
  create: FlowTagCreateWithoutFk_FlowsInput;
  where: FlowTagWhereUniqueInput;
};

export type FlowTagCreateOrConnectWithoutFk_UserInput = {
  create: FlowTagCreateWithoutFk_UserInput;
  where: FlowTagWhereUniqueInput;
};

export type FlowTagCreateWithoutFk_FlowsInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_User?: InputMaybe<UserCreateNestedOneWithoutFk_FlowTagsInput>;
  Name: Scalars['String'];
  Public?: InputMaybe<Scalars['Boolean']>;
};

export type FlowTagCreateWithoutFk_UserInput = {
  CreatedTime?: InputMaybe<Scalars['DateTime']>;
  FK_Flows?: InputMaybe<FlowTagOnFlowCreateNestedManyWithoutFk_FlowTagInput>;
  Name: Scalars['String'];
  Public?: InputMaybe<Scalars['Boolean']>;
};

export type FlowTagGroupBy = {
  __typename?: 'FlowTagGroupBy';
  CreatedTime: Scalars['DateTime'];
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowTagID: Scalars['Int'];
  Name: Scalars['String'];
  Public: Scalars['Boolean'];
  _avg?: Maybe<FlowTagAvgAggregate>;
  _count?: Maybe<FlowTagCountAggregate>;
  _max?: Maybe<FlowTagMaxAggregate>;
  _min?: Maybe<FlowTagMinAggregate>;
  _sum?: Maybe<FlowTagSumAggregate>;
};

export type FlowTagListRelationFilter = {
  every?: InputMaybe<FlowTagWhereInput>;
  none?: InputMaybe<FlowTagWhereInput>;
  some?: InputMaybe<FlowTagWhereInput>;
};

export type FlowTagMaxAggregate = {
  __typename?: 'FlowTagMaxAggregate';
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowTagID?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  Public?: Maybe<Scalars['Boolean']>;
};

export type FlowTagMaxOrderByAggregateInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowTagID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  Public?: InputMaybe<SortOrder>;
};

export type FlowTagMinAggregate = {
  __typename?: 'FlowTagMinAggregate';
  CreatedTime?: Maybe<Scalars['DateTime']>;
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowTagID?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  Public?: Maybe<Scalars['Boolean']>;
};

export type FlowTagMinOrderByAggregateInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowTagID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  Public?: InputMaybe<SortOrder>;
};

export type FlowTagOnFlow = {
  __typename?: 'FlowTagOnFlow';
  FK_Flow?: Maybe<Flow>;
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_FlowTag?: Maybe<FlowTag>;
  FK_FlowTagID?: Maybe<Scalars['Int']>;
  FlowTagOnFlowID: Scalars['Int'];
  HOLDER?: Maybe<Scalars['String']>;
};

export type FlowTagOnFlowAvgAggregate = {
  __typename?: 'FlowTagOnFlowAvgAggregate';
  FK_FlowID?: Maybe<Scalars['Float']>;
  FK_FlowTagID?: Maybe<Scalars['Float']>;
  FlowTagOnFlowID?: Maybe<Scalars['Float']>;
};

export type FlowTagOnFlowAvgOrderByAggregateInput = {
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_FlowTagID?: InputMaybe<SortOrder>;
  FlowTagOnFlowID?: InputMaybe<SortOrder>;
};

export type FlowTagOnFlowCountAggregate = {
  __typename?: 'FlowTagOnFlowCountAggregate';
  FK_FlowID: Scalars['Int'];
  FK_FlowTagID: Scalars['Int'];
  FlowTagOnFlowID: Scalars['Int'];
  HOLDER: Scalars['Int'];
  _all: Scalars['Int'];
};

export type FlowTagOnFlowCountOrderByAggregateInput = {
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_FlowTagID?: InputMaybe<SortOrder>;
  FlowTagOnFlowID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
};

export type FlowTagOnFlowCreateInput = {
  FK_Flow?: InputMaybe<FlowCreateNestedOneWithoutFk_TagsInput>;
  FK_FlowTag?: InputMaybe<FlowTagCreateNestedOneWithoutFk_FlowsInput>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type FlowTagOnFlowCreateManyFk_FlowInput = {
  FK_FlowTagID?: InputMaybe<Scalars['Int']>;
  FlowTagOnFlowID?: InputMaybe<Scalars['Int']>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type FlowTagOnFlowCreateManyFk_FlowInputEnvelope = {
  data: Array<FlowTagOnFlowCreateManyFk_FlowInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlowTagOnFlowCreateManyFk_FlowTagInput = {
  FK_FlowID?: InputMaybe<Scalars['Int']>;
  FlowTagOnFlowID?: InputMaybe<Scalars['Int']>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type FlowTagOnFlowCreateManyFk_FlowTagInputEnvelope = {
  data: Array<FlowTagOnFlowCreateManyFk_FlowTagInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FlowTagOnFlowCreateManyInput = {
  FK_FlowID?: InputMaybe<Scalars['Int']>;
  FK_FlowTagID?: InputMaybe<Scalars['Int']>;
  FlowTagOnFlowID?: InputMaybe<Scalars['Int']>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type FlowTagOnFlowCreateNestedManyWithoutFk_FlowInput = {
  connect?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowTagOnFlowCreateOrConnectWithoutFk_FlowInput>>;
  create?: InputMaybe<Array<FlowTagOnFlowCreateWithoutFk_FlowInput>>;
  createMany?: InputMaybe<FlowTagOnFlowCreateManyFk_FlowInputEnvelope>;
};

export type FlowTagOnFlowCreateNestedManyWithoutFk_FlowTagInput = {
  connect?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowTagOnFlowCreateOrConnectWithoutFk_FlowTagInput>>;
  create?: InputMaybe<Array<FlowTagOnFlowCreateWithoutFk_FlowTagInput>>;
  createMany?: InputMaybe<FlowTagOnFlowCreateManyFk_FlowTagInputEnvelope>;
};

export type FlowTagOnFlowCreateOrConnectWithoutFk_FlowInput = {
  create: FlowTagOnFlowCreateWithoutFk_FlowInput;
  where: FlowTagOnFlowWhereUniqueInput;
};

export type FlowTagOnFlowCreateOrConnectWithoutFk_FlowTagInput = {
  create: FlowTagOnFlowCreateWithoutFk_FlowTagInput;
  where: FlowTagOnFlowWhereUniqueInput;
};

export type FlowTagOnFlowCreateWithoutFk_FlowInput = {
  FK_FlowTag?: InputMaybe<FlowTagCreateNestedOneWithoutFk_FlowsInput>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type FlowTagOnFlowCreateWithoutFk_FlowTagInput = {
  FK_Flow?: InputMaybe<FlowCreateNestedOneWithoutFk_TagsInput>;
  HOLDER?: InputMaybe<Scalars['String']>;
};

export type FlowTagOnFlowGroupBy = {
  __typename?: 'FlowTagOnFlowGroupBy';
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_FlowTagID?: Maybe<Scalars['Int']>;
  FlowTagOnFlowID: Scalars['Int'];
  HOLDER?: Maybe<Scalars['String']>;
  _avg?: Maybe<FlowTagOnFlowAvgAggregate>;
  _count?: Maybe<FlowTagOnFlowCountAggregate>;
  _max?: Maybe<FlowTagOnFlowMaxAggregate>;
  _min?: Maybe<FlowTagOnFlowMinAggregate>;
  _sum?: Maybe<FlowTagOnFlowSumAggregate>;
};

export type FlowTagOnFlowListRelationFilter = {
  every?: InputMaybe<FlowTagOnFlowWhereInput>;
  none?: InputMaybe<FlowTagOnFlowWhereInput>;
  some?: InputMaybe<FlowTagOnFlowWhereInput>;
};

export type FlowTagOnFlowMaxAggregate = {
  __typename?: 'FlowTagOnFlowMaxAggregate';
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_FlowTagID?: Maybe<Scalars['Int']>;
  FlowTagOnFlowID?: Maybe<Scalars['Int']>;
  HOLDER?: Maybe<Scalars['String']>;
};

export type FlowTagOnFlowMaxOrderByAggregateInput = {
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_FlowTagID?: InputMaybe<SortOrder>;
  FlowTagOnFlowID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
};

export type FlowTagOnFlowMinAggregate = {
  __typename?: 'FlowTagOnFlowMinAggregate';
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_FlowTagID?: Maybe<Scalars['Int']>;
  FlowTagOnFlowID?: Maybe<Scalars['Int']>;
  HOLDER?: Maybe<Scalars['String']>;
};

export type FlowTagOnFlowMinOrderByAggregateInput = {
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_FlowTagID?: InputMaybe<SortOrder>;
  FlowTagOnFlowID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
};

export type FlowTagOnFlowOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlowTagOnFlowOrderByWithAggregationInput = {
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_FlowTagID?: InputMaybe<SortOrder>;
  FlowTagOnFlowID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<FlowTagOnFlowAvgOrderByAggregateInput>;
  _count?: InputMaybe<FlowTagOnFlowCountOrderByAggregateInput>;
  _max?: InputMaybe<FlowTagOnFlowMaxOrderByAggregateInput>;
  _min?: InputMaybe<FlowTagOnFlowMinOrderByAggregateInput>;
  _sum?: InputMaybe<FlowTagOnFlowSumOrderByAggregateInput>;
};

export type FlowTagOnFlowOrderByWithRelationInput = {
  FK_Flow?: InputMaybe<FlowOrderByWithRelationInput>;
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_FlowTag?: InputMaybe<FlowTagOrderByWithRelationInput>;
  FK_FlowTagID?: InputMaybe<SortOrder>;
  FlowTagOnFlowID?: InputMaybe<SortOrder>;
  HOLDER?: InputMaybe<SortOrder>;
};

export enum FlowTagOnFlowScalarFieldEnum {
  FkFlowId = 'FK_FlowID',
  FkFlowTagId = 'FK_FlowTagID',
  FlowTagOnFlowId = 'FlowTagOnFlowID',
  Holder = 'HOLDER'
}

export type FlowTagOnFlowScalarWhereInput = {
  AND?: InputMaybe<Array<FlowTagOnFlowScalarWhereInput>>;
  FK_FlowID?: InputMaybe<IntNullableFilter>;
  FK_FlowTagID?: InputMaybe<IntNullableFilter>;
  FlowTagOnFlowID?: InputMaybe<IntFilter>;
  HOLDER?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<FlowTagOnFlowScalarWhereInput>>;
  OR?: InputMaybe<Array<FlowTagOnFlowScalarWhereInput>>;
};

export type FlowTagOnFlowScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FlowTagOnFlowScalarWhereWithAggregatesInput>>;
  FK_FlowID?: InputMaybe<IntNullableWithAggregatesFilter>;
  FK_FlowTagID?: InputMaybe<IntNullableWithAggregatesFilter>;
  FlowTagOnFlowID?: InputMaybe<IntWithAggregatesFilter>;
  HOLDER?: InputMaybe<StringNullableWithAggregatesFilter>;
  NOT?: InputMaybe<Array<FlowTagOnFlowScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FlowTagOnFlowScalarWhereWithAggregatesInput>>;
};

export type FlowTagOnFlowSumAggregate = {
  __typename?: 'FlowTagOnFlowSumAggregate';
  FK_FlowID?: Maybe<Scalars['Int']>;
  FK_FlowTagID?: Maybe<Scalars['Int']>;
  FlowTagOnFlowID?: Maybe<Scalars['Int']>;
};

export type FlowTagOnFlowSumOrderByAggregateInput = {
  FK_FlowID?: InputMaybe<SortOrder>;
  FK_FlowTagID?: InputMaybe<SortOrder>;
  FlowTagOnFlowID?: InputMaybe<SortOrder>;
};

export type FlowTagOnFlowUpdateInput = {
  FK_Flow?: InputMaybe<FlowUpdateOneWithoutFk_TagsInput>;
  FK_FlowTag?: InputMaybe<FlowTagUpdateOneWithoutFk_FlowsInput>;
  HOLDER?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlowTagOnFlowUpdateManyMutationInput = {
  HOLDER?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlowTagOnFlowUpdateManyWithWhereWithoutFk_FlowInput = {
  data: FlowTagOnFlowUpdateManyMutationInput;
  where: FlowTagOnFlowScalarWhereInput;
};

export type FlowTagOnFlowUpdateManyWithWhereWithoutFk_FlowTagInput = {
  data: FlowTagOnFlowUpdateManyMutationInput;
  where: FlowTagOnFlowScalarWhereInput;
};

export type FlowTagOnFlowUpdateManyWithoutFk_FlowInput = {
  connect?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowTagOnFlowCreateOrConnectWithoutFk_FlowInput>>;
  create?: InputMaybe<Array<FlowTagOnFlowCreateWithoutFk_FlowInput>>;
  createMany?: InputMaybe<FlowTagOnFlowCreateManyFk_FlowInputEnvelope>;
  delete?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowTagOnFlowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowTagOnFlowUpdateWithWhereUniqueWithoutFk_FlowInput>>;
  updateMany?: InputMaybe<Array<FlowTagOnFlowUpdateManyWithWhereWithoutFk_FlowInput>>;
  upsert?: InputMaybe<Array<FlowTagOnFlowUpsertWithWhereUniqueWithoutFk_FlowInput>>;
};

export type FlowTagOnFlowUpdateManyWithoutFk_FlowTagInput = {
  connect?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowTagOnFlowCreateOrConnectWithoutFk_FlowTagInput>>;
  create?: InputMaybe<Array<FlowTagOnFlowCreateWithoutFk_FlowTagInput>>;
  createMany?: InputMaybe<FlowTagOnFlowCreateManyFk_FlowTagInputEnvelope>;
  delete?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowTagOnFlowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowTagOnFlowWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowTagOnFlowUpdateWithWhereUniqueWithoutFk_FlowTagInput>>;
  updateMany?: InputMaybe<Array<FlowTagOnFlowUpdateManyWithWhereWithoutFk_FlowTagInput>>;
  upsert?: InputMaybe<Array<FlowTagOnFlowUpsertWithWhereUniqueWithoutFk_FlowTagInput>>;
};

export type FlowTagOnFlowUpdateWithWhereUniqueWithoutFk_FlowInput = {
  data: FlowTagOnFlowUpdateWithoutFk_FlowInput;
  where: FlowTagOnFlowWhereUniqueInput;
};

export type FlowTagOnFlowUpdateWithWhereUniqueWithoutFk_FlowTagInput = {
  data: FlowTagOnFlowUpdateWithoutFk_FlowTagInput;
  where: FlowTagOnFlowWhereUniqueInput;
};

export type FlowTagOnFlowUpdateWithoutFk_FlowInput = {
  FK_FlowTag?: InputMaybe<FlowTagUpdateOneWithoutFk_FlowsInput>;
  HOLDER?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlowTagOnFlowUpdateWithoutFk_FlowTagInput = {
  FK_Flow?: InputMaybe<FlowUpdateOneWithoutFk_TagsInput>;
  HOLDER?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FlowTagOnFlowUpsertWithWhereUniqueWithoutFk_FlowInput = {
  create: FlowTagOnFlowCreateWithoutFk_FlowInput;
  update: FlowTagOnFlowUpdateWithoutFk_FlowInput;
  where: FlowTagOnFlowWhereUniqueInput;
};

export type FlowTagOnFlowUpsertWithWhereUniqueWithoutFk_FlowTagInput = {
  create: FlowTagOnFlowCreateWithoutFk_FlowTagInput;
  update: FlowTagOnFlowUpdateWithoutFk_FlowTagInput;
  where: FlowTagOnFlowWhereUniqueInput;
};

export type FlowTagOnFlowWhereInput = {
  AND?: InputMaybe<Array<FlowTagOnFlowWhereInput>>;
  FK_Flow?: InputMaybe<FlowRelationFilter>;
  FK_FlowID?: InputMaybe<IntNullableFilter>;
  FK_FlowTag?: InputMaybe<FlowTagRelationFilter>;
  FK_FlowTagID?: InputMaybe<IntNullableFilter>;
  FlowTagOnFlowID?: InputMaybe<IntFilter>;
  HOLDER?: InputMaybe<StringNullableFilter>;
  NOT?: InputMaybe<Array<FlowTagOnFlowWhereInput>>;
  OR?: InputMaybe<Array<FlowTagOnFlowWhereInput>>;
};

export type FlowTagOnFlowWhereUniqueInput = {
  FlowTagOnFlowID?: InputMaybe<Scalars['Int']>;
};

export type FlowTagOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FlowTagOrderByWithAggregationInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowTagID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  Public?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<FlowTagAvgOrderByAggregateInput>;
  _count?: InputMaybe<FlowTagCountOrderByAggregateInput>;
  _max?: InputMaybe<FlowTagMaxOrderByAggregateInput>;
  _min?: InputMaybe<FlowTagMinOrderByAggregateInput>;
  _sum?: InputMaybe<FlowTagSumOrderByAggregateInput>;
};

export type FlowTagOrderByWithRelationInput = {
  CreatedTime?: InputMaybe<SortOrder>;
  FK_Flows?: InputMaybe<FlowTagOnFlowOrderByRelationAggregateInput>;
  FK_User?: InputMaybe<UserOrderByWithRelationInput>;
  FK_UserID?: InputMaybe<SortOrder>;
  FlowTagID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  Public?: InputMaybe<SortOrder>;
};

export type FlowTagRelationFilter = {
  is?: InputMaybe<FlowTagWhereInput>;
  isNot?: InputMaybe<FlowTagWhereInput>;
};

export enum FlowTagScalarFieldEnum {
  CreatedTime = 'CreatedTime',
  FkUserId = 'FK_UserID',
  FlowTagId = 'FlowTagID',
  Name = 'Name',
  Public = 'Public'
}

export type FlowTagScalarWhereInput = {
  AND?: InputMaybe<Array<FlowTagScalarWhereInput>>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_UserID?: InputMaybe<IntNullableFilter>;
  FlowTagID?: InputMaybe<IntFilter>;
  NOT?: InputMaybe<Array<FlowTagScalarWhereInput>>;
  Name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<FlowTagScalarWhereInput>>;
  Public?: InputMaybe<BoolFilter>;
};

export type FlowTagScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FlowTagScalarWhereWithAggregatesInput>>;
  CreatedTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  FK_UserID?: InputMaybe<IntNullableWithAggregatesFilter>;
  FlowTagID?: InputMaybe<IntWithAggregatesFilter>;
  NOT?: InputMaybe<Array<FlowTagScalarWhereWithAggregatesInput>>;
  Name?: InputMaybe<StringWithAggregatesFilter>;
  OR?: InputMaybe<Array<FlowTagScalarWhereWithAggregatesInput>>;
  Public?: InputMaybe<BoolWithAggregatesFilter>;
};

export type FlowTagSumAggregate = {
  __typename?: 'FlowTagSumAggregate';
  FK_UserID?: Maybe<Scalars['Int']>;
  FlowTagID?: Maybe<Scalars['Int']>;
};

export type FlowTagSumOrderByAggregateInput = {
  FK_UserID?: InputMaybe<SortOrder>;
  FlowTagID?: InputMaybe<SortOrder>;
};

export type FlowTagUpdateInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Flows?: InputMaybe<FlowTagOnFlowUpdateManyWithoutFk_FlowTagInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_FlowTagsInput>;
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
  Public?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type FlowTagUpdateManyMutationInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
  Public?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type FlowTagUpdateManyWithWhereWithoutFk_UserInput = {
  data: FlowTagUpdateManyMutationInput;
  where: FlowTagScalarWhereInput;
};

export type FlowTagUpdateManyWithoutFk_UserInput = {
  connect?: InputMaybe<Array<FlowTagWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowTagCreateOrConnectWithoutFk_UserInput>>;
  create?: InputMaybe<Array<FlowTagCreateWithoutFk_UserInput>>;
  createMany?: InputMaybe<FlowTagCreateManyFk_UserInputEnvelope>;
  delete?: InputMaybe<Array<FlowTagWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowTagScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowTagWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowTagWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowTagUpdateWithWhereUniqueWithoutFk_UserInput>>;
  updateMany?: InputMaybe<Array<FlowTagUpdateManyWithWhereWithoutFk_UserInput>>;
  upsert?: InputMaybe<Array<FlowTagUpsertWithWhereUniqueWithoutFk_UserInput>>;
};

export type FlowTagUpdateOneWithoutFk_FlowsInput = {
  connect?: InputMaybe<FlowTagWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowTagCreateOrConnectWithoutFk_FlowsInput>;
  create?: InputMaybe<FlowTagCreateWithoutFk_FlowsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FlowTagUpdateWithoutFk_FlowsInput>;
  upsert?: InputMaybe<FlowTagUpsertWithoutFk_FlowsInput>;
};

export type FlowTagUpdateWithWhereUniqueWithoutFk_UserInput = {
  data: FlowTagUpdateWithoutFk_UserInput;
  where: FlowTagWhereUniqueInput;
};

export type FlowTagUpdateWithoutFk_FlowsInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_FlowTagsInput>;
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
  Public?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type FlowTagUpdateWithoutFk_UserInput = {
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Flows?: InputMaybe<FlowTagOnFlowUpdateManyWithoutFk_FlowTagInput>;
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
  Public?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type FlowTagUpsertWithWhereUniqueWithoutFk_UserInput = {
  create: FlowTagCreateWithoutFk_UserInput;
  update: FlowTagUpdateWithoutFk_UserInput;
  where: FlowTagWhereUniqueInput;
};

export type FlowTagUpsertWithoutFk_FlowsInput = {
  create: FlowTagCreateWithoutFk_FlowsInput;
  update: FlowTagUpdateWithoutFk_FlowsInput;
};

export type FlowTagWhereInput = {
  AND?: InputMaybe<Array<FlowTagWhereInput>>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_Flows?: InputMaybe<FlowTagOnFlowListRelationFilter>;
  FK_User?: InputMaybe<UserRelationFilter>;
  FK_UserID?: InputMaybe<IntNullableFilter>;
  FlowTagID?: InputMaybe<IntFilter>;
  NOT?: InputMaybe<Array<FlowTagWhereInput>>;
  Name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<FlowTagWhereInput>>;
  Public?: InputMaybe<BoolFilter>;
};

export type FlowTagWhereUniqueInput = {
  FlowTagID?: InputMaybe<Scalars['Int']>;
};

export type FlowUpdateInput = {
  Body?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackUpdateManyWithoutFk_FlowInput>;
  FK_Tags?: InputMaybe<FlowTagOnFlowUpdateManyWithoutFk_FlowInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_FlowsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Visibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
};

export type FlowUpdateManyMutationInput = {
  Body?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Visibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
};

export type FlowUpdateManyWithWhereWithoutFk_UserInput = {
  data: FlowUpdateManyMutationInput;
  where: FlowScalarWhereInput;
};

export type FlowUpdateManyWithoutFk_UserInput = {
  connect?: InputMaybe<Array<FlowWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FlowCreateOrConnectWithoutFk_UserInput>>;
  create?: InputMaybe<Array<FlowCreateWithoutFk_UserInput>>;
  createMany?: InputMaybe<FlowCreateManyFk_UserInputEnvelope>;
  delete?: InputMaybe<Array<FlowWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FlowScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FlowWhereUniqueInput>>;
  set?: InputMaybe<Array<FlowWhereUniqueInput>>;
  update?: InputMaybe<Array<FlowUpdateWithWhereUniqueWithoutFk_UserInput>>;
  updateMany?: InputMaybe<Array<FlowUpdateManyWithWhereWithoutFk_UserInput>>;
  upsert?: InputMaybe<Array<FlowUpsertWithWhereUniqueWithoutFk_UserInput>>;
};

export type FlowUpdateOneWithoutFk_FlashCardStacksInput = {
  connect?: InputMaybe<FlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowCreateOrConnectWithoutFk_FlashCardStacksInput>;
  create?: InputMaybe<FlowCreateWithoutFk_FlashCardStacksInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FlowUpdateWithoutFk_FlashCardStacksInput>;
  upsert?: InputMaybe<FlowUpsertWithoutFk_FlashCardStacksInput>;
};

export type FlowUpdateOneWithoutFk_TagsInput = {
  connect?: InputMaybe<FlowWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FlowCreateOrConnectWithoutFk_TagsInput>;
  create?: InputMaybe<FlowCreateWithoutFk_TagsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FlowUpdateWithoutFk_TagsInput>;
  upsert?: InputMaybe<FlowUpsertWithoutFk_TagsInput>;
};

export type FlowUpdateWithWhereUniqueWithoutFk_UserInput = {
  data: FlowUpdateWithoutFk_UserInput;
  where: FlowWhereUniqueInput;
};

export type FlowUpdateWithoutFk_FlashCardStacksInput = {
  Body?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_Tags?: InputMaybe<FlowTagOnFlowUpdateManyWithoutFk_FlowInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_FlowsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Visibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
};

export type FlowUpdateWithoutFk_TagsInput = {
  Body?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackUpdateManyWithoutFk_FlowInput>;
  FK_User?: InputMaybe<UserUpdateOneWithoutFk_FlowsInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Visibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
};

export type FlowUpdateWithoutFk_UserInput = {
  Body?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  CreatedTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackUpdateManyWithoutFk_FlowInput>;
  FK_Tags?: InputMaybe<FlowTagOnFlowUpdateManyWithoutFk_FlowInput>;
  Title?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  Visibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
};

export type FlowUpsertWithWhereUniqueWithoutFk_UserInput = {
  create: FlowCreateWithoutFk_UserInput;
  update: FlowUpdateWithoutFk_UserInput;
  where: FlowWhereUniqueInput;
};

export type FlowUpsertWithoutFk_FlashCardStacksInput = {
  create: FlowCreateWithoutFk_FlashCardStacksInput;
  update: FlowUpdateWithoutFk_FlashCardStacksInput;
};

export type FlowUpsertWithoutFk_TagsInput = {
  create: FlowCreateWithoutFk_TagsInput;
  update: FlowUpdateWithoutFk_TagsInput;
};

export type FlowWhereInput = {
  AND?: InputMaybe<Array<FlowWhereInput>>;
  Body?: InputMaybe<StringNullableFilter>;
  CreatedTime?: InputMaybe<DateTimeFilter>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackListRelationFilter>;
  FK_Tags?: InputMaybe<FlowTagOnFlowListRelationFilter>;
  FK_User?: InputMaybe<UserRelationFilter>;
  FK_UserID?: InputMaybe<IntNullableFilter>;
  FlowID?: InputMaybe<IntFilter>;
  NOT?: InputMaybe<Array<FlowWhereInput>>;
  OR?: InputMaybe<Array<FlowWhereInput>>;
  Title?: InputMaybe<StringNullableFilter>;
  Visibility?: InputMaybe<EnumVisibilityNullableFilter>;
};

export type FlowWhereUniqueInput = {
  FlowID?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse: Course;
  createCourseOnUser: CourseOnUser;
  createFlashCard: FlashCard;
  createFlashCardStack: FlashCardStack;
  createFlow: Flow;
  createFlowTag: FlowTag;
  createFlowTagOnFlow: FlowTagOnFlow;
  createManyCourse: AffectedRowsOutput;
  createManyCourseOnUser: AffectedRowsOutput;
  createManyFlashCard: AffectedRowsOutput;
  createManyFlashCardStack: AffectedRowsOutput;
  createManyFlow: AffectedRowsOutput;
  createManyFlowTag: AffectedRowsOutput;
  createManyFlowTagOnFlow: AffectedRowsOutput;
  createManyProfessor: AffectedRowsOutput;
  createManySchool: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createProfessor: Professor;
  createSchool: School;
  createUser: User;
  deleteCourse?: Maybe<Course>;
  deleteCourseOnUser?: Maybe<CourseOnUser>;
  deleteFlashCard?: Maybe<FlashCard>;
  deleteFlashCardStack?: Maybe<FlashCardStack>;
  deleteFlow?: Maybe<Flow>;
  deleteFlowTag?: Maybe<FlowTag>;
  deleteFlowTagOnFlow?: Maybe<FlowTagOnFlow>;
  deleteManyCourse: AffectedRowsOutput;
  deleteManyCourseOnUser: AffectedRowsOutput;
  deleteManyFlashCard: AffectedRowsOutput;
  deleteManyFlashCardStack: AffectedRowsOutput;
  deleteManyFlow: AffectedRowsOutput;
  deleteManyFlowTag: AffectedRowsOutput;
  deleteManyFlowTagOnFlow: AffectedRowsOutput;
  deleteManyProfessor: AffectedRowsOutput;
  deleteManySchool: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteProfessor?: Maybe<Professor>;
  deleteSchool?: Maybe<School>;
  deleteUser?: Maybe<User>;
  updateCourse?: Maybe<Course>;
  updateCourseOnUser?: Maybe<CourseOnUser>;
  updateFlashCard?: Maybe<FlashCard>;
  updateFlashCardStack?: Maybe<FlashCardStack>;
  updateFlow?: Maybe<Flow>;
  updateFlowTag?: Maybe<FlowTag>;
  updateFlowTagOnFlow?: Maybe<FlowTagOnFlow>;
  updateManyCourse: AffectedRowsOutput;
  updateManyCourseOnUser: AffectedRowsOutput;
  updateManyFlashCard: AffectedRowsOutput;
  updateManyFlashCardStack: AffectedRowsOutput;
  updateManyFlow: AffectedRowsOutput;
  updateManyFlowTag: AffectedRowsOutput;
  updateManyFlowTagOnFlow: AffectedRowsOutput;
  updateManyProfessor: AffectedRowsOutput;
  updateManySchool: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateProfessor?: Maybe<Professor>;
  updateSchool?: Maybe<School>;
  updateUser?: Maybe<User>;
  upsertCourse: Course;
  upsertCourseOnUser: CourseOnUser;
  upsertFlashCard: FlashCard;
  upsertFlashCardStack: FlashCardStack;
  upsertFlow: Flow;
  upsertFlowTag: FlowTag;
  upsertFlowTagOnFlow: FlowTagOnFlow;
  upsertProfessor: Professor;
  upsertSchool: School;
  upsertUser: User;
};


export type MutationCreateCourseArgs = {
  data: CourseCreateInput;
};


export type MutationCreateCourseOnUserArgs = {
  data: CourseOnUserCreateInput;
};


export type MutationCreateFlashCardArgs = {
  data: FlashCardCreateInput;
};


export type MutationCreateFlashCardStackArgs = {
  data: FlashCardStackCreateInput;
};


export type MutationCreateFlowArgs = {
  data: FlowCreateInput;
};


export type MutationCreateFlowTagArgs = {
  data: FlowTagCreateInput;
};


export type MutationCreateFlowTagOnFlowArgs = {
  data: FlowTagOnFlowCreateInput;
};


export type MutationCreateManyCourseArgs = {
  data: Array<CourseCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCourseOnUserArgs = {
  data: Array<CourseOnUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFlashCardArgs = {
  data: Array<FlashCardCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFlashCardStackArgs = {
  data: Array<FlashCardStackCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFlowArgs = {
  data: Array<FlowCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFlowTagArgs = {
  data: Array<FlowTagCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFlowTagOnFlowArgs = {
  data: Array<FlowTagOnFlowCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyProfessorArgs = {
  data: Array<ProfessorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySchoolArgs = {
  data: Array<SchoolCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateProfessorArgs = {
  data: ProfessorCreateInput;
};


export type MutationCreateSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type MutationDeleteCourseOnUserArgs = {
  where: CourseOnUserWhereUniqueInput;
};


export type MutationDeleteFlashCardArgs = {
  where: FlashCardWhereUniqueInput;
};


export type MutationDeleteFlashCardStackArgs = {
  where: FlashCardStackWhereUniqueInput;
};


export type MutationDeleteFlowArgs = {
  where: FlowWhereUniqueInput;
};


export type MutationDeleteFlowTagArgs = {
  where: FlowTagWhereUniqueInput;
};


export type MutationDeleteFlowTagOnFlowArgs = {
  where: FlowTagOnFlowWhereUniqueInput;
};


export type MutationDeleteManyCourseArgs = {
  where?: InputMaybe<CourseWhereInput>;
};


export type MutationDeleteManyCourseOnUserArgs = {
  where?: InputMaybe<CourseOnUserWhereInput>;
};


export type MutationDeleteManyFlashCardArgs = {
  where?: InputMaybe<FlashCardWhereInput>;
};


export type MutationDeleteManyFlashCardStackArgs = {
  where?: InputMaybe<FlashCardStackWhereInput>;
};


export type MutationDeleteManyFlowArgs = {
  where?: InputMaybe<FlowWhereInput>;
};


export type MutationDeleteManyFlowTagArgs = {
  where?: InputMaybe<FlowTagWhereInput>;
};


export type MutationDeleteManyFlowTagOnFlowArgs = {
  where?: InputMaybe<FlowTagOnFlowWhereInput>;
};


export type MutationDeleteManyProfessorArgs = {
  where?: InputMaybe<ProfessorWhereInput>;
};


export type MutationDeleteManySchoolArgs = {
  where?: InputMaybe<SchoolWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteProfessorArgs = {
  where: ProfessorWhereUniqueInput;
};


export type MutationDeleteSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpdateCourseOnUserArgs = {
  data: CourseOnUserUpdateInput;
  where: CourseOnUserWhereUniqueInput;
};


export type MutationUpdateFlashCardArgs = {
  data: FlashCardUpdateInput;
  where: FlashCardWhereUniqueInput;
};


export type MutationUpdateFlashCardStackArgs = {
  data: FlashCardStackUpdateInput;
  where: FlashCardStackWhereUniqueInput;
};


export type MutationUpdateFlowArgs = {
  data: FlowUpdateInput;
  where: FlowWhereUniqueInput;
};


export type MutationUpdateFlowTagArgs = {
  data: FlowTagUpdateInput;
  where: FlowTagWhereUniqueInput;
};


export type MutationUpdateFlowTagOnFlowArgs = {
  data: FlowTagOnFlowUpdateInput;
  where: FlowTagOnFlowWhereUniqueInput;
};


export type MutationUpdateManyCourseArgs = {
  data: CourseUpdateManyMutationInput;
  where?: InputMaybe<CourseWhereInput>;
};


export type MutationUpdateManyCourseOnUserArgs = {
  data: CourseOnUserUpdateManyMutationInput;
  where?: InputMaybe<CourseOnUserWhereInput>;
};


export type MutationUpdateManyFlashCardArgs = {
  data: FlashCardUpdateManyMutationInput;
  where?: InputMaybe<FlashCardWhereInput>;
};


export type MutationUpdateManyFlashCardStackArgs = {
  data: FlashCardStackUpdateManyMutationInput;
  where?: InputMaybe<FlashCardStackWhereInput>;
};


export type MutationUpdateManyFlowArgs = {
  data: FlowUpdateManyMutationInput;
  where?: InputMaybe<FlowWhereInput>;
};


export type MutationUpdateManyFlowTagArgs = {
  data: FlowTagUpdateManyMutationInput;
  where?: InputMaybe<FlowTagWhereInput>;
};


export type MutationUpdateManyFlowTagOnFlowArgs = {
  data: FlowTagOnFlowUpdateManyMutationInput;
  where?: InputMaybe<FlowTagOnFlowWhereInput>;
};


export type MutationUpdateManyProfessorArgs = {
  data: ProfessorUpdateManyMutationInput;
  where?: InputMaybe<ProfessorWhereInput>;
};


export type MutationUpdateManySchoolArgs = {
  data: SchoolUpdateManyMutationInput;
  where?: InputMaybe<SchoolWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateProfessorArgs = {
  data: ProfessorUpdateInput;
  where: ProfessorWhereUniqueInput;
};


export type MutationUpdateSchoolArgs = {
  data: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertCourseArgs = {
  create: CourseCreateInput;
  update: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpsertCourseOnUserArgs = {
  create: CourseOnUserCreateInput;
  update: CourseOnUserUpdateInput;
  where: CourseOnUserWhereUniqueInput;
};


export type MutationUpsertFlashCardArgs = {
  create: FlashCardCreateInput;
  update: FlashCardUpdateInput;
  where: FlashCardWhereUniqueInput;
};


export type MutationUpsertFlashCardStackArgs = {
  create: FlashCardStackCreateInput;
  update: FlashCardStackUpdateInput;
  where: FlashCardStackWhereUniqueInput;
};


export type MutationUpsertFlowArgs = {
  create: FlowCreateInput;
  update: FlowUpdateInput;
  where: FlowWhereUniqueInput;
};


export type MutationUpsertFlowTagArgs = {
  create: FlowTagCreateInput;
  update: FlowTagUpdateInput;
  where: FlowTagWhereUniqueInput;
};


export type MutationUpsertFlowTagOnFlowArgs = {
  create: FlowTagOnFlowCreateInput;
  update: FlowTagOnFlowUpdateInput;
  where: FlowTagOnFlowWhereUniqueInput;
};


export type MutationUpsertProfessorArgs = {
  create: ProfessorCreateInput;
  update: ProfessorUpdateInput;
  where: ProfessorWhereUniqueInput;
};


export type MutationUpsertSchoolArgs = {
  create: SchoolCreateInput;
  update: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumVisibilityNullableFilter = {
  equals?: InputMaybe<Visibility>;
  in?: InputMaybe<Array<Visibility>>;
  not?: InputMaybe<NestedEnumVisibilityNullableFilter>;
  notIn?: InputMaybe<Array<Visibility>>;
};

export type NestedEnumVisibilityNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumVisibilityNullableFilter>;
  _min?: InputMaybe<NestedEnumVisibilityNullableFilter>;
  equals?: InputMaybe<Visibility>;
  in?: InputMaybe<Array<Visibility>>;
  not?: InputMaybe<NestedEnumVisibilityNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Visibility>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableEnumVisibilityFieldUpdateOperationsInput = {
  set?: InputMaybe<Visibility>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Professor = {
  __typename?: 'Professor';
  FK_Course?: Maybe<Course>;
  FK_CourseID?: Maybe<Scalars['Int']>;
  Name: Scalars['String'];
  ProfessorID: Scalars['Int'];
};

export type ProfessorAvgAggregate = {
  __typename?: 'ProfessorAvgAggregate';
  FK_CourseID?: Maybe<Scalars['Float']>;
  ProfessorID?: Maybe<Scalars['Float']>;
};

export type ProfessorAvgOrderByAggregateInput = {
  FK_CourseID?: InputMaybe<SortOrder>;
  ProfessorID?: InputMaybe<SortOrder>;
};

export type ProfessorCountAggregate = {
  __typename?: 'ProfessorCountAggregate';
  FK_CourseID: Scalars['Int'];
  Name: Scalars['Int'];
  ProfessorID: Scalars['Int'];
  _all: Scalars['Int'];
};

export type ProfessorCountOrderByAggregateInput = {
  FK_CourseID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  ProfessorID?: InputMaybe<SortOrder>;
};

export type ProfessorCreateInput = {
  FK_Course?: InputMaybe<CourseCreateNestedOneWithoutFk_ProfessorsInput>;
  Name: Scalars['String'];
};

export type ProfessorCreateManyFk_CourseInput = {
  Name: Scalars['String'];
  ProfessorID?: InputMaybe<Scalars['Int']>;
};

export type ProfessorCreateManyFk_CourseInputEnvelope = {
  data: Array<ProfessorCreateManyFk_CourseInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProfessorCreateManyInput = {
  FK_CourseID?: InputMaybe<Scalars['Int']>;
  Name: Scalars['String'];
  ProfessorID?: InputMaybe<Scalars['Int']>;
};

export type ProfessorCreateNestedManyWithoutFk_CourseInput = {
  connect?: InputMaybe<Array<ProfessorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProfessorCreateOrConnectWithoutFk_CourseInput>>;
  create?: InputMaybe<Array<ProfessorCreateWithoutFk_CourseInput>>;
  createMany?: InputMaybe<ProfessorCreateManyFk_CourseInputEnvelope>;
};

export type ProfessorCreateOrConnectWithoutFk_CourseInput = {
  create: ProfessorCreateWithoutFk_CourseInput;
  where: ProfessorWhereUniqueInput;
};

export type ProfessorCreateWithoutFk_CourseInput = {
  Name: Scalars['String'];
};

export type ProfessorGroupBy = {
  __typename?: 'ProfessorGroupBy';
  FK_CourseID?: Maybe<Scalars['Int']>;
  Name: Scalars['String'];
  ProfessorID: Scalars['Int'];
  _avg?: Maybe<ProfessorAvgAggregate>;
  _count?: Maybe<ProfessorCountAggregate>;
  _max?: Maybe<ProfessorMaxAggregate>;
  _min?: Maybe<ProfessorMinAggregate>;
  _sum?: Maybe<ProfessorSumAggregate>;
};

export type ProfessorListRelationFilter = {
  every?: InputMaybe<ProfessorWhereInput>;
  none?: InputMaybe<ProfessorWhereInput>;
  some?: InputMaybe<ProfessorWhereInput>;
};

export type ProfessorMaxAggregate = {
  __typename?: 'ProfessorMaxAggregate';
  FK_CourseID?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  ProfessorID?: Maybe<Scalars['Int']>;
};

export type ProfessorMaxOrderByAggregateInput = {
  FK_CourseID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  ProfessorID?: InputMaybe<SortOrder>;
};

export type ProfessorMinAggregate = {
  __typename?: 'ProfessorMinAggregate';
  FK_CourseID?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  ProfessorID?: Maybe<Scalars['Int']>;
};

export type ProfessorMinOrderByAggregateInput = {
  FK_CourseID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  ProfessorID?: InputMaybe<SortOrder>;
};

export type ProfessorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProfessorOrderByWithAggregationInput = {
  FK_CourseID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  ProfessorID?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<ProfessorAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProfessorCountOrderByAggregateInput>;
  _max?: InputMaybe<ProfessorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProfessorMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProfessorSumOrderByAggregateInput>;
};

export type ProfessorOrderByWithRelationInput = {
  FK_Course?: InputMaybe<CourseOrderByWithRelationInput>;
  FK_CourseID?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  ProfessorID?: InputMaybe<SortOrder>;
};

export enum ProfessorScalarFieldEnum {
  FkCourseId = 'FK_CourseID',
  Name = 'Name',
  ProfessorId = 'ProfessorID'
}

export type ProfessorScalarWhereInput = {
  AND?: InputMaybe<Array<ProfessorScalarWhereInput>>;
  FK_CourseID?: InputMaybe<IntNullableFilter>;
  NOT?: InputMaybe<Array<ProfessorScalarWhereInput>>;
  Name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<ProfessorScalarWhereInput>>;
  ProfessorID?: InputMaybe<IntFilter>;
};

export type ProfessorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ProfessorScalarWhereWithAggregatesInput>>;
  FK_CourseID?: InputMaybe<IntNullableWithAggregatesFilter>;
  NOT?: InputMaybe<Array<ProfessorScalarWhereWithAggregatesInput>>;
  Name?: InputMaybe<StringWithAggregatesFilter>;
  OR?: InputMaybe<Array<ProfessorScalarWhereWithAggregatesInput>>;
  ProfessorID?: InputMaybe<IntWithAggregatesFilter>;
};

export type ProfessorSumAggregate = {
  __typename?: 'ProfessorSumAggregate';
  FK_CourseID?: Maybe<Scalars['Int']>;
  ProfessorID?: Maybe<Scalars['Int']>;
};

export type ProfessorSumOrderByAggregateInput = {
  FK_CourseID?: InputMaybe<SortOrder>;
  ProfessorID?: InputMaybe<SortOrder>;
};

export type ProfessorUpdateInput = {
  FK_Course?: InputMaybe<CourseUpdateOneWithoutFk_ProfessorsInput>;
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfessorUpdateManyMutationInput = {
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfessorUpdateManyWithWhereWithoutFk_CourseInput = {
  data: ProfessorUpdateManyMutationInput;
  where: ProfessorScalarWhereInput;
};

export type ProfessorUpdateManyWithoutFk_CourseInput = {
  connect?: InputMaybe<Array<ProfessorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProfessorCreateOrConnectWithoutFk_CourseInput>>;
  create?: InputMaybe<Array<ProfessorCreateWithoutFk_CourseInput>>;
  createMany?: InputMaybe<ProfessorCreateManyFk_CourseInputEnvelope>;
  delete?: InputMaybe<Array<ProfessorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProfessorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProfessorWhereUniqueInput>>;
  set?: InputMaybe<Array<ProfessorWhereUniqueInput>>;
  update?: InputMaybe<Array<ProfessorUpdateWithWhereUniqueWithoutFk_CourseInput>>;
  updateMany?: InputMaybe<Array<ProfessorUpdateManyWithWhereWithoutFk_CourseInput>>;
  upsert?: InputMaybe<Array<ProfessorUpsertWithWhereUniqueWithoutFk_CourseInput>>;
};

export type ProfessorUpdateWithWhereUniqueWithoutFk_CourseInput = {
  data: ProfessorUpdateWithoutFk_CourseInput;
  where: ProfessorWhereUniqueInput;
};

export type ProfessorUpdateWithoutFk_CourseInput = {
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfessorUpsertWithWhereUniqueWithoutFk_CourseInput = {
  create: ProfessorCreateWithoutFk_CourseInput;
  update: ProfessorUpdateWithoutFk_CourseInput;
  where: ProfessorWhereUniqueInput;
};

export type ProfessorWhereInput = {
  AND?: InputMaybe<Array<ProfessorWhereInput>>;
  FK_Course?: InputMaybe<CourseRelationFilter>;
  FK_CourseID?: InputMaybe<IntNullableFilter>;
  NOT?: InputMaybe<Array<ProfessorWhereInput>>;
  Name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<ProfessorWhereInput>>;
  ProfessorID?: InputMaybe<IntFilter>;
};

export type ProfessorWhereUniqueInput = {
  ProfessorID?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCourse: AggregateCourse;
  aggregateCourseOnUser: AggregateCourseOnUser;
  aggregateFlashCard: AggregateFlashCard;
  aggregateFlashCardStack: AggregateFlashCardStack;
  aggregateFlow: AggregateFlow;
  aggregateFlowTag: AggregateFlowTag;
  aggregateFlowTagOnFlow: AggregateFlowTagOnFlow;
  aggregateProfessor: AggregateProfessor;
  aggregateSchool: AggregateSchool;
  aggregateUser: AggregateUser;
  course?: Maybe<Course>;
  courseOnUser?: Maybe<CourseOnUser>;
  courseOnUsers: Array<CourseOnUser>;
  courses: Array<Course>;
  findFirstCourse?: Maybe<Course>;
  findFirstCourseOnUser?: Maybe<CourseOnUser>;
  findFirstFlashCard?: Maybe<FlashCard>;
  findFirstFlashCardStack?: Maybe<FlashCardStack>;
  findFirstFlow?: Maybe<Flow>;
  findFirstFlowTag?: Maybe<FlowTag>;
  findFirstFlowTagOnFlow?: Maybe<FlowTagOnFlow>;
  findFirstProfessor?: Maybe<Professor>;
  findFirstSchool?: Maybe<School>;
  findFirstUser?: Maybe<User>;
  flashCard?: Maybe<FlashCard>;
  flashCardStack?: Maybe<FlashCardStack>;
  flashCardStacks: Array<FlashCardStack>;
  flashCards: Array<FlashCard>;
  flow?: Maybe<Flow>;
  flowTag?: Maybe<FlowTag>;
  flowTagOnFlow?: Maybe<FlowTagOnFlow>;
  flowTagOnFlows: Array<FlowTagOnFlow>;
  flowTags: Array<FlowTag>;
  flows: Array<Flow>;
  groupByCourse: Array<CourseGroupBy>;
  groupByCourseOnUser: Array<CourseOnUserGroupBy>;
  groupByFlashCard: Array<FlashCardGroupBy>;
  groupByFlashCardStack: Array<FlashCardStackGroupBy>;
  groupByFlow: Array<FlowGroupBy>;
  groupByFlowTag: Array<FlowTagGroupBy>;
  groupByFlowTagOnFlow: Array<FlowTagOnFlowGroupBy>;
  groupByProfessor: Array<ProfessorGroupBy>;
  groupBySchool: Array<SchoolGroupBy>;
  groupByUser: Array<UserGroupBy>;
  professor?: Maybe<Professor>;
  professors: Array<Professor>;
  school?: Maybe<School>;
  schools: Array<School>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateCourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryAggregateCourseOnUserArgs = {
  cursor?: InputMaybe<CourseOnUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CourseOnUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseOnUserWhereInput>;
};


export type QueryAggregateFlashCardArgs = {
  cursor?: InputMaybe<FlashCardWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FlashCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardWhereInput>;
};


export type QueryAggregateFlashCardStackArgs = {
  cursor?: InputMaybe<FlashCardStackWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FlashCardStackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardStackWhereInput>;
};


export type QueryAggregateFlowArgs = {
  cursor?: InputMaybe<FlowWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowWhereInput>;
};


export type QueryAggregateFlowTagArgs = {
  cursor?: InputMaybe<FlowTagWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FlowTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagWhereInput>;
};


export type QueryAggregateFlowTagOnFlowArgs = {
  cursor?: InputMaybe<FlowTagOnFlowWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FlowTagOnFlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagOnFlowWhereInput>;
};


export type QueryAggregateProfessorArgs = {
  cursor?: InputMaybe<ProfessorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProfessorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfessorWhereInput>;
};


export type QueryAggregateSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type QueryCourseOnUserArgs = {
  where: CourseOnUserWhereUniqueInput;
};


export type QueryCourseOnUsersArgs = {
  cursor?: InputMaybe<CourseOnUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseOnUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOnUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseOnUserWhereInput>;
};


export type QueryCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryFindFirstCourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryFindFirstCourseOnUserArgs = {
  cursor?: InputMaybe<CourseOnUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseOnUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOnUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseOnUserWhereInput>;
};


export type QueryFindFirstFlashCardArgs = {
  cursor?: InputMaybe<FlashCardWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlashCardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlashCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardWhereInput>;
};


export type QueryFindFirstFlashCardStackArgs = {
  cursor?: InputMaybe<FlashCardStackWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlashCardStackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlashCardStackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardStackWhereInput>;
};


export type QueryFindFirstFlowArgs = {
  cursor?: InputMaybe<FlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowWhereInput>;
};


export type QueryFindFirstFlowTagArgs = {
  cursor?: InputMaybe<FlowTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagWhereInput>;
};


export type QueryFindFirstFlowTagOnFlowArgs = {
  cursor?: InputMaybe<FlowTagOnFlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowTagOnFlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowTagOnFlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagOnFlowWhereInput>;
};


export type QueryFindFirstProfessorArgs = {
  cursor?: InputMaybe<ProfessorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfessorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProfessorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfessorWhereInput>;
};


export type QueryFindFirstSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFlashCardArgs = {
  where: FlashCardWhereUniqueInput;
};


export type QueryFlashCardStackArgs = {
  where: FlashCardStackWhereUniqueInput;
};


export type QueryFlashCardStacksArgs = {
  cursor?: InputMaybe<FlashCardStackWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlashCardStackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlashCardStackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardStackWhereInput>;
};


export type QueryFlashCardsArgs = {
  cursor?: InputMaybe<FlashCardWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlashCardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlashCardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardWhereInput>;
};


export type QueryFlowArgs = {
  where: FlowWhereUniqueInput;
};


export type QueryFlowTagArgs = {
  where: FlowTagWhereUniqueInput;
};


export type QueryFlowTagOnFlowArgs = {
  where: FlowTagOnFlowWhereUniqueInput;
};


export type QueryFlowTagOnFlowsArgs = {
  cursor?: InputMaybe<FlowTagOnFlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowTagOnFlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowTagOnFlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagOnFlowWhereInput>;
};


export type QueryFlowTagsArgs = {
  cursor?: InputMaybe<FlowTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagWhereInput>;
};


export type QueryFlowsArgs = {
  cursor?: InputMaybe<FlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowWhereInput>;
};


export type QueryGroupByCourseArgs = {
  by: Array<CourseScalarFieldEnum>;
  having?: InputMaybe<CourseScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CourseOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryGroupByCourseOnUserArgs = {
  by: Array<CourseOnUserScalarFieldEnum>;
  having?: InputMaybe<CourseOnUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CourseOnUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseOnUserWhereInput>;
};


export type QueryGroupByFlashCardArgs = {
  by: Array<FlashCardScalarFieldEnum>;
  having?: InputMaybe<FlashCardScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FlashCardOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardWhereInput>;
};


export type QueryGroupByFlashCardStackArgs = {
  by: Array<FlashCardStackScalarFieldEnum>;
  having?: InputMaybe<FlashCardStackScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FlashCardStackOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardStackWhereInput>;
};


export type QueryGroupByFlowArgs = {
  by: Array<FlowScalarFieldEnum>;
  having?: InputMaybe<FlowScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FlowOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowWhereInput>;
};


export type QueryGroupByFlowTagArgs = {
  by: Array<FlowTagScalarFieldEnum>;
  having?: InputMaybe<FlowTagScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FlowTagOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagWhereInput>;
};


export type QueryGroupByFlowTagOnFlowArgs = {
  by: Array<FlowTagOnFlowScalarFieldEnum>;
  having?: InputMaybe<FlowTagOnFlowScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FlowTagOnFlowOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagOnFlowWhereInput>;
};


export type QueryGroupByProfessorArgs = {
  by: Array<ProfessorScalarFieldEnum>;
  having?: InputMaybe<ProfessorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProfessorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfessorWhereInput>;
};


export type QueryGroupBySchoolArgs = {
  by: Array<SchoolScalarFieldEnum>;
  having?: InputMaybe<SchoolScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryProfessorArgs = {
  where: ProfessorWhereUniqueInput;
};


export type QueryProfessorsArgs = {
  cursor?: InputMaybe<ProfessorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfessorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProfessorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfessorWhereInput>;
};


export type QuerySchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type QuerySchoolsArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type School = {
  __typename?: 'School';
  FK_Course: Array<Course>;
  HasClassSupport: Scalars['Boolean'];
  Name: Scalars['String'];
  SchoolID: Scalars['Int'];
  _count?: Maybe<SchoolCount>;
};


export type SchoolFk_CourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};

export type SchoolAvgAggregate = {
  __typename?: 'SchoolAvgAggregate';
  SchoolID?: Maybe<Scalars['Float']>;
};

export type SchoolAvgOrderByAggregateInput = {
  SchoolID?: InputMaybe<SortOrder>;
};

export type SchoolCount = {
  __typename?: 'SchoolCount';
  FK_Course: Scalars['Int'];
};

export type SchoolCountAggregate = {
  __typename?: 'SchoolCountAggregate';
  HasClassSupport: Scalars['Int'];
  Name: Scalars['Int'];
  SchoolID: Scalars['Int'];
  _all: Scalars['Int'];
};

export type SchoolCountOrderByAggregateInput = {
  HasClassSupport?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  SchoolID?: InputMaybe<SortOrder>;
};

export type SchoolCreateInput = {
  FK_Course?: InputMaybe<CourseCreateNestedManyWithoutFk_SchoolInput>;
  HasClassSupport: Scalars['Boolean'];
  Name: Scalars['String'];
};

export type SchoolCreateManyInput = {
  HasClassSupport: Scalars['Boolean'];
  Name: Scalars['String'];
  SchoolID?: InputMaybe<Scalars['Int']>;
};

export type SchoolCreateNestedOneWithoutFk_CourseInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutFk_CourseInput>;
  create?: InputMaybe<SchoolCreateWithoutFk_CourseInput>;
};

export type SchoolCreateOrConnectWithoutFk_CourseInput = {
  create: SchoolCreateWithoutFk_CourseInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateWithoutFk_CourseInput = {
  HasClassSupport: Scalars['Boolean'];
  Name: Scalars['String'];
};

export type SchoolGroupBy = {
  __typename?: 'SchoolGroupBy';
  HasClassSupport: Scalars['Boolean'];
  Name: Scalars['String'];
  SchoolID: Scalars['Int'];
  _avg?: Maybe<SchoolAvgAggregate>;
  _count?: Maybe<SchoolCountAggregate>;
  _max?: Maybe<SchoolMaxAggregate>;
  _min?: Maybe<SchoolMinAggregate>;
  _sum?: Maybe<SchoolSumAggregate>;
};

export type SchoolMaxAggregate = {
  __typename?: 'SchoolMaxAggregate';
  HasClassSupport?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  SchoolID?: Maybe<Scalars['Int']>;
};

export type SchoolMaxOrderByAggregateInput = {
  HasClassSupport?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  SchoolID?: InputMaybe<SortOrder>;
};

export type SchoolMinAggregate = {
  __typename?: 'SchoolMinAggregate';
  HasClassSupport?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  SchoolID?: Maybe<Scalars['Int']>;
};

export type SchoolMinOrderByAggregateInput = {
  HasClassSupport?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  SchoolID?: InputMaybe<SortOrder>;
};

export type SchoolOrderByWithAggregationInput = {
  HasClassSupport?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  SchoolID?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<SchoolAvgOrderByAggregateInput>;
  _count?: InputMaybe<SchoolCountOrderByAggregateInput>;
  _max?: InputMaybe<SchoolMaxOrderByAggregateInput>;
  _min?: InputMaybe<SchoolMinOrderByAggregateInput>;
  _sum?: InputMaybe<SchoolSumOrderByAggregateInput>;
};

export type SchoolOrderByWithRelationInput = {
  FK_Course?: InputMaybe<CourseOrderByRelationAggregateInput>;
  HasClassSupport?: InputMaybe<SortOrder>;
  Name?: InputMaybe<SortOrder>;
  SchoolID?: InputMaybe<SortOrder>;
};

export type SchoolRelationFilter = {
  is?: InputMaybe<SchoolWhereInput>;
  isNot?: InputMaybe<SchoolWhereInput>;
};

export enum SchoolScalarFieldEnum {
  HasClassSupport = 'HasClassSupport',
  Name = 'Name',
  SchoolId = 'SchoolID'
}

export type SchoolScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  HasClassSupport?: InputMaybe<BoolWithAggregatesFilter>;
  NOT?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  Name?: InputMaybe<StringWithAggregatesFilter>;
  OR?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  SchoolID?: InputMaybe<IntWithAggregatesFilter>;
};

export type SchoolSumAggregate = {
  __typename?: 'SchoolSumAggregate';
  SchoolID?: Maybe<Scalars['Int']>;
};

export type SchoolSumOrderByAggregateInput = {
  SchoolID?: InputMaybe<SortOrder>;
};

export type SchoolUpdateInput = {
  FK_Course?: InputMaybe<CourseUpdateManyWithoutFk_SchoolInput>;
  HasClassSupport?: InputMaybe<BoolFieldUpdateOperationsInput>;
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateManyMutationInput = {
  HasClassSupport?: InputMaybe<BoolFieldUpdateOperationsInput>;
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpdateOneWithoutFk_CourseInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutFk_CourseInput>;
  create?: InputMaybe<SchoolCreateWithoutFk_CourseInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SchoolUpdateWithoutFk_CourseInput>;
  upsert?: InputMaybe<SchoolUpsertWithoutFk_CourseInput>;
};

export type SchoolUpdateWithoutFk_CourseInput = {
  HasClassSupport?: InputMaybe<BoolFieldUpdateOperationsInput>;
  Name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SchoolUpsertWithoutFk_CourseInput = {
  create: SchoolCreateWithoutFk_CourseInput;
  update: SchoolUpdateWithoutFk_CourseInput;
};

export type SchoolWhereInput = {
  AND?: InputMaybe<Array<SchoolWhereInput>>;
  FK_Course?: InputMaybe<CourseListRelationFilter>;
  HasClassSupport?: InputMaybe<BoolFilter>;
  NOT?: InputMaybe<Array<SchoolWhereInput>>;
  Name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<SchoolWhereInput>>;
  SchoolID?: InputMaybe<IntFilter>;
};

export type SchoolWhereUniqueInput = {
  SchoolID?: InputMaybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  DefaultVisibility?: Maybe<Visibility>;
  FK_Courses: Array<CourseOnUser>;
  FK_FlashCardStacks: Array<FlashCardStack>;
  FK_FlowTags: Array<FlowTag>;
  FK_Flows: Array<Flow>;
  ProfilePictureLink?: Maybe<Scalars['String']>;
  SetupComplete: Scalars['Boolean'];
  SupabaseID: Scalars['String'];
  UserID: Scalars['Int'];
  Username?: Maybe<Scalars['String']>;
  _count?: Maybe<UserCount>;
};


export type UserFk_CoursesArgs = {
  cursor?: InputMaybe<CourseOnUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseOnUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOnUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseOnUserWhereInput>;
};


export type UserFk_FlashCardStacksArgs = {
  cursor?: InputMaybe<FlashCardStackWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlashCardStackScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlashCardStackOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlashCardStackWhereInput>;
};


export type UserFk_FlowTagsArgs = {
  cursor?: InputMaybe<FlowTagWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowTagScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowTagOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowTagWhereInput>;
};


export type UserFk_FlowsArgs = {
  cursor?: InputMaybe<FlowWhereUniqueInput>;
  distinct?: InputMaybe<Array<FlowScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FlowOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FlowWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  UserID?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  UserID?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  FK_Courses: Scalars['Int'];
  FK_FlashCardStacks: Scalars['Int'];
  FK_FlowTags: Scalars['Int'];
  FK_Flows: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  DefaultVisibility: Scalars['Int'];
  ProfilePictureLink: Scalars['Int'];
  SetupComplete: Scalars['Int'];
  SupabaseID: Scalars['Int'];
  UserID: Scalars['Int'];
  Username: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  DefaultVisibility?: InputMaybe<SortOrder>;
  ProfilePictureLink?: InputMaybe<SortOrder>;
  SetupComplete?: InputMaybe<SortOrder>;
  SupabaseID?: InputMaybe<SortOrder>;
  UserID?: InputMaybe<SortOrder>;
  Username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  DefaultVisibility?: InputMaybe<Visibility>;
  FK_Courses?: InputMaybe<CourseOnUserCreateNestedManyWithoutFk_UserInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackCreateNestedManyWithoutFk_UserInput>;
  FK_FlowTags?: InputMaybe<FlowTagCreateNestedManyWithoutFk_UserInput>;
  FK_Flows?: InputMaybe<FlowCreateNestedManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<Scalars['String']>;
  SetupComplete?: InputMaybe<Scalars['Boolean']>;
  SupabaseID: Scalars['String'];
  Username?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyInput = {
  DefaultVisibility?: InputMaybe<Visibility>;
  ProfilePictureLink?: InputMaybe<Scalars['String']>;
  SetupComplete?: InputMaybe<Scalars['Boolean']>;
  SupabaseID: Scalars['String'];
  UserID?: InputMaybe<Scalars['Int']>;
  Username?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutFk_CoursesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFk_CoursesInput>;
  create?: InputMaybe<UserCreateWithoutFk_CoursesInput>;
};

export type UserCreateNestedOneWithoutFk_FlashCardStacksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFk_FlashCardStacksInput>;
  create?: InputMaybe<UserCreateWithoutFk_FlashCardStacksInput>;
};

export type UserCreateNestedOneWithoutFk_FlowTagsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFk_FlowTagsInput>;
  create?: InputMaybe<UserCreateWithoutFk_FlowTagsInput>;
};

export type UserCreateNestedOneWithoutFk_FlowsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFk_FlowsInput>;
  create?: InputMaybe<UserCreateWithoutFk_FlowsInput>;
};

export type UserCreateOrConnectWithoutFk_CoursesInput = {
  create: UserCreateWithoutFk_CoursesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFk_FlashCardStacksInput = {
  create: UserCreateWithoutFk_FlashCardStacksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFk_FlowTagsInput = {
  create: UserCreateWithoutFk_FlowTagsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFk_FlowsInput = {
  create: UserCreateWithoutFk_FlowsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutFk_CoursesInput = {
  DefaultVisibility?: InputMaybe<Visibility>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackCreateNestedManyWithoutFk_UserInput>;
  FK_FlowTags?: InputMaybe<FlowTagCreateNestedManyWithoutFk_UserInput>;
  FK_Flows?: InputMaybe<FlowCreateNestedManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<Scalars['String']>;
  SetupComplete?: InputMaybe<Scalars['Boolean']>;
  SupabaseID: Scalars['String'];
  Username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFk_FlashCardStacksInput = {
  DefaultVisibility?: InputMaybe<Visibility>;
  FK_Courses?: InputMaybe<CourseOnUserCreateNestedManyWithoutFk_UserInput>;
  FK_FlowTags?: InputMaybe<FlowTagCreateNestedManyWithoutFk_UserInput>;
  FK_Flows?: InputMaybe<FlowCreateNestedManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<Scalars['String']>;
  SetupComplete?: InputMaybe<Scalars['Boolean']>;
  SupabaseID: Scalars['String'];
  Username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFk_FlowTagsInput = {
  DefaultVisibility?: InputMaybe<Visibility>;
  FK_Courses?: InputMaybe<CourseOnUserCreateNestedManyWithoutFk_UserInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackCreateNestedManyWithoutFk_UserInput>;
  FK_Flows?: InputMaybe<FlowCreateNestedManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<Scalars['String']>;
  SetupComplete?: InputMaybe<Scalars['Boolean']>;
  SupabaseID: Scalars['String'];
  Username?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutFk_FlowsInput = {
  DefaultVisibility?: InputMaybe<Visibility>;
  FK_Courses?: InputMaybe<CourseOnUserCreateNestedManyWithoutFk_UserInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackCreateNestedManyWithoutFk_UserInput>;
  FK_FlowTags?: InputMaybe<FlowTagCreateNestedManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<Scalars['String']>;
  SetupComplete?: InputMaybe<Scalars['Boolean']>;
  SupabaseID: Scalars['String'];
  Username?: InputMaybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  DefaultVisibility?: Maybe<Visibility>;
  ProfilePictureLink?: Maybe<Scalars['String']>;
  SetupComplete: Scalars['Boolean'];
  SupabaseID: Scalars['String'];
  UserID: Scalars['Int'];
  Username?: Maybe<Scalars['String']>;
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  DefaultVisibility?: Maybe<Visibility>;
  ProfilePictureLink?: Maybe<Scalars['String']>;
  SetupComplete?: Maybe<Scalars['Boolean']>;
  SupabaseID?: Maybe<Scalars['String']>;
  UserID?: Maybe<Scalars['Int']>;
  Username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  DefaultVisibility?: InputMaybe<SortOrder>;
  ProfilePictureLink?: InputMaybe<SortOrder>;
  SetupComplete?: InputMaybe<SortOrder>;
  SupabaseID?: InputMaybe<SortOrder>;
  UserID?: InputMaybe<SortOrder>;
  Username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  DefaultVisibility?: Maybe<Visibility>;
  ProfilePictureLink?: Maybe<Scalars['String']>;
  SetupComplete?: Maybe<Scalars['Boolean']>;
  SupabaseID?: Maybe<Scalars['String']>;
  UserID?: Maybe<Scalars['Int']>;
  Username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  DefaultVisibility?: InputMaybe<SortOrder>;
  ProfilePictureLink?: InputMaybe<SortOrder>;
  SetupComplete?: InputMaybe<SortOrder>;
  SupabaseID?: InputMaybe<SortOrder>;
  UserID?: InputMaybe<SortOrder>;
  Username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  DefaultVisibility?: InputMaybe<SortOrder>;
  ProfilePictureLink?: InputMaybe<SortOrder>;
  SetupComplete?: InputMaybe<SortOrder>;
  SupabaseID?: InputMaybe<SortOrder>;
  UserID?: InputMaybe<SortOrder>;
  Username?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
};

export type UserOrderByWithRelationInput = {
  DefaultVisibility?: InputMaybe<SortOrder>;
  FK_Courses?: InputMaybe<CourseOnUserOrderByRelationAggregateInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackOrderByRelationAggregateInput>;
  FK_FlowTags?: InputMaybe<FlowTagOrderByRelationAggregateInput>;
  FK_Flows?: InputMaybe<FlowOrderByRelationAggregateInput>;
  ProfilePictureLink?: InputMaybe<SortOrder>;
  SetupComplete?: InputMaybe<SortOrder>;
  SupabaseID?: InputMaybe<SortOrder>;
  UserID?: InputMaybe<SortOrder>;
  Username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  DefaultVisibility = 'DefaultVisibility',
  ProfilePictureLink = 'ProfilePictureLink',
  SetupComplete = 'SetupComplete',
  SupabaseId = 'SupabaseID',
  UserId = 'UserID',
  Username = 'Username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  DefaultVisibility?: InputMaybe<EnumVisibilityNullableWithAggregatesFilter>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  ProfilePictureLink?: InputMaybe<StringNullableWithAggregatesFilter>;
  SetupComplete?: InputMaybe<BoolWithAggregatesFilter>;
  SupabaseID?: InputMaybe<StringWithAggregatesFilter>;
  UserID?: InputMaybe<IntWithAggregatesFilter>;
  Username?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  UserID?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  UserID?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  DefaultVisibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
  FK_Courses?: InputMaybe<CourseOnUserUpdateManyWithoutFk_UserInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackUpdateManyWithoutFk_UserInput>;
  FK_FlowTags?: InputMaybe<FlowTagUpdateManyWithoutFk_UserInput>;
  FK_Flows?: InputMaybe<FlowUpdateManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  SetupComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  SupabaseID?: InputMaybe<StringFieldUpdateOperationsInput>;
  Username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  DefaultVisibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
  ProfilePictureLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  SetupComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  SupabaseID?: InputMaybe<StringFieldUpdateOperationsInput>;
  Username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneWithoutFk_CoursesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFk_CoursesInput>;
  create?: InputMaybe<UserCreateWithoutFk_CoursesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutFk_CoursesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFk_CoursesInput>;
};

export type UserUpdateOneWithoutFk_FlashCardStacksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFk_FlashCardStacksInput>;
  create?: InputMaybe<UserCreateWithoutFk_FlashCardStacksInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutFk_FlashCardStacksInput>;
  upsert?: InputMaybe<UserUpsertWithoutFk_FlashCardStacksInput>;
};

export type UserUpdateOneWithoutFk_FlowTagsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFk_FlowTagsInput>;
  create?: InputMaybe<UserCreateWithoutFk_FlowTagsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutFk_FlowTagsInput>;
  upsert?: InputMaybe<UserUpsertWithoutFk_FlowTagsInput>;
};

export type UserUpdateOneWithoutFk_FlowsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFk_FlowsInput>;
  create?: InputMaybe<UserCreateWithoutFk_FlowsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutFk_FlowsInput>;
  upsert?: InputMaybe<UserUpsertWithoutFk_FlowsInput>;
};

export type UserUpdateWithoutFk_CoursesInput = {
  DefaultVisibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackUpdateManyWithoutFk_UserInput>;
  FK_FlowTags?: InputMaybe<FlowTagUpdateManyWithoutFk_UserInput>;
  FK_Flows?: InputMaybe<FlowUpdateManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  SetupComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  SupabaseID?: InputMaybe<StringFieldUpdateOperationsInput>;
  Username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFk_FlashCardStacksInput = {
  DefaultVisibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
  FK_Courses?: InputMaybe<CourseOnUserUpdateManyWithoutFk_UserInput>;
  FK_FlowTags?: InputMaybe<FlowTagUpdateManyWithoutFk_UserInput>;
  FK_Flows?: InputMaybe<FlowUpdateManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  SetupComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  SupabaseID?: InputMaybe<StringFieldUpdateOperationsInput>;
  Username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFk_FlowTagsInput = {
  DefaultVisibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
  FK_Courses?: InputMaybe<CourseOnUserUpdateManyWithoutFk_UserInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackUpdateManyWithoutFk_UserInput>;
  FK_Flows?: InputMaybe<FlowUpdateManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  SetupComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  SupabaseID?: InputMaybe<StringFieldUpdateOperationsInput>;
  Username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFk_FlowsInput = {
  DefaultVisibility?: InputMaybe<NullableEnumVisibilityFieldUpdateOperationsInput>;
  FK_Courses?: InputMaybe<CourseOnUserUpdateManyWithoutFk_UserInput>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackUpdateManyWithoutFk_UserInput>;
  FK_FlowTags?: InputMaybe<FlowTagUpdateManyWithoutFk_UserInput>;
  ProfilePictureLink?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  SetupComplete?: InputMaybe<BoolFieldUpdateOperationsInput>;
  SupabaseID?: InputMaybe<StringFieldUpdateOperationsInput>;
  Username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutFk_CoursesInput = {
  create: UserCreateWithoutFk_CoursesInput;
  update: UserUpdateWithoutFk_CoursesInput;
};

export type UserUpsertWithoutFk_FlashCardStacksInput = {
  create: UserCreateWithoutFk_FlashCardStacksInput;
  update: UserUpdateWithoutFk_FlashCardStacksInput;
};

export type UserUpsertWithoutFk_FlowTagsInput = {
  create: UserCreateWithoutFk_FlowTagsInput;
  update: UserUpdateWithoutFk_FlowTagsInput;
};

export type UserUpsertWithoutFk_FlowsInput = {
  create: UserCreateWithoutFk_FlowsInput;
  update: UserUpdateWithoutFk_FlowsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  DefaultVisibility?: InputMaybe<EnumVisibilityNullableFilter>;
  FK_Courses?: InputMaybe<CourseOnUserListRelationFilter>;
  FK_FlashCardStacks?: InputMaybe<FlashCardStackListRelationFilter>;
  FK_FlowTags?: InputMaybe<FlowTagListRelationFilter>;
  FK_Flows?: InputMaybe<FlowListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  ProfilePictureLink?: InputMaybe<StringNullableFilter>;
  SetupComplete?: InputMaybe<BoolFilter>;
  SupabaseID?: InputMaybe<StringFilter>;
  UserID?: InputMaybe<IntFilter>;
  Username?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  UserID?: InputMaybe<Scalars['Int']>;
};

export enum Visibility {
  Hidden = 'HIDDEN',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ExampleQueryQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type ExampleQueryQuery = { __typename?: 'Query', user?: { __typename?: 'User', UserID: number } | null };


export const ExampleQueryDocument = `
    query ExampleQuery($where: UserWhereUniqueInput!) {
  user(where: $where) {
    UserID
  }
}
    `;
export const useExampleQueryQuery = <
      TData = ExampleQueryQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables: ExampleQueryQueryVariables,
      options?: UseQueryOptions<ExampleQueryQuery, TError, TData>
    ) =>
    useQuery<ExampleQueryQuery, TError, TData>(
      ['ExampleQuery', variables],
      fetcher<ExampleQueryQuery, ExampleQueryQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, ExampleQueryDocument, variables),
      options
    );