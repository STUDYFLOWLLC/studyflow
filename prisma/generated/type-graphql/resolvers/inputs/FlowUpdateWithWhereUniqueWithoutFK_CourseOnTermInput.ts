import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowUpdateWithoutFK_CourseOnTermInput } from "../inputs/FlowUpdateWithoutFK_CourseOnTermInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateWithWhereUniqueWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class FlowUpdateWithWhereUniqueWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: false
  })
  where!: FlowWhereUniqueInput;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  data!: FlowUpdateWithoutFK_CourseOnTermInput;
}
