import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateOrConnectWithoutFK_TasksInput } from "../inputs/CourseOnTermCreateOrConnectWithoutFK_TasksInput";
import { CourseOnTermCreateWithoutFK_TasksInput } from "../inputs/CourseOnTermCreateWithoutFK_TasksInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateNestedOneWithoutFK_TasksInput", {
  isAbstract: true
})
export class CourseOnTermCreateNestedOneWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_TasksInput, {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateOrConnectWithoutFK_TasksInput, {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutFK_TasksInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput | undefined;
}
