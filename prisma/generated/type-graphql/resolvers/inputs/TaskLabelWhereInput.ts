import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";

@TypeGraphQL.InputType("TaskLabelWhereInput", {
  isAbstract: true
})
export class TaskLabelWhereInput {
  @TypeGraphQL.Field(_type => [TaskLabelWhereInput], {
    nullable: true
  })
  AND?: TaskLabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelWhereInput], {
    nullable: true
  })
  OR?: TaskLabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelWhereInput], {
    nullable: true
  })
  NOT?: TaskLabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  TaskLabelID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Label?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TaskRelationFilter, {
    nullable: true
  })
  FK_Task?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_TaskID?: StringNullableFilter | undefined;
}
