import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateWithoutFK_FlowsInput } from "../inputs/CourseOnTermCreateWithoutFK_FlowsInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateOrConnectWithoutFK_FlowsInput", {
  isAbstract: true
})
export class CourseOnTermCreateOrConnectWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_FlowsInput, {
    nullable: false
  })
  create!: CourseOnTermCreateWithoutFK_FlowsInput;
}
