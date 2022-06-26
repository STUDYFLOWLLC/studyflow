import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedOneWithoutFK_TaskLabelInput } from "../inputs/TaskCreateNestedOneWithoutFK_TaskLabelInput";

@TypeGraphQL.InputType("TaskLabelCreateInput", {
  isAbstract: true
})
export class TaskLabelCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Label?: string | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutFK_TaskLabelInput, {
    nullable: true
  })
  FK_Task?: TaskCreateNestedOneWithoutFK_TaskLabelInput | undefined;
}
