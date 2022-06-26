import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateOrConnectWithoutFK_FlowsInput } from "../inputs/CourseOnTermCreateOrConnectWithoutFK_FlowsInput";
import { CourseOnTermCreateWithoutFK_FlowsInput } from "../inputs/CourseOnTermCreateWithoutFK_FlowsInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateNestedOneWithoutFK_FlowsInput", {
  isAbstract: true
})
export class CourseOnTermCreateNestedOneWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_FlowsInput, {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateOrConnectWithoutFK_FlowsInput, {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput | undefined;
}
