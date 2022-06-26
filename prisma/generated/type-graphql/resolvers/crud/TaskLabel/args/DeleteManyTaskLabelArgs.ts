import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelWhereInput } from "../../../inputs/TaskLabelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTaskLabelArgs {
  @TypeGraphQL.Field(_type => TaskLabelWhereInput, {
    nullable: true
  })
  where?: TaskLabelWhereInput | undefined;
}
