import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TaskLabelOrderByWithRelationInput", {
  isAbstract: true
})
export class TaskLabelOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TaskLabelID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Label?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByWithRelationInput, {
    nullable: true
  })
  FK_Task?: TaskOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_TaskID?: "asc" | "desc" | undefined;
}
