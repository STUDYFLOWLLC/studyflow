import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("UserOnStudyGroupScalarWhereInput", {
  isAbstract: true
})
export class UserOnStudyGroupScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarWhereInput], {
    nullable: true
  })
  AND?: UserOnStudyGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarWhereInput], {
    nullable: true
  })
  OR?: UserOnStudyGroupScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarWhereInput], {
    nullable: true
  })
  NOT?: UserOnStudyGroupScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_StudyGroupID?: IntNullableFilter | undefined;
}
