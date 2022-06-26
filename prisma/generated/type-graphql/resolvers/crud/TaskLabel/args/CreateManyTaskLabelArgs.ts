import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelCreateManyInput } from "../../../inputs/TaskLabelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTaskLabelArgs {
  @TypeGraphQL.Field(_type => [TaskLabelCreateManyInput], {
    nullable: false
  })
  data!: TaskLabelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
