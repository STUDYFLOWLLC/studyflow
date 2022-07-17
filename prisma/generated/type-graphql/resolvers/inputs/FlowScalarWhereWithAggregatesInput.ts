import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumFlowTypeWithAggregatesFilter } from "../inputs/EnumFlowTypeWithAggregatesFilter";
import { EnumVisibilityWithAggregatesFilter } from "../inputs/EnumVisibilityWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FlowScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FlowScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FlowScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  FlowID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  LastOpened?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  UserEnteredDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumFlowTypeWithAggregatesFilter, {
    nullable: true
  })
  Type?: EnumFlowTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Body?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  Trashed?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityWithAggregatesFilter, {
    nullable: true
  })
  Visibility?: EnumVisibilityWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableWithAggregatesFilter | undefined;
}
