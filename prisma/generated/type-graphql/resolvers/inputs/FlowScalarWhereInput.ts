import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumFlowTypeFilter } from "../inputs/EnumFlowTypeFilter";
import { EnumVisibilityFilter } from "../inputs/EnumVisibilityFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlowScalarWhereInput", {
  isAbstract: true
})
export class FlowScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  AND?: FlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  OR?: FlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereInput], {
    nullable: true
  })
  NOT?: FlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FlowID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  LastOpened?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  UserEnteredDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeFilter, {
    nullable: true
  })
  Type?: EnumFlowTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  Trashed?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityFilter, {
    nullable: true
  })
  Visibility?: EnumVisibilityFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  WasAutomated?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;
}
