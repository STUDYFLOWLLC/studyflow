import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelCreateInput } from "../../../inputs/TaskLabelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTaskLabelArgs {
  @TypeGraphQL.Field(_type => TaskLabelCreateInput, {
    nullable: false
  })
  data!: TaskLabelCreateInput;
}
