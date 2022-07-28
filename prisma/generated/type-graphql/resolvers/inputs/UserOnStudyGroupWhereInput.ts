import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StudyGroupRelationFilter } from "../inputs/StudyGroupRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserOnStudyGroupWhereInput", {
  isAbstract: true
})
export class UserOnStudyGroupWhereInput {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereInput], {
    nullable: true
  })
  AND?: UserOnStudyGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereInput], {
    nullable: true
  })
  OR?: UserOnStudyGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupWhereInput], {
    nullable: true
  })
  NOT?: UserOnStudyGroupWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  UserOnStudyGroupID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  SendDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  AcceptDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  RemoveDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StudyGroupRelationFilter, {
    nullable: true
  })
  FK_StudyGroup?: StudyGroupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_StudyGroupID?: IntNullableFilter | undefined;
}
