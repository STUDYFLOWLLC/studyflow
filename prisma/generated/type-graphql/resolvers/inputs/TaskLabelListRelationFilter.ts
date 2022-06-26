import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskLabelWhereInput } from "../inputs/TaskLabelWhereInput";

@TypeGraphQL.InputType("TaskLabelListRelationFilter", {
  isAbstract: true
})
export class TaskLabelListRelationFilter {
  @TypeGraphQL.Field(_type => TaskLabelWhereInput, {
    nullable: true
  })
  every?: TaskLabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskLabelWhereInput, {
    nullable: true
  })
  some?: TaskLabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskLabelWhereInput, {
    nullable: true
  })
  none?: TaskLabelWhereInput | undefined;
}
