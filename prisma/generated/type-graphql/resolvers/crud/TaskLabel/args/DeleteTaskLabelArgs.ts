import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelWhereUniqueInput } from "../../../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTaskLabelArgs {
  @TypeGraphQL.Field(_type => TaskLabelWhereUniqueInput, {
    nullable: false
  })
  where!: TaskLabelWhereUniqueInput;
}
