import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CourseOnTermScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CourseOnTermScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CourseOnTermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CourseOnTermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CourseOnTermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  CourseOnTermID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  Index?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Color?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Nickname?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_CourseID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_TermID?: IntNullableWithAggregatesFilter | undefined;
}
