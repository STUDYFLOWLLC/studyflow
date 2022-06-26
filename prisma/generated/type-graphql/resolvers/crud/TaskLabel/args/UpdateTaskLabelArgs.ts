import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelUpdateInput } from "../../../inputs/TaskLabelUpdateInput";
import { TaskLabelWhereUniqueInput } from "../../../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTaskLabelArgs {
  @TypeGraphQL.Field(_type => TaskLabelUpdateInput, {
    nullable: false
  })
  data!: TaskLabelUpdateInput;

  @TypeGraphQL.Field(_type => TaskLabelWhereUniqueInput, {
    nullable: false
  })
  where!: TaskLabelWhereUniqueInput;
}
