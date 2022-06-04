import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("CourseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CourseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CourseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CourseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CourseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CourseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  CourseID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_SchoolID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  IsOfficial?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Code?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Title?: StringNullableWithAggregatesFilter | undefined;
}
