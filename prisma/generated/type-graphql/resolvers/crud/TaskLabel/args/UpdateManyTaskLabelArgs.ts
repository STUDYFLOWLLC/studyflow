import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelUpdateManyMutationInput } from "../../../inputs/TaskLabelUpdateManyMutationInput";
import { TaskLabelWhereInput } from "../../../inputs/TaskLabelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaskLabelArgs {
  @TypeGraphQL.Field(_type => TaskLabelUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskLabelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TaskLabelWhereInput, {
    nullable: true
  })
  where?: TaskLabelWhereInput | undefined;
}
