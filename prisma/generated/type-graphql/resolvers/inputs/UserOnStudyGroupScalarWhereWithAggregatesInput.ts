import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("UserOnStudyGroupScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserOnStudyGroupScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserOnStudyGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserOnStudyGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserOnStudyGroupScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserOnStudyGroupScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  UserOnStudyGroupID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  SendTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  AcceptedTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  RejectedTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  RemovedTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  CanceledTime?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_StudyGroupID?: IntNullableWithAggregatesFilter | undefined;
}
