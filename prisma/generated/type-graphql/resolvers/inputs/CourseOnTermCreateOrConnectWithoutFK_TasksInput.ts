import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateWithoutFK_TasksInput } from "../inputs/CourseOnTermCreateWithoutFK_TasksInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateOrConnectWithoutFK_TasksInput", {
  isAbstract: true
})
export class CourseOnTermCreateOrConnectWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_TasksInput, {
    nullable: false
  })
  create!: CourseOnTermCreateWithoutFK_TasksInput;
}
