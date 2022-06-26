import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelCreateInput } from "../../../inputs/TaskLabelCreateInput";
import { TaskLabelUpdateInput } from "../../../inputs/TaskLabelUpdateInput";
import { TaskLabelWhereUniqueInput } from "../../../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTaskLabelArgs {
  @TypeGraphQL.Field(_type => TaskLabelWhereUniqueInput, {
    nullable: false
  })
  where!: TaskLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskLabelCreateInput, {
    nullable: false
  })
  create!: TaskLabelCreateInput;

  @TypeGraphQL.Field(_type => TaskLabelUpdateInput, {
    nullable: false
  })
  update!: TaskLabelUpdateInput;
}
