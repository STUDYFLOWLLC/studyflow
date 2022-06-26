import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TaskLabelScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TaskLabelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TaskLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TaskLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TaskLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TaskLabelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  TaskLabelID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  Label?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_TaskID?: IntNullableWithAggregatesFilter | undefined;
}
