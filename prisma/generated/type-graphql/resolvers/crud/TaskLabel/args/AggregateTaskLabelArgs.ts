import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskLabelOrderByWithRelationInput } from "../../../inputs/TaskLabelOrderByWithRelationInput";
import { TaskLabelWhereInput } from "../../../inputs/TaskLabelWhereInput";
import { TaskLabelWhereUniqueInput } from "../../../inputs/TaskLabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTaskLabelArgs {
  @TypeGraphQL.Field(_type => TaskLabelWhereInput, {
    nullable: true
  })
  where?: TaskLabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TaskLabelOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskLabelWhereUniqueInput, {
    nullable: true
  })
  cursor?: TaskLabelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
